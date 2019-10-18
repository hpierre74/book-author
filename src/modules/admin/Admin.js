import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Paper from "@material-ui/core/Paper";

import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

import BookTable from "../books/BookTable";
import BookEditProvider from "../books/BookEditProvider";
import BookProvider from "../books/BookProvider";

const useStyles = makeStyles(theme => ({
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`
  },
  toolbar: {
    flexWrap: "wrap"
  },
  toolbarTitle: {
    flexGrow: 1
  },
  table: {
    marginTop: "2em"
  }
}));

export default function Admin() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar
        position="static"
        color="primary"
        elevation={0}
        className={classes.appBar}
      >
        <Toolbar className={classes.toolbar}>
          <Typography
            variant="h6"
            color="inherit"
            noWrap
            className={classes.toolbarTitle}
          >
            Back Office
          </Typography>
        </Toolbar>
      </AppBar>
      <BookEditProvider>
        <BookProvider>
          <Container maxWidth="lg" component="main">
            <Paper className={classes.table}>
              <BookTable />
            </Paper>
          </Container>
        </BookProvider>
      </BookEditProvider>
    </React.Fragment>
  );
}
