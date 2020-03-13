import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyDrGCfyhMrA-9uTtzvC41nzLw8aACnxguY",
    authDomain: "simple-notes-firebase-tutorial.firebaseapp.com",
    databaseURL: "https://simple-notes-firebase-tutorial.firebaseio.com",
    projectId: "simple-notes-firebase-tutorial",
    storageBucket: "simple-notes-firebase-tutorial.appspot.com",
    messagingSenderId: "1032679621889",
    appId: "1:1032679621889:web:14107ab15ef8d474d10700",
    measurementId: "G-GL4DYWY96N"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export const database = firebase.database();

  export default firebase;