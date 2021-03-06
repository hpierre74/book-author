import React from "react";

import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import Chip from "@material-ui/core/Chip";

import AddIcon from "@material-ui/icons/Add";

import { BookEditContext } from "./BookEditContext";
import { setBook } from "../../utils/books.utils";
import { Modal, ModalContent, ModalActions } from "../modal/Modal";

const initialState = {
  author: "",
  title: "",
  description: "",
  cover: "https://via.placeholder.com/250",
  published: "",
  price_virtual: 0,
  price_physical: 0,
  length: 0,
  tags: []
};

export default function BookModal({ open, handleClickOpen, handleClose }) {
  const [state, setState] = React.useState(initialState);
  const [category, setCategory] = React.useState("");
  // const [preview, setPreview] = React.useState(null);
  const { currentBook } = React.useContext(BookEditContext);

  const {
    author,
    title,
    description,
    // cover,
    published,
    price_virtual,
    price_physical,
    length,
    tags
  } = state;

  React.useEffect(() => {
    if (state.id && !currentBook) {
      setState(initialState);
    }
  }, [state.id, currentBook]);

  React.useEffect(() => {
    if (currentBook && !state.id && currentBook.title !== title) {
      setState({ ...state, ...currentBook });
    }
  }, [currentBook, title, length, state]);

  const handleInputChange = event => {
    setState({ ...state, [event.target.name]: event.target.value });
  };

  const handleCategoryChange = event => {
    setCategory(event.target.value);
  };

  const handleCategorySubmit = event => {
    event.preventDefault();
    if (category.length === 0) {
      return;
    }
    setState({ ...state, tags: [...state.tags, category] });
    setCategory("");
  };

  const handleCategoryDelete = targetTag => event => {
    const newTags = tags.filter(tag => tag !== targetTag);
    setState({ ...state, tags: newTags });
  };

  const handleFileChange = event => {
    event.persist();
    setState({ ...state, cover: event.target.files[0] });
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (!state.cover) {
      alert("il n'y a pas d'image");
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
      <Modal
        open={open}
        handleClose={handleClose}
        aria-labelledby="form-dialog-title"
        title="Ajouter un livre"
        fullWidth
        maxWidth="lg"
      >
        <ModalContent>
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
            label="Auteur"
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
          <FormControl margin="dense" fullWidth>
            <InputLabel htmlFor="category">Catégorie(s)</InputLabel>
            <Input
              id="category"
              name="category"
              type="text"
              value={category}
              onChange={handleCategoryChange}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="add a category"
                    onClick={handleCategorySubmit}
                  >
                    <AddIcon />
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
          <div>
            {tags.map(tag => (
              <Chip
                key={tag}
                label={tag}
                onDelete={handleCategoryDelete(tag)}
              />
            ))}
          </div>
        </ModalContent>
        <ModalActions>
          <Button onClick={handleCancel} color="secondary">
            Annuler
          </Button>
          <Button onClick={handleSubmit} color="primary" variant="contained">
            Enregistrer
          </Button>
        </ModalActions>
      </Modal>
    </>
  );
}
