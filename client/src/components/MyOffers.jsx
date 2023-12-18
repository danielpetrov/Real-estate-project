import { useState, useEffect, useContext } from "react"
import { getMyOffers } from "../services/collections"
import OfferCard from "./OfferCard"
import { Link } from "react-router-dom"
import AuthContext from "../contexts/authContext"
import Button from "react-bootstrap/esm/Button"

export default function MyOffers() {
    const {isAuthenticated, token} = useContext(AuthContext)
    const [myProperties, setMyProperties] = useState()
    console.log(myProperties)

    useEffect(() => {
        if (isAuthenticated && !myProperties) {
            getMyOffers(token)
            .then(result => setMyProperties(result))
        }console.log(myProperties)
    }, [isAuthenticated, myProperties])

    if (!isAuthenticated) {
        return <div> Login please </div>
    }
    return(
        <div className="my-offers-list-wrapper">
            <h1>Моите обяви</h1>
            <Button><Link className="add-offer-link" to='/createoffer'>Добави обява</Link></Button>
            <div className="my-offers-list">
                {myProperties && [myProperties.map((property) => (
                    <OfferCard key={property._id} property={property} editEnabled={true} />
                ))]} 
            </div>
        </div>
    )
}