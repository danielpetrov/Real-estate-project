//import properties from "../properties"
import { useEffect, useState } from "react"
import OfferCard from "./OfferCard"
import { getAll } from "../services/propertyService"
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

export default function BestOffersList() {
    const [properties, setProperties] = useState([])

    useEffect(() => {
        getAll()
            .then(result => setProperties(result))
    }, [])

    return (
        <div
            style={{
                width: 'calc(100vw - 20px)',
                overflow: 'hidden'
            }}
        >
            <h1 className="offer-list-title">Последни оферти</h1>
            <div className="best-offers-list">
                {[properties.map((property) => (

                    <OfferCard property={property} editEnabled={false} />

                )
                )]}
            </div>

            {/* <Row xs={1} md={2} className="g-4">
                {Array.from({ length: 4 }).map((_, idx) => (
                    <Col key={idx}> */}
                        {/* <Card style={ {width: "450px", height:"280px"}}>
                            <Card.Img style={{width: "180px", height: "130px"}} src="https://t4.ftcdn.net/jpg/04/73/25/49/360_F_473254957_bxG9yf4ly7OBO5I0O5KABlN930GwaMQz.jpg" />
                            <Card.Body>
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                    This is a longer card with supporting text below as a natural
                                    lead-in to additional content. This content is a little bit
                                    longer.
                                </Card.Text>
                            </Card.Body>
                        </Card> */}
                    {/* </Col>
                ))}
            </Row> */}
        </div>

    )
}