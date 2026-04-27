import SEO from '../components/SEO'
import ULLogo from '../assets/UL-logo.png'
import FMLogo from '../assets/FM-logo.png'
import BannerImg from '../assets/banner.png'


const processCards = [
  {
    title: 'Raw Material Validation',
    body: 'We dismantle supply chain risk by sourcing prime galvanized steel (DX51D) with complete heat traceability. Mill test certificates are mandatory, ensuring structural integrity before fabrication begins.',
  },
  {
    title: 'Precision Fabrication',
    body: 'Our facility utilizes CNC and robotic hydraulic systems. Components are machined to strictly meet CAD specifications within 0±0.1mm tolerances, ensuring perfect field fit.',
  },
  {
    title: 'Load & Stress Analysis',
    body: 'We conduct randomized in-house tension testing. Every component batch is validated to exceed the load ratings defined by the Manufacturers Standardization Society (MSS).',
  },
  {
    title: 'Surface Coating',
    body: 'Maximum corrosion resistance is critical for utility and industrial installations. We enforce standardized Hot-Dip Galvanization (up to 60-micron thickness) to survive the harshest environments.',
  },
]

const certifications = [
  {
    logo: ULLogo,
    name: 'UL Listed',
    description: 'Underwriters Laboratories listing confirms our fire suppression support components meet the most rigorous North American life-safety standards.',
    link: 'https://afrofix.com/wp-content/uploads/2024/07/download.pdf',
  },
  {
    logo: FMLogo,
    name: 'FM Approved',
    description: 'FM Global Approval is the gold standard in property loss prevention. Our FM Approved products are tested to the world\'s most demanding structural and fire-safety criteria.',
    link: 'https://afrofix.com/wp-content/uploads/2024/07/PR460156coc240709.pdf',
  },
  {
    logo: null,
    name: 'ISO 9001:2015',
    isoText: 'ISO\n9001:2015',
    description: 'Our Quality Management System is certified to ISO 9001:2015, ensuring consistent process control, traceability, and continual improvement across every production stage.',
    link: 'https://afrofix.com/wp-content/uploads/2023/08/ISO-9001-2015-Certificate-Feb-2023.pdf',
  },
]

export default function QualityPage() {
  return (
    <main className="quality-page">
      <SEO
        title="Quality & Certifications — UL Listed, FM Approved, ISO 9001"
        description="AFROFIX holds UL Listing, FM Approval, and ISO 9001:2015 certification ensuring the highest manufacturing standards for MEP pipe support systems."
        path="/quality"
      />

      {/* ── Hero Banner ──────────────────────────────────────── */}
      <section
        className="quality-hero"
        style={{ backgroundImage: `url(${BannerImg})` }}
      >
        <div className="quality-hero-overlay" />
        <div className="quality-hero-content">
          <span className="section-label">[1] Beyond Specification</span>
          <h1 className="hero-title quality-hero-title">
            The Regions' Only Dual-Certified Manufacturer.
          </h1>
          <p className="about-body quality-hero-body">
            Quality in MEP systems is a binary metric: it is either compliant or it is a liability.
            AFROFIX provides the ultimate project safeguard — localized manufacturing that meets
            the world's most rigorous structural and fire-safety audits. We don't just supply support:
            we engineer certainty.
          </p>
        </div>
      </section>

      {/* ── Quality Protocol ─────────────────────────────────── */}
      <section className="quality-protocol">
        <span className="section-label">[2] Quality Protocol</span>
        <div className="quality-grid">
          {processCards.map((card, i) => (
            <div key={i} className="quality-card">
              <h3 className="quality-card-title">{card.title}</h3>
              <p className="quality-card-body">{card.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Certification Vault ──────────────────────────────── */}
      <section className="quality-vault">
        <span className="section-label">[3] Certification Vault</span>
        <h2 className="hero-title quality-vault-title">Global Compliance.</h2>
        <p className="quality-vault-intro">
          In high-stakes infrastructure, compliance is the only metric of success. Our dual UL
          Listed and FM Approved status represents a zero-tolerance approach to structural and
          fire-safety risks. By integrating AFROFIX into your specifications, you are not just
          choosing a component; you are securing a validated chain of custody that meets the
          world's most stringent engineering audits.
        </p>
        <div className="quality-certs-grid">
          {certifications.map((cert, i) => (
            <div key={i} className="quality-cert-card">
              <div className="quality-cert-logo">
                {cert.logo
                  ? <img src={cert.logo} alt={cert.name} />
                  : <div className="quality-cert-iso">ISO<br />9001:2015</div>
                }
              </div>
              <p className="quality-cert-desc">{cert.description}</p>
              <a href={cert.link} className="btn-glass quality-cert-btn" target="_blank" rel="noopener noreferrer">View Certificate</a>
            </div>
          ))}
        </div>
      </section>

    </main>
  )
}
