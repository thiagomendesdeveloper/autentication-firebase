import { initializeApp } from "firebase/app";
import firebase from 'firebase/compat/app';
import 'firebase/auth';
import {  getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAHnlyP96atc98VX3O4Ilyce_U2gk6eHKs",
    authDomain: "leatmeask-26f0f.firebaseapp.com",
    databaseURL: "https://leatmeask-26f0f-default-rtdb.firebaseio.com",
    projectId: "leatmeask-26f0f",
    storageBucket: "leatmeask-26f0f.appspot.com",
    messagingSenderId: "883041865260",
    appId: "1:883041865260:web:37f35bfca8ee9fdee80b89"
}

firebase.initializeApp(firebaseConfig)
const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const provider = new GoogleAuthProvider();

export { auth, provider}