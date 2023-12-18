import { useContext, useState, useEffect } from "react"
import AuthContext from "../contexts/authContext"

export default function Profile() {
    const {isAuthenticated, getProfileDataHandler, token} = useContext(AuthContext)
    const [profileData, setProfileData] = useState()
    console.log(profileData)

    useEffect(() => {
        if (isAuthenticated) {
            getProfileDataHandler(token)
                .then(result => setProfileData(result))
        }
    }, [isAuthenticated, token])

    return(
        <div className="profile-wrapper">

            <h1>Моят профил</h1>
        </div>
    )
}