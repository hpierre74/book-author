import * as firebase from "firebase/app";
import "firebase/database";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDJEUdC-7nGAonC34OJhvXqwZccEg6AAF4",
  authDomain: "florence-jouniaux.firebaseapp.com",
  databaseURL: "https://florence-jouniaux.firebaseio.com",
  projectId: "florence-jouniaux",
  storageBucket: "florence-jouniaux.appspot.com",
  messagingSenderId: "333846286707",
  appId: "1:333846286707:web:db26e257e25d5090"
};

firebase.initializeApp(firebaseConfig);

export const database = firebase.database();

export const storage = firebase.storage();
