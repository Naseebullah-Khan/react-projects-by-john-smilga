import React from "react";
import { useParams, Link } from "react-router-dom";
import useFetch from "./useFetch";

const url =
  "https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png";

const SingleMovie = () => {
  const { movieID } = useParams();
  const { loading, error, data: movie } = useFetch(`&i=${movieID}`);

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
