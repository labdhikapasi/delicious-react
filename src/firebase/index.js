import firebase from "firebase/app";
import "firebase/storage";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDK3ZtdoXAo7ZZ8GlFx28ortgGDJ0XMB7o",
    authDomain: "fir-react-upload-d734e.firebaseapp.com",
    projectId: "fir-react-upload-d734e",
    storageBucket: "fir-react-upload-d734e.appspot.com",
    messagingSenderId: "606976947587",
    appId: "1:606976947587:web:cc32f232b7e81ecf8c72b6",
    measurementId: "G-TDT5MG5LZL"
  };

  firebase.initializeApp(firebaseConfig);

  const storage = firebase.storage();

  export { storage, firebase as default }; 
;