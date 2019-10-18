import { createContext } from "react";

export const BookContext = createContext({
  books: [],
  frontBook: null,
  getFrontBook: () => {},
  getBookById: () => {}
});
