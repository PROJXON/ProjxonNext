import "./ServicesPage.css";
import Hero from "@/components/Hero";
import CallToAction from "@/components/CallToAction";
import { Container } from "react-bootstrap"
import ServiceGrid from "@/components/ServiceGrid";

const ServicesPage = () => {
  return (
    <>
      {/* Hero Section */}
      <Hero
        title="Our Services"
        subtitle="Built for Growth. Delivered with Precision."
        paragraph="From strategy to execution, every service is designed to move your business forward with clarity, confidence, and measurable impact."
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