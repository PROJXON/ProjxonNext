import { Container, Row, Col } from 'react-bootstrap';
import './PartnershipPage.css';
import Hero from '../../components/Hero';
import CallToAction from '../../components/CallToAction';
import CustomButton from '../../components/CustomButton';
import Image from 'next/image';
import type { Metadata } from 'next';
import { Partnership } from '@/types/interfaces';

export const metadata: Metadata = {
  title: 'Partner with PROJXON | Strategic Collaborations for Growth',
  description: 'Unlock new opportunities with PROJXON. Explore strategic partnerships that drive innovation, efficiency, and business success. Let’s grow together.',
  metadataBase: new URL('https://www.projxon.com/partnership'),
  openGraph: {
    title: 'Partner with PROJXON | Strategic Collaborations for Growth',
    description: 'Unlock new opportunities with PROJXON. Explore strategic partnerships that drive innovation, efficiency, and business success. Let’s grow together.',
    url: 'https://www.projxon.com/partnership',
    siteName: 'PROJXON',
    images: [
      {
        url: '/PROJXON.png',
        width: 1200,
        height: 630,
        alt: 'PROJXON logo',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Partner with PROJXON | Strategic Collaborations for Growth',
    description: 'Unlock new opportunities with PROJXON. Explore strategic partnerships that drive innovation, efficiency, and business success. Let’s grow together.',
    images: ['/PROJXON.png'],
  },
};

const PartnershipPage = () => {
  const partnerships: Partnership[] = [
    {
      title: 'Experience and Expertise',
      text: 'Leverage our extensive experience across various industries to enhance your offerings and drive growth. Our team of experts is equipped to handle diverse challenges and deliver innovative solutions.',
      dataAOSDelay: '100',
    },
    {
      title: 'Sustainable Solutions',
      text: 'Collaborate with us to develop cutting-edge solutions tailored to your needs. Our focus on innovation ensures that we stay ahead of the curve, providing partners with a competitive advantage.',
      dataAOSDelay: '200',
    },
    {
      title: 'Mutual Growth',
      text: 'We believe in building long-term partnerships that foster mutual growth. By working together, we can unlock new opportunities and drive success for both parties.',
      dataAOSDelay: '300',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <Hero
        title="Partner with Us"
        subtitle="Collaborate with Purpose. Grow with Impact."
        paragraph="Join forces with a team that turns bold ideas into real-world results
            through strategic partnerships built on trust, innovation, and measurable value."
        backgroundClass="partner-hero"
      />
      {/* Why Partner with Us Section */}
      <section id="service-partners" className="partner-us sections-container">
        <Container>
          <Row
            className="align-items-center justify-content-between"
            data-aos="fade-right"
            data-aos-once="true"
          >
            <Col xs={12} md={6}>
              <p className="partner-heading-sub-heading gray-opacity">
                At PROJXON, we excel in delivering innovative solutions tailored to
                your business needs. Our team combines expertise, creativity, and cutting-edge
                technology to help your business thrive in today&apos;s competitive market.
                Partner with us for unmatched dedication, seamless collaboration,
                and results-driven strategies.
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
              <Col xs={12} md={6} lg={4} key={index} className="mb-4">
                <div
                  className="value-card h-100 shadow-sm border-0 rounded-4 p-4 d-flex flex-column align-items-start"
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
      <section id="partnership-opprtunities" className=" bg-yellow">
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
                <h3>Looking to expand your impact and deliver greater value to your clients?</h3>
                <p className="partner-heading-sub-heading mb-4 pb-2 fs-5">
                  Partner with PROJXON to help businesses overcome critical challenges and unlock new growth.
                  Together, we can create lasting solutions where they matter most.
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
                  Join our referral ecosystem and collaborate on high-impact projects that push boundaries,
                  fuel innovation, and grow your business along the way
                </p>
                <CustomButton
                  buttonText="Submit A Referral"
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