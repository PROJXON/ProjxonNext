import { FaEnvelope, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Container, Row, Col } from "react-bootstrap"
import Link from "next/link";
import { SocialIcon, FooterLink } from "@/types/interfaces";
import "./Footer.css";

const Footer = () => {
  const socialIcons: SocialIcon[] = [
    {
      href: new URL("https://mail.google.com/mail/u/0/?fs=1&tf=cm&to=info@projxon.com"),
      ariaLabel: "Email",
      icon: FaEnvelope,
      newTab: false
    },
    {
      href: new URL("https://twitter.com/projxon"),
      ariaLabel: "Twitter",
      icon: FaTwitter,
      newTab: true
    },
    {
      href: new URL("https://www.instagram.com/projxon/"),
      ariaLabel: "Instagram",
      icon: FaInstagram,
      newTab: true
    },
    {
      href: new URL("https://linkedin.com/company/projxon"),
      ariaLabel: "LinkedIn",
      icon: FaLinkedin,
      newTab: true
    }
  ]

  //Note: I assume that all of these href values are supposed to be different and go to different pages/subpages, or different sections of the same page (like /services#marketing-social) and the fact that each subsection of the footer gave all of them the same href was just a placeholder. But when copying over the code, I kept the href links exactly how they originally were.
  const footerLinks: FooterLink[] = [
    {
      heading: "About",
      href: "/about",
      links: [
        { id: "who-we-are", text: "Who Are We?" },
        { id: "our-values", text: "Our Core Values" },
        { id: "meet-the-team", text: "Meet the Team" },
      ],
    },
    {
      heading: "Services",
      href: "/services",
      links: [
        { id: "services", text: "Our Services" },
      ],
    },
    {
      heading: "Partnerships",
      href: "/partnerships",
      links: [
        { id: "service-partners", text: "Why Projxon" },
        { id: "partnership-opprtunities", text: "Partnership Opportunites" },
      ],
    },
    {
      heading: "Careers",
      href: "/careers",
      links: [
        { id: "apply", text: "Work With Us" },
        { id: "consulting-advisory", text: "Consulting + Advisory" },
        { id: "clients", text: "Veterans First Program" },
      ],
    },
    {
      heading: "Internships",
      href: "/internships",
      links: [
        { id: "mip", text: "MIP" },
        { id: "testimonials", text: "Testimonials" },
        { id: "blogs", text: "Blogs" },
      ],
    },
    {
      heading: "Contact",
      href: "/contact",
      links: [
        { id: "contact-form", text: "Contact" },
      ],
    },
  ];

  return (
    <footer className="bg-black text-white py-4 footer text-center">
      <Container>
        <Row>
          <Col>
            <Link href="/" className="footer-logo">
              <h1 className="footer-logo">PROJXON</h1>
            </Link>
          </Col>
          <Col className="text-end">
            <div className="d-flex justify-content-end social-icons">
              {socialIcons.map((icon, index) => (
                <Link
                  key={index}
                  href={icon.href.toString()}
                  target={icon.newTab ? "_blank" : undefined}
                  rel={icon.newTab ? "noopener noreferrer" : undefined}
                  passHref
                >
                  <div className="footer-icon" aria-label={icon.ariaLabel}>
                    <icon.icon size={40} />
                  </div>
                </Link>
              ))}
            </div>
          </Col>
        </Row>

        <hr className="my-4" />
        <Row>
          {footerLinks.map((section, i) => (<Col xs={6} md={2} className="mb-3" key={i}>
            <h2 className="footer-heading">{section.heading}</h2>
            <ul className="list-unstyled">
              {section.links.map((link, j) => (<li key={j}>
                <Link href={`${section.href}#${link.id}`} className="footer-link">
                  {link.text}
                </Link>
              </li>))}
            </ul>
          </Col>))}
        </Row>

        <Row className="mt-4">
          <Col className="text-center">
            <p>&copy; {new Date().getFullYear()} PROJXON. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
};

export default Footer;