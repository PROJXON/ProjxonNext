"use client"
import { Container, Row, Col, Card } from "react-bootstrap"
import Image from "next/image"
import { Fragment } from "react"

export default function MilitaryBranches() {
    const branches = [
        {
            name: ["United States", "Army"],
            image: "/assets/careers/military-branches/army.webp"
        },
        {
            name: ["United States", "Air Force"],
            image: "/assets/careers/military-branches/air-force.webp"
        },
        {
            name: ["United States", "Navy"],
            image: "/assets/careers/military-branches/navy.webp"
        },
        {
            name: ["United States", "Marine Corps"],
            image: "/assets/careers/military-branches/marine-corps.webp"
        },
        {
            name: ["United States", "Coast Guard"],
            image: "/assets/careers/military-branches/coast-guard.webp"
        },
        {
            name: ["United States", "Space Force"],
            image: "/assets/careers/military-branches/space-force.webp"
        }
    ]

    return (<section className="positions sections-container bg-yellow">
        <Container>
            <h2 className="sections-heading text-center mb-5">"Veterans First Program</h2>
            <div className="military-branches-grid mt-5">
                {branches.map((branch, i) => (<Card className="section-card" key={i}>
                    <Card.Body>
                        <Image
                            src={branch.image}
                            alt={branch.name}
                            className="img-fluid rounded-circle border-black"
                            width={100}
                            height={100}
                        />
                        <h4 className="mt-2 mb-0 fs-5 text-yellow">
                            {branch.name.map((line, i) => (<Fragment key={i}>
                                {i > 0 && <br />}
                                {line}
                            </Fragment>))}
                        </h4>
                    </Card.Body>
                </Card>))}
            </div>
        </Container>
    </section>)
}