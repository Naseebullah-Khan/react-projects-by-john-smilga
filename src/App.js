import React, { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import Photo from "./Photo";

const clientID = `?client_id=${process.env.REACT_APP_ACCESS_KEY}`;
const mainUrl = `https://api.unsplash.com/photos/`;
const searchUrl = `https://api.unsplash.com/search/photos/`;

function App() {
  const [loading, setLoading] = useState(false);
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);

  const fetchImages = async () => {
    setLoading(true);
    let url;
    const urlPage = `&page=${page}`;
    url = `${mainUrl}${clientID}${urlPage}`;
    try {
      const response = await fetch(url);
      const data = await response.json();
      setImages((oldImages) => {
        return [...oldImages, ...data];
      });
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error.response);
    }
  };

  useEffect(() => {
    fetchImages();
  }, [page]);

  useEffect(() => {
    const event = window.addEventListener("scroll", () => {
      const height = window.innerHeight + window.scrollY;
      if (!loading && height >= document.body.scrollHeight - 2) {
        setPage((oldPage) => {
          return oldPage + 1;
        });
      }
    });
    return () => window.removeEventListener("scroll", event);
  }, []);

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("Hello, World!");
  };

  return (
    <main>
      <section className="search">
        <form onSubmit={submitHandler} className="search-form">
          <input type="text" className="form-input" placeholder="search" />
          <button className="submit-btn" type="submit">
            <FaSearch />
          </button>
        </form>
      </section>
      <section className="photos">
        <div className="photos-center">
          {images.map((image) => {
            const {
              id,
              urls: { regular },
              likes,
              alt_description: description,
              user: {
                name,
                portfolio_url,
                profile_image: { medium },
              },
            } = image;
            return (
              <Photo
                key={id}
                {...{
                  regular,
                  likes,
                  description,
                  name,
                  portfolio_url,
                  medium,
                }}
              />
            );
          })}
        </div>
        {loading && <h2 className="loading">Loading...</h2>}
      </section>
    </main>
  );
}

export default App;
