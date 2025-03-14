"use client";

import AnimatedNumber from "../components/AnimatedNumber";
import "./BlackCard.css";
import { Col } from "react-bootstrap";

const BlackCard = ({ item, isStat }) => {
  return (
    <Col
      md={12}
      lg={4}
      className="mb-4 black-card-container"
      data-aos="fade-up"
      data-aos-delay="300"
      data-aos-once="true"
    >
      <div className="d-flex flex-column black-card-body h-100 black-card">
        <div className="mb-4">{item.icon}</div>

        <h3 className="fs-2 mb-3 text-yellow">{item.title}</h3>

        <p className="flex-grow-1 mb-0 black-card-desc text-gray">
          {item.description}
        </p>

        {isStat && (
          <div>
            <span className="fw-bold black-card-stat">
              <AnimatedNumber value={parseInt(item.stat)} />
              {item.statSuffix}
            </span>
            <span className="black-card-stat-desc d-block">
              {item.statDescription}
            </span>
          </div>
        )}
      </div>
    </Col>
  );
};

export default BlackCard;
