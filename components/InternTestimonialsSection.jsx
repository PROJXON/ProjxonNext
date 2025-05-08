"use client"
import { Row, Col, Container } from "react-bootstrap"
import Image from "next/image"
import CareersPageCarousel from "@/components/CareersPageCarousel"

export default function InternTestimonialsSection() {
    const internTestimonials = [
        {
            image: "/assets/careers/interns/jordan.webp",
            name: "Jordan Le",
            university: "Azuza Pacific University",
            testimonial:
                "PROJXON helps companies grow, while the internship program helps its interns develop into competent, knowledgable professionals. Throughout this experience, I have become more collaborative, communicative, detail-oriented, and creative.",
        },
        {
            image: "/assets/careers/interns/noemi.webp",
            name: "Noemi Nagy",
            university: "University of California Merced",
            testimonial:
                "Participating in the PROJXON MIP has been a pivotal experience...",
        },
        {
            image: "/assets/careers/interns/gianna.webp",
            name: "Gianna Vita",
            university: "Indiana University Bloomington",
            testimonial:
                "PROJXON has provided me with valuable insights into cross-departmental collaboration...",
        },
        {
            image: "/assets/careers/interns/arthur.webp",
            name: "Artur Fedrizzi",
            university: "University of California Irvine",
            testimonial:
                "The Momentum Internship Program at PROJXON gave me applicable knowledge, skills, tools...",
        }
    ]

    return (<section className="interns-testimonials sections-container bg-yellow">
        <Container>
            <Row className="align-items-center justify-content-between mb-4 mb-md-5">
                <Col xs={12} md={6} lg={5}>
                    <h2 className="interns-testimonials-heading fw-bold mb-0">
                        Hear what previous interns have to say about our program.
                    </h2>
                </Col>
                <Col xs={12} md={6} lg={5}>
                    <p className="interns-testimonials-sub-heading mb-0">
                        Gain hands-on experience and invaluable skills to jumpstart your
                        career with our industry-leading internship program.
                    </p>
                </Col>
            </Row>
            <CareersPageCarousel
                data={internTestimonials}
                itemsPerRow={3}
                cardClasses="border-0 p-4 mt-4"
                renderItem={intern => (<>
                    <div className="d-flex align-items-center mb-4">
                        <div className="me-3">
                            <Image
                                src={intern.image}
                                alt={intern.name}
                                className="img-fluid rounded-circle border"
                                width={65}
                                height={65}
                            />
                        </div>
                        <div>
                            <h4 className="mb-0 fs-5 text-yellow">{intern.name}</h4>
                            <p className="mb-0 small text-gray">
                                {intern.university}
                            </p>
                        </div>
                    </div>
                    <p className="gray-opacity text-gray">
                        {intern.testimonial}
                    </p>
                </>)}
            />
        </Container>
    </section>)
}