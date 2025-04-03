"use client"

import { Container, Row } from "react-bootstrap";
import BlackCard from "@/components/BlackCard";
import {
    FaLightbulb,
    FaBalanceScale,
    FaUsers
} from "react-icons/fa";

export default function OurValues() {
    const values = [
        {
            icon: FaLightbulb,
            title: "Innovation",
            description:
                "We constantly seek out new ideas and approaches to stay ahead of industry trends and provide our clients with cutting-edge solutions.",
        },
        {
            icon: FaBalanceScale,
            title: "Integrity",
            description:
                "We believe in doing business with honesty and transparency, building trust with our clients and partners through ethical practices.",
        },
        {
            icon: FaUsers,
            title: "Collaboration",
            description:
                "We work closely with our clients and partners, fostering a collaborative environment that drives success for everyone involved.",
        },
    ];

    return (<section className="bg-black our-values sections-container">
        <Container className="text-center">
            <h2
                className="fw-bold sections-heading text-yellow"
                data-aos="fade-up"
                data-aos-once="true"
            >
                Our Core Values
            </h2>
            <Row className="my-5 g-5">
                {values.map((value, index) => (
                    <BlackCard key={index} item={value} iconSize={55} isStat={false} />
                ))}
            </Row>
        </Container>
    </section>)
}