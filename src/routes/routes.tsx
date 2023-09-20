import { BrowserRouter , Routes, Route} from "react-router-dom";
import { Login } from "../pages/Login";
import { Home } from "../pages/Home";

export function Router(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" Component={Login} />
                <Route path="/home" Component={Home} />
            </Routes>
        </BrowserRouter>
    )
}