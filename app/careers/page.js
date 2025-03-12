import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./CareerPage.css";

import Hero from "@/components/Hero";
import CallToAction from "@/components/CallToAction";
import CustomButton from "@/components/CustomButton";

import AOSWrapper from "@/components/AOSWrapper";
import InternCarousel from "@/components/InternCarousel";
import Image from "next/image";

const CareerPage = () => {
  const internTestimonials = [
    [
      {
        image: "/assets/careers/interns/jordan.webp",
        name: "Jordan Le",
        university: "Azuza Pacific University",
        testimonial:
          "PROJXON helps companies grow, while the internship program helps its interns develop into competent, knowledgable professionals. Throughout this experience, I have become more collaborative, communicative, detail-oriented, and creative.",
      },
      {
        image: "/assets/careers/interns/noemi.webp",
        name: "Noemi Nagy",
        university: "University of California Merced",
        testimonial:
          "Participating in the PROJXON MIP has been a pivotal experience...",
      },
      {
        image: "/assets/careers/interns/gianna.webp",
        name: "Gianna Vita",
        university: "Indiana University Bloomington",
        testimonial:
          "PROJXON has provided me with valuable insights into cross-departmental collaboration...",
      },
    ],
    [
      {
        image: "/assets/careers/interns/arthur.webp",
        name: "Artur Fedrizzi",
        university: "University of California Irvine",
        testimonial:
          "The Momentum Internship Program at PROJXON gave me applicable knowledge, skills, tools...",
      },
    ],
  ];

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
  ];

  return (
    <div>
      <AOSWrapper />
      {/* Hero Section */}
      <Hero title="Join Our Team" backgroundClass="career-hero" />

      <Container className="momentum-intern overflow-hidden sections-container">
        <h2 className="sections-heading text-center mb-5">
          Momentum Internship Program
        </h2>

        <Row className="align-items-center flex-row-reverse g-5">
          <Col sm={12} md={6} data-aos="fade-up">
            <Image
              src="/assets/careers/internship.webp"
              alt="Promotional"
              className="img-fluid rounded-3"
              width={600}
              height={400}
            />
          </Col>

          <Col sm={12} md={6} data-aos="fade-right" data-aos-delay="500">
            <h2>Future-Proof Your Career</h2>
            <p className="my-3">
              <strong>
                At PROJXON, we help young professionals realize their full
                potential
              </strong>{" "}
              while building their personal brand and understanding their value.
              Are you ready to launch your career in strategic consulting and
              digital marketing?
            </p>

            <p className="my-3">
              <strong>Our 90-day Momentum Internship Program</strong> offers
              passionate and innovative individuals the opportunity to work on
              real consulting projects and collaborate with participants from
              across the US in various industries, including{" "}
              <strong>
                Tech, Health + Wellness, E-commerce, Non-Profit, and
                Professional Services.
              </strong>{" "}
              You'll gain invaluable hands-on experience while making a tangible
              impact.
            </p>

            <h3>What We Offer:</h3>
            <ul>
              <li>
                <strong>Professional Development:</strong> Work closely with
                professional coaches to develop skills in Project Management, AI
                innovation and implementation, and achieve your career goals
                with personalized 1:1 coaching.
              </li>
              <li>
                <strong>Autonomy and Impact:</strong> Enjoy the freedom to work
                on projects that deliver direct results, in a remote and
                autonomous role.
              </li>
              <li>
                <strong>Collaborative Environment:</strong> Engage with a
                dynamic team, working individually and collectively on diverse
                projects, ensuring you gain comprehensive experience.
              </li>
            </ul>

            <p className="my-3">
              <strong>Discover</strong> the power of tailored strategies and
              make your mark with PROJXON. As part of our team, you'll
              contribute to strategies that drive sustainable growth for our
              clients. This is your opportunity to forge long-lasting
              partnerships and be part of a team that values growth,
              productivity, and commercialization.
            </p>
          </Col>
        </Row>
      </Container>

      {/* Apply */}
      <section className="apply">
        <Container>
          <Row
            className="align-items-center justify-content-center"
            data-aos="fade-up"
          >
            <Col xs={12} lg={6} className="py-5 bg-black rounded px-5">
              <h1 className="apply-heading sections-heading text-yellow">
                Work with us
              </h1>
              <p className="apply-sub-heading  text-white my-4">
                At Projxon, we are always on the lookout for talented
                individuals who are passionate about innovation and
                collaboration.
              </p>

              <p className="apply-sub-heading  text-white my-4">
                Join our team and contribute to exciting projects that make a
                difference.
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
            <Col xs={12} lg={6}>
              <div className="position-relative mt-4 mt-md-0">
                <Image
                  src="/assets/careers/employee.webp"
                  className="apply-img img-fluid"
                  alt="employee person"
                  width={600}
                  height={400}
                />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Positions */}
      <section className="positions sections-container bg-black ">
        <Container>
          <Row className="justify-content-center mb-5">
            <Col lg={5} className="text-center">
              <h2 className="positions-heading sections-heading text-yellow mb-4">
                Consulting + Adivsory Roles
              </h2>
              <p className="positions-sub-heading text-white mb-4">
                Empowering collaboration, innovation, and expert guidance to
                deliver exceptional client solutions.
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

      {/* Intern Testimonials */}
      <section className="interns-testimonials sections-container bg-yellow">
        <Container>
          <Row className="align-items-center justify-content-between mb-4 mb-md-5">
            <Col xs={12} md={6} lg={5}>
              <h2 className="interns-testimonials-heading fw-bold mb-0">
                Hear what previous interns have to say about our program.
              </h2>
            </Col>
            <Col xs={12} md={6} lg={5}>
              <p className="interns-testimonials-sub-heading mb-0">
                Gain hands-on experience and invaluable skills to jumpstart your
                career with our industry-leading internship program.
              </p>
            </Col>
          </Row>
          <InternCarousel internTestimonials={internTestimonials} />
        </Container>
      </section>

      {/* Call to Action Section */}
      <CallToAction />
    </div>
  );
};

export default CareerPage;
