import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Chip from "@material-ui/core/Chip";

const useStyles = makeStyles(theme => ({
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column"
  },
  cardMedia: {
    paddingTop: "56.25%" // 16:9
  },
  cardContent: {
    flexGrow: 1
  },
  cardChipsWrapper: {
    display: "flex",
    justifyContent: "flex-end"
  },
  cardChip: {
    margin: theme.spacing(0.5)
  },
  centerButton: {
    margin: "0 auto"
  }
}));

const BookCard = ({ id, title, cover, description, author, tags }) => {
  const classes = useStyles();

  return (
    <Grid item key={title} xs={12} sm={6} md={6}>
      <Card className={classes.card}>
        <CardMedia
          component={Link}
          to={`/books/${id}`}
          className={classes.cardMedia}
          image={cover}
          title="Image title"
        />
        <CardContent className={classes.cardContent}>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <div className={classes.cardChipsWrapper}>
            {tags &&
              tags.map(tag => (
                <Chip
                  key={tag}
                  className={classes.cardChip}
                  label={tag}
                  variant="outlined"
                  color="primary"
                />
              ))}
          </div>
          <Typography>{description.substring(0, 150)}...</Typography>
        </CardContent>
        <CardActions>
          <Button
            className={classes.centerButton}
            component={Link}
            to={`/books/${id}`}
            size="small"
            color="primary"
          >
            Voir le livre
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default BookCard;
