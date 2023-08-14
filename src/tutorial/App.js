// 01-03
// import React from "react";

// // Stateless functional component
// // Always return JSX

// const Greeting = () => {
//   return (
//     <div>
//       <h1>Hello, World!</h1>
//     </div>
//   );
// };

// const Greeting = () => {
//   return React.createElement(
//     "div",
//     {},
//     React.createElement("h1", {}, "Hello, World!")
//   );
// };

// export default Greeting;

// 04 JSX Rules

// import React from "react";

// // JSX Rules
// // return single element
// // div / section / article or Fragment
// // use camelCase for html attribute
// // className instead of class
// // close every element
// // formatting

// const Greeting = () => {
//   return (
//     <div>
//       <h1>Hello, World!</h1>
//     </div>
//   );
// };

// export default Greeting;

// 05 Nested Components React Tools

// import React from "react";

// const Greeting = () => {
//   return (
//     <div>
//       <Heading />
//       <Message />
//     </div>
//   );
// };

// const Heading = () => <h1>Hello, World!</h1>;
// const Message = () => {
//   return <p>This is my components</p>;
// };

// export default Greeting;

// 06 Mini Book Project and 07 CSS

// import React from "react";

// import "./App.css";

// const BookList = () => {
//   return (
//     <section className="book-list">
//       <Book />
//       <Book />
//       <Book />
//       <Book />
//       <Book />
//       <Book />
//       <Book />
//       <Book />
//       <Book />
//     </section>
//   );
// };

// const Book = () => {
//   return (
//     <article className="book">
//       <BookImage />
//       <BookTitle />
//       <BookAuthor />
//     </article>
//   );
// };

// const BookImage = () => (
//   <img
//     width="200px"
//     src="https://images-na.ssl-images-amazon.com/images/I/8144Vic9C5L._AC_UL600_SR600,400_.jpg"
//     alt="Book"
//   />
// );

// const BookTitle = () => <h1>I Love You to the Moon and Back</h1>;

// const BookAuthor = () => (
//   <h4 style={{ color: "#617d98", fontSize: "0.75rem", marginTop: "0.25rem" }}>
//     Amelia Hepworth
//   </h4>
// );

// export default BookList;

// 09 JSX - JavaScript

// import React from "react";

// import "./App.css";

// const BookList = () => {
//   return (
//     <section className="book-list">
//       <Book />
//     </section>
//   );
// };

// const author = "Amelia Hepworth";

// const Book = () => {
//   const title = "I Love You to the Moon and Back";

//   return (
//     <article className="book">
//       <img
//         width="200px"
//         src="https://images-na.ssl-images-amazon.com/images/I/8144Vic9C5L._AC_UL600_SR600,400_.jpg"
//         alt="Book"
//       />
//       <h1>{title}</h1>
//       <h4>{author.toUpperCase()}</h4>
//       {/* <p>{let x = 8}</p> */}
//       <p>{6 + 9}</p>
//     </article>
//   );
// };

// export default BookList;

// 10 Props

// import React from "react";

// import "./App.css";

// // Setup vars
// const firstBook = {
//   img: "https://images-na.ssl-images-amazon.com/images/I/8144Vic9C5L._AC_UL600_SR600,400_.jpg",
//   title: "I Love You to the Moon and Back",
//   author: "Amelia Hepworth",
// };

// const secondBook = {
//   img: "https://m.media-amazon.com/images/I/510g8NLbpNL._SX384_BO1,204,203,200_.jpg",
//   title: "Our Class is a Family",
//   author: "Shannon Olsen",
// };

// const BookList = () => {
//   return (
//     <section className="book-list">
//       <Book
//         title={firstBook.title}
//         author={firstBook.author}
//         image={firstBook.img}
//       />
//       <Book
//         title={secondBook.title}
//         author={secondBook.author}
//         image={secondBook.img}
//       />
//     </section>
//   );
// };

// const Book = (props) => {
//   // console.log(props);
//   return (
//     <article className="book">
//       <img width="200px" src={props.image} alt="Book" />
//       <h1>{props.title}</h1>
//       <h4>{props.author}</h4>
//     </article>
//   );
// };

// export default BookList;

// 11 Props - Destructuring

// import React from "react";

// import "./App.css";

// // Setup vars
// const firstBook = {
//   img: "https://images-na.ssl-images-amazon.com/images/I/8144Vic9C5L._AC_UL600_SR600,400_.jpg",
//   title: "I Love You to the Moon and Back",
//   author: "Amelia Hepworth",
// };

// const secondBook = {
//   img: "https://m.media-amazon.com/images/I/510g8NLbpNL._SX384_BO1,204,203,200_.jpg",
//   title: "Our Class is a Family",
//   author: "Shannon Olsen",
// };

// const BookList = () => {
//   return (
//     <section className="book-list">
//       <Book
//         title={firstBook.title}
//         author={firstBook.author}
//         image={firstBook.img}
//       />
//       <Book
//         title={secondBook.title}
//         author={secondBook.author}
//         image={secondBook.img}
//       />
//     </section>
//   );
// };

// // Option One
// // const Book = (props) => {
// //   // console.log(props);
// //   const { image, title, author } = props;
// //   return (
// //     <article className="book">
// //       <img width="200px" src={image} alt="Book" />
// //       <h1>{title}</h1>
// //       <h4>{author}</h4>
// //     </article>
// //   );
// // };
// // Option Two -> only difference is in syntax
// const Book = ({ image, title, author }) => {
//   // console.log(props);
//   return (
//     <article className="book">
//       <img width="200px" src={image} alt="Book" />
//       <h1>{title}</h1>
//       <h4>{author}</h4>
//     </article>
//   );
// };

// export default BookList;

// 12 Props - Children

// import React from "react";

// import "./App.css";

// // Setup vars
// const firstBook = {
//   img: "https://images-na.ssl-images-amazon.com/images/I/8144Vic9C5L._AC_UL600_SR600,400_.jpg",
//   title: "I Love You to the Moon and Back",
//   author: "Amelia Hepworth",
// };

// const secondBook = {
//   img: "https://m.media-amazon.com/images/I/510g8NLbpNL._SX384_BO1,204,203,200_.jpg",
//   title: "Our Class is a Family",
//   author: "Shannon Olsen",
// };

// const BookList = () => {
//   return (
//     <section className="book-list">
//       <Book
//         title={firstBook.title}
//         author={firstBook.author}
//         image={firstBook.img}
//       >
//         <p>
//           Lorem ipsum dolor, sit amet consectetur adipisicing elit.
//           Necessitatibus temporibus vero odio quisquam ipsum ducimus nemo eum
//           est illum dolor!
//         </p>
//       </Book>
//       <Book
//         title={secondBook.title}
//         author={secondBook.author}
//         image={secondBook.img}
//       />
//     </section>
//   );
// };

// const Book = (props) => {
//   // console.log(props);
//   const { image, title, author } = props;

//   return (
//     <article className="book">
//       <img width="200px" src={image} alt="Book" />
//       <h1>{title}</h1>
//       <h4>{author}</h4>
//       {props.children}
//     </article>
//   );
// };

// export default BookList;

// 13 Simple List & 14 Proper List

// import React from "react";

// import "./App.css";

// // Setup vars
// const books = [
//   {
//     img: "https://images-na.ssl-images-amazon.com/images/I/8144Vic9C5L._AC_UL600_SR600,400_.jpg",
//     title: "I Love You to the Moon and Back",
//     author: "Amelia Hepworth",
//   },
//   {
//     img: "https://m.media-amazon.com/images/I/510g8NLbpNL._SX384_BO1,204,203,200_.jpg",
//     title: "Our Class is a Family",
//     author: "Shannon Olsen",
//   },
//   {
//     img: "https://m.media-amazon.com/images/I/51NJs+Rj6hL.jpg",
//     title: "The Vanishing Half: A Novel",
//     author: "Brit Bennett",
//   },
// ];

// // const names = ["Naseeb", "Omid", "Ahmad", "Mahmood"];
// // const newNames = names.map((name) => {
// //   return <h1>{name}</h1>;
// // });
// // console.log(newNames);
// const BookList = () => {
//   return (
//     <section className="book-list">
//       {/* {newNames} */}
//       {/* {books.map((book) => {
//         // return "Hello, World!";
//         const { image, title, author } = book;
//         return (
//           <div>
//             <h3>{title}</h3>
//             <h6>{author}</h6>
//           </div>
//         );
//       })} */}
//       {books.map((book) => {
//         return <Book book={book} />;
//       })}
//     </section>
//   );
// };

// const Book = (props) => {
//   // console.log(props);
//   // const { image, title, author, children } = props;
//   // console.log(props);
//   const { img, title, author } = props.book;

//   return (
//     <article className="book">
//       <img width="200px" src={img} alt="Book" />
//       <h1>{title}</h1>
//       <h4>{author}</h4>
//       {/* {props.children} */}
//       {/* {children} */}
//     </article>
//   );
// };

// export default BookList;

// 15 Key Prop and Spread Operator

// import React from "react";

// import "./App.css";

// const books = [
//   {
//     id: 1,
//     img: "https://images-na.ssl-images-amazon.com/images/I/8144Vic9C5L._AC_UL600_SR600,400_.jpg",
//     title: "I Love You to the Moon and Back",
//     author: "Amelia Hepworth",
//   },
//   {
//     id: 2,
//     img: "https://m.media-amazon.com/images/I/510g8NLbpNL._SX384_BO1,204,203,200_.jpg",
//     title: "Our Class is a Family",
//     author: "Shannon Olsen",
//   },
//   {
//     id: 3,
//     img: "https://m.media-amazon.com/images/I/51NJs+Rj6hL.jpg",
//     title: "The Vanishing Half: A Novel",
//     author: "Brit Bennett",
//   },
// ];

// const BookList = () => {
//   return (
//     <section className="book-list">
//       {books.map((book) => {
//         return <Book key={book.id} {...book} />;
//       })}
//     </section>
//   );
// };

// const Book = ({ img, title, author }) => {
//   // const { img, title, author } = props;

//   return (
//     <article className="book">
//       <img width="200px" src={img} alt="Book" />
//       <h1>{title}</h1>
//       <h4>{author}</h4>
//     </article>
//   );
// };

// export default BookList;

// 16 Event Basics

import React from "react";

import "./App.css";

const books = [
  {
    id: 1,
    img: "https://images-na.ssl-images-amazon.com/images/I/8144Vic9C5L._AC_UL600_SR600,400_.jpg",
    title: "I Love You to the Moon and Back",
    author: "Amelia Hepworth",
  },
  {
    id: 2,
    img: "https://m.media-amazon.com/images/I/510g8NLbpNL._SX384_BO1,204,203,200_.jpg",
    title: "Our Class is a Family",
    author: "Shannon Olsen",
  },
  {
    id: 3,
    img: "https://m.media-amazon.com/images/I/51NJs+Rj6hL.jpg",
    title: "The Vanishing Half: A Novel",
    author: "Brit Bennett",
  },
];

const BookList = () => {
  return (
    <section className="book-list">
      {books.map((book) => {
        return <Book key={book.id} {...book} />;
      })}
    </section>
  );
};

const Book = ({ img, title, author }) => {
  // attribute, eventHandler
  // onClick, onMouseOver
  const clickHandler = (event) => {
    console.log(event);
    console.log(event.target);
    alert("Reference Function");
  };

  const complexExample = (author) => {
    alert(author);
  };
  return (
    <article className="book" onMouseOver={() => console.log(title)}>
      <img width="200px" src={img} alt="Book" />
      <h1 onClick={() => alert("Inline Function")}>{title}</h1>
      <h4>{author}</h4>
      <button type="button" onClick={clickHandler}>
        Reference Example
      </button>
      <button type="button" onClick={() => complexExample(author)}>
        More Complex Example
      </button>
    </article>
  );
};

export default BookList;
