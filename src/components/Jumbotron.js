import React from "react";

// MUI Components
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";

// MUI Utils
import { makeStyles } from "@material-ui/core/styles";

// Image
import profile from "../mam.jpg";

const useStyles = makeStyles(theme => ({
  avatar: {
    width: "300px",
    height: "300px",
    margin: "0 auto"
  },
  jumboContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6)
  },
  jumboText: {
    alignSelf: "center"
  },
  jumboButtons: {
    marginTop: theme.spacing(4)
  }
}));

const Jumbotron = () => {
  const classes = useStyles();
  return (
    <div className={classes.jumboContent}>
      <Container maxWidth="md">
        <Grid container>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <Avatar className={classes.avatar} src={profile} />
          </Grid>
          <Grid
            className={classes.jumboText}
            item
            xs={12}
            sm={12}
            md={6}
            lg={6}
          >
            <Typography
              component="h1"
              variant="h3"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              Florence Jouniaux
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="textSecondary"
              paragraph
            >
              Auteure, professeur de lettres classiques, je m'intéresse à
              diverses littératures dans mes lectures ou mes écrits...
            </Typography>
          </Grid>
        </Grid>
        <div className={classes.jumboButtons}>
          <Grid container spacing={2} justify="center">
            <Grid item>
              <Button variant="contained" color="primary">
                Main call to action
              </Button>
            </Grid>
            <Grid item>
              <Button variant="outlined" color="primary">
                Secondary action
              </Button>
            </Grid>
          </Grid>
        </div>
      </Container>
    </div>
  );
};

export default Jumbotron;
