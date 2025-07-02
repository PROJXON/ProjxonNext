"use client";
import { useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import Link from "next/link";
import "./NavBar.css";
import { usePathname } from 'next/navigation';
import type { NavLink } from "@/types/interfaces";

const navLinks: NavLink[] = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/partnerships", label: "Partnerships" },
  { href: "/careers", label: "Careers" },
  { href: "/internships", label: "Internships" },
  { href: "/contact", label: "Contact" },
];

const NavBar = () => {
  const [expanded, setExpanded] = useState(false);
  const pathname = usePathname();

  const handleToggle = () => setExpanded(!expanded);
  const handleLinkClick = () => setExpanded(false);

  return (
    <div className="w-100">
      <Navbar
        fixed="top"
        bg="black"
        variant="black"
        expand="lg"
        expanded={expanded}
        onToggle={handleToggle}
      >
        <Container className="d-flex justify-content-between py-1">
          <Navbar.Brand as={Link} href="/" className="text-light">
            PROJXON
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" role="presentation">
            <Container className="navbar-container d-flex justify-content-md-start justify-content-lg-end">
              <Nav className="ml-auto text-uppercase">
                {navLinks.map((link, index) => {
                  const currPage =
                    pathname === link.href || (pathname.startsWith(link.href) && link.href !== "/");

                  return (
                    <div key={index} className="link-offset-3">
                      <Link
                        href={link.href}
                        className={`nav-link ${currPage ? "active" : ""}`}
                        onClick={handleLinkClick}
                      >
                        {link.label}
                      </Link>
                    </div>
                  );
                })}
              </Nav>
            </Container>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;