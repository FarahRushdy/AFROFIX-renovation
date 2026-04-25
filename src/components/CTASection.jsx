import { useReveal } from '../hooks/useReveal'
import bgImage from '../assets/opera.jpg'

export default function CTASection() {
  const ref = useReveal()
  return (
    <section className="cta-section reveal" ref={ref} style={{ backgroundImage: `url(${bgImage})` }}>
      <div className="cta-overlay" />
      <div className="cta-inner">
        <span className="section-label">[About Us]</span>
        <h2 className="cta-title hero-title">A Legacy Written in Steel and Precision.</h2>
        <p className="cta-body large-body">
          As an expert in the electro-mechanical support field for more than 40 years, we don't only supply but
          we consult with the main engineering houses regarding suitable materials and technical design
          choice that will meet their needs.
        </p>
        <div className="cta-actions">
          <a href="https://afrofix.com/wp-content/uploads/2023/03/AFROFIX-Brochure.pdf" className="btn-glass" target="_blank" rel="noopener noreferrer">View Company Profile</a>
          <a href="https://afrofix.com/wp-content/uploads/2023/06/Reference-list-ver22.8.pdf" className="btn-glass" target="_blank" rel="noopener noreferrer">View Reference List</a>
        </div>
      </div>
    </section>
  )
}
