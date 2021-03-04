import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyDZNqJPfa6uHsOoZkJhws88Mw8bmfhCIBM",
  authDomain: "barter-9df8c.firebaseapp.com",
  projectId: "barter-9df8c",
  storageBucket: "barter-9df8c.appspot.com",
  messagingSenderId: "147241531980",
  appId: "1:147241531980:web:ee5fa67f8d59900944d2e9"
  };
  // Initialize Firebase

  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();
