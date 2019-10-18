import { database } from "./firebase.utils";

export const getCritics = setter =>
  database
    .ref("critics")
    .once("value")
    .then(snapshot => setter(snapshot.val()));
