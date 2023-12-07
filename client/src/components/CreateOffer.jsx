import useForm from "../hooks/useForm"


const CreateOfferFormKeys = {
    Type: 'type',
    Location: 'location',
    District: 'district',
    Rooms: 'rooms',
    Floor: 'floor',
    Price: 'price',
    Currency: 'currency',
    Area: 'area',
    YearOfBuilding: 'yearsOfBuilding',
    Description: 'description',
}

export default function CreateOffer() {
    const { values, onChange, onSubmit } = useForm({
        [CreateOfferFormKeys.Type]: '',
        [CreateOfferFormKeys.Location]: '',
        [CreateOfferFormKeys.District]: '',
        [CreateOfferFormKeys.Rooms]: '',
        [CreateOfferFormKeys.Floor]: '',
        [CreateOfferFormKeys.Price]: '',
        [CreateOfferFormKeys.Currency]: '',
        [CreateOfferFormKeys.Area]: '',
        [CreateOfferFormKeys.YearOfBuilding]: '',
        [CreateOfferFormKeys.Description]: '',
    })


    return (
        <>
            <h1>NewOffer</h1>
            <div className="add-new-offer-wrapper">

                <form className="add-new-offer-form" onSubmit={onSubmit} action="">
                    <div>
                        <label htmlFor="type">Град:</label>
                        <input
                            type="text"
                            id="type"
                            name="type"
                            onChange={onChange}
                        />
                    </div>

                    <div>
                        <label htmlFor="location">Град:</label>
                        <input
                            type="text"
                            id="location"
                            name="location"
                            onChange={onChange}
                        />
                    </div>


                    <div>
                        <label htmlFor="district">Квартал:</label>
                        <input
                            type="text"
                            id="district"
                            name="district"
                            onChange={onChange}
                        />
                    </div>



                    <div>
                        <label htmlFor="rooms">Стаи:</label>
                        <input
                            type="number"
                            id="rooms"
                            name="rooms"
                            onChange={onChange}
                        />
                    </div>


                    <div>
                        <label htmlFor="floor">Етаж:</label>
                        <input
                            type="number"
                            id="floor"
                            name="floor"
                            onChange={onChange}
                        />
                    </div>


                    <div>
                        <label htmlFor="price">Цена:</label>
                        <input
                            type="number"
                            id="price"
                            name="price"
                            onChange={onChange}
                        />
                    </div>


                    <div>
                        <label htmlFor="currency">Валута:</label>
                        <input
                            type="text"
                            id="currency"
                            name="currency"
                            onChange={onChange}
                        />
                    </div>


                    <div>
                        <label htmlFor="area">Площ:</label>
                        <input
                            type="number"
                            id="area"
                            name="area"
                            onChange={onChange}
                        />
                    </div>


                    <div>
                        <label htmlFor="yearOfBuilding">Година на строителство:</label>
                        <input
                            type="text"
                            id="yearOfBuilding"
                            name="yearOfBuilding"
                            onChange={onChange}
                        />
                    </div>


                    <div>  <label htmlFor="description">Описание:</label>
                        <textarea
                            type="text"
                            id="description"
                            name="description"
                            onChange={onChange}
                        />
                    </div>

                    <input
                        type="submit" value="Submit" />
                </form>

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