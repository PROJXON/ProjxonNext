import { FaEnvelope, FaTwitter, FaLinkedin } from "react-icons/fa";
import { Container, Row, Col } from "react-bootstrap";
import renderIcon from "@/lib/renderIcon";
import Link from "next/link";
import "./Footer.css";

const Footer = () => {
  const socialIcons = [
    {
      href: "https://mail.google.com/mail/u/0/?fs=1&tf=cm&to=info@projxon.com",
      ariaLabel: "Email",
      icon: FaEnvelope,
      newTab: false
    },
    {
      href: "https://twitter.com/projxon",
      ariaLabel: "Twitter",
      icon: FaTwitter,
      newTab: true
    },
    {
      href: "https://linkedin.com/company/projxon",
      ariaLabel: "LinkedIn",
      icon: FaLinkedin,
      newTab: true
    }
  ]

  //Note: I assume that all of these href values are supposed to be different and go to different pages/subpages, or different sections of the same page (like /services#marketing-social) and the fact that each subsection of the footer gave all of them the same href was just a placeholder. But when copying over the code, I kept the href links exactly how they originally were.
  const footerLinks = [
    {
      heading: "Services",
      links: [
        {
          href: "/services",
          text: "Marketing + Social"
        },
        {
          href: "/services",
          text: "E-commerce Solutions"
        },
        {
          href: "/services",
          text: "Business Optimization"
        },
        {
          href: "/services",
          text: "Project Management"
        },
        {
          href: "/services",
          text: "IT Interactions"
        }
      ]
    },
    {
      heading: "About",
      links: [
        {
          href: "/about",
          text: "Vision"
        },
        {
          href: "/about",
          text: "Mission"
        },
        {
          href: "/about",
          text: "Core Value"
        },
        {
          href: "/about",
          text: "Meet the Team"
        },
        {
          href: "/about",
          text: "Our Journey"
        }
      ]
    },
    {
      heading: "Partnerships",
      links: [
        {
          href: "/servicepartners",
          text: "Service Partners"
        },
        {
          href: "/referralpartners",
          text: "Referral Partners"
        }
      ]
    },
    {
      heading: "Connect",
      links: [
        {
          href: "/contact",
          text: "Contact"
        },
        {
          href: "/contact",
          text: "Social"
        },
        {
          href: "/contact",
          text: "Appoint"
        },
        {
          href: "/contact",
          text: "Inquiries"
        },
        {
          href: "/contact",
          text: "Address (Google)"
        }
      ]
    },
    {
      heading: "Research",
      links: [
        {
          href: "/research",
          text: "Blog"
        },
        {
          href: "/research",
          text: "Events"
        },
        {
          href: "/research",
          text: "Articles"
        },
        {
          href: "/research",
          text: "Newsletter"
        }
      ]
    },
    {
      heading: "Careers",
      links: [
        {
          href: "/career",
          text: "Join Our Team"
        },
        {
          href: "/career",
          text: "Internship Program"
        }
      ]
    }
  ]

  return (<footer className="bg-black text-white py-4 footer text-center">
    <Container>
      <Row>
        <Col>
          <Link
            href="/"
            className="footer-logo"
          >
            <h1 className="footer-logo">PROJXON</h1>
          </Link>
        </Col>
        <Col className="text-end">
          <div className="d-flex justify-content-end social-icons">
            {socialIcons.map((icon, index) => (
              <Link
                key={index}
                href={icon.href}
                target={icon.newTab ? "_blank" : undefined}
                rel={icon.newTab ? "noopener noreferrer" : undefined}
                passHref
              >
                <div
                  className="footer-icon"
                  aria-label={icon.ariaLabel}
                >
                  {renderIcon(icon.icon, 40)}
                </div>
              </Link>
            ))}
          </div>
        </Col>
      </Row>

      <hr className="my-4" />
      <Row>
        {footerLinks.map((section, index) => (
          <Col xs={6} md={2} className="mb-3" key={index}>
            <h2 className="footer-heading">{section.heading}</h2>
            <ul className="list-unstyled">
              {section.links.map((link, index) => (<li key={index}>
                <Link href={link.href} className="footer-link">
                  {link.text}
                </Link>
              </li>))}
            </ul>
          </Col>
        ))}
      </Row>

      <Row className="mt-4">
        <Col className="text-center">
          <p>&copy; {new Date().getFullYear()} PROJXON. All rights reserved.</p>
        </Col>
      </Row>
    </Container>
  </footer>)
};

export default Footer;
