import { useContext, useEffect } from "react"
import { logout } from "../services/authService"
import { useNavigate } from "react-router-dom"
import AuthContext from "../contexts/authContext"
import Path from "../paths"

export default function Logout() {
    const navigate = useNavigate()
    const {logoutHandler, token} = useContext(AuthContext)

    useEffect(() => {
        logout(token)
        .then(() => {
            logoutHandler()
            navigate(Path.Home)
        }) 
        .catch(() => navigate(Path.Home))
    }, [])
    return null
}