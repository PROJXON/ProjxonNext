"use client";

import React, { useState, useEffect } from "react";
import { Sling as Hamburger } from 'hamburger-react';
import { Navbar, Nav, NavLink, Container } from "react-bootstrap";
import Link from "next/link";
import "./NavBar.css";
import dynamic from "next/dynamic";
import useWindowSize from "@/components/useWindowSize";
import { usePathname } from 'next/navigation'

const BootstrapBundle = dynamic(
  () => import("bootstrap/dist/js/bootstrap.bundle.min"),
  { ssr: false } // Disable SSR for Bootstrap JS
);

const NavBar = () => {
  const [expanded, setExpanded] = useState(false);
  const pathname = usePathname()
  const size = useWindowSize();


  useEffect(() => {
    BootstrapBundle(); // Ensure bootstrap JS is loaded after the component mounts
  }, []);

  const handleToggle = () => setExpanded(!expanded);
  const handleLinkClick = () => setExpanded(false);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/services", label: "Services" },
    { to: "/partnerships", label: "Partnerships" },
    { to: "/careers", label: "Careers" },
    { to: "/internships", label: "Internships" },
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
          <Navbar.Brand as={Link} href="/" className="text-light">
            PROJXON
          </Navbar.Brand>
          <div className="hamburger-react-toggle d-lg-none">
            <Hamburger
              toggled={expanded}
              toggle={setExpanded}
              color="#FFD700"
              size={28}
              rounded
              label="Show menu"
              direction="right"
            />
          </div>
          <Navbar.Collapse id="basic-navbar-nav" className="d-none d-lg-block">
            <Container className="navbar-container d-flex justify-content-md-start justify-content-lg-end">
              <Nav className="ml-auto text-uppercase">
                {navLinks.map((link, index) => {
                  // Check if the current link is the active one
                  const currPage =
                    pathname === link.to || (pathname.startsWith(link.to) && link.to !== "/");

                  return (
                    <NavLink
                      className="link-offset-3"
                      key={index}
                      as="div" // Render as a div since Next.js Link uses an anchor tag
                    >
                      <Link
                        href={link.to}
                        className={`nav-link ${currPage ? "active" : ""}`} // Add the active class based on current route
                        onClick={handleLinkClick}
                      >
                        {link.label}
                      </Link>
                    </NavLink>
                  );
                })}
              </Nav>
            </Container>
          </Navbar.Collapse>
        </Container>
        {expanded && size.width < 992 && (
          <div className="mobile-sidebar-menu">
            {navLinks.map((link, index) => {
              const currPage =
                pathname === link.to || (pathname.startsWith(link.to) && link.to !== "/");
              return (
                <Link
                  key={index}
                  href={link.to}
                  className={`sidebar-link nav-link ${currPage ? "active" : ""}`}
                  onClick={handleLinkClick}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
        )}
      </Navbar>
    </div>
  );
};

export default NavBar;
