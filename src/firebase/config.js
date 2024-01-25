// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore/lite'


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDRrlvIQl7Nlc9Po6EyvqjFt5bEJG6aBEc",
    authDomain: "course-of-react.firebaseapp.com",
    projectId: "course-of-react",
    storageBucket: "course-of-react.appspot.com",
    messagingSenderId: "638359535451",
    appId: "1:638359535451:web:f30203259a3c259ca4247e"
};

// Initialize Firebase
export const FirebaseApp = initializeApp( firebaseConfig );

export const FirebaseAuth = getAuth( FirebaseApp );

export const FirebaseDB = getFirestore( FirebaseApp );