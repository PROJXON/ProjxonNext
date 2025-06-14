import "./AboutPage.css"
import { Container, Row, Col } from "react-bootstrap"
import { FaLinkedin, FaGlobe } from "react-icons/fa"
import Image from "next/image"

import AOSWrapper from "@/components/AOSWrapper";
import Hero from "@/components/Hero";
import CustomButton from "@/components/CustomButton";
import CallToAction from "@/components/CallToAction"
import OurValues from "@/components/OurValues"

export const metadata = {
  title: "About PROJXON | The Story Behing Strategy & Innovation",
  description: "Discover PROJXON’s mission, values, and expertise in business consulting. We help companies achieve growth through strategic insights and innovation.",
  metadataBase: new URL("https://www.projxon.com/about"),
  openGraph: {
    title: "About PROJXON | The Story Behing Strategy & Innovation",
    description: "Discover PROJXON’s mission, values, and expertise in business consulting. We help companies achieve growth through strategic insights and innovation.",
    url: "https://www.projxon.com/about",
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
    title: "About PROJXON | The Story Behing Strategy & Innovation",
    description: "Discover PROJXON’s mission, values, and expertise in business consulting. We help companies achieve growth through strategic insights and innovation.",
    images: ["/PROJXON.png"]
  }
};

const AboutPage = () => {
  const consultingLeads = [
    {
      image: "/assets/about/team/phelan.webp",
      name: "Mark Phelan",
      title: "Senior Consultant,",
      specialty: "E-Commerce Solutions",
      socials: [
        {
          icon: FaLinkedin,
          href: "https://www.linkedin.com/in/phelanmarkw",
        },
        {
          icon: FaGlobe,
          href: "https://www.thephelanfocus.com/",
        },
      ],
    },
    {
      image: "/assets/about/team/kathy.webp",
      name: "Kathy Seaton",
      title: "Senior Consultant,",
      specialty: "Non Profit Development",
      socials: [
        {
          icon: FaLinkedin,
          href: "https://www.linkedin.com/in/klseaton",
        },
        {
          icon: FaGlobe,
          href: "https://www.klseatonconsulting.com/",
        },
      ],
    },
    {
      image: "/assets/about/team/melissa.webp",
      name: "Melissa Eboli",
      title: "Senior Consultant,",
      specialty: "Health + Wellness Solutions",
      socials: [
        {
          icon: FaLinkedin,
          href: "https://www.linkedin.com/in/viamelissa",
        },
        {
          icon: FaGlobe,
          href: "https://www.viaskitchen.com/"
        },
      ],
    },
    {
      image: "/assets/about/team/donavon.webp",
      name: "Donavon Roberson",
      title: "Senior Consultant,",
      specialty: "Tech + Software Solutions",
      socials: [
        {
          icon: FaLinkedin,
          href: "https://www.linkedin.com/in/donavonroberson",
        },
        {
          icon: FaGlobe,
          href: "https://medium.com/@thejourneyofthedreamer",
        },
      ],
    }
  ]

  return (
    <div className="about-page">
      <AOSWrapper />
      {/* Hero Section */}
      <Hero
        title="About PROJXON"
        subtitle="Empowering Businesses to Reach Their Full Potential"
        backgroundClass="about-hero"
      />

      {/* Our Mission & Vision Section */}
      <section id="mission-vision" className="mission-vision bg-yellow sections-container">
        <Container>
          <Row className="g-5">
            <Col
              sm={12}
              md={6}
              className="mb-4 p-lg-5"
              data-aos="fade-up"
              data-aos-once="true"
            >
              <section className="w-100">
                <h2 className="fs-1 mb-4 text-uppercase fw-bold">
                  Our Mission
                </h2>
                <p className="fs-5">
                  At PROJXON, our mission is to empower medium-sized businesses
                  to achieve their full potential through tailored solutions,
                  innovative strategies, and expert guidance. We strive to help
                  our clients navigate challenges, optimize operations, and
                  drive sustainable growth.
                </p>
              </section>
            </Col>
            <Col
              sm={12}
              md={6}
              className="mb-4 p-lg-5"
              data-aos="fade-up"
              data-aos-once="true"
            >
              <section className="w-100">
                <h2 className="fs-1 mb-4 text-uppercase fw-bold">Our Vision</h2>
                <p className="fs-5">
                  We envision a world where businesses easily access the
                  expertise and tools they need to thrive in a rapidly changing
                  environment. By offering cutting-edge solutions and
                  unparalleled support, we aim to be the go-to partner for
                  businesses looking to innovate, grow, and succeed.
                </p>
              </section>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Who We Are Section */}
      <section id="who-we-are" className="who-we-are sections-container">
        <Container className="overflow-hidden">
          <Row className="align-items-center g-5">
            <Col md={12} lg={6} data-aos="fade-up" data-aos-once="true">
              <Image
                src="/assets/about/whoarewe.webp"
                alt="who we are"
                width={800}
                height={400}
                className="overflow-hidden rounded-3 object-fit-cover w-100"
              // placeholder="blur"
              />
            </Col>

            <Col
              md={12}
              lg={6}
              data-aos="fade-left"
              data-aos-delay="500"
              data-aos-once="true"
            >
              <h1 className="text-uppercase fw-bolder mb-3">Who Are We?</h1>
              <h2 className="fw-bolder fs-4">
                {" "}
                PROJXON is a leading business consulting firm helping
                medium-sized businesses achieve their full potential.
              </h2>
              <div className="mt-3 who-we-are-description gray-opacity">
                <p className="fs-5">
                  PROJXON offers a wide range of services, including business
                  process optimization, project management, and strategic
                  planning, to help our clients navigate challenges, optimize
                  operations, and drive sustainable growth.
                </p>
                <p className="fs-5 mb-4 pb-2">
                  Our team of experts is dedicated to providing tailored
                  solutions, innovative strategies, and expert guidance to help
                  businesses innovate, grow, and succeed.
                </p>
              </div>
              <div className="about-button">
                <CustomButton
                  buttonText="Get Started"
                  link="/contact"
                  buttonStyle="yellow-button"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Our Values Section */}
      <section id="our-values">
        <OurValues />
      </section>

      {/* Our Team Section */}
      <section id="meet-the-team" className="bg-yellow-team our-team sections-container">
        <Container>
          <Row className="justify-content-center mb-4 mb-md-5">
            <Col lg={6} xl={5} className="text-center">
              <h2 className="sections-heading fw-bold mb-3">Meet Our Team</h2>
              <p className="our-team-sub-heading mb-3">
                Our talented team combines vision, skill, and innovation to
                create exceptional results for our clients.
              </p>
            </Col>
          </Row>

          {/* Consulting Leads Section */}
          <h2 className="fw-bold sections-heading">Consulting Leads</h2>
          <Row className="text-center">
            {consultingLeads.map((member, i) => (
              <Col md={6} lg={3} key={i} className="mb-5 our-team-card-body">
                <div className="our-team-card mt-4 d-flex flex-column h-100">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={400}
                    height={400}
                    className="img-fluid w-100"
                    loading="lazy"
                  // placeholder="blur"
                  />
                  <div className="px-3 py-4 px-xl-4 text-white d-flex flex-column flex-grow-1">
                    <h4 className="mb-2 text-yellow">{member.name}</h4>
                    <h6>{member.title}</h6>
                    <h6>{member.specialty}</h6>
                    <div className="mt-auto">
                      {member.socials.map((link, index) => (
                        <a
                          href={link.href}
                          className="text-yellow social-icons mx-2"
                          key={index}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <link.icon size={20} />
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Company History Section */}
      {/* <Container className="my-5">
                <h2 className="text-center mb-4" data-aos="fade-down">Our Journey</h2>
                <Row className="justify-content-center">
                    <Col md={6} data-aos="fade-up">
                        <h3>Milestones and Achievements</h3>
                        <p>
                            From our humble beginnings, we have achieved numerous milestones, including expanding our client base internationally, developing proprietary solutions, and being recognized as industry leaders in business consulting. Our journey is a testament to our commitment to excellence and continuous improvement.
                        </p>
                    </Col>
                </Row>
            </Container> */}

      {/* Call to Action Section */}
      <CallToAction />
    </div>
  );
};

export default AboutPage;
