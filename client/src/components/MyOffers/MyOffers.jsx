import { useState, useEffect, useContext } from "react"
import { getMyOffers } from "../../services/collections"
import OfferCard from "../OfferCard/OfferCard"
import { Link } from "react-router-dom"
import AuthContext from "../../contexts/authContext"
import Button from "react-bootstrap/esm/Button"
import styles from './MyOffers.module.css'

export default function MyOffers() {
    const {isAuthenticated, token} = useContext(AuthContext)
    const [myProperties, setMyProperties] = useState()
    console.log(myProperties)

    useEffect(() => {
        // loader
        // error
        if (isAuthenticated && !myProperties) {
            getMyOffers(token)
            .then(result => setMyProperties(result))
        }
    }, [isAuthenticated, myProperties])

    if (!isAuthenticated) {
        return <div> Login please </div>
    }
    return(
        <div className={styles["my-offers-list-wrapper"]}>
            <h1>Моите обяви</h1>
            <Button><Link className={styles["add-offer-link"]} to='/createoffer'>Добави обява</Link></Button>
            <div className={styles["my-offers-list"]}>
                {myProperties && [myProperties.map((property) => (
                    <OfferCard key={property._id} property={property} editEnabled={true} />
                ))]} 
            </div>
        </div>
    )
}