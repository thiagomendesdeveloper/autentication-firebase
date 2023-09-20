import React, { useState } from 'react';
import './style.css'
import firebase from 'firebase/compat/app';
import firebaseConfig from '../../service/firebase';
import {  getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import 'firebase/auth';
import { initializeApp } from "firebase/app";


export const Home: React.FC = () => {
    // console.log(auth)

    const [ user, setUser ] = useState<any>('')

    async function signInWithGoogle(){
        firebase.initializeApp(firebaseConfig)
        initializeApp(firebaseConfig)
        const provider = new GoogleAuthProvider();
        const auth = getAuth();
        signInWithPopup(auth, provider)
        .then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            // The signed-in user info.
            const userName = result.user;
            setUser(userName.displayName)
            // IdP data available using getAdditionalUserInfo(result)
            // ...
          }).catch((error) => {
            // Handle Errors here.
          console.log('eeror')
            // ...
          });
        // const result = await auth.signInWithPopup(provider
        
    }
    
    return(
        <div className='form-container'>
            <button onClick={signInWithGoogle} className='button'>Acessar com o google</button>
            {user}
        </div>
    )
}