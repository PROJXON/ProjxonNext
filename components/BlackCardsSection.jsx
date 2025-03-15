"use client";

import { Row } from "react-bootstrap";
import BlackCard from "./BlackCard";

const BlackCardsSection = ({ reasons }) => {
  return (
    <Row className="my-5 g-5">
      {reasons.map((reason, index) => (
        <BlackCard key={index} item={reason} isStat={true} />
      ))}
    </Row>
  );
};

export default BlackCardsSection;
