import { useEffect } from "react"
import OfferCard from "../OfferCard/OfferCard"
import styles from './HomeOffersList.module.css'

export default function HomeOffersList({ properties, getProperties }) {
    useEffect(() => {
        getProperties()
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

                    <OfferCard key={property._id} property={property} editEnabled={false} />

                )
                )]}
            </div>
        </div>
    )
}