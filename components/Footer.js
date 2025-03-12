import { FaEnvelope, FaTwitter, FaLinkedin } from "react-icons/fa";
import { Container, Row, Col } from "react-bootstrap";
import "./Footer.css";

import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-4 footer">
      <Container>
        <Row>
          <Col>
            <Link href="/" passHref>
              <a
                className="footer-logo"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <h1>PROJXON</h1>
              </a>
            </Link>
          </Col>
          <Col className="text-end">
            <div className="d-flex justify-content-end social-icons">
              <a
                href="mailto:info@projxon.com"
                className="footer-icon"
                aria-label="Email"
              >
                <FaEnvelope size={40} />
              </a>
              <a
                href="https://twitter.com/projxon"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-icon"
                aria-label="Twitter"
              >
                <FaTwitter size={40} />
              </a>
              <a
                href="https://linkedin.com/company/projxon"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-icon"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={40} />
              </a>
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
                <Link href="/services" passHref>
                  <a className="footer-link">Marketing + Social</a>
                </Link>
              </li>
              <li>
                <Link href="/services" passHref>
                  <a className="footer-link">E-commerce Solutions</a>
                </Link>
              </li>
              <li>
                <Link href="/services" passHref>
                  <a className="footer-link">Business Optimization</a>
                </Link>
              </li>
              <li>
                <Link href="/services" passHref>
                  <a className="footer-link">Project Management</a>
                </Link>
              </li>
              <li>
                <Link href="/services" passHref>
                  <a className="footer-link">IT Interactions</a>
                </Link>
              </li>
            </ul>
          </Col>

          {/* About Column */}
          <Col xs={6} md={2} className="mb-3">
            <h2 className="footer-heading">About</h2>
            <ul className="list-unstyled">
              <li>
                <Link href="/about" passHref>
                  <a className="footer-link">Vision</a>
                </Link>
              </li>
              <li>
                <Link href="/about" passHref>
                  <a className="footer-link">Mission</a>
                </Link>
              </li>
              <li>
                <Link href="/about" passHref>
                  <a className="footer-link">Core Value</a>
                </Link>
              </li>
              <li>
                <Link href="/about" passHref>
                  <a className="footer-link">Meet the Team</a>
                </Link>
              </li>
              <li>
                <Link href="/about" passHref>
                  <a className="footer-link">Our Journey</a>
                </Link>
              </li>
            </ul>
          </Col>

          {/* Partnerships Column */}
          <Col xs={6} md={2} className="mb-3">
            <h2 className="footer-heading">Partnerships</h2>
            <ul className="list-unstyled">
              <li>
                <Link href="/servicepartners" passHref>
                  <a className="footer-link">Service Partners</a>
                </Link>
              </li>
              <li>
                <Link href="/referralpartners" passHref>
                  <a className="footer-link">Referral Partners</a>
                </Link>
              </li>
            </ul>
          </Col>

          {/* Connect Column */}
          <Col xs={6} md={2} className="mb-3">
            <h2 className="footer-heading">Connect</h2>
            <ul className="list-unstyled">
              <li>
                <Link href="/contact" passHref>
                  <a className="footer-link">Contact</a>
                </Link>
              </li>
              <li>
                <Link href="/contact" passHref>
                  <a className="footer-link">Social</a>
                </Link>
              </li>
              <li>
                <Link href="/contact" passHref>
                  <a className="footer-link">Appoint</a>
                </Link>
              </li>
              <li>
                <Link href="/contact" passHref>
                  <a className="footer-link">Inquiries</a>
                </Link>
              </li>
              <li>
                <Link href="/contact" passHref>
                  <a className="footer-link">Address (Google)</a>
                </Link>
              </li>
            </ul>
          </Col>

          {/* Blog & Research Column */}
          <Col xs={6} md={2} className="mb-3">
            <h2 className="footer-heading">Research</h2>
            <ul className="list-unstyled">
              <li>
                <Link href="/research" passHref>
                  <a className="footer-link">Blog</a>
                </Link>
              </li>
              <li>
                <Link href="/research" passHref>
                  <a className="footer-link">Events</a>
                </Link>
              </li>
              <li>
                <Link href="/research" passHref>
                  <a className="footer-link">Articles</a>
                </Link>
              </li>
              <li>
                <Link href="/research" passHref>
                  <a className="footer-link">Newsletter</a>
                </Link>
              </li>
            </ul>
          </Col>

          {/* Careers Column */}
          <Col xs={6} md={2} className="mb-3">
            <h2 className="footer-heading">Careers</h2>
            <ul className="list-unstyled">
              <li>
                <Link href="/career" passHref>
                  <a className="footer-link">Join Our Team</a>
                </Link>
              </li>
              <li>
                <Link href="/career" passHref>
                  <a className="footer-link">Internship Program</a>
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
