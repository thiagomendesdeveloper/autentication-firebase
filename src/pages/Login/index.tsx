import React from 'react';
import './style.css'
import 'firebase/auth';
import { useAuth } from '../../contexts/AuthContext';
import { useNavigate } from "react-router-dom";
import logoImg from '../../assets/google-icon.png';
import { FaGithub } from "react-icons/fa";

export const Login: React.FC = () => {

   const { signInWithGoogle } = useAuth()
   const navigate = useNavigate();

   async function AuthGoogleProvider(){
        await signInWithGoogle()
        navigate("/home");  
   }
    
    return(
        <div className='form-container'>
            <button onClick={AuthGoogleProvider} className='button'>
                <img className='logo' src={logoImg} alt="Logo-google-icon" />
                Crie sua conta com o google
            </button>
            <button className='button main-button'>
                Crie sua conta com o google
            </button>
            <button className='button button-git'>
                <FaGithub size={18} className="icon-git"/>
                Crie sua conta com o github
            </button>
        </div>
    )
}