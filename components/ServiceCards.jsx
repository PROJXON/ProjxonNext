"use client";

import { Card, Col, Row } from "react-bootstrap";

const ServiceCards = ({ services }) => {
  return (
    <Row>
      {services.map((service, index) => (
        <Col xs={12} md={6} key={index} className="mb-4">
          <Card
            className="p-3 border-0 homepage-service-card"
            style={{
              backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${service.image.src})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <Card.Body className="text-white">
              <div className="text-yellow">{service.icon}</div>
              <h3 className="my-4 fs-5 text-yellow">{service.title}</h3>
              <p className="text-gray mt-3">{service.description}</p>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default ServiceCards;
