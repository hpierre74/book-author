import { database } from "./firebase.utils";

export const getBooks = setter =>
  database
    .ref("books")
    .once("value")
    .then(snapshot => setter(snapshot.val()));
