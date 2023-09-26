import React, { useState } from 'react';
import './style.css'
import 'firebase/auth';
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword  } from 'firebase/auth';
import { auth } from '../../service/firebase';

export const Register: React.FC = () => {

    const [ email, setgetEmail ] = useState<string>('')
    const [ password, setPassword ] = useState<string>('')

   const navigate = useNavigate();

   const getEmail = (event: React.ChangeEvent<HTMLInputElement>) => setgetEmail(event.target.value)
   const  getPassword = (event: React.ChangeEvent<HTMLInputElement>) => setPassword(event.target.value)

   const handleLogin = async (e:any) => {
    e.preventDefault()
    try{
        const result = await createUserWithEmailAndPassword(auth, email, password)
        console.log(result)
        if(result.user?.uid){
            alert('usuario cadastrado com sucesso')
            navigate("/"); 
        }
    }catch(error){
        console.log(error)
        alert('error por favor tente novamente mais tarde')
    }
   }

    return(
        <div className='form-container'>
            <form action="POST" className='form'>
                <h1 className='title'>Criar conta</h1>
                <input type="text" value={email} onChange={getEmail} placeholder='Digite seu email' />
                <input type="password" value={password} onChange={getPassword} placeholder='Digite sua senha' />
                <button onClick={handleLogin} className='button main-button'>
                    Entrar
                </button>
            </form>
        </div>
    )
}