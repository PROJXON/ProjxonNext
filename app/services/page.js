import "./ServicesPage.css";

import Hero from "@/components/Hero";
import CallToAction from "@/components/CallToAction";
import { Container } from "react-bootstrap"
import ServiceGrid from "@/components/ServiceGrid";

import AOSWrapper from "@/components/AOSWrapper";

const ServicesPage = () => {
  return (
    <>
      <AOSWrapper />
      {/* Hero Section */}
      <Hero
        title="Our Premium Services"
        subtitle="Crafted with Excellence, Delivered with Precision"
        backgroundClass="services-hero"
      />

      <section className="bg-yellow sections-container">
        <Container className="pt-4">
          <ServiceGrid />
        </Container>
      </section>

      {/* Call To Action Section */}
      <CallToAction />
    </>
  );
};

export default ServicesPage;
