//import properties from "../properties"
import { useEffect, useState } from "react"
import OfferCard from "./OfferCard"
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

                    <OfferCard property={property} editEnabled={false}/>

                )
                )]}
            </div>
        </div>

    )
}