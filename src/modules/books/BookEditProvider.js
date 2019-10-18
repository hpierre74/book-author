import React, { useState } from "react";
import { BookEditContext } from "./BookEditContext";

const BookEditProvider = ({ children }) => {
  const [currentBook, setCurrentBook] = useState(null);

  return (
    <BookEditContext.Provider value={{ currentBook, setCurrentBook }}>
      {children}
    </BookEditContext.Provider>
  );
};

export default BookEditProvider;
