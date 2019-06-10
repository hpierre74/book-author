import React from "react";

import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Typography from "@material-ui/core/Typography";

export default function FormDialog({ open, handleClickOpen, handleClose }) {
  return (
    <>
      <Button
        style={{ margin: "2%" }}
        variant="contained"
        color="primary"
        onClick={handleClickOpen}
      >
        Ajouter un livre
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title" />
        <DialogContent>
          <DialogContentText>
            <Typography component="h3" variant="h5" color="primary">
              Ajouter un livre
            </Typography>
          </DialogContentText>
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
          <TextField
            autoFocus
            margin="dense"
            id="price_physical"
            label="Prix broché"
            type="number"
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="price_virtual"
            label="Prix E-book"
            type="number"
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="description"
            label="Description"
            type="text"
            multiline
            fullWidth
          />
          <input
            accept="image/*"
            style={{ display: "none" }}
            id="raised-button-file"
            multiple
            type="file"
          />
          <label htmlFor="raised-button-file">
            <Button
              style={{ margin: "2.5% auto " }}
              color="primary"
              variant="outlined"
              component="span"
            >
              Ajouter une couverture
            </Button>
          </label>
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
