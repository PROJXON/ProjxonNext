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
      title="Our Services"
      subtitle={
     <>
      <h3 className="fw-bold mb-2">Built for Growth. Delivered with Precision.</h3>
       <p>
        From strategy to execution, every service is designed to move your business forward with clarity, confidence, and measurable impact
       </p>
    </>
  }
  backgroundClass="services-hero"
/>

    <section id="services" className="bg-black sections-container">
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
