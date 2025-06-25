"use client"
import { Row, Col, Container, Carousel, Card } from "react-bootstrap"
import { useState, useEffect } from "react"
import Image from "next/image"
import { InternTestimonial } from "@/types/interfaces";

export default function InternTestimonialsSection() {
    const [index, setIndex] = useState(0);
    const [internTestimonials, setInternTestimonials] = useState<InternTestimonial[]>([]);
    const handleSelect = (selectedIndex: number) => setIndex(selectedIndex);

    useEffect(() => {
        (async () => {
            const result = await fetch("/api/client");
            const data = await result.json();
            console.log(data);
            setInternTestimonials(data);
        })()
    }, []);

    const chunked = []
    for (let i = 0; i < internTestimonials.length; i += 3) {
        chunked.push(internTestimonials.slice(i, i + 3))
    }

    return (<section className="interns-testimonials sections-container bg-yellow">
        <Container>
            <Row className="align-items-center justify-content-between mb-4 mb-md-5">
                <Col xs={12} md={6} lg={5}>
                    <h2 className="interns-testimonials-heading fw-bold mb-0">
                        Hear what previous interns have to say about our program
                    </h2>
                </Col>
                <Col xs={12} md={6} lg={5}>
                    <p className="interns-testimonials-sub-heading mb-0">
                        Gain hands-on experience and invaluable skills to jumpstart your
                        career with our industry-leading internship program
                    </p>
                </Col>
            </Row>
            <Carousel
                activeIndex={index}
                onSelect={handleSelect}
                controls={false}
                indicators={true}
                interval={null}
                className="intern-testimonials-carousel"
            >
                {chunked.map((testimonialGroup, groupIndex) => (
                    <Carousel.Item key={groupIndex}>
                        <Row>
                            {testimonialGroup.map(intern => (
                                <Col xs={12} lg={4} key={intern.id}>
                                    <Card className="border-0 p-4 my-4 section-card">
                                        <Card.Body>
                                            <div className="d-flex align-items-center mb-4">
                                                <div className="me-3">
                                                    <Image
                                                        src={intern.image.toString()}
                                                        alt={intern.name}
                                                        className="img-fluid rounded-circle border"
                                                        width={65}
                                                        height={65}
                                                    />
                                                </div>
                                                <div>
                                                    <h4 className="mb-0 fs-5 text-yellow">{intern.name}</h4>
                                                    <p className="mb-0 small text-gray">
                                                        {intern.title}
                                                    </p>
                                                </div>
                                            </div>
                                            <p className="gray-opacity text-gray">
                                                {intern.quote}
                                            </p>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            ))}
                        </Row>
                    </Carousel.Item>
                ))}
            </Carousel>
        </Container>
    </section>)
}