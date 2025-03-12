import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import "./PartnershipPage.css";

import Hero from "../components/Hero";
import CallToAction from "../components/CallToAction";
import CustomButton from "../components/CustomButton";

import AOSWrapper from "@/components/AOSWrapper";
import Image from "next/image";

const PartnershipPage = () => {
  const partnerships = [
    {
      title: "Expertise and Experience",
      text: "Leverage our extensive experience across various industries to enhance your offerings and drive growth. Our team of experts is equipped to handle diverse challenges and deliver innovative solutions.",
      dataAOSDelay: "100",
    },
    {
      title: "Innovative Solutions",
      text: "Collaborate with us to develop cutting-edge solutions tailored to your needs. Our focus on innovation ensures that we stay ahead of the curve, providing partners with a competitive advantage.",
      dataAOSDelay: "200",
    },
    {
      title: "Mutual Growth",
      text: "We believe in building long-term partnerships that foster mutual growth. By working together, we can unlock new opportunities and drive success for both parties.",
      dataAOSDelay: "300",
    },
  ];

  return (
    <div>
      <AOSWrapper />
      {/* Hero Section */}
      <Hero
        title="Partner with PROJXON"
        subtitle="Collaborate with us to drive success and innovation"
        backgroundClass="partner-hero"
      />

      {/* Why Partner with Us Section */}
      <section className="partner-us sections-container overflow-hidden">
        <Container>
          <Row
            className="align-items-center justify-content-between"
            data-aos="fade-right"
            data-aos-once="true"
          >
            <Col xs={12} md={6}>
              <h2 className="sections-heading partner-heading fw-bold mb-4">
                Why Partner with PROJXON?
              </h2>
              <p className="partner-heading-sub-heading gray-opacity">
                At PROJXON, we excel in delivering innovative solutions tailored
                to your business needs. Our team combines expertise, creativity,
                and cutting-edge technology to help your business thrive in
                today's competitive market. Partner with us for unmatched
                dedication, seamless collaboration, and results-driven
                strategies.
              </p>
            </Col>
            <Col
              xs={12}
              md={5}
              className="position-relative"
              data-aos="fade-left"
              data-aos-delay="200"
              data-aos-once="true"
            >
              <Image
                src="/assets/partnership/partner.webp"
                alt="partner"
                className="img-fluid my-5 my-md-0 rounded-3"
                width={600}
                height={400}
                priority={true}
              />
            </Col>
          </Row>
          <Row className="mt-5">
            {partnerships.map((partner, index) => (
              <Col xs={12} md={6} lg={4} key={index}>
                <div
                  className="p-xl-3 mt-4"
                  data-aos="fade-up"
                  data-aos-delay={partner.dataAOSDelay}
                  data-aos-once="true"
                >
                  <div className="partner-number mb-3">{index + 1}</div>
                  <h3 className="partner-title fs-4 mb-3">{partner.title}</h3>
                  <p className="gray-opacity mb-0">{partner.text}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Partnership Opportunities Section */}
      <section className=" bg-yellow overflow-hidden">
        <section className="partner-opportunity">
          <h1 className="sections-heading fw-bold text-center mb-5 pb-3">
            Partnership Opportunities
          </h1>

          <Container>
            <Row className="align-items-center justify-content-between flex-row-reverse">
              <Col
                xs={12}
                md={6}
                className="position-relative"
                data-aos="fade-left"
                data-aos-once="true"
              >
                <Image
                  src="/assets/partnership/partner-service.webp"
                  alt="Service Partner"
                  width={700}
                  height={450}
                  className="img-fluid my-5 my-md-0 rounded-3 w-100 partner-img"
                />
              </Col>
              <Col
                xs={12}
                md={6}
                className="partner-text"
                data-aos="fade-right"
                data-aos-once="true"
              >
                <h2 className="sections-heading partner-heading fw-bold mb-4 par">
                  Service Partnerships
                </h2>
                <p className="partner-heading-sub-heading mb-4 pb-2 fs-5">
                  Would you like to provide more value to your clients and
                  support them in resolving critical issues standing in the way
                  of their growth?
                </p>

                <CustomButton
                  buttonText="Partner With Us"
                  link="https://share.hsforms.com/1y8K29LT1QRa1VT1u2RoWTArx61e"
                  buttonStyle="black-button"
                  delayTime={0}
                  isExternal={true}
                />
              </Col>
            </Row>
          </Container>
        </section>

        <section className="partner-opportunity referral">
          <Container>
            <Row className="align-items-center justify-content-between">
              <Col
                xs={12}
                md={6}
                className="position-relative"
                data-aos="fade-right"
                data-aos-once="true"
              >
                <Image
                  src="/assets/partnership/client-ref.webp"
                  alt="Client Referral"
                  width={700}
                  height={450}
                  className="img-fluid my-5 my-md-0 rounded-3 w-100 partner-img"
                />
              </Col>
              <Col
                xs={12}
                md={6}
                className="partner-text"
                data-aos="fade-left"
                data-aos-once="true"
              >
                <h2 className="sections-heading partner-heading fw-bold mb-4">
                  Referral Partnerships
                </h2>
                <p className="partner-heading-sub-heading mb-4 pb-2 fs-5">
                  Do you and your team possess the skills to deliver exceptional
                  service, have an interest in working on unique projects, and
                  want to grow your business?
                </p>
                <CustomButton
                  buttonText="Submit Referral"
                  link="https://share.hsforms.com/1bKYf6vDKT9WleJf4zPxwUgrx61e"
                  buttonStyle="black-button"
                  delayTime={0}
                  isExternal={true}
                />
              </Col>
            </Row>
          </Container>
        </section>
      </section>

      {/* Call To Action Section */}
      <CallToAction />
    </div>
  );
};

export default PartnershipPage;
