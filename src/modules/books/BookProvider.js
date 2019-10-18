import React, { useState, useEffect } from "react";
import { BookContext } from "./BookContext";
import { getBooks, getFrontBook, setFrontBook } from "../../utils/books.utils";

const BookProvider = ({ children }) => {
  const [books, setBooks] = useState(null);
  const [frontBookId, setFrontBookId] = useState(null);

  console.log(books);
  useEffect(() => {
    if (books) {
      return;
    }
    getBooks(setBooks);
  }, [books]);

  useEffect(() => {
    if (!frontBookId) {
      getFrontBook(setFrontBookId);
      return;
    }
  }, [frontBookId]);
  const setFrontId = id => setFrontBook(id).then(() => setFrontBookId(id));

  const getLocalBookById = id =>
    books &&
    id &&
    Object.values(books).find(book => book.id.toString() === id.toString());

  return (
    <BookContext.Provider
      value={{
        books,
        frontBookId,
        setFrontBookId: setFrontId,
        getBookById: getLocalBookById
      }}
    >
      {children}
    </BookContext.Provider>
  );
};

export default BookProvider;
