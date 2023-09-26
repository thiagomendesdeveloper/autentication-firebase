import { Router } from "./routes/routes"
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useAuth } from "./contexts/AuthContext";

function App() {

  
  // const navigate = useNavigate()
  // const { user } = useAuth()

    // useEffect( () => {
    //     if(!user){
    //         navigate('/home')
    //     }
    // }, [user])

  return (
    <>
      <Router />
    </>
  )
}

export default App
