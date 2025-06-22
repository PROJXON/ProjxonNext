"use client";
import "./Hero.css";
import { Container } from "react-bootstrap";
import { motion } from "framer-motion";

const Hero = ({ title, subtitle, paragraph, backgroundClass }) => {
  return (
    <div
      className={`hero-section bg-black`}
      id={backgroundClass}
      data-aos="fade-in"
    >
      <Container className="text-center hero-content">
        <div data-aos="fade-up">
          <h1 className="hero-title text-uppercase">{title}</h1>
          <motion.div
            className="w-25 my-4 homepage-hero-divider"
            style={{ height: "4px" }}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          />
          <div className="hero-subtitle">
            <h2 className="fw-bold mb-2">{subtitle}</h2>
            <p>{paragraph}</p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Hero;
