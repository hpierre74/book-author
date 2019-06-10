/* eslint-disable no-script-url */

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Button from "@material-ui/core/Button";
import Checkbox from "@material-ui/core/Checkbox";
import CircularProgress from "@material-ui/core/CircularProgress";

const useStyles = makeStyles(theme => {
  console.log(theme);
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

export default function BooksTable({ books, children }) {
  const classes = useStyles();
  return (
    <React.Fragment>
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
            {books &&
              books.map(book => (
                <TableRow key={book.key}>
                  <TableCell align="center">{book.title}</TableCell>
                  <TableCell align="center">{book.published}</TableCell>
                  <TableCell align="center">{book.price_physical}€</TableCell>
                  <TableCell align="center">{book.price_virtual}€</TableCell>
                  <TableCell align="center">
                    <Checkbox disabled checked={book.showcased} />
                  </TableCell>
                  <TableCell align="center">
                    <Button
                      className={classes.button}
                      color="primary"
                      variant="outlined"
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
      <div className={classes.addBook}>{children}</div>
    </React.Fragment>
  );
}
