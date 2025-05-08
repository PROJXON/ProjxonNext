"use client"

import { useState } from "react"
import { Carousel, Card, Row, Col } from "react-bootstrap"
import Image from "next/image"

export default function ClientsCarousel({ clients, clientsPerRow }) {
    const [index, setIndex] = useState(0)
    const handleSelect = (selectedIndex) => setIndex(selectedIndex)

    const colSize = 12 / clientsPerRow

    const chunked = []
    for (let i = 0; i < clients.length; i += clientsPerRow) {
        chunked.push(clients.slice(i, i + clientsPerRow))
    }

    return (<Carousel
        activeIndex={index}
        onSelect={handleSelect}
        controls={false}
        indicators={true}
        interval={null}
        className="careers-page-carousel"
    >
        {chunked.map((chunk, i) => (<Carousel.Item key={i}>
            <Row style={{ '--clients-per-row': clientsPerRow }} className="w-100">
                {chunk.map((client, j) => (<Col key={j} xs={12} className="client-col">
                    <Card className="careers-page-card my-4">
                        <Card.Body>
                            <Image
                                src={client.image}
                                alt={client.name}
                                className="img-fluid rounded-circle border-black"
                                width={100}
                                height={100}
                            />
                            <h4 className="mt-2 mb-0 fs-5 text-gray">{client.name}</h4>
                        </Card.Body>
                    </Card>
                </Col>))}
            </Row>
        </Carousel.Item>))}
    </Carousel>)
}