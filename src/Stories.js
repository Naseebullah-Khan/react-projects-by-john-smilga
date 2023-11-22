import React from "react";

import { useGlobalContext } from "./context";

const Stories = () => {
  const { loading, stories } = useGlobalContext();

  if (loading) return <section className="loading"></section>;

  return (
    <section className="stories">
      {stories.map((story) => {
        const { story_id, title, num_comments, points, author, url } = story;
        return (
          <article key={story_id} className="story">
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
            <button type="button" className="remove-btn">
              remove
            </button>
          </article>
        );
      })}
    </section>
  );
};

export default Stories;
