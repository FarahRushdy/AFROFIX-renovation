import SEO from '../components/SEO'
import ULLogo from '../assets/UL-logo.png'
import FMLogo from '../assets/FM-logo.png'
import AfrofixLogo from '../assets/ytlogo.png'
import EngineerPhoto from '../assets/engineer.png'
import TimelineSection from '../components/TimelineSection'
import MissionVisionSection from '../components/MissionVisionSection'
import ReferenceDossierSection from '../components/ReferenceDossierSection'

export default function AboutPage() {
  return (
    <main>
      <SEO
        title="About AFROFIX — Egypt's MEP Support Specialist"
        description="The African Company for Trading & Engineering (AFROFIX) is Egypt's first specialized manufacturer of electro-mechanical support systems for industrial and commercial installations."
        path="/about"
      />
      <section className="about-hero">
        <div className="about-hero-inner">

          {/* Left */}
          <div className="about-hero-left">
            <span className="section-label">[1] Company Profile</span>
            <h1 className="about-hero-title hero-title">
              The African Company for Trading &amp; Engineering.
            </h1>
            <p className="about-body">
              The first manufacturer in Egypt specialized in producing electro-mechanical support
              systems and parts for industrial, commercial, and utility installations. We produce
              complete pipe support systems, beam clamps, brackets, complete mechanical cladding
              fixation systems, concrete inserts, and steel framing system.
            </p>
            <a href="https://afrofix.com/wp-content/uploads/2023/03/AFROFIX-Brochure.pdf" className="btn-glass" target="_blank" rel="noopener noreferrer">View Company Profile</a>
          </div>

          {/* Right */}
          <div className="about-hero-right">

            {/* Top row — tags left, cert logos right */}
            <div className="about-hero-top-row">
              <div className="about-hero-tags">
                <span>Est. 1981</span>
                <span>UL Listed – FM Approved</span>
                <span>MEP Support</span>
                <span>Electro-Mechanical Support System</span>
              </div>
              <div className="about-hero-certs">
                <img src={FMLogo} alt="FM Approved" />
                <img src={ULLogo} alt="UL Listed" />
              </div>
            </div>

            {/* Bottom — full-width AFROFIX wordmark */}
            <img src={AfrofixLogo} alt="AFROFIX" className="about-hero-wordmark" />

          </div>

        </div>
      </section>
      <TimelineSection />
      <section className="leadership-section">
        <div className="leadership-inner">
          <div className="leadership-left">
            <span className="section-label">[3] Our Leadership</span>
            <h2 className="leadership-title hero-title">Steel-Solid Leadership: From Niche to Nationwide</h2>
            <div className="leadership-body">
              <p className="about-body">Eng. Mourad Kelada, the Chairman of The African Company for Trading & Engineering (AFROFIX), received his bachelor's degree in Civil Engineering from Ain-Shams University in 1962. He worked in many multinational organizations, until 1981 when he founded Afrofix.</p>
              <p className="about-body">As a pioneer, he identified the Egyptian market need for electro-mechanical support systems, so he started his business in such a unique and propitious niche.</p>
              <p className="about-body">He was the first in Egypt to introduce the idea of using universal plastic plugs to mount pipe clamps to walls, and also the first to produce the strut channels used in steel framing systems in the Egyptian market. In 1990, due to his efforts, Afrofix became one of the biggest three companies in Egypt that produced cable trays.</p>
            </div>
          </div>
          <div className="leadership-right">
            <img src={EngineerPhoto} alt="Eng. Mourad Kelada" />
          </div>
        </div>
      </section>
      <MissionVisionSection />
      <ReferenceDossierSection />
    </main>
  )
}
