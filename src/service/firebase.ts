import { initializeApp } from "firebase/app";
import firebase from 'firebase/compat/app';
import 'firebase/auth';
import {  getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { doc, setDoc } from "firebase/firestore"; 

const firebaseConfig = {
    apiKey: import.meta.env.VITE_API_KEY,
    authDomain: import.meta.env.VITE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_APP_ID
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