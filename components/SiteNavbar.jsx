"use client"
import { useState } from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import Link from 'next/link'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function SiteNavbar() {
    const [expanded, setExpanded] = useState(false)

    const navLinks = [
        {
            to: "/",
            label: "Home"
        },
        {
            to: "/services",
            label: "Services"
        },
        {
            to: "/about",
            label: "About"
        },
        {
            to: "/partnership",
            label: "Partnership"
        },
        {
            to: "/research",
            label: "Research"
        },
        {
            to: "/careers",
            label: "Careers"
        },
        {
            to: "/contact",
            label: "Contact"
        },
    ]

    return (<div className="w-100 duration-300 bg-navbar">
        <Navbar fixed="top" bg="black" variant="black" expand="lg" expanded={expanded} onToggle={() => setExpanded(!expanded)}>
            <Container className="d-flex justify-content-between py-1">
                <Navbar.Brand>
                    <Link href="/" className="text-light text-decoration-none text-[2rem] tracking-[0.1rem]">
                        PROJXON
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Container className="navbar-container d-flex justify-content-md-start justify-content-lg-end">
                        <Nav className="ml-auto text-uppercase">
                            {navLinks.map((link, index) => (
                                <Nav.Link
                                    className='link-offset-3'
                                    key={index}
                                    as="div"
                                >
                                    <Link
                                        href={link.to}
                                        className="hover:underline text-decoration-none text-white px-[12px] text-[0.95rem] duration-300 tracking-[0.05rem] font-roboto"
                                        onClick={() => setExpanded(false)}
                                    >
                                        {link.label}
                                    </Link>
                                </Nav.Link>
                            ))}
                        </Nav>
                    </Container>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </div>)
}