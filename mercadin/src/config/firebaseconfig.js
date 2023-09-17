// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
//import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { collection, getFirestore, getDocs } from "firebase/firestore";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseApp = initializeApp({
    apiKey: "AIzaSyDqQzncWX0BogwFgDSLhU8QCI1N_Izz-l8",
    authDomain: "mercadin-6b00b.firebaseapp.com",
    projectId: "mercadin-6b00b",
    storageBucket: "mercadin-6b00b.appspot.com",
    messagingSenderId: "63121495485",
    appId: "1:63121495485:web:cd603a2fdcda783f446ed4",
    measurementId: "G-KSX3RZKWEJ"
  });


//  Initialize Firebase
//const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

//const auth = getAuth(firebaseApp);
const database = getFirestore(firebaseApp);

export default database;