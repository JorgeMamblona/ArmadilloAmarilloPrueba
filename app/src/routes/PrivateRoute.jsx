import { AuthContext } from "../contexts/auth.context"

import { useContext } from "react"
import { Outlet, Navigate } from "react-router-dom"

const PrivateRoute = () => {

    const { loggedUser, isLoading } = useContext(AuthContext)

    if (!loggedUser) {
        return <Navigate to="/log-in" />
    }

    return <Outlet />
}

export default PrivateRoute