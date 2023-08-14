import { Books } from "./Books";
import Book from "./Book";

import "./BookList.css";

const BookList = () => {
  return (
    <section className="book-list">
      {Books.map((book) => {
        return <Book key={book.id} {...book} />;
      })}
    </section>
  );
};

export default BookList;
