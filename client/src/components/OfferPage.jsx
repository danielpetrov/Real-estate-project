import { getOne } from "../services/propertyService"
import { useState, useEffect } from "react"
import { useParams } from 'react-router-dom'
import OfferDetails from "./OfferDetails"

export default function OfferPage(props) {
    const { offerId } = useParams()
    console.log(offerId)
    const [property, setProperty] = useState({})

    useEffect(() => {
        getOne(offerId)
            .then(result => setProperty({...result}))
    }, [offerId])

    return (
        <div className="offer-page-wrapper">
        <OfferDetails propertyDetails={property} isLoading={false}/>
        </div>
    )
}