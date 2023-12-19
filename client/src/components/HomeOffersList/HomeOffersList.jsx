//import properties from "../properties"
import { useEffect, useState } from "react"
import OfferCard from "../OfferCard/OfferCard"
import { getAll } from "../../services/propertyService"
import styles from './HomeOffersList.module.css'

export default function HomeOffersList() {
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
            <h1 className={styles["offer-list-title"]}>Последни оферти</h1>
            <div className={styles["best-offers-list"]}>
                {[properties.map((property) => (

                    <OfferCard key={property.id} property={property} editEnabled={false} />

                )
                )]}
            </div>
        </div>
    )
}