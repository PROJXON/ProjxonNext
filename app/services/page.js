import "./ServicesPage.css";

import Hero from "@/components/Hero";
import CallToAction from "@/components/CallToAction";
import { Container } from "react-bootstrap";
import ServiceCarousel from "@/components/ServiceCarousel";
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

      {/* <section className='sections-container'>
                <Container>
                <p className='text-center'></p>

                </Container>
                
            </section> */}

      <section className="services-container sections-container">
        <Container className="pt-4">
          <ServiceCarousel />
          <ServiceGrid />
        </Container>
      </section>

      {/* Call To Action Section */}
      <CallToAction />
    </>
  );
};

export default ServicesPage;
