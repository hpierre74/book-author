import React from "react";

// MUI Components
import CssBaseline from "@material-ui/core/CssBaseline";

// Custom Components
import BookList from "../books/BookList";
import Footer from "../../components/Footer";
import Hero from "../../components/Hero";
import Jumbotron from "../../components/Jumbotron";
import ToasterProvider from "../toaster/toaster.provider";
import Toaster from "../toaster/toast.component";
import BookProvider from "../books/BookProvider";

export default function Home() {
  return (
    <React.Fragment>
      <CssBaseline />
      <main>
        <ToasterProvider>
          <BookProvider>
            <Hero />
            <Jumbotron />
            <BookList />
            <Toaster />
          </BookProvider>
        </ToasterProvider>
      </main>
      <Footer />
    </React.Fragment>
  );
}
