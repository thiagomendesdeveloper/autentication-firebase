import { useAuth } from "../../contexts/AuthContext"

export function Home(){

    const { user } = useAuth()

    return(
        <h1>Ola { user?.name }</h1>
    )
}