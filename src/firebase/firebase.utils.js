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

  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapshot = await userRef.get();

    
    if(!snapshot.exists) {
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        }catch (error) {
            console.log('rror creating user', error.message);
        }
    }
    return userRef;
  }


  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  //firestore.collection('users').doc('MBeBQmuzzN67NLn2bAGV').collection('cartItems').doc('ugw9ItJxXs1BB3m9G5Zj')
  //firestore.doc('/users/MBeBQmuzzN67NLn2bAGV/cartItems/ugw9ItJxXs1BB3m9G5Zj')
  //firestore.collection('/users/MBeBQmuzzN67NLn2bAGV/cartItems')


  export default firebase;