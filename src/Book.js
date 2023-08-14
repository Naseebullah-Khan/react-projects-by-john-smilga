import "./Book.css";

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

export default Book;
