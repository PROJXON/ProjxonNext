"use client"
import { useState } from "react"
import { Carousel, Row, Col, Card } from "react-bootstrap"

export default function CareersPageCarousel({ data, itemsPerRow, cardClasses, renderItem }) {
    const [index, setIndex] = useState(0)
    const handleSelect = selectedIndex => setIndex(selectedIndex)

    const chunked = []
    for (let i = 0; i < data.length; i += itemsPerRow) {
        chunked.push(data.slice(i, i + itemsPerRow))
    }

    const divisibleByTwelve = Math.floor(12 / itemsPerRow) === 12 / itemsPerRow

    return (<Carousel
        activeIndex={index}
        onSelect={handleSelect}
        controls={false}
        indicators={true}
        interval={null}
        className="careers-page-carousel"
    >
        {chunked.map((chunk, i) => <Carousel.Item key={i}>
            <Row
                style={divisibleByTwelve ? undefined : { '--items-per-row': itemsPerRow }}
                className={divisibleByTwelve ? undefined : "w-100"}
            >
                {chunk.map((item, j) => <Col
                    key={j}
                    xs={12}
                    lg={divisibleByTwelve ? 4 : undefined}
                    className={divisibleByTwelve ? undefined : "item-col"}
                >
                    <Card className={`careers-page-card ${cardClasses}`}>
                        <Card.Body>
                            {renderItem(item)}
                        </Card.Body>
                    </Card>
                </Col>)}
            </Row>
        </Carousel.Item>)}
    </Carousel>)
}