import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyBCTANxx7fg9ConEU_fPFKiMK7_UT1KYxI",
  authDomain: "crwn-clothing-98bcc.firebaseapp.com",
  databaseURL: "https://crwn-clothing-98bcc.firebaseio.com",
  projectId: "crwn-clothing-98bcc",
  storageBucket: "crwn-clothing-98bcc.appspot.com",
  messagingSenderId: "38423823526",
  appId: "1:38423823526:web:ae74a92f8e8e2067c32067",
  measurementId: "G-BDS08G7WN7"
};

firebase.initializeApp(config);

export const firestore = firebase.firestore();
export const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => {
  auth.signInWithPopup(provider)
    .then(result => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      var token = result.credential.accessToken;
      // The signed-in user info.
      var user = result.user;
    })
    .catch(function (error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
    });
}

export default firebase;