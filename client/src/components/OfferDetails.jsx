export default function OfferDetails({ isLoading, propertyDetails }) {
    if (isLoading) {
        <div>Loader</div>
    }
    if (!propertyDetails && !isLoading) {
        return null
    }

    return (
        <div className="offer-wrapper">
            <aside className="photo-container"></aside>
            <main className="offer-details">
                <h1 className="offer-title">{propertyDetails.propertyType}</h1>
                <ul className="offer-characteristics">
                    <li className="right-positioned-specs">{propertyDetails.location}, {propertyDetails.district}</li>
                    <li className="right-positioned-specs">{` Цена: ${propertyDetails.price} ${propertyDetails.currency === "EUR" ? " €" : " лв."}`}</li>
                    <li className="right-positioned-specs">{`Площ: ${propertyDetails.area} кв.м.`}</li>
                    <li className="right-positioned-specs">{`Година на строителство: ${propertyDetails.yearOfBuilding}`}</li>
                    <li className="offer-description-li">
                        <p className="offer-description">{propertyDetails.description}</p>
                    </li>
                </ul>
            </main>
        </div>
    )
}