/* eslint-disable no-script-url */

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";

import BookModal from "./BookModal";
import { BookContext } from "./BookContext";
import { Switch } from "@material-ui/core";
import { BookEditContext } from "./BookEditContext";
import { useModal } from "../modal/useModal";

const useStyles = makeStyles(theme => {
  return {
    addBook: {
      display: "flex",
      justifyContent: "center"
    },
    progressContainer: {
      display: "flex",
      justifyContent: "center"
    },
    progress: {
      margin: "2.5%"
    },
    button: {
      margin: "10px"
    }
  };
});

export default function BooksTable() {
  const classes = useStyles();
  const { open, openModal, closeModal } = useModal();

  const { books, frontBookId, setFrontBookId } = React.useContext(BookContext);
  const { setCurrentBook } = React.useContext(BookEditContext);

  const handleSwitchChange = id => event => {
    setFrontBookId(id);
  };

  const handleClose = () => {
    setCurrentBook(null);
    closeModal();
  };

  const onEdit = book => () => {
    setCurrentBook(book);
    openModal();
  };

  return (
    <>
      {books ? (
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align="center">Titre</TableCell>
              <TableCell align="center">Publié le</TableCell>
              <TableCell align="center">Prix broché</TableCell>
              <TableCell align="center">Prix e-book</TableCell>
              <TableCell align="center">En avant</TableCell>
              <TableCell />
            </TableRow>
          </TableHead>
          <TableBody>
            {Object.values(books).map(book => (
              <TableRow key={book.title}>
                <TableCell align="center">{book.title}</TableCell>
                <TableCell align="center">{book.published}</TableCell>
                <TableCell align="center">{book.price_physical}€</TableCell>
                <TableCell align="center">{book.price_virtual}€</TableCell>
                <TableCell align="center">
                  <Switch
                    checked={book.id === frontBookId}
                    onChange={handleSwitchChange(book.id)}
                    value={book.id}
                  />
                </TableCell>
                <TableCell align="center">
                  <Button
                    className={classes.button}
                    color="primary"
                    variant="outlined"
                    onClick={onEdit(book)}
                  >
                    Edit
                  </Button>
                  <Button color="secondary" variant="outlined">
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      ) : (
        <div className={classes.progressContainer}>
          <CircularProgress className={classes.progress} />
        </div>
      )}
      <div className={classes.addBook}>
        <BookModal
          open={open}
          handleClickOpen={openModal}
          handleClose={handleClose}
        />
      </div>
    </>
  );
}
