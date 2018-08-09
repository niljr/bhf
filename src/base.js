import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBAnCYTAgBeGlznRJJmU8dwi7k6Dcxo6IE",
  authDomain: "bhproject-85b35.firebaseapp.com",
  databaseURL: "https://bhproject-85b35.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());

// This is a named export
export { firebaseApp };

// this is a default export
export default base;
