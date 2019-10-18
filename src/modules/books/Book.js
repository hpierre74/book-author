import React, { useContext } from "react";

import { makeStyles } from "@material-ui/core/styles";

import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import CircularProgress from "@material-ui/core/CircularProgress";

import { BookContext } from "./BookContext";

const useStyles = makeStyles(theme => ({
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
    textAlign: "center"
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column"
  },
  cardMedia: {
    paddingTop: "56.25%" // 16:9
  },
  cardContent: {
    flexGrow: 1,
    textAlign: "justify"
  },
  progress: {}
}));

const Book = ({
  match: {
    params: { bookId }
  }
}) => {
  const classes = useStyles();
  const { getBookById } = useContext(BookContext);

  const book = getBookById(parseInt(bookId, 10));

  return (
    <Container className={classes.cardGrid} maxWidth="md">
      {book ? (
        <Card className={classes.card}>
          <CardHeader
            color="secondary"
            title={book.title}
            titleTypographyProps={{ variant: "h2", component: "h1" }}
          />
          <CardMedia
            className={classes.cardMedia}
            image={book.cover}
            title="Image title"
          />
          <CardContent className={classes.cardContent}>
            <Typography>{book.description}</Typography>
          </CardContent>
          <CardActions>
            <Button size="small" variant="contained" color="primary">
              Acheter le livre
            </Button>
            <Button size="small" variant="contained" color="secondary">
              Acheter l'e-book
            </Button>
          </CardActions>
        </Card>
      ) : (
        <CircularProgress
          className={classes.progress}
          thickness={5}
          size={50}
        />
      )}
    </Container>
  );
};

export default Book;
