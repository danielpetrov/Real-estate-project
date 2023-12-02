import properties from "../properties"
import OfferElement from "./OfferElement"

export default function BestOffersList() {


    return (
        <>
        <h1 className="offer-list-title">Последни оферти</h1>
        <div className="best-offers-list">
            {[properties.map((property) => (
                <OfferElement
                    propertyType={property.propertyType}
                    key={property.id}
                    location={property.location}
                    district={property.district}
                    price={property.price}
                    currency={property.currency}
                    area={property.area}
                    yearOfBuilding={property.yearOfBuilding}
                    description={property.description}

                />

            )
            )]}
        </div>
        </>

    )
}