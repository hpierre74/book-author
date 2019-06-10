import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";

import Home from "./modules/home/Home";
import Admin from "./modules/admin/Admin";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/books/:bookId" component={() => {}} />
        <Route path="/admin" component={Admin} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
