"use client";

import { motion } from "framer-motion";
import CustomButton from "@/components/CustomButton";
import { Container } from "react-bootstrap";

const HomeHero = () => {
  return (
    <div className="homepage-hero-section">
      <Container className="text-center text-white homepage-hero-content d-flex flex-column align-items-center">
        <motion.h1
          className="homepage-hero-title"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Turning Chaos Into Opportunity
        </motion.h1>

        <motion.div
          className="w-25 my-4 homepage-hero-divider"
          style={{ height: "4px" }}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        />

        <motion.h2
          className="homepage-hero-subtitle mt-1"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          Empowering medium-sized businesses to achieve their full potential
        </motion.h2>

        <CustomButton
          buttonText="Get Started"
          link="/contact"
          buttonStyle="mt-4 yellow-button"
          delayTime={0.7}
          isAnimated={true}
        />
      </Container>
    </div>
  );
};

export default HomeHero;
