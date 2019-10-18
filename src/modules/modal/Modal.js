import React from "react";

import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";

export const Modal = ({ children, open, handleClose, title }) => {
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="form-dialog-title"
    >
      <DialogTitle id="form-dialog-title">{title}</DialogTitle>
      {children}
    </Dialog>
  );
};

export const ModalContent = ({ children }) => {
  return <DialogContent>{children}</DialogContent>;
};

export const ModalActions = ({ children }) => {
  return <DialogActions>{children}</DialogActions>;
};
