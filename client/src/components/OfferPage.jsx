import { getOne } from "../services/propertyService"
import { useState, useEffect } from "react"
import { useParams } from 'react-router-dom'

export default function OfferPage(props) {
    const { offerId } = useParams()
    console.log(offerId)
    const [property, setProperty] = useState({})

    useEffect(() => {
        getOne(offerId)
            .then(result => setProperty({...result}))
    }, [offerId])

    return (
        <div className="offer-wrapper">
            <aside className="photo-container"></aside>
            <main className="offer-details">
                <h1 className="offer-title">{property.propertyType}</h1>
                <ul className="offer-characteristics">
                    <li className="right-positioned-specs">{property.location}, {property.district}</li>
                    <li className="right-positioned-specs">{` Цена: ${property.price} ${property.currency === "EUR" ? " €" : " лв."}`}</li>
                    <li className="right-positioned-specs">{`Площ: ${property.area} кв.м.`}</li>
                    <li className="right-positioned-specs">{`Година на строителство: ${property.yearOfBuilding}`}</li>
                    <li className="offer-description-li">
                        <p className="offer-description">{property.description}</p>
                    </li>
                </ul>
            </main>
        </div>
    )
}