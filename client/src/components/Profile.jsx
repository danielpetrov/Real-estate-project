import { useContext, useState, useEffect } from "react"
import AuthContext from "../contexts/authContext"
import { getProfileData } from "../services/authService"

export default function Profile() {
    const { isAuthenticated, token } = useContext(AuthContext)
    const [profileData, setProfileData] = useState()
    console.log(profileData)
    const getProfileDataHandler = async () => {
        await getProfileData(token)
    }

    useEffect(() => {
        if (isAuthenticated) {
            getProfileDataHandler(token)
                .then(result => setProfileData(result))
        }
    }, [isAuthenticated, token])

    return (
        <div className="profile-wrapper">

            <h1>Моят профил</h1>
        </div>
    )
}