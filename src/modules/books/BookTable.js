/* eslint-disable no-script-url */

import React from "react";

import { makeStyles } from "@material-ui/core/styles";

import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Switch from "@material-ui/core/Switch";
import IconButton from "@material-ui/core/IconButton";
import CircularProgress from "@material-ui/core/CircularProgress";

import EditIcon from "@material-ui/icons/EditOutlined";
import DeleteIcon from "@material-ui/icons/DeleteOutlined";

import BookModal from "./BookModal";

import { useModal } from "../modal/useModal";
import { BookContext } from "./BookContext";
import { BookEditContext } from "./BookEditContext";

const useStyles = makeStyles(theme => {
  return {
    root: {
      width: "100%",
      overflowX: "auto",
      marginTop: "1em"
    },
    table: {
      minWidth: 650
    },
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
      margin: "5px",
      border: "1px solid"
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
    <Paper className={classes.root}>
      {books ? (
        <Table className={classes.table}>
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
                  <IconButton
                    className={classes.button}
                    color="primary"
                    variant="outlined"
                    onClick={onEdit(book)}
                  >
                    <EditIcon />
                  </IconButton>
                  <IconButton
                    className={classes.button}
                    color="secondary"
                    variant="outlined"
                  >
                    <DeleteIcon />
                  </IconButton>
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
    </Paper>
  );
}
