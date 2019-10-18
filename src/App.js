import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";

import Home from "./modules/home/Home";
import Landing from "./modules/admin/Landing";

import BookProvider from "./modules/books/BookProvider";
import Book from "./modules/books/Book";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <BookProvider>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/books/:bookId" component={Book} />
          <Route exact path="/admin" component={Landing} />
        </Switch>
      </BookProvider>
    </BrowserRouter>
  );
}

export default App;
