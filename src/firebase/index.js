import firebase from "firebase/app";
import "firebase/firestore"; // for the db
import "firebase/auth";

const config = {
   apiKey: "AIzaSyAJswjAEcvRvIjGoBk37eOGdYq092-1Myw",
    authDomain: "gradient-store-39289.firebaseapp.com",
    projectId: "gradient-store-39289",
    storageBucket: "gradient-store-39289.appspot.com",
    messagingSenderId: "19606332144",
    appId: "1:19606332144:web:cba48998986c44c665d835",
    measurementId: "G-09DWB0BN1B"
};

firebase.initializeApp(config);

const firestore = firebase.firestore();
const auth = firebase.auth();

const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) {
    return;
  }

  const userRef = firestore.doc(`users/${userAuth.uid}`); //users/uniq26535
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

export { firestore, createUserProfileDocument, auth };
