"use client";

import React, { useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import "./NavBar.css";

import Link from "next/link";

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
          <Navbar.Brand className="text-light">
            <Link href="/" passHref>
              <h1>PROJXON</h1>
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Container className="navbar-container d-flex justify-content-md-start justify-content-lg-end">
              <Nav className="ml-auto text-uppercase">
                {navLinks.map((link, index) => (
                  <Link key={index} href={link.to} passHref>
                    <Nav.Link
                      className="link-offset-3"
                      onClick={handleLinkClick}
                    >
                      {link.label}
                    </Nav.Link>
                  </Link>
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
