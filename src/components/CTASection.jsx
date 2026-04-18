import { useReveal } from '../hooks/useReveal'
import bgImage from '../assets/project3.png'

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
          <a href="#profile" className="btn-glass">View Company Profile</a>
          <a href="#references" className="btn-glass">View Reference List</a>
        </div>
      </div>
    </section>
  )
}
