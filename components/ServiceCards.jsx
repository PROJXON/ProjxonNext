"use client";

import { Card, Col } from "react-bootstrap"

const ServiceCards = ({ services, divClasses }) => {
  return (<Col xs={12} md={6}>
    <div className={divClasses || undefined}>
      {services.map((service, index) => (
        <Card
          className={`p-3 border-0 homepage-service-card ${service.title === "Project Management" ? "mt-0" : "mt-4"
            }`}
          key={index}
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${service.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <Card.Body className="text-white">
            <div className="text-yellow">
              <service.icon size={40} />
            </div>
            <h3 className="my-4 fs-5 text-yellow">{service.title}</h3>
            <p className="text-gray mt-3">{service.description}</p>
          </Card.Body>
        </Card>
      ))}
    </div>
  </Col>);
};

export default ServiceCards;
