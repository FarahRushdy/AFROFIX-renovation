const missionBody = [
  'Afrofix seeks to provide products and services with the highest standards of quality. We permanently develop our product range to comply with international standards — including the Manufacturers Standardization Society MSS and Deutsches Institut für Normung DIN — meeting our customers\' expectations for durable, standardized products.',
  'As an expert in the electro-mechanical support field for more than 30 years, we don\'t only supply — we consult with the leading engineering houses on suitable materials and technical design choices that best fit their needs.',
]

const visionItems = [
  'Positively affect the Egyptian economy by offering to the local market products that were once exclusively imported.',
  'Seek export opportunities across The Middle East, African, and European markets.',
  'Invest in our employees\' development to help them shape the future direction of their careers.',
]

export default function MissionVisionSection() {
  return (
    <section className="mv-section">
      <div className="mv-inner">

        {/* Mission */}
        <div className="mv-col">
          <span className="section-label">[4] Our Mission</span>
          <h2 className="mv-title hero-title">Global Standards.<br />Local Expertise.</h2>
          <div className="mv-card">
            {missionBody.map((p, i) => (
              <p key={i} className="mv-body">{p}</p>
            ))}
          </div>
        </div>

        <div className="mv-divider" />

        {/* Vision */}
        <div className="mv-col">
          <span className="section-label">[5] Our Vision</span>
          <h2 className="mv-title hero-title">An Engineering Hub<br />in Cairo.</h2>
          <div className="mv-card">
            <p className="mv-body mv-body--lead">As an Egyptian company, our vision is:</p>
            <ul className="mv-list">
              {visionItems.map((item, i) => (
                <li key={i} className="mv-list-item">{item}</li>
              ))}
            </ul>
          </div>
        </div>

      </div>
    </section>
  )
}
