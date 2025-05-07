import "./ServicesPage.css";

import Hero from "@/components/Hero";
import CallToAction from "@/components/CallToAction";
import { Container } from "react-bootstrap";
import ServiceCarousel from "@/components/ServiceCarousel";
import ServiceGrid from "@/components/ServiceGrid";

import AOSWrapper from "@/components/AOSWrapper";

export const metadata = {
  title: "PROJXON Services | Expert Business Consulting & Strategy",
  description:
    "Explore PROJXON’s consulting services in strategy, market research, and digital transformation. We provide data-driven solutions for business growth.",
  metadataBase: new URL("https://www.projxon.com/services"),
  openGraph: {
    title: "PROJXON Services | Expert Business Consulting & Strategy",
    description:
      "Explore PROJXON’s consulting services in strategy, market research, and digital transformation. We provide data-driven solutions for business growth.",
    url: "https://www.projxon.com/services",
    siteName: "PROJXON",
    images: [
      {
        url: "https://www.projxon.com/PROJXON.png",
        width: 1200,
        height: 630,
        alt: "PROJXON logo",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PROJXON Services | Expert Business Consulting & Strategy",
    description:
      "Explore PROJXON’s consulting services in strategy, market research, and digital transformation. We provide data-driven solutions for business growth.",
    images: ["https://www.projxon.com/PROJXON.png"],
  },
};


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
