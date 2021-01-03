import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDlCqp6PxZFopY0pFFp1Zt0UYK9RzMv6Fk",
    authDomain: "crwn-db-630ee.firebaseapp.com",
    projectId: "crwn-db-630ee",
    storageBucket: "crwn-db-630ee.appspot.com",
    messagingSenderId: "1000872813310",
    appId: "1:1000872813310:web:dc7f40eecce842274bbbaf",
    measurementId: "G-CKNRSY3388"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;