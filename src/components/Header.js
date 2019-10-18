import React from "react";
import { Link } from "react-router-dom";

// MUI Components
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";

// MUI Icons
import HomeIcon from "@material-ui/icons/Home";

// MUI Utils
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  icon: {
    marginRight: theme.spacing(2)
  }
}));

const Header = ({ title }) => {
  const classes = useStyles();
  return (
    <AppBar position="relative">
      <Toolbar>
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

        <Typography variant="h6" color="inherit" noWrap>
          {title}
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
