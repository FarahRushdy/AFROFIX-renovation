import AfrofixLogo from '../assets/ytlogo.png'
import { useReveal } from '../hooks/useReveal'

const footerLinks = [
  { label: 'Home', href: '#' },
  { label: 'Solutions', href: '#' },
  { label: 'Projects', href: '#' },
  { label: 'Quality', href: '#' },
  { label: 'Contact Us', href: '#contact' },
]

function MapPinIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0 }}>
      <path d="M9 1.5A5.25 5.25 0 0 1 14.25 6.75C14.25 10.875 9 16.5 9 16.5S3.75 10.875 3.75 6.75A5.25 5.25 0 0 1 9 1.5z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="9" cy="6.75" r="1.5" stroke="currentColor" strokeWidth="1.5"/>
    </svg>
  )
}

function MailIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0 }}>
      <rect x="2" y="4" width="14" height="10" rx="1" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M2 5l7 5.5L16 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  )
}

function PhoneIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0 }}>
      <path d="M3.5 2h3l1.5 3.5-1.75 1.75a11 11 0 0 0 4.5 4.5L12.5 10l3.5 1.5V15a1.5 1.5 0 0 1-1.5 1.5A13.5 13.5 0 0 1 2 3 1.5 1.5 0 0 1 3.5 2z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

function FacebookIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

function LinkedInIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <rect x="2" y="9" width="4" height="12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="4" cy="4" r="2" stroke="currentColor" strokeWidth="1.5"/>
    </svg>
  )
}

function InstagramIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.5"/>
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="currentColor" strokeWidth="1.5"/>
    </svg>
  )
}

export default function Footer() {
  const ref = useReveal()
  return (
    <footer className="footer reveal" ref={ref}>
      <div className="footer-inner">

        {/* Left — logo + description + socials */}
        <div className="footer-brand">
          <div className="footer-logo">
            <img src={AfrofixLogo} alt="Afrofix" />
          </div>
          <p className="footer-description small-body">
            The African company for Trading &amp; Engineering (AFROFIX) is the first manufacturer in Egypt specialized in producing electro-mechanical support systems and parts for industrial, commercial and utility installations.
          </p>
          <div className="footer-socials">
            <a href="#" aria-label="Facebook"><FacebookIcon /></a>
            <a href="#" aria-label="LinkedIn"><LinkedInIcon /></a>
            <a href="#" aria-label="Instagram"><InstagramIcon /></a>
          </div>
        </div>

        {/* Middle — contact info */}
        <div className="footer-contact">
          <p className="footer-col-label">Contact</p>
          <div className="footer-contact-item">
            <MapPinIcon />
            <a href="https://maps.google.com/?q=Plot+No.+132+6th+Industrial+Zone+Extension+6th+October+City+Egypt" target="_blank" rel="noopener noreferrer">
              Plot No. 132 – 6th Industrial Zone Extension 6th October City, Egypt
            </a>
          </div>
          <div className="footer-contact-item">
            <MailIcon />
            <a href="mailto:info@afrofix.com">info@afrofix.com</a>
          </div>
          <div className="footer-contact-item">
            <PhoneIcon />
            <a href="tel:+20127252278">(+2) 0127 2522 278</a>
          </div>
          <div className="footer-contact-item">
            <PhoneIcon />
            <a href="tel:+201001012905">(+2) 0100 1012 905</a>
          </div>
        </div>

        {/* Right — nav links */}
        <nav className="footer-nav">
          <p className="footer-col-label">Navigation</p>
          {footerLinks.map(link => (
            <a key={link.label} href={link.href} className="footer-nav-link">{link.label}</a>
          ))}
        </nav>

      </div>

      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} AFROFIX. All rights reserved.</span>
        <a href="https://atomic-cube.com" target="_blank" rel="noopener noreferrer" className="footer-credit">
          Engineered by Atomic Cube
        </a>
        <span>The African Company for Trading &amp; Engineering</span>
      </div>
    </footer>
  )
}
