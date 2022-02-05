import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
  apiKey: 'AIzaSyD3kClJ5jSc0QSStcuNjqgbHGSfgbn3A6o',
  authDomain: 'jh-crwn-db.firebaseapp.com',
  projectId: 'jh-crwn-db',
  storageBucket: 'jh-crwn-db.appspot.com',
  messagingSenderId: '224691733091',
  appId: '1:224691733091:web:e93f416f768e61e1a36e56',
  measurementId: 'G-KMEYQP47SJ',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ propmt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
