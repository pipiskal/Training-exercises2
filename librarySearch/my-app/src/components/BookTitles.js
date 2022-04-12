import React from "react";

const BookTitles = ({ books }) => {
  return (
    <div className="resultTitles">
      <h3>Results : {books.length}</h3>
      <ul>
        {books.map((book, index) => {
          return <li key={index}>{book.title}</li>;
        })}
      </ul>
    </div>
  );
};

export default BookTitles;
