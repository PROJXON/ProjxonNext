import "./Hero.css";
import { Container } from "react-bootstrap";

const Hero = ({ title, subtitle, backgroundClass }) => {
  return (
    <div
      className={`hero-section bg-black`}
      id={backgroundClass}
      data-aos="fade-in"
    >
      <Container className="text-center hero-content">
        <div data-aos="fade-up">
          <h1 className="hero-title text-uppercase">{title}</h1>
          {subtitle && <p className="hero-subtitle">{subtitle}</p>}
        </div>
      </Container>
    </div>
  );
};

export default Hero;
