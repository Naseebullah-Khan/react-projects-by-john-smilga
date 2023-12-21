import React, { useState, useEffect } from "react";
import mockUser from "./mockData.js/mockUser";
import mockRepos from "./mockData.js/mockRepos";
import mockFollowers from "./mockData.js/mockFollowers";
import axios from "axios";

const rootUrl = "https://api.github.com";

const GithubContext = React.createContext();

const GithubProvider = ({ children }) => {
  const [githubUser, setGithubUser] = useState(mockUser);
  const [githubRepos, setGithubRepos] = useState(mockRepos);
  const [githubFollowers, setGithubFollowers] = useState(mockFollowers);
  const [loading, setLoading] = useState(false);
  const [requests_limit, setRequests_limit] = useState({
    limit: 0,
    remaining: 0,
  });
  const [error, setError] = useState({ show: false, msg: "" });

  const showError = (show = false, msg = "") => {
    setError({ show, msg });
  };

  const fetchRateLimit = () => {
    axios(`${rootUrl}/rate_limit`)
      .then(({ data }) => {
        let {
          rate: { remaining, limit },
        } = data;
        setRequests_limit({ limit, remaining });

        if (remaining === 0) {
          showError(true, "sorry, you have exceeded your hourly rate limit!");
        }
      })
      .catch((err) => console.log(err));
  };

  const fetchGithubUser = async (user) => {
    showError();
    setLoading(true);
    try {
      const request = await axios(`${rootUrl}/users/${user}`);
      const { followers_url, repos_url } = request.data;
      const results = await Promise.allSettled([
        await axios(`${followers_url}?per_page=100`),
        await axios(`${repos_url}?per_page=100`),
      ]);

      const [followers, repos] = results;
      const status = "fulfilled";

      setGithubUser(request.data);
      if (followers.status === status) {
        setGithubFollowers(followers.value.data);
      }
      if (repos.status === status) {
        setGithubRepos(repos.value.data);
      }
    } catch (err) {
      showError(true, "there is no user with that username");
      console.log(err);
    }
    fetchRateLimit();
    setLoading(false);
  };

  useEffect(fetchRateLimit, []);

  return (
    <GithubContext.Provider
      value={{
        githubFollowers,
        githubRepos,
        githubUser,
        requests_limit,
        error,
        fetchGithubUser,
        loading,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export { GithubProvider, GithubContext };
