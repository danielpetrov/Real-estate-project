import { Link } from "react-router-dom"

export default function OfferCard({ property, editEnabled }) {
    const {
        location,
        propertyType,
        district,
        price,
        currency,
        area,
        yearOfBuilding,
        description,
        _id,
    } = property

    if (!property) {
        return null
    }

    return (
        <div className="best-offers" >
            <h1 className="offer-title">{propertyType}</h1>
            <ul className="offer-characteristics">
                <li className="right-positioned-specs">{location}, {district}</li>
                <li className="right-positioned-specs">{` Цена: ${price} ${currency === "EUR" ? " €" : " лв."}`}</li>
                <li className="right-positioned-specs">{`Площ: ${area} кв.м.`}</li>
                <li className="right-positioned-specs">{`Година на строителство: ${yearOfBuilding}`}</li>
                <li className="short-offer-description-li">
                    <p className="short-offer-description">{description}</p>
                </li>
                <Link className="link-to-offer" to={`/data/properties/${_id}`} >Виж повече</Link>
                {editEnabled && 
                    <button className="btn-edit-offer">
                        <Link 
                            className="link-to-edit-offer" 
                            to={`/edit/${_id}`}
                        >
                        Редактирай обява
                        </Link>
                    </button> 
                }
                {/* {editEnabled && 
                    <button className="btn-delete-offer">
                        <Link 
                            className="link-to-delete-offer" 
                            to={`delete/${_id}`}
                        >
                        Изтрий обява
                        </Link>
                    </button>
                } */}
            </ul>
            <img className="offer-heading-img" src="https://t4.ftcdn.net/jpg/04/73/25/49/360_F_473254957_bxG9yf4ly7OBO5I0O5KABlN930GwaMQz.jpg" alt="noimg" />
        </div>
    )
}