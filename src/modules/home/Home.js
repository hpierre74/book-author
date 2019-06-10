import React from "react";

// MUI Components
import CssBaseline from "@material-ui/core/CssBaseline";

// Custom Components
import BookList from "../books/BookList";
import Footer from "../../components/Footer";
import Hero from "../../components/Hero";
import Jumbotron from "../../components/Jumbotron";

export default function Home() {
  return (
    <React.Fragment>
      <CssBaseline />
      <main>
        <Hero />
        <Jumbotron />
        <BookList />
      </main>
      <Footer />
    </React.Fragment>
  );
}
