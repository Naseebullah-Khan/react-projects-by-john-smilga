import React, { useState, useEffect } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { FaQuoteRight } from "react-icons/fa";
import data from "./data";
function Alternative() {
  const persons = useState(data)[0];
  const [index, setIndex] = useState(0);

  const prevPerson = () => {
    setIndex((oldIndex) => {
      let index = oldIndex - 1;
      if (index < 0) {
        index = persons.length - 1;
      }
      return index;
    });
  };
  const nextPerson = () => {
    setIndex((oldIndex) => {
      let index = oldIndex + 1;
      if (index > persons.length - 1) {
        index = 0;
      }
      return index;
    });
  };

  // This is my Way
  // const prevPerson = () => {
  //   setIndex((oldIndex) => {
  //     if (oldIndex === 0) {
  //       return persons.length - 1;
  //     }
  //   });
  // };
  // const nextPerson = () => {
  //   setIndex((oldIndex) => {
  //     if (oldIndex === persons.length - 1) {
  //       return 0;
  //     }
  //   });
  // };

  useEffect(() => {
    const autoSlide = setInterval(() => {
      setIndex((oldIndex) => {
        let index = oldIndex + 1;
        if (index > persons.length - 1) {
          index = 0;
        }
        return index;
      });
    }, 5000);
    return () => {
      clearInterval(autoSlide);
    };
  }, [index]);

  return (
    <section className="section">
      <div className="title">
        <h2>
          <span>/</span>Reviews
        </h2>
      </div>
      <div className="section-center">
        {persons.map((person, personIndex) => {
          const { id, name, image, title, quote } = person;
          let position = "nextSlide";
          if (personIndex === index) {
            position = "activeSlide";
          }
          if (
            personIndex === index - 1 ||
            (index === 0 && personIndex === persons.length - 1)
          ) {
            position = "lastSlide";
          }
          return (
            <article key={id} className={position}>
              <img src={image} alt={name} className="person-img" />
              <h4>{name}</h4>
              <p className="title">{title}</p>
              <p className="text">{quote}</p>
              {<FaQuoteRight className="icon" />}
            </article>
          );
        })}
        <FiChevronLeft className="prev" onClick={prevPerson} />
        <FiChevronRight className="next" onClick={nextPerson} />
      </div>
    </section>
  );
}

export default Alternative;
