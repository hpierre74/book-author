import * as firebase from "firebase/app";
import "firebase/database";
import "firebase/storage";

const config = {
  apiKey: `${process.env.REACT_APP_FIREBASE_APIKEY}`,
  authDomain: `${process.env.REACT_APP_FIREBASE_DOMAIN}`,
  databaseURL: `${process.env.REACT_APP_FIREBASE_DB}`,
  projectId: `${process.env.REACT_APP_FIREBASE_ID}`,
  storageBucket: `${process.env.REACT_APP_FIREBASE_BUCKET}`,
  messagingSenderId: `${process.env.REACT_APP_FIREBASE_MESSAGING}`
};

firebase.initializeApp(config);

export const database = firebase.database();

export const storage = firebase.storage();

export const getFile = ref => storage.ref(ref).getDowloadUrl();

export const setFile = (ref, file) =>
  storage
    .ref()
    .child(ref)
    .put(file);

export const deleteFile = ref => {
  storage.ref(ref).delete();
};
