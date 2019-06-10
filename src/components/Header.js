import React from "react";

// MUI Components
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

// MUI Icons
import Bookmarks from "@material-ui/icons/Bookmarks";

// MUI Utils
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  icon: {
    marginRight: theme.spacing(2)
  }
}));

const Header = () => {
  const classes = useStyles();
  return (
    <AppBar position="relative">
      <Toolbar>
        <Bookmarks className={classes.icon} />
        <Typography variant="h6" color="inherit" noWrap>
          Livres
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
