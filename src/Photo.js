import React from "react";

const Photo = ({
  regular: image,
  likes,
  description,
  name,
  medium: profile,
  portfolio_url,
}) => {
  return (
    <article className="photo">
      <img src={image} alt={description} />
      <div className="photo-info">
        <div>
          <h4>{name}</h4>
          <p>{likes} likes</p>
        </div>
        <a href={portfolio_url}>
          <img src={profile} alt={name} className="user-img" />
        </a>
      </div>
    </article>
  );
};

export default Photo;
