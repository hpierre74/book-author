import { createContext } from "react";

export const BookEditContext = createContext({
  currentBook: null,
  setCurrentBook: () => {}
});
