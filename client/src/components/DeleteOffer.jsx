import { useContext, useEffect } from "react"
import { useParams } from "react-router-dom"
import { deleteOffer } from "../services/collections"
import AuthContext from "../contexts/authContext"
import { useNavigate } from "react-router-dom"
import Path from "../paths"

export default function DeleteOffer() {
    const {token} = useContext(AuthContext)
    const {_id} = useParams()
    const navigate = useNavigate()
    useEffect(() => {
        deleteOffer(_id, token)
        .then(navigate(Path.MyOffers))
    }, [])

    return null
}