import React from "react";

import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import { BookEditContext } from "./BookEditContext";
import { setBook } from "../../utils/books.utils";

const initialState = {
  author: "",
  title: "",
  description: "",
  cover: "https://via.placeholder.com/250",
  published: "",
  price_virtual: 0,
  price_physical: 0,
  length: 0
  // tags: []
};

export default function FormDialog({ open, handleClickOpen, handleClose }) {
  const [state, setState] = React.useState(initialState);
  const { currentBook } = React.useContext(BookEditContext);

  const {
    author,
    title,
    description,
    // cover,
    published,
    price_virtual,
    price_physical,
    length
    // tags
  } = state;

  React.useEffect(() => {
    if (currentBook && currentBook.title !== title) {
      setState({ ...state, ...currentBook });
    }

    if (state.id && !currentBook) {
      setState(initialState);
    }
  }, [state, currentBook, title]);

  const handleInputChange = event => {
    setState({ ...state, [event.target.name]: event.target.value });
  };

  const handleFileChange = event => {
    event.persist();
    setState({ ...state, cover: event.target.files[0] });
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (!state.cover) {
      return;
    }
    setBook(state);
    handleClose();
    setState(initialState);
  };

  const handleCancel = event => {
    event.preventDefault();
    handleClose();
  };

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
        <DialogTitle id="form-dialog-title">Ajouter un livre</DialogTitle>
        <DialogContent>
          <div>
            <img src={state.cover} width="250" alt="book cover" />
          </div>
          <input
            accept="image/*"
            style={{ display: "none" }}
            id="raised-button-file"
            name="cover"
            onChange={handleFileChange}
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
              Modifier la couverture
            </Button>
          </label>
          <TextField
            autoFocus
            margin="dense"
            id="author"
            name="author"
            value={author}
            onChange={handleInputChange}
            label="author"
            type="text"
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="title"
            name="title"
            value={title}
            onChange={handleInputChange}
            label="Titre du livre"
            type="text"
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="published"
            name="published"
            value={published}
            onChange={handleInputChange}
            label="Publié le"
            type="text"
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="price_physical"
            name="price_physical"
            value={price_physical}
            onChange={handleInputChange}
            label="Prix broché"
            type="number"
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="price_virtual"
            name="price_virtual"
            value={price_virtual}
            onChange={handleInputChange}
            label="Prix E-book"
            type="number"
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="length"
            name="length"
            value={length}
            onChange={handleInputChange}
            label="Nombre de pages"
            type="number"
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="description"
            name="description"
            value={description}
            onChange={handleInputChange}
            label="Description"
            type="text"
            multiline
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCancel} color="secondary">
            Annuler
          </Button>
          <Button onClick={handleSubmit} color="primary" variant="contained">
            Enregistrer
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
