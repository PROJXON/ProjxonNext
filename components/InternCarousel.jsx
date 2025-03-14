"use client";

import { useState } from "react";
import { Carousel, Card, Row, Col } from "react-bootstrap";

import Image from "next/image";

const InternCarousel = ({ internTestimonials }) => {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex) => setIndex(selectedIndex);

  return (
    <Carousel
      activeIndex={index}
      onSelect={handleSelect}
      controls={false}
      indicators={true}
      interval={null}
    >
      {internTestimonials.map((testimonialGroup, groupIndex) => (
        <Carousel.Item key={groupIndex}>
          <Row>
            {testimonialGroup.map((intern, i) => (
              <Col xs={12} lg={4} key={i}>
                <Card className="border-0 p-4 mt-4 intern-card">
                  <Card.Body>
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
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default InternCarousel;
