import { useState, useEffect, useContext } from "react"
import { getMyOffers } from "../services/collections"
import OfferCard from "./OfferCard"
import { Link } from "react-router-dom"
import AuthContext from "../contexts/authContext"

export default function MyOffers() {
    const {isAuthenticated, token} = useContext(AuthContext)
    const [myProperties, setMyProperties] = useState()
    console.log(myProperties)

    useEffect(() => {
        if (isAuthenticated && !myProperties) {
            getMyOffers(token)
            .then(result => setMyProperties(result))
        }
    }, [isAuthenticated, myProperties])

    if (!isAuthenticated) {
        return <div> Login please </div>
    }
    return(
        <div className="my-offers-list-wrapper">
            <h1>Моите обяви</h1>
            <button><Link to='/createoffer'>Добави обява</Link></button>
            <div className="my-offers-list">
                {myProperties && [myProperties.map((property) => (
                    <OfferCard key={property._id} property={property} editEnabled={true} />
                ))]} 
            </div>
        </div>
    )
}