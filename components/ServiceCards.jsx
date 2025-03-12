"use client";

import { Card, Col, Row } from "react-bootstrap";

const ServiceCards = ({ services }) => {
  return (
    <Row>
      <Col xs={12} md={6}>
        <div>
          {services.slice(0, 3).map((service, index) => (
            <Card
              className="p-3 border-0 mt-4 homepage-service-card"
              key={index}
              style={{
                backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${service.image})`,
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
          ))}
        </div>
      </Col>
      <Col xs={12} md={6}>
        <div className="mt-md-5 pt-md-5">
          {services.slice(3, 5).map((service, index) => (
            <Card
              className={`p-3 border-0 homepage-service-card ${
                service.title === "Project Management" ? "mt-0" : "mt-4"
              }`}
              key={index}
              style={{
                backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${service.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <Card.Body className="text-white">
                <div className="text-yellow">{service.icon}</div>
                <h4 className="my-4 fs-5 text-yellow">{service.title}</h4>
                <p className="text-gray mt-3">{service.description}</p>
              </Card.Body>
            </Card>
          ))}
        </div>
      </Col>
    </Row>
  );
};

export default ServiceCards;
