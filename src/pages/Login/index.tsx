import React from 'react';
import './style.css'
import 'firebase/auth';
import { useAuth } from '../../contexts/AuthContext';
import { redirect } from 'react-router-dom';

export const Login: React.FC = () => {

   const { signInWithGoogle } = useAuth()

   async function AuthGoogleProvider(){
        await signInWithGoogle();
        return redirect('/home')
   }
    
    return(
        <div className='form-container'>
            <button onClick={AuthGoogleProvider} className='button'>Acessar com o google</button>
        </div>
    )
}