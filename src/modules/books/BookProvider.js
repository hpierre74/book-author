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

  const getBookById = id =>
    books &&
    id &&
    Object.values(books).find(book => book.id.toString() === id.toString());

  const getBookByTitle = title =>
    books && title && Object.values(books).find(book => book.title === title);

  const getBookBySlug = slug =>
    books && slug && Object.values(books).find(book => book.slug === slug);

  return (
    <BookContext.Provider
      value={{
        books,
        frontBookId,
        setFrontBookId: setFrontId,
        getBookById,
        getBookByTitle,
        getBookBySlug
      }}
    >
      {children}
    </BookContext.Provider>
  );
};

export default BookProvider;
