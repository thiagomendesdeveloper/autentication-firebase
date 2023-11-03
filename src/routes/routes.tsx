import { BrowserRouter , Routes, Route } from "react-router-dom";
import { allRoutes } from "./routesConfig";
import Privado from "./privateRouter";

export function Router(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" Component={allRoutes.Login} />
                <Route path="/Login/Cadastrar" Component={allRoutes.Cadastrar} />
                <Route  path='/home' element={<Privado Item={allRoutes.Home} />} />
            </Routes>
        </BrowserRouter>
    )
} 