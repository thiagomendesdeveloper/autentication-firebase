import { Link, Navigate, RouteProps } from "react-router-dom";
import { Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { allRoutes } from "./routesConfig";
import { useAuth } from "../contexts/AuthContext";

export default function Privado({ Item }: any) {

    const { user } = useAuth()
    const token = localStorage.getItem('user')

    return token ? <Item /> : <Navigate to={'/'} />

}