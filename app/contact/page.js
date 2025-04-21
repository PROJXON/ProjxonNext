import { Container, Row, Col, Card, CardBody } from "react-bootstrap";
import { FaEnvelopeOpenText } from "react-icons/fa";
import "./ContactPage.css";

import Hero from "@/components/Hero";
import InfoForm from "@/components/InfoForm";

import AOSWrapper from "@/components/AOSWrapper";


export const metadata = {
  title: "Contact PROJXON | Get in Touch with Our Experts",
  description: "Have questions or need expert consulting? Contact PROJXON for business strategy, market insights, and growth solutions. Let’s connect and collaborate.",
  metadataBase: new URL("https://www.projxon.com/"),
  openGraph: {
    title: "Contact PROJXON | Get in Touch with Our Experts",
    description: "Have questions or need expert consulting? Contact PROJXON for business strategy, market insights, and growth solutions. Let’s connect and collaborate.",
    url: "https://www.projxon.com/",
    siteName: "PROJXON",
    images: [
      {
        url: "/PROJXON.png",
        width: 1200,
        height: 630,
        alt: "PROJXON logo",
      }
    ],
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact PROJXON | Get in Touch with Our Experts",
    description: "Have questions or need expert consulting? Contact PROJXON for business strategy, market insights, and growth solutions. Let’s connect and collaborate.",
    images: ["/PROJXON.png"]
  }
};


const ContactPage = () => {
  const contactInfoList = [
    {
      icon: <FaEnvelopeOpenText className="text-yellow" />,
      label: "info@projxon.com",
      href: "https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=info@projxon.com",
    },
  ];

  return (
    <div className="contact-page">
      <AOSWrapper />
      <Hero title="Contact Us" backgroundClass="contact-hero" />

      <section className="contact position-relative sections-container">
        <div
          className="contact-bg-holder d-none d-md-block"
          style={{
            backgroundImage: `url('/assets/contact/bg-contact.webp')`,
          }}
        />
        <Container className="position-relative">
          <Row className="justify-content-between">
            <Col lg={7} xxl={5} className="mb-5 mb-lg-0">
              <h2 className="contact-title text-black mb-4 mt-0">
                Ready to Transform Chaos Into Opportunity?
              </h2>
              <p className="contact-sub-heading text-black mb-0">
                Whether you have inquiries about our <strong>services</strong>,
                wish to explore <strong>partnership</strong> opportunities, or
                are ready to embark on a journey of growth and success, our team
                is eager to connect with you.{" "}
                <strong>
                  Let's Transform Chaos Into Opportunity together.
                </strong>
              </p>
              <div className="mt-5 pt-md-4">
                {contactInfoList.map((info, index) => (
                  <Card className={`contact-link mt-4`} key={index}>
                    <CardBody className="d-flex align-items-center">
                      <div className="fs-3 px-2 lh-1">{info.icon}</div>
                      <a
                        className="contact-link-content ms-4"
                        href={info.href || "#!"}
                      >
                        {info.label}
                      </a>
                    </CardBody>
                  </Card>
                ))}
              </div>
            </Col>
            <Col lg={5}>
              <InfoForm />
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default ContactPage;
