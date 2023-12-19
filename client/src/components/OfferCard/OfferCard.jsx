import { useContext } from 'react'
import { Link } from "react-router-dom"
import Card from 'react-bootstrap/Card';
import Button from "react-bootstrap/esm/Button";
import styles from './OfferCard.module.css'
import { deleteOffer } from "../../services/collections"
import AuthContext from "../../contexts/authContext"

export default function OfferCard({ property, editEnabled, fetchOffers }) {
    const { token } = useContext(AuthContext)
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
        // imgUrl,
    } = property

    const onDelete = async () => {
        try{
            await deleteOffer(_id, token) 
            await fetchOffers() 
        } catch (error) {
            console.log(error)
        }
    }

    if (!property) {
        return null
    }

    return (
        <Card border="secondary" className={styles["best-offers"]} >
            <h2 className={styles["offer-title"]}>{propertyType}</h2>
            <ul className={styles["offer-characteristics"]}>
                <li className={styles["right-positioned-specs"]}>{location}, {district}</li>
                <li className={styles["right-positioned-specs"]}>{` Цена: ${price} ${currency === "EUR" ? " €" : " лв."}`}</li>
                <li className={styles["right-positioned-specs"]}>{`Площ: ${area} кв.м.`}</li>
                <li className={styles["right-positioned-specs"]}>{`Година на строителство: ${yearOfBuilding}`}</li>
                <li className={styles["short-offer-description-li"]}>
                    <p className={styles["short-offer-description"]}>{description}</p>
                </li>
                <Link className={styles["link-to-offer"]} to={`${editEnabled ? '/secure' : ''}/properties/${_id}`} >Виж повече</Link>
                {editEnabled && 
                    <Button className={styles["btn-edit-offer"]}>
                        <Link 
                            className={styles["link-to-edit-offer" ]}
                            to={`/edit/${_id}`}
                        >
                        Редактирай обява
                        </Link>
                    </Button> 
                }
                {editEnabled && 
                    <Button onClick={onDelete} className={styles["btn-delete-offer"]}>
                        Изтрий обява
                    </Button>
                }
            </ul>
            <img className={styles["offer-heading-img"]} src="https://t4.ftcdn.net/jpg/04/73/25/49/360_F_473254957_bxG9yf4ly7OBO5I0O5KABlN930GwaMQz.jpg" alt="noimg" />
        </Card>
    )
}