import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyC1bKX3sk2gGD-sNkAUzipRH8_9EMuF5lc",
    authDomain: "facebook-cb4dd.firebaseapp.com",
    projectId: "facebook-cb4dd",
    storageBucket: "facebook-cb4dd.appspot.com",
    messagingSenderId: "382482888970",
    appId: "1:382482888970:web:12f2f4de1d44f4c3df62f3",
    measurementId: "G-ZSBBYZVZWH"
  };

  const firebaseApp=firebase.initializeApp(firebaseConfig)
  const db=  firebaseApp.firestore()
  const auth=firebase.auth()
  const provider=new firebase.auth.GoogleAuthProvider()

  export {auth ,provider};
  export default db;