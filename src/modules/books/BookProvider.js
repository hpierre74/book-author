import React, { useState, useEffect } from "react";
import { BookContext } from "./BookContext";
import { getBooks, getFrontBook, setFrontBook } from "../../utils/books.utils";

const BookProvider = ({ children }) => {
  const [books, setBooks] = useState(null);
  const [frontBookId, setFrontBookId] = useState(null);

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
    books && Object.values(books).find(book => book.id === id);

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
