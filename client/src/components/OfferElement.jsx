export default function OfferElement({
    propertyType,
    location,
    district,
    price,
    currency,
    area,
    yearOfBuilding,
    description,
}) {
    return (
        <div className="best-offers">
            <h1 className="offer-title">{propertyType}</h1>
            <ul className="offer-characteristics">
                <li className="right-positioned-specs">{location}, {district}</li>
                <li className="right-positioned-specs">{` Цена: ${price} ${currency === "EUR" ? " €" : " лв."}`}</li>
                <li className="right-positioned-specs">{`Площ: ${area} кв.м.`}</li>
                <li className="right-positioned-specs">{`Година на строителство: ${yearOfBuilding}`}</li>
                <li className="short-offer-description-li">
                    <p className="short-offer-description">{description}</p>
                </li>
            </ul>
            <img className="offer-heading-img" src="https://t4.ftcdn.net/jpg/04/73/25/49/360_F_473254957_bxG9yf4ly7OBO5I0O5KABlN930GwaMQz.jpg" alt="noimg" />
        </div>
    )
}