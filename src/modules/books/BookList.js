import React, { useState, useEffect } from "react";
import { database } from "../../utils/firebase.utils";

import { makeStyles } from "@material-ui/core/styles";

import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";

import Book from "./Book";

const useStyles = makeStyles(theme => ({
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8)
  }
}));

const getBooks = setter =>
  database
    .ref("books")
    .once("value")
    .then(snapshot => setter(snapshot.val()));

const BookList = () => {
  const [books, setBooks] = useState(null);
  const classes = useStyles();

  useEffect(() => {
    if (!books) {
      getBooks(setBooks);
    }
  }, [books]);

  return (
    <Container className={classes.cardGrid} maxWidth="md">
      <Grid container spacing={4}>
        {books ? books.map(book => <Book {...book} />) : null}
      </Grid>
    </Container>
  );
};

export default BookList;
