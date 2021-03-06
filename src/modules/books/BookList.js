import React, { useContext } from "react";

import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";

import BookCard from "./BookCard";
import { BookContext } from "./BookContext";

const useStyles = makeStyles(theme => ({
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8)
  }
}));

const BookList = () => {
  const { books } = useContext(BookContext);
  const classes = useStyles();

  return (
    <Container className={classes.cardGrid} maxWidth="md">
      <Grid container spacing={4}>
        {books
          ? Object.values(books).map(book => (
              <BookCard key={book.id} {...book} />
            ))
          : null}
      </Grid>
    </Container>
  );
};

export default BookList;
