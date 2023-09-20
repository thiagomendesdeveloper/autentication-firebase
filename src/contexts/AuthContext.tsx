import { createContext, ReactNode, useContext, useState } from 'react'
import { auth, provider } from '../service/firebase';
import { signInWithPopup } from "firebase/auth";


type User = {
    id?: string;
    name?: string | null;
    email?: string | null;
    avatar: string  | null;
}

type AuthContextType = {
    user: User | undefined;
    signInWithGoogle: () => Promise<void>;
}


interface authContextProviderProps {
    children: ReactNode;
}

const AuthContext = createContext({} as AuthContextType)

export function AuthContextProvider(props: authContextProviderProps) {

    const [user, setUser] = useState<User>()

    async function signInWithGoogle() {
        signInWithPopup(auth, provider)
            .then((result) => {
                if(result.user){

                    const { displayName, email, uid, photoURL } = result?.user;
                    //   const credential = GoogleAuthProvider.credentialFromResult(result);
                    //   const token = credential?.accessToken;
                    setUser({
                        id: uid,
                        name: displayName,
                        email: email,
                        avatar: photoURL,
                    })
                }

            }).catch((error) => {
                throw new Error('Error na autenticação com o google');
                console.log(error)
            });
    }

    return (
        <AuthContext.Provider value={{user, signInWithGoogle}}>
            {props.children}
        </AuthContext.Provider>
    )

}

export function useAuth() {
    const context = useContext(AuthContext);
    if (!context) {
      throw new Error('useAuth deve ser usado dentro de um AuthProvider');
    }
    return context;
}