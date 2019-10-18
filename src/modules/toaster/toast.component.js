import React from "react";
import classNames from "classnames";

import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import ErrorIcon from "@material-ui/icons/Error";
import InfoIcon from "@material-ui/icons/Info";
import CloseIcon from "@material-ui/icons/Close";
import WarningIcon from "@material-ui/icons/Warning";
import NewIcon from "@material-ui/icons/FiberNew";

import green from "@material-ui/core/colors/green";
import amber from "@material-ui/core/colors/amber";
import red from "@material-ui/core/colors/red";
import blue from "@material-ui/core/colors/red";

import IconButton from "@material-ui/core/IconButton";
import Snackbar from "@material-ui/core/Snackbar";
import SnackbarContent from "@material-ui/core/SnackbarContent";

import { makeStyles } from "@material-ui/core";
import { ToasterContext } from "./toaster.context";

const variantIcon = {
  success: CheckCircleIcon,
  warning: WarningIcon,
  error: ErrorIcon,
  info: InfoIcon,
  new: NewIcon
};

const useStyles = makeStyles(theme => ({
  success: { backgroundColor: green[600] },
  error: { backgroundColor: red[500] },
  info: { backgroundColor: blue[100] },
  warning: { backgroundColor: amber[700] },
  new: { backgroundColor: "white" },
  icon: { fontSize: 20 },
  iconVariant: {
    opacity: 0.9,
    marginRight: theme.spacing(1)
  },
  snackBar: {
    flexWrap: "nowrap",
    [theme.breakpoints.up("md")]: { width: "100%" }
  },
  snackBarContent: {
    flexWrap: "nowrap",
    [theme.breakpoints.up("md")]: { maxWidth: "60%" }
  },
  snackContent: {
    display: "flex",
    alignItems: "center",
    color: "white"
  },
  snackAction: {
    marginLeft: "10px",
    textAlign: "justify"
  },
  colorDark: {
    color: "black !important"
  }
}));

const Toaster = () => {
  const classes = useStyles();
  const {
    toast: { visible, content, variant },
    toggleToast
  } = React.useContext(ToasterContext);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    toggleToast();
  };

  const Icon = variantIcon[variant];

  const applyDarkColor = (variant, classname) =>
    variant === "new" ? classNames(classname, classes.colorDark) : classname;
  return true ? null : (
    <Snackbar
      className={classes.snackBar}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "left"
      }}
      open={visible}
      autoHideDuration={6000}
      onClose={handleClose}
    >
      <SnackbarContent
        className={classNames(classes[variant], classes.snackBarContent)}
        aria-describedby="client-snackbar"
        message={
          <span
            className={applyDarkColor(variant, classes.snackContent)}
            id="client-snackbar"
          >
            <Icon />
            <p className={applyDarkColor(variant, classes.snackAction)}>
              {content}
            </p>
          </span>
        }
        action={[
          <IconButton
            key="close"
            aria-label="Close"
            color="inherit"
            onClick={handleClose}
          >
            <CloseIcon color={variant === "new" ? "secondary" : "primary"} />
          </IconButton>
        ]}
      />
    </Snackbar>
  );
};

export default Toaster;
