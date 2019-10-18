import React from "react";

import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";

import DialogTitle from "@material-ui/core/DialogTitle";

export default function FormDialog({ open, handleClickOpen, handleClose }) {
  return (
    <>
      <Button
        style={{ margin: "2%" }}
        variant="contained"
        color="primary"
        onClick={handleClickOpen}
      >
        Ajouter une critique
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title"> Ajouter un livre</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="title"
            label="Titre du livre"
            type="text"
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="title"
            label="Titre du livre"
            type="text"
            fullWidth
          />
          <TextField 
            autoFocus
            margin="dense"
            id="published"
            label="Publié le"
            type="text"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary">
            Annuler
          </Button>
          <Button onClick={handleClose} color="primary" variant="contained">
            Enregistrer
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
