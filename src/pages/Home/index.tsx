import firebase from "firebase/compat/app";
import { useAuth } from "../../contexts/AuthContext"
import { FaPlus } from "react-icons/fa"; 

export function Home(){

    const { user } = useAuth()
    // const [user] = useAuthState(firebase.auth());

    return(
        <div className="container">
            <h1>Help Desk</h1>
            <div className="header">
                <div>
                    <h3>Olá { user?.name }</h3>
                    <p>Encontre chamados abertos ou crie novos</p>
                </div>
                <FaPlus color="#fff" size={30} />
            </div>
        </div>
    )
}