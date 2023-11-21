import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { API_ENDPOINT } from "./context";

const url =
  "https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png";

const SingleMovie = () => {
  const [loading, setLoading] = useState(false);
  const [movie, setMovie] = useState({});
  const [error, setError] = useState({ show: false, msg: "" });
  const { movieID } = useParams();

  const fetchMovie = async (url) => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();
      if (data.Response === "False") {
        setError({ show: data.Response, msg: data.Error });
      } else {
        setMovie(data);
      }
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchMovie(`${API_ENDPOINT}&i=${movieID}`);
  }, [movieID]);

  if (loading) return <section className="loading"></section>;
  if (error.show)
    return (
      <section className="page-error">
        <h1>{error.msg}</h1>
        <Link className="btn" to="/">
          back to home
        </Link>
      </section>
    );
  const { Title, Poster, Year, Plot } = movie;
  return (
    <section className="single-movie">
      <img src={Poster === "N/A" ? url : Poster} alt={Title} />
      <article>
        <h2>{Title}</h2>
        <p>{Plot}</p>
        <h4>{Year}</h4>
        <Link className="btn" to="/">
          back to home
        </Link>
      </article>
    </section>
  );
};

export default SingleMovie;
