import { initializeApp } from "firebase/app";
import firebase from 'firebase/compat/app';
import 'firebase/auth';
import {  getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { doc, setDoc } from "firebase/firestore"; 

const firebaseConfig = {
    apiKey: "AIzaSyAHnlyP96atc98VX3O4Ilyce_U2gk6eHKs",
    authDomain: "leatmeask-26f0f.firebaseapp.com",
    projectId: "leatmeask-26f0f",
    storageBucket: "leatmeask-26f0f.appspot.com",
    messagingSenderId: "883041865260",
    appId: "1:883041865260:web:37f35bfca8ee9fdee80b89"
}

firebase.initializeApp(firebaseConfig)
const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const provider = new GoogleAuthProvider();
const database = getFirestore(app);

await setDoc(doc(database, "cities", "Fortaleza"), {
    name: "Fortaleza",
    state: "CA",
    country: "USA"
});

export { auth, provider, database }