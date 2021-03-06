import * as firebase from "firebase/app";
import "firebase/database";
import "firebase/storage";
import "firebase/auth";

const config = {
  apiKey: `${process.env.REACT_APP_FIREBASE_APIKEY}`,
  authDomain: `${process.env.REACT_APP_FIREBASE_DOMAIN}`,
  databaseURL: `${process.env.REACT_APP_FIREBASE_DB}`,
  projectId: `${process.env.REACT_APP_FIREBASE_ID}`,
  storageBucket: `${process.env.REACT_APP_FIREBASE_BUCKET}`,
  messagingSenderId: `${process.env.REACT_APP_FIREBASE_MESSAGING}`
};

firebase.initializeApp(config);

const envPrefix = process.env.NODE_ENV === "production" ? "prod" : "staging";

export const database = firebase.database();
export const storage = firebase.storage();
export const auth = firebase.auth();

export const callApi = (method, body) =>
  firebase.functions().httpsCallable(method)(body);

export const isAuth = () => !!auth.currentUser;
export const signOut = () => auth.signOut();
export const signIn = ({ email, password }) =>
  auth
    .setPersistence(firebase.auth.Auth.Persistence.NONE)
    .then(() => firebase.auth().signInWithEmailAndPassword(email, password));

export const getFile = ref => storage.ref(ref).getDownloadUrl();

export const setFile = (ref, file) =>
  storage
    .ref()
    .child(ref)
    .put(file);

export const deleteFile = ref => {
  storage.ref(ref).delete();
};

export const storageRef = ref => storage.ref(ref);

export async function getData(ref) {
  return database
    .ref(`${envPrefix}/${ref}`)
    .once("value")
    .then(snapshot => snapshot.val());
}

export async function getAndSetData(ref, setter) {
  return database
    .ref(`${envPrefix}/${ref}`)
    .once("value")
    .then(snapshot => {
      setter(snapshot.val());
      return snapshot.val();
    });
}

export function getOrderedData(ref, child) {
  return database
    .ref(`${envPrefix}/${ref}`)
    .orderByChild(child)
    .once("value")
    .then(snapshot => snapshot.val());
}

export const getOrderedDataEqual = (ref, child, value) =>
  database
    .ref(`${envPrefix}/${ref}`)
    .orderByChild(child)
    .equalTo(value)
    .once("value")
    .then(snapshot => snapshot.val());

export const getRangedDataEqual = (ref, child, value, start, end) =>
  database
    .ref(`${envPrefix}/${ref}`)
    .orderByChild(child)
    .equalTo(value)
    .startAt(start)
    .endAt(end)
    .once("value")
    .then(snapshot => snapshot.val());

export function getRangedData(ref, child, start, end) {
  return database
    .ref(`${envPrefix}/${ref}`)
    .orderByChild(child)
    .startAt(start)
    .endAt(end)
    .once("value")
    .then(snapshot => snapshot.val());
}

export function getDataStream(ref, cb) {
  return database
    .ref(`${envPrefix}/${ref}`)
    .on("value", snapshot => cb(snapshot));
}

export function setData(ref, data) {
  return database.ref(`${envPrefix}/${ref}`).update(data);
}

export const increment = (ref, number) =>
  database
    .ref(`${envPrefix}/${ref}`)
    .transaction(currentCount =>
      currentCount ? parseInt(currentCount, 10) + parseInt(number, 10) : number
    )
    .catch(err => console.log(err)); // eslint-disable-line no-console

export const getNewKey = ref => {
  return database.ref(`${envPrefix}/${ref}`).push().key;
};

export const setNewKey = (ref, key) => {
  return database.ref(`${envPrefix}/${ref}/${key}`).set({ key });
};
