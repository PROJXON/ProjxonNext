"use client"

import { Row, Col } from "react-bootstrap";
import Image from "next/image";
import { createElement } from "react";

export default function LeadsGroup({ heading, leads }) {
    return (<>
        <h2 className="fw-bold sections-heading">{heading}</h2>
        <Row className="text-center">
            {leads.map((member, i) => (
                <Col md={6} lg={3} key={i} className="mb-5 our-team-card-body">
                    <div className="our-team-card mt-4 d-flex flex-column h-100">
                        <Image
                            src={member.image}
                            alt={member.name}
                            width={400}
                            height={400}
                            className="img-fluid w-100"
                            loading="lazy"
                        // placeholder="blur"
                        />
                        <div className="px-3 py-4 px-xl-4 text-white d-flex flex-column flex-grow-1">
                            <h4 className="mb-2 text-yellow">{member.name}</h4>
                            <h6>{member.title}</h6>
                            <h6>{member.specialty}</h6>
                            <div className="mt-auto">
                                {member.socials.map((link, index) => (
                                    <a
                                        href={link.href}
                                        className="text-yellow social-icons mx-2"
                                        key={index}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        {createElement(link.icon, { size: 20 })}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </Col>
            ))}
        </Row>
    </>)
}