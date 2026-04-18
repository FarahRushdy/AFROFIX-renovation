import { useState } from 'react'
import { Link } from 'react-router-dom'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Solutions', href: '/solutions' },
  { label: 'Projects', href: '/projects' },
  { label: 'Quality', href: '/quality' },
]

function PhoneIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3.5 2h3l1.5 3.5-1.75 1.75a11 11 0 0 0 4.5 4.5L12.5 10l3.5 1.5V15a1.5 1.5 0 0 1-1.5 1.5A13.5 13.5 0 0 1 2 3 1.5 1.5 0 0 1 3.5 2z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

function MailIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="2" y="4" width="14" height="10" rx="1" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M2 5l7 5.5L16 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  )
}

function MapPinIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9 1.5A5.25 5.25 0 0 1 14.25 6.75C14.25 10.875 9 16.5 9 16.5S3.75 10.875 3.75 6.75A5.25 5.25 0 0 1 9 1.5z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="9" cy="6.75" r="1.5" stroke="currentColor" strokeWidth="1.5"/>
    </svg>
  )
}

function MenuIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3 12h18M3 6h18M3 18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  )
}

function CloseIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  )
}

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="navbar-wrapper">

      {/* Top info bar */}
      <div className="navbar-topbar">
        <div className="navbar-topbar-inner">
          <div className="navbar-contact-group">
            <a href="tel:+201001012905" className="navbar-contact-item">
              <PhoneIcon />
              (+2) 0100 1012 905
            </a>
            <a href="tel:+20127252278" className="navbar-contact-item">
              <PhoneIcon />
              (+2) 0127 2522 278
            </a>
            <a href="mailto:info@afrofix.com" className="navbar-contact-item">
              <MailIcon />
              info@afrofix.com
            </a>
          </div>
          <div className="navbar-address">
            <MapPinIcon />
            Plot No. 132 – 6th Industrial Zone Extension 6th October City, Egypt
          </div>
        </div>
      </div>

      {/* Main nav */}
      <nav className="navbar-main">
        <div className="navbar-main-inner">

          {/* Logo */}
          <Link to="/" className="navbar-logo">
            <img src="src\assets\Logo OG 2.png" alt="Afrofix icon" />
          </Link>

          {/* Desktop links */}
          <ul className="navbar-links">
            {navLinks.map(link => (
              <li key={link.label}>
                <Link to={link.href} className="navbar-link">{link.label}</Link>
              </li>
            ))}
          </ul>

          {/* Contact button + hamburger */}
          <div className="navbar-actions">
            <Link to="/contact" className="btn-outline navbar-contact-btn">Contact Us</Link>
            <button
              className="navbar-hamburger"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>

        </div>

        {/* Mobile dropdown */}
        {menuOpen && (
          <div className="navbar-mobile-menu">
            {navLinks.map(link => (
              <Link
                key={link.label}
                to={link.href}
                className="navbar-mobile-link"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link to="/contact" className="btn-outline navbar-mobile-contact" onClick={() => setMenuOpen(false)}>
              Contact Us
            </Link>
          </div>
        )}
      </nav>

    </header>
  )
}
