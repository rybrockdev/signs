import firebase from "firebase/app" 
import 'firebase/firestore'


const firebaseConfig = {
    apiKey: "AIzaSyCre_-pFVjpGtGhwS_NJ_rsFpqY_aoNMfA",
    authDomain: "signs-9f528.firebaseapp.com",
    projectId: "signs-9f528",
    storageBucket: "signs-9f528.appspot.com",
    messagingSenderId: "696428364948",
    appId: "1:696428364948:web:37d5aa89137fa15b2ce081",
    measurementId: "G-Z4W0X024R5"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  export default firebaseApp.firestore();