"use client"
import { Container } from "react-bootstrap"
import Image from "next/image"
import CareersPageCarousel from "@/components/CareersPageCarousel"
import { Fragment } from "react"

export default function ClientSection() {
    const clients = [
        {
            name: ["United States", "Army"],
            image: "/assets/careers/clients/army.webp"
        },
        {
            name: ["United States", "Air Force"],
            image: "/assets/careers/clients/air-force.webp"
        },
        {
            name: ["United States", "Navy"],
            image: "/assets/careers/clients/navy.webp"
        },
        {
            name: ["United States", "Marine Corps"],
            image: "/assets/careers/clients/marine-corps.webp"
        },
        {
            name: ["United States", "Coast Guard"],
            image: "/assets/careers/clients/coast-guard.webp"
        },
        {
            name: ["United States", "Space Force"],
            image: "/assets/careers/clients/space-force.webp"
        }
    ]

    return (<section className="positions sections-container clients-section">
        <Container>
            <h2 className="sections-heading text-center mb-5">Clients</h2>
            <CareersPageCarousel
                data={clients}
                itemsPerRow={5}
                cardClasses="my-4"
                renderItem={client => (<>
                    <Image
                        src={client.image}
                        alt={client.name}
                        className="img-fluid rounded-circle border-black"
                        width={100}
                        height={100}
                    />
                    <h4 className="mt-2 mb-0 fs-5 text-gray">
                        {client.name.map((line, i) => (<Fragment key={i}>
                            {i > 0 && <br />}
                            {line}
                        </Fragment>))}
                    </h4>
                </>)}
            />
        </Container>
    </section>)
}