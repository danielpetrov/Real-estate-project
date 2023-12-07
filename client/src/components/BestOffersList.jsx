//import properties from "../properties"
import { useEffect, useState } from "react"
import OfferElement from "./OfferElement"
import { getAll } from "../services/propertyService"


export default function BestOffersList() {
    const [properties, setProperties] = useState([])

    useEffect(() => {
        getAll()
            .then(result => setProperties(result))
    }, [])

    return (
        <div 
         style={{
             width: 'calc(100vw - 20px)',
             overflow: 'hidden'
         }}
        >
            <h1 className="offer-list-title">Последни оферти</h1>
            <div className="best-offers-list">
                {[properties.map((property) => (

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
                )]}
            </div>
        </div>

    )
}