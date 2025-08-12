import { FaEnvelope, FaTwitter, FaInstagram, FaLinkedin, FaGoogle } from 'react-icons/fa';
import { Container, Row, Col } from 'react-bootstrap';
import Link from 'next/link';
import { SocialIcon, FooterLink } from '@/types/interfaces';
import './Footer.css';

const Footer = () => {
  const socialIcons: SocialIcon[] = [
    {
      href: new URL('https://mail.google.com/mail/u/0/?fs=1&tf=cm&to=info@projxon.com'),
      ariaLabel: 'Email',
      icon: FaEnvelope,
      newTab: false,
    },
    {
      href: new URL('https://twitter.com/projxon'),
      ariaLabel: 'Twitter',
      icon: FaTwitter,
      newTab: true,
    },
    {
      href: new URL('https://www.instagram.com/projxon/'),
      ariaLabel: 'Instagram',
      icon: FaInstagram,
      newTab: true,
    },
    {
      href: new URL('https://linkedin.com/company/projxon'),
      ariaLabel: 'LinkedIn',
      icon: FaLinkedin,
      newTab: true,
    },
    {
      href: new URL('https://www.google.com/search?sca_esv=25801ab66565780f&hl=en-US&gl=us&output=search&kgmid=%2Fg%2F11wc96ndr7&q=PROJXON&shndl=30&source=sh%2Fx%2Floc%2Fact%2Fm4%2F3 '),
      ariaLabel: 'LinkedIn',
      icon: FaGoogle,
      newTab: true,
    },
  ];

  const footerLinks: FooterLink[] = [
    {
      label: 'About',
      href: '/about',
      links: [
        { id: 'who-we-are', text: 'Who Are We?' },
        { id: 'our-values', text: 'Our Core Values' },
        { id: 'meet-the-team', text: 'Meet the Team' },
      ],
    },
    {
      label: 'Services',
      href: '/services',
      links: [
        { id: 'services', text: 'Our Services' },
      ],
    },
    {
      label: 'Partnerships',
      href: '/partnerships',
      links: [
        { id: 'service-partners', text: 'Why Projxon' },
        { id: 'partnership-opprtunities', text: 'Partnership Opportunites' },
      ],
    },
    {
      label: 'Careers',
      href: '/careers',
      links: [
        { id: 'apply', text: 'Work With Us' },
        { id: 'consulting-advisory', text: 'Consulting + Advisory' },
        { id: 'clients', text: 'Veterans First Program' },
      ],
    },
    {
      label: 'Internships',
      href: '/internships',
      links: [
        { id: 'mip', text: 'MIP' },
        { id: 'testimonials', text: 'Testimonials' },
        { id: 'blogs', text: 'Blogs' },
      ],
    },
    {
      label: 'Contact',
      href: '/contact',
      links: [
        { id: 'contact-form', text: 'Contact' },
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
                  target={icon.newTab ? '_blank' : undefined}
                  rel={icon.newTab ? 'noopener noreferrer' : undefined}
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
          {footerLinks.map((section, i) => (
            <Col xs={6} md={2} className="mb-3" key={i}>
              <h2 className="footer-label">{section.label}</h2>
              <ul className="list-unstyled">
                {section.links.map((link, j) => (
                  <li key={j}>
                    <Link href={`${section.href}#${link.id}`} className="footer-link">
                      {link.text}
                    </Link>
                  </li>
                ))}
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
    </footer>
  );
};

export default Footer;