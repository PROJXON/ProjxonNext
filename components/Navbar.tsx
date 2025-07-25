'use client';
import { useState, useEffect, useRef } from 'react';
import { Navbar, Nav, NavLink, Container } from 'react-bootstrap';
import Link from 'next/link';
import './NavBar.css';
import { usePathname } from 'next/navigation';
import type { NavLink as NavLinkType } from '@/types/interfaces';
import { Sling as Hamburger } from 'hamburger-react';

const navLinks: NavLinkType[] = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/partnerships', label: 'Partnerships' },
  { href: '/careers', label: 'Careers' },
  { href: '/internships', label: 'Internships' },
  { href: '/contact', label: 'Contact' },
];

const NavBar = () => {
  const [expanded, setExpanded] = useState(false);
  const pathname = usePathname();
  const navRef = useRef<HTMLDivElement>(null);

  const handleToggle = () => setExpanded(!expanded);
  const handleLinkClick = () => setExpanded(false);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setExpanded(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="w-100" ref={navRef}>
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
          <div className="d-lg-none">
            <Hamburger 
              toggled={expanded} 
              toggle={setExpanded} 
              color="#ffd700"
              size={24}
              distance="sm"
              rounded
              label="Show menu"
            />
          </div>
          <Navbar.Collapse id="basic-navbar-nav" role="presentation">
            <Nav className="ms-auto text-uppercase">
              {navLinks.map((link, index) => {
                const currPage =
                  pathname === link.href || (pathname.startsWith(link.href) && link.href !== '/');

                return (
                  <NavLink
                    className="link-offset-3"
                    key={index}
                    as="div" // Render as a div since Next.js Link uses an anchor tag
                  >
                    <Link
                      href={link.href}
                      className={`nav-link ${currPage ? 'active' : ''}`}
                      onClick={handleLinkClick}
                    >
                      {link.label}
                    </Link>
                  </NavLink>
                );
              })}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;