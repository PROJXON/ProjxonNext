import { FaEnvelope, FaTwitter, FaLinkedin } from "react-icons/fa";
import { Container, Row, Col } from "react-bootstrap";
import Link from "next/link";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-4 footer">
      <Container>
        <Row>
          <Col>
            <Link
              href="/"
              className="footer-logo"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <h1 className="footer-logo">PROJXON</h1>
            </Link>
          </Col>
          <Col className="text-end">
            <div className="d-flex justify-content-end social-icons">
              <Link
                href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&to=info@projxon.com"
                passHref
              >
                <div className="footer-icon" aria-label="Email">
                  <FaEnvelope size={40} />
                </div>
              </Link>
              <Link
                href="https://twitter.com/projxon"
                passHref
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="footer-icon" aria-label="Twitter">
                  <FaTwitter size={40} />
                </div>
              </Link>
              <Link
                href="https://linkedin.com/company/projxon"
                passHref
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="footer-icon" aria-label="LinkedIn">
                  <FaLinkedin size={40} />
                </div>
              </Link>
            </div>
          </Col>
        </Row>

        <hr className="my-4" />
        <Row>
          {/* Services Column */}
          <Col xs={6} md={2} className="mb-3">
            <h2 className="footer-heading">Services</h2>
            <ul className="list-unstyled">
              <li>
                <Link href="/services" className="footer-link">
                  Marketing + Social
                </Link>
              </li>
              <li>
                <Link href="/services" className="footer-link">
                  E-commerce Solutions
                </Link>
              </li>
              <li>
                <Link href="/services" className="footer-link">
                  Business Optimization
                </Link>
              </li>
              <li>
                <Link href="/services" className="footer-link">
                  Project Management
                </Link>
              </li>
              <li>
                <Link href="/services" className="footer-link">
                  IT Interactions
                </Link>
              </li>
            </ul>
          </Col>

          {/* About Column */}
          <Col xs={6} md={2} className="mb-3">
            <h2 className="footer-heading">About</h2>
            <ul className="list-unstyled">
              <li>
                <Link href="/about" className="footer-link">
                  Vision
                </Link>
              </li>
              <li>
                <Link href="/about" className="footer-link">
                  Mission
                </Link>
              </li>
              <li>
                <Link href="/about" className="footer-link">
                  Core Value
                </Link>
              </li>
              <li>
                <Link href="/about" className="footer-link">
                  Meet the Team
                </Link>
              </li>
              <li>
                <Link href="/about" className="footer-link">
                  Our Journey
                </Link>
              </li>
            </ul>
          </Col>

          {/* Partnerships Column */}
          <Col xs={6} md={2} className="mb-3">
            <h2 className="footer-heading">Partnerships</h2>
            <ul className="list-unstyled">
              <li>
                <Link href="/servicepartners" className="footer-link">
                  Service Partners
                </Link>
              </li>
              <li>
                <Link href="/referralpartners" className="footer-link">
                  Referral Partners
                </Link>
              </li>
            </ul>
          </Col>

          {/* Connect Column */}
          <Col xs={6} md={2} className="mb-3">
            <h2 className="footer-heading">Connect</h2>
            <ul className="list-unstyled">
              <li>
                <Link href="/contact" className="footer-link">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/contact" className="footer-link">
                  Social
                </Link>
              </li>
              <li>
                <Link href="/contact" className="footer-link">
                  Appoint
                </Link>
              </li>
              <li>
                <Link href="/contact" className="footer-link">
                  Inquiries
                </Link>
              </li>
              <li>
                <Link href="/contact" className="footer-link">
                  Address (Google)
                </Link>
              </li>
            </ul>
          </Col>

          {/* Blog & Research Column */}
          <Col xs={6} md={2} className="mb-3">
            <h2 className="footer-heading">Research</h2>
            <ul className="list-unstyled">
              <li>
                <Link href="/research" className="footer-link">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/research" className="footer-link">
                  Events
                </Link>
              </li>
              <li>
                <Link href="/research" className="footer-link">
                  Articles
                </Link>
              </li>
              <li>
                <Link href="/research" className="footer-link">
                  Newsletter
                </Link>
              </li>
            </ul>
          </Col>

          {/* Careers Column */}
          <Col xs={6} md={2} className="mb-3">
            <h2 className="footer-heading">Careers</h2>
            <ul className="list-unstyled">
              <li>
                <Link href="/career" className="footer-link">
                  Join Our Team
                </Link>
              </li>
              <li>
                <Link href="/career" className="footer-link">
                  Internship Program
                </Link>
              </li>
            </ul>
          </Col>
        </Row>

        <Row className="mt-4">
          <Col className="text-center">
            <p>
              &copy; {new Date().getFullYear()} PROJXON. All rights reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
