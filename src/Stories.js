import React from "react";

import { useGlobalContext } from "./context";

const Stories = () => {
  const { loading, stories, dispatch, REMOVE_STORY } = useGlobalContext();

  if (loading) return <section className="loading"></section>;

  return (
    <section className="stories">
      {stories.map((story) => {
        const { objectID, title, num_comments, points, author, url } = story;
        return (
          <article key={objectID} className="story">
            <h4 className="title">{title}</h4>
            <p className="info">
              {points} points by <span>{author} | </span>
              {num_comments} comments
            </p>
            <a
              className="read-link"
              href={url}
              target="_blank"
              rel="noreferrer"
            >
              read more
            </a>
            <button
              type="button"
              className="remove-btn"
              onClick={() =>
                dispatch({ type: REMOVE_STORY, payload: objectID })
              }
            >
              remove
            </button>
          </article>
        );
      })}
    </section>
  );
};

export default Stories;
