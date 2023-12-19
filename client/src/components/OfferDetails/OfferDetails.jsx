import styles from "./OfferDetails.module.css"

export default function OfferDetails({ isLoading, propertyDetails }) {
    if (isLoading) {
        <div>Loader</div>
    }
    if (!propertyDetails && !isLoading) {
        return null
    }

    return (
        <div className={styles["offer-wrapper"]}>
            <aside className={styles["photo-container"]}></aside>
            <main className={styles["offer-details"]}>
                <h1 className={styles["offer-title"]}>{propertyDetails.propertyType}</h1>
                <ul className={styles["offer-characteristics"]}>
                    <li className={styles["right-positioned-specs"]}>{propertyDetails.location}, {propertyDetails.district}</li>
                    <li className={styles["right-positioned-specs"]}>{` Цена: ${propertyDetails.price} ${propertyDetails.currency === "EUR" ? " €" : " лв."}`}</li>
                    <li className={styles["right-positioned-specs"]}>{`Площ: ${propertyDetails.area} кв.м.`}</li>
                    <li className={styles["right-positioned-specs"]}>{`Година на строителство: ${propertyDetails.yearOfBuilding}`}</li>
                    <li className={styles["offer-description-li"]}>
                        <p className={styles["offer-description"]}>{propertyDetails.description}</p>
                    </li>
                </ul>
            </main>
        </div>
    )
}