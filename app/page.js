import "./HomePage.css";

import { Container, Row, Col, Card } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import CarouselItem from "react-bootstrap/CarouselItem";
import CarouselCaption from "react-bootstrap/CarouselCaption";
import {
  FaQuoteLeft,
  FaMobile,
  FaCogs,
  FaProjectDiagram,
  FaShoppingCart,
  FaLaptopCode,
} from "react-icons/fa";
import { LuTrendingUp, LuUsers, LuLightbulb } from "react-icons/lu";

import HomeHero from "@/components/HomeHero";
import BlogCard from "@/components/BlogCard";
import BlackCard from "@/components/BlackCard";
import CustomButton from "@/components/CustomButton";
import CallToAction from "@/components/CallToAction";

import { fetchBlogs } from "@/services/blogService";
import { fetchClients } from "@/services/clientService";
import defaultClientImage from "@/public/assets/homepage/default-pic.jpg";

import ServiceCards from "@/components/ServiceCards";
import BlackCardsSection from "@/components/BlackCardsSection";
import AOSWrapper from "@/components/AOSWrapper";
import Image from "next/image";

export default async function HomePage() {
  const blogs = await fetchBlogs();
  const clients = await fetchClients();

  const services = [
    {
      image: "/assets/homepage/services-img/market.webp",
      icon: <FaMobile size={40} />,
      title: "Marketing + Social Media",
      description:
        "Amplify your brand's impact with expert marketing and social media strategies.",
    },
    {
      image: "/assets/homepage/services-img/ecom.webp",
      icon: <FaShoppingCart size={40} />,
      title: "E-commerce Solutions",
      description:
        "Transform your online business with tailored e-commerce solutions.",
    },
    {
      image: "/assets/homepage/services-img/business.webp",
      icon: <FaCogs size={40} />,
      title: "Business Process Optimization",
      description: "Streamline your operations and enhance efficiency.",
    },
    {
      image: "/assets/homepage/services-img/manage.webp",
      icon: <FaProjectDiagram size={40} />,
      title: "Project Management",
      description:
        "Ensure timely, budget-friendly project delivery with our expert management services.",
    },
    {
      image: "/assets/homepage/services-img/it.webp",
      icon: <FaLaptopCode size={40} />,
      title: "IT + Tech Integrations",
      description: "Boost your business with our innovative IT solutions.",
    },
  ];

  const reasons = [
    {
      icon: <LuUsers size={64} className="text-yellow" />,
      title: "Expert Team",
      description:
        "Our team consists of industry experts with years of experience.",
      stat: "10",
      statSuffix: "+",
      statDescription: "years combined experience",
    },
    {
      icon: <LuTrendingUp size={64} className="text-yellow" />,
      title: "Proven Results",
      description: "We have a track record of delivering successful projects.",
      stat: "95",
      statSuffix: "%",
      statDescription: "customer satisfaction rate",
    },
    {
      icon: <LuLightbulb size={64} className="text-yellow" />,
      title: "Innovative Solutions",
      description:
        "We leverage the latest tech to provide innovative solutions.",
      stat: "20",
      statSuffix: "+",
      statDescription: "innovative projects delivered",
    },
  ];

  return (
    <>
      <AOSWrapper />
      <HomeHero />

      <section className="introduction bg-yellow">
        <Container>
          <h2 className="mb-5 fw-bold fs-3 text-black mx-auto text-uppercase">
            About
          </h2>
          <p
            data-aos="fade-up"
            data-aos-once="true"
            className="fs-4 text-black"
          >
            PROJXON is a leading Holistic Business Optimization Consulting
            Agency, partnering with high-impact organizations across the Health
            & Wellness, Tech, and Nonprofit sectors. Our customized business
            strategies are designed to tackle chaos, transforming potential
            failures into opportunities for growth and scalable success. Through
            strategic and tailored consulting, we drive growth, enhance
            productivity, and increase market value for our clients.
          </p>
          <hr className="divider" />
          <CustomButton
            buttonText="Learn About Us"
            link="/about"
            buttonStyle="black-button"
            delayTime={0.3}
            isAnimated={true}
          />
        </Container>
      </section>

      <section className="bg-black introduction">
        <Container>
          <h2
            data-aos="fade-up"
            data-aos-once="true"
            className="mb-5 fw-bold text-yellow mx-auto sections-heading"
          >
            Welcome to PROJXON
          </h2>
          <Row className="justify-content-center">
            <Col md={10} lg={8}>
              <div
                className="homepage-video-container rounded-3"
                data-aos="fade-up"
                data-aos-delay="300"
                data-aos-once="true"
              >
                <iframe
                  className="homepage-video-iframe"
                  src="https://www.youtube.com/embed/ad79nYk2keg"
                  allowFullScreen
                  title="Introductory Video"
                ></iframe>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="bg-yellow services text-center">
        <Container className="overflow-hidden">
          <Row className="gy-4 gy-md-5 gy-lg-0 align-items-center">
            <Col md={12} lg={5}>
              <Row>
                <Col xs={12} xl={11} data-aos="fade-up" data-aos-once="true">
                  <h3 className="fs-6 mb-3 mb-xl-4 text-uppercase text-black">
                    Our Services
                  </h3>
                  <h2 className="display-5 mb-3 mb-xl-4 text-black">
                    We are giving you perfect solutions with our proficient
                    services.
                  </h2>
                  <p className="mb-3 mb-xl-4 text-black">
                    Our commitment in helping brands reach their full potential
                    is dynamic and unconventional providing strategic and
                    customized consulting plans that drive growth, enhance
                    productivity, and increase market value.
                  </p>
                  <CustomButton
                    buttonText="See Services"
                    link="/services"
                    buttonStyle="black-button"
                  />
                </Col>
              </Row>
            </Col>
            <Col md={12} lg={7}>
              {/*<ServiceCards services={services} /> */}
              <Row>
                <ServiceCards servicesPortion={services.slice(0, 3)} />
                <ServiceCards
                  servicesPortion={services.slice(3, 5)}
                  divClasses="mt-md-5 pt-md-5"
                />
              </Row>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="bg-black choose-us">
        <Container className="text-center">
          <h2 className="fw-bold sections-heading text-yellow" data-aos="fade-up" data-aos-once="true">
            Why Choose Us?
          </h2>
          <BlackCardsSection reasons={reasons} />
        </Container>
      </section>

      <section className="testimonials bg-yellow carousel-dark slide">
        <Container className="text-center" data-aos="fade-up" data-aos-once="true">
          <h2 className="fw-bold text-black sections-heading">Testimonials</h2>
          <Carousel>
            {clients.map((client, index) => (
              <CarouselItem key={index}>
                <CarouselCaption>
                  <Image
                    className="testimonial-img mb-5"
                    src={client.image || defaultClientImage}
                    alt={client.name}
                    width={100}
                    height={100}
                  // style={{ borderRadius: "50%" }}
                  />
                  <p className="mb-4 fs-5">
                    <FaQuoteLeft className="quote-icon" size={25} />
                    {client.quote}
                  </p>
                  <h3 className="fs-5">{client.name}</h3>
                  <span>{client.title}</span>
                </CarouselCaption>
              </CarouselItem>
            ))}
          </Carousel>
        </Container>
      </section>

      {blogs?.length > 0 && (
        <section className="bg-black">
          <Container className="blogs">
            <h2 className="mb-5 sections-heading text-white">
              Our Latest Blogs{" "}
              <span className="blog-heading-border mt-2"></span>
            </h2>
            <ul className={`list-unstyled row row-cols-1 row-cols-md-2 ${blogs.length === 2 ? "row-cols-lg-2" : "row-cols-lg-3"}`}>
              {blogs.slice(0, 3).map((blog, index) => (
                <BlogCard blog={blog} key={index} blogStyle="dark" />
              ))}
            </ul>
            <div className="d-flex justify-content-center mt-5">
              <CustomButton
                buttonText="See All Blogs"
                link="/research"
                buttonStyle="yellow-button"
              />
            </div>
          </Container>
        </section>
      )}

      <CallToAction />
    </>
  );
}
