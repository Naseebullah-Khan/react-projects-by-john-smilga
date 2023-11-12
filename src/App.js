import React, { useState, useEffect } from "react";
import { useFetch } from "./useFetch";
import Follower from "./Follower";
function App() {
  const { loading, data } = useFetch();
  const [page, setPage] = useState(0);
  const [followers, setFollowers] = useState([]);

  useEffect(() => {
    // !loading && setFollowers(data[page]);
    if (loading) return;
    setFollowers(data[page]);
  }, [data, loading, page]);

  const pageHandler = (index) => {
    setPage(index);
  };

  return (
    <main className="section-title">
      <h1>{loading ? "loading..." : "Pagination"}</h1>
      <div className="underline"></div>
      <section className="followers">
        <div className="container">
          {followers.map((item) => {
            const { id, login: name, avatar_url: image, html_url: url } = item;
            return <Follower key={id} data={{ name, image, url }} />;
          })}
        </div>
        {loading || (
          <div className="btn-container">
            {data.map((_, index) => {
              return (
                <button
                  key={index}
                  className={`page-btn ${index === page && "active-btn"}`}
                  type="button"
                  onClick={() => pageHandler(index)}
                >
                  {index + 1}
                </button>
              );
            })}
          </div>
        )}
      </section>
    </main>
  );
}

export default App;
