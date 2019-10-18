import React from "react";
import { Link } from "react-router-dom";

import AppBar from "@material-ui/core/AppBar";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import Paper from "@material-ui/core/Paper";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";

// MUI Icons
import HomeIcon from "@material-ui/icons/Home";

import { makeStyles } from "@material-ui/core/styles";

import BookTable from "../books/BookTable";
import BookEditProvider from "../books/BookEditProvider";

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
  icon: {
    marginRight: theme.spacing(2)
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
          <IconButton
            edge="start"
            className={classes.icon}
            color="inherit"
            aria-label="menu"
            component={Link}
            to="/"
          >
            <HomeIcon />
          </IconButton>
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
        <Container maxWidth="lg" component="main">
          <Paper className={classes.table}>
            <BookTable />
          </Paper>
        </Container>
      </BookEditProvider>
    </React.Fragment>
  );
}
