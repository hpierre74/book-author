import React, { useState, useEffect } from "react";

import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";

import Critic from "./Critic";

// import { getCritics } from "../../utils/Critics.utils";

const useStyles = makeStyles(theme => ({
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8)
  }
}));

const CriticList = () => {
  // eslint-disable-next-line no-unused-vars
  const [critics, setCritics] = useState(null);
  const classes = useStyles();

  useEffect(() => {
    if (!critics) {
      //   getCritics(setCritics);
    }
  }, [critics]);

  return (
    <Container className={classes.cardGrid} maxWidth="md">
      <Grid container spacing={4}>
        {critics ? critics.map(critic => <Critic {...critic} />) : null}
      </Grid>
    </Container>
  );
};

export default CriticList;
