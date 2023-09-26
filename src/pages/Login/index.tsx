import React, { useState } from 'react';
import './style.css'
import 'firebase/auth';
import { useAuth } from '../../contexts/AuthContext';
import { useNavigate } from "react-router-dom";
import logoImg from '../../assets/google-icon.png';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../service/firebase';
import { Link } from 'react-router-dom';

export const Login: React.FC = () => {

    const [email, setgetEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    const { signInWithGoogle } = useAuth()
    const navigate = useNavigate();

    async function AuthGoogleProvider() {
        await signInWithGoogle()
        navigate("/home");
    }

    const getEmail = (e: React.ChangeEvent<HTMLInputElement>) => setgetEmail(e.target.value)
    const getPassword = (e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)


    const handleLogin = async (e: any) => {
        e.preventDefault()
        try {
            const result = await signInWithEmailAndPassword(auth, email, password)
            if (result) {
                alert('usuario logado com sucesso, voce sera redirecionado')
                navigate("/home");
            }
        } catch (error) {
            alert('error por favor tente novamente')
            console.log('aqui')
        }
    }

    return (
        <div className='form-container'>
            <form action="POST" className='form'>
                <h1 className='title'>Login</h1>
                <input type="text" value={email} onChange={getEmail} placeholder='Digite seu email' />
                <input type="password" value={password} onChange={getPassword} placeholder='Digite sua senha' />
                <button onClick={handleLogin} className='button main-button'>
                    Entrar
                </button>
            </form>
            <button onClick={AuthGoogleProvider} className='button'>
                <img className='logo' src={logoImg} alt="Logo-google-icon" />
                Entrar usando sua conta com o google
            </button>
            <Link className='create-login' to={"/Login/Cadastrar"}>Crie sua conta agora</Link>
            {/* <button  className='button button-git'>
                <FaGithub size={18} className="icon-git"/>
                Crie sua conta com o Github
            </button> */}
        </div>
    )
}