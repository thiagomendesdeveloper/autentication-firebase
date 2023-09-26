import { BrowserRouter , Routes, Route} from "react-router-dom";
import { Login } from "../pages/Login";
import { Home } from "../pages/Home";
import { Register } from "../pages/Register";
import { useNavigate } from "react-router-dom";

const ProtectedRoute = (user?: any) => {
    return <h1>teste</h1>
}

export function Router(){

    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" Component={Login} />
                <Route path="/Login/Cadastrar" Component={Register} />
                <Route element={<ProtectedRoute />} >
                    <Route path="/home" Component={Home} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}