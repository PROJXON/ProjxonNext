import { Container, Row, Col } from "react-bootstrap";
import "./CareerPage.css"
import Hero from "@/components/Hero";
import CallToAction from "@/components/CallToAction";
import CustomButton from "@/components/CustomButton"
import AOSWrapper from "@/components/AOSWrapper";
import MilitaryBranches from "@/components/MilitaryBranches"

export const metadata = {
  title: "Careers at PROJXON | Build Your Future in With Us",
  description: "Join PROJXON and be part of a team that drives business innovation. Explore career opportunities in strategy, consulting, and digital transformation.",
  metadataBase: new URL("https://www.projxon.com/careers"),
  openGraph: {
    title: "Careers at PROJXON | Build Your Future in With Us",
    description: "Join PROJXON and be part of a team that drives business innovation. Explore career opportunities in strategy, consulting, and digital transformation.",
    url: "https://www.projxon.com/careers",
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
    title: "Careers at PROJXON | Build Your Future in With Us",
    description: "Join PROJXON and be part of a team that drives business innovation. Explore career opportunities in strategy, consulting, and digital transformation.",
    images: ["/PROJXON.png"]
  }
}

const CareerPage = () => {
  const positions = [
    {
      image: "/assets/careers/consult.webp",
      title: "Consulting Positions",
      description:
        "Join a team that values continuous improvement, collaboration, and exceptional client service. If you're passionate about delivering unique and impactful projects, we want to hear from you.",
      link: "https://app.dover.com/apply/5ccf21fe-8abd-41a1-9901-454fced87372/712e0a00-9144-489e-a759-1b71331cb327/?rs=15190316",
      align: "start",
      dataAOS: "fade-right",
    },
    {
      image: "/assets/careers/advisor.webp",
      title: "Advisory Positions",
      description:
        "Leverage your consulting expertise in a flexible, part-time role, supporting client engagements without the responsibility of managing clients. Share your skills and knowledge with us.",
      link: "https://app.dover.com/apply/5ccf21fe-8abd-41a1-9901-454fced87372/712e0a00-9144-489e-a759-1b71331cb327/?rs=15190316",
      align: "end",
      dataAOS: "fade-left",
    },
  ]

  return (<div>
    <AOSWrapper />
    {/* Hero Section */}
    <Hero
      title="Join Our Team"
      subtitle="Work with Intention. Grow with Impact."
      paragraph="At PROJXON, we don't just hire talent—we invest in potential. Join a team where your expertise drives change, your voice matters, and your work creates real-world results."
      backgroundClass="career-hero"
    />

    {/* Apply */}
    <section id="apply" className="apply bg-yellow">
      <Container>
        <Row
          className="align-items-center justify-content-center"
          data-aos="fade-up"
        >
          <Col xs={12} lg={6} className="py-5 bg-black rounded px-5">
            <h1 className="apply-heading sections-heading text-yellow">
              Work with Intention. Grow with Impact.
            </h1>
            <p className="apply-sub-heading  text-white my-4">
              At Projxon, we are always on the lookout for talented
              individuals who are passionate about innovation and
              collaboration
            </p>

            <p className="apply-sub-heading  text-white my-4">
              Join our team and contribute to exciting projects that make a
              difference
            </p>
            <CustomButton
              buttonText="Apply now"
              link="https://app.dover.com/jobs/projxon"
              buttonStyle="yellow-button"
              delayTime={0}
              isExternal={true}
              isAnimated={false}
            />
          </Col>
        </Row>
      </Container>
    </section>

    {/* Positions */}
    <section id="consulting-advisory" className="positions sections-container bg-black ">
      <Container>
        <Row className="justify-content-center mb-5">
          <Col lg={5} className="text-center">
            <h2 className="positions-heading sections-heading text-yellow mb-4">
              Consulting + Adivsory Roles
            </h2>
            <p className="positions-sub-heading text-white mb-4">
              Empowering collaboration, innovation, and expert guidance to
              deliver exceptional client solutions
            </p>
          </Col>
        </Row>
        <Row>
          {positions.map((position, index) => (
            <Col
              md={6}
              className="mt-5"
              key={index}
              data-aos={position.dataAOS}
            >
              <div
                className={`positions-item p-4 p-lg-5 positions-shape-${position.align}`}
                style={{
                  backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${position.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                {/* <div className="positions-icon mb-4">
                                    </div> */}
                <h4 className="text-yellow fs-2 fw-bold mb-3">
                  {position.title}
                </h4>
                <p className="text-gray fs-5 mb-4">{position.description}</p>
                <CustomButton
                  buttonText="Apply now"
                  link={position.link}
                  buttonStyle="yellow-button"
                  delayTime={0}
                  isExternal={true}
                  isAnimated={false}
                />
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>

    {/* Clients */}
    <section id="clients" className="clients-wrapper">
      <MilitaryBranches />
    </section>

    {/* Call to Action Section */}
    <CallToAction />
  </div>)
};

export default CareerPage;
