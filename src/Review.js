import React, { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Review = () => {
  // const [person, setPerson] = useState(people[0]);

  // const randomPerson = () => {
  //   people.map(() => {
  //     let personZero = people[Math.floor(Math.random() * 4)];
  //     if (personZero.id !== person.id) setPerson(personZero);
  //   });
  // };

  // const nextPerson = () => {
  //   let index = people.indexOf(person);
  //   if (index === people.length - 1) {
  //     setPerson(people[0]);
  //   } else {
  //     setPerson(people[index + 1]);
  //   }
  // };

  // const perviousPerson = () => {
  //   let index = people.indexOf(person);
  //   if (index === 0) {
  //     setPerson(people[people.length - 1]);
  //   } else {
  //     setPerson(people[index - 1]);
  //   }
  // };

  const [index, setIndex] = useState(0);
  const { name, image, job, text } = people[index];

  const randomPerson = () => {
    // let randomNumber = Math.floor(Math.random() * people.length);
    // if (randomNumber === index) {
    //   randomNumber = index + 1;
    // }
    // setIndex(checkNumber(randomNumber));
    let start = true;
    while (start) {
      let randomNumber = Math.floor(Math.random() * people.length);
      if (randomNumber !== index) {
        setIndex(randomNumber);
        start = false;
      }
    }
  };

  const checkNumber = (index) => {
    if (index > people.length - 1) {
      return 0;
    } else if (index < 0) {
      return people.length - 1;
    }
    return index;
  };

  const nextPerson = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };

  const perviousPerson = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };

  return (
    <article className="review">
      <div className="img-container">
        <img className="person-img" src={image} alt={name} />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="button-container">
        <button onClick={perviousPerson} className="prev-btn">
          <FaChevronLeft />
        </button>
        <button onClick={nextPerson} className="next-btn">
          <FaChevronRight />
        </button>
      </div>
      <button onClick={randomPerson} className="random-btn">
        surprise me
      </button>
    </article>
  );
};

export default Review;
