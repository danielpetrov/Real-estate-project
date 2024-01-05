import { useContext, useEffect, useState } from "react"
import AuthContext from "../../contexts/authContext"
import { useParams } from "react-router-dom"
import { getMyOffer } from '../../services/collections'
import styles from './EditOfferForm.module.css'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const EditOfferFormKeys = {
    Type: 'type',
    Location: 'location',
    District: 'district',
    Rooms: 'rooms',
    Floor: 'floor',
    Price: 'price',
    Currency: 'currency',
    Area: 'area',
    YearOfBuilding: 'yearOfBuilding',
    Description: 'description',
}

export default function EditOfferForm() {
    const { isAuthenticated, editOfferHandler, token } = useContext(AuthContext)
    const [values, setValues] = useState()
    const { _id } = useParams()

    useEffect(() => {
        if (isAuthenticated) {
            getMyOffer(_id, token)
                .then(result => setValues(result))
        }
    }, [isAuthenticated, setValues, token])

    const onChange = (e) => {
        setValues(state => ({
            ...state,
            [e.target.name]: e.target.value,
        }))
    }

    const onSubmit = (e) => {
        e.preventDefault()
        editOfferHandler(_id, values)
    }

    if (!values) {
        return
    }
    return (
        <>
            <div className={styles["create-new-offer-wrapper"]}>
                <Card className={styles["create-new-offer-card"]}>
                    <h1 className={styles["edit-offer-form-title"]} >Редактирай оферта</h1>
                    <form className={styles["edit-new-offer-form"]} onSubmit={onSubmit} action="">
                        <div className={styles["row"]}>
                            <div className={styles["left-half"]}>
                                <div>
                                    <label htmlFor="type-edit-form">Тип на имота:</label>
                                    <input
                                        className={styles["edit-offer-input"]}
                                        type="text"
                                        id="type-edit-form"
                                        name="type-edit-form"
                                        onChange={onChange}
                                        value={values[EditOfferFormKeys.Type]}
                                    />
                                </div>

                                <div>
                                    <label htmlFor="location-edit-form">Град:</label>
                                    <input
                                        className={styles["edit-offer-input"]}
                                        type="text"
                                        id="location-edit-form"
                                        name="location-edit-form"
                                        onChange={onChange}
                                        value={values[EditOfferFormKeys.Location]}
                                    />
                                </div>


                                <div>
                                    <label htmlFor="district-edit-form">Квартал:</label>
                                    <input
                                        className={styles["edit-offer-input"]}
                                        type="text"
                                        id="district-edit-form"
                                        name="district-edit-form"
                                        onChange={onChange}
                                        value={values[EditOfferFormKeys.District]}
                                    />
                                </div>

                                <div>
                                    <label htmlFor="rooms-edit-form" >Стаи:</label>
                                    <input
                                        className={styles["edit-offer-input"]}
                                        type="number"
                                        id="rooms-edit-form"
                                        name="rooms-edit-form"
                                        onChange={onChange}
                                        value={values[EditOfferFormKeys.Rooms]}
                                    />
                                </div>


                                <div>
                                    <label htmlFor="floor-edit-form">Етаж:</label>
                                    <input
                                        className={styles["edit-offer-input"]}
                                        type="number"
                                        id="floor-edit-form"
                                        name="floor=edit-form"
                                        onChange={onChange}
                                        value={values[EditOfferFormKeys.Floor]}
                                    />
                                </div>
                            </div>

                            <div className={styles["right-half"]}>
                                <div>
                                    <label htmlFor="price-edit-form">Цена:</label>
                                    <input
                                        className={styles["edit-offer-input"]}
                                        type="number"
                                        id="price-edit-form"
                                        name="price-edit-form"
                                        onChange={onChange}
                                        value={values[EditOfferFormKeys.Price]}
                                    />
                                </div>




                                <div>
                                    <label htmlFor="currency-edit-form">Валута:</label>
                                    <input
                                        className={styles["edit-offer-input"]}
                                        type="text"
                                        id="currency-edit-form"
                                        name="currency-edit-form"
                                        onChange={onChange}
                                        value={values[EditOfferFormKeys.Currency]}
                                    />
                                </div>


                                <div>
                                    <label htmlFor="area-edit-form">Площ:</label>
                                    <input
                                        className={styles["edit-offer-input"]}
                                        type="number"
                                        id="area-edit-form"
                                        name="area-edit-form"
                                        onChange={onChange}
                                        value={values[EditOfferFormKeys.Area]}
                                    />
                                </div>


                                <div>
                                    <label htmlFor="yearOfBuilding-edit-form">Година на строителство:</label>
                                    <input
                                        className={styles["edit-offer-input"]}
                                        type="number"
                                        id="yearOfBuilding-edit-form"
                                        name="yearOfBuilding-edit-form"
                                        onChange={onChange}
                                        value={values[EditOfferFormKeys.YearOfBuilding]}
                                    />
                                </div>


                                <div>  <label htmlFor="description-edit-form">Описание:</label>
                                    <textarea
                                        className={styles["edit-offer-input-textarea"]}
                                        type="text"
                                        id="description-edit-form"
                                        name="description-edit-form"
                                        onChange={onChange}
                                        value={values[EditOfferFormKeys.Description]}
                                    />
                                </div>

                            </div>
                        </div>
{/* 
                        <input
                            type="submit" value="Submit"
                        /> */}
                        <Button className={styles["edit-offer-button"]} variant="primary" type="submit" value="Редактирай">Редактирай</Button>
                    </form>
                </Card>

                {/* "property
                Type": "Апартамент",
        "location": "София",
        "district": "Манастирски ливади" ,
        "rooms": 2,
        "floor": 4,
        "price": 200000,
        "currency": "EUR",
        "area": 70,
        "yearOfBuilding": 2008,
        "description": "Двустаен апартамент със страхотна локация, южно изложение и паркомясто. Продава се с обзавеждането, което се вижда на снимките, като има въжможност и да се махне.",
        "id": "c64db398-91cd-487c-b900-86058c0422f8" */}
            </div>
        </>
    )
}