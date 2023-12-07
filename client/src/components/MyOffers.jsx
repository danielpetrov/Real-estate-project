import { useState, useEffect } from "react"
import { getMyOffers } from "../services/collections"
import OfferElement from "./OfferElement"
import { Link } from "react-router-dom"

export default function MyOffers() {
    const [myProperties, setMyProperties] = useState([])

    useEffect(() => {
        getMyOffers()
            .then(result => setMyProperties(result))
    }, [])

  

    return(
        <div>
            <h1>Моите обяви</h1>
            <button><Link to='/createoffer'>Добави обява</Link></button>
            <div className="my-offers-list">
                {myProperties && (
                    [myProperties.map((property) => (

                        <OfferElement
                            propertyType={property.propertyType}
                            key={property.id}
                            location={property.location}
                            district={property.district}
                            price={property.price}
                            currency={property.currency}
                            area={property.area}
                            yearOfBuilding={property.yearOfBuilding}
                            description={property.description}
                            id={property.id}
    
                        />
                    )
                    )]
                )} 
            </div>
        </div>
    )
}