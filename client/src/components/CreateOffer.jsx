import useForm from "../hooks/useForm"
import { useContext } from "react"
import AuthContext from "../contexts/authContext"
import Button from "react-bootstrap/esm/Button"
import Card from "react-bootstrap/Card"
import locations from '../locations'
import { onlyUnique } from "../utils"

const CreateOfferFormKeys = {
    Type: 'type',
    City: 'city',
    District: 'district',
    Rooms: 'rooms',
    Floor: 'floor',
    Price: 'price',
    Currency: 'currency',
    Area: 'area',
    YearOfBuilding: 'yearOfBuilding',
    Description: 'description',
}

export default function CreateOffer() {
    const { addNewOfferHandler } = useContext(AuthContext)
    const { values, onChange, onSubmit } = useForm(addNewOfferHandler, {
        [CreateOfferFormKeys.Type]: '',
        [CreateOfferFormKeys.City]: '',
        [CreateOfferFormKeys.District]: '',
        [CreateOfferFormKeys.Rooms]: '',
        [CreateOfferFormKeys.Floor]: '',
        [CreateOfferFormKeys.Price]: '',
        [CreateOfferFormKeys.Currency]: '',
        [CreateOfferFormKeys.Area]: '',
        [CreateOfferFormKeys.YearOfBuilding]: '',
        [CreateOfferFormKeys.Description]: '',
    })

    console.log(values, values[CreateOfferFormKeys.City], locations.filter(location => location.City === values[CreateOfferFormKeys.City]))
    return (
        <div className="create-offer-page">
            <h1>NewOffer</h1>
            <Card className="add-new-offer-wrapper">

                <form className="add-new-offer-form" onSubmit={onSubmit} action="">
                    <div>
                        <label htmlFor="type">Тип на имота:</label>
                        <select id="type" name="type">
                            <option value="Apartment">Апартамент</option>
                            <option value="House">Къща</option>
                            <option value="plot">Парцел</option>
                        </select>
                    </div>

                    <div>
                        <label htmlFor="city">Град:</label>
                        <select id="city" name="city" required onChange={onChange}>
                            <option value={null} selected hidden>Град</option>
                            {locations.map((location) => (location.City)).filter(onlyUnique).map(city =>
                                <option key={city} value={city}>{city}</option>)}

                        </select>
                    </div>


                    <div>
                        <label htmlFor="district">Квартал:</label>
                        <select id="district" name="district" disabled={!values[CreateOfferFormKeys.City]}>
                            <option value={null} selected hidden>Квартал</option>
                            {locations.filter(location => location.City === values[CreateOfferFormKeys.City]).map((location) => (location.District)).map(district =>
                                <option key={district} value={district}>{district}</option>)}

                        </select>
                    </div>


                    <div>
                        <label htmlFor="rooms" >Стаи:</label>
                        <input
                            required
                            type="number"
                            id="rooms"
                            name="rooms"
                            onChange={onChange}
                            value={values[CreateOfferFormKeys.Rooms]}
                            min={1}
                        />
                    </div>


                    <div>
                        <label htmlFor="floor">Етаж:</label>
                        <input
                            required
                            type="number"
                            id="floor"
                            name="floor"
                            onChange={onChange}
                            value={values[CreateOfferFormKeys.Floor]}
                            min={-3}
                            max={100}
                        />
                    </div>


                    <div>
                        <label htmlFor="price">Цена:</label>
                        <input
                            required
                            type="number"
                            id="price"
                            name="price"
                            onChange={onChange}
                            value={values[CreateOfferFormKeys.Price]}
                            min={0}
                        />
                    </div>


                    <div>
                        <label htmlFor="currency">Валута:</label>
                        <input
                            required
                            type="text"
                            id="currency"
                            name="currency"
                            onChange={onChange}
                            value={values[CreateOfferFormKeys.Currency]}
                        />
                    </div>


                    <div>
                        <label htmlFor="area">Площ:</label>
                        <input
                            required
                            type="number"
                            id="area"
                            name="area"
                            onChange={onChange}
                            value={values[CreateOfferFormKeys.Area]}
                            min={1}
                        />
                    </div>


                    <div>
                        <label htmlFor="yearOfBuilding">Година на строителство:</label>
                        <input
                            required
                            type="number"
                            id="yearOfBuilding"
                            name="yearOfBuilding"
                            onChange={onChange}
                            value={values[CreateOfferFormKeys.YearOfBuilding]}
                            min={1900}
                            max={2030}
                        />
                    </div>


                    <div>  <label htmlFor="description">Описание:</label>
                        <textarea
                            required
                            type="text"
                            id="description"
                            name="description"
                            onChange={onChange}
                            value={values[CreateOfferFormKeys.Description]}
                            minLength={100}
                            maxLength={1200}
                        />
                    </div>


                    <Button
                        type="submit" value="Submit">Създай обява</Button>
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

    )
}