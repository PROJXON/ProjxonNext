"use client";

import React, { useState } from "react";
import { Navbar, Nav, NavLink, Container } from "react-bootstrap";
import Link from "next/link";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./NavBar.css";

const NavBar = () => {
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => setExpanded(!expanded);
  const handleLinkClick = () => setExpanded(false);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/services", label: "Services" },
    { to: "/about", label: "About" },
    { to: "/partnership", label: "Partnership" },
    { to: "/research", label: "Research" },
    { to: "/careers", label: "Careers" },
    { to: "/contact", label: "Contact" },
  ];

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
          <Navbar.Brand as={NavLink} to="/" className="text-light">
            PROJXON
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Container className="navbar-container d-flex justify-content-md-start justify-content-lg-end">
              <Nav className="ml-auto text-uppercase">
                {navLinks.map((link, index) => (
                  <NavLink
                    className="link-offset-3"
                    key={index}
                    as="div" // Render as a div since Next.js Link uses an anchor tag
                  >
                    <Link
                      href={link.to}
                      className="text-light"
                      onClick={handleLinkClick}
                    >
                      {link.label}
                    </Link>
                  </NavLink>
                ))}
              </Nav>
            </Container>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
