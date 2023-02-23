import React, { createContext, useState } from "react";
import { v4 as uuid } from "uuid";

export const BookContext = createContext();

const BookContextProvider = (props) => {
  const [books, setBooks] = useState([
    { title: "the name of wind", author: "patrick", id: 1 },
    { title: "the way of kings", author: "valeria", id: 2 },
  ]);

  const addBook = (title, author) => {
    setBooks([...books, { title, author: author, id: uuid() }]);
  };

  const removeBook = (id) => {
    setBooks(books.filter((book) => book.id !== id));
  };

  return (
    <BookContext.Provider value={{ books, addBook, removeBook }}>
      {props.children}
    </BookContext.Provider>
  );
};

export default BookContextProvider;
