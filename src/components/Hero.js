import React from "react";
import { Link } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";

import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import Skeleton from "@material-ui/lab/Skeleton";

import { BookContext } from "../modules/books/BookContext";

const useStyles = makeStyles(theme => ({
  mainFeaturedPost: props => ({
    position: "relative",
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    backgroundImage: `url(${props.cover})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center"
  }),
  overlay: {
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: "rgba(0,0,0,.3)"
  },
  mainFeaturedPostContent: {
    position: "relative",
    padding: theme.spacing(3),
    [theme.breakpoints.up("md")]: {
      padding: theme.spacing(6),
      paddingRight: 0
    }
  }
}));

const Hero = props => {
  const { frontBookId, getBookById } = React.useContext(BookContext);
  const book = getBookById(frontBookId);
  const classes = useStyles({ cover: book && book.cover });

  return book ? (
    <Paper className={classes.mainFeaturedPost} url={book.cover}>
      {/* Increase the priority of the hero background image */}
      {<img style={{ display: "none" }} src={book.cover} alt="background" />}
      <div className={classes.overlay} />
      <Grid container>
        <Grid item md={4}>
          {book && (
            <div className={classes.mainFeaturedPostContent}>
              <Typography
                component="h1"
                variant="h3"
                color="inherit"
                gutterBottom
              >
                {book.title}
              </Typography>
              <Typography variant="h5" color="inherit" paragraph>
                {book.description.substr(0, 66)}...
              </Typography>
              <Button component={Link} color="primary" to={`/books/${book.id}`}>
                Continuer
              </Button>
            </div>
          )}
        </Grid>
      </Grid>
    </Paper>
  ) : (
    <div style={{ maxWidth: "100vw", overflow: "hidden" }}>
      <Skeleton variant="rect" width={2000} height={300} />
    </div>
  );
};

export default Hero;
