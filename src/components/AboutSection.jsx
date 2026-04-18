import ULLogo from '../assets/UL-logo.png'
import FMLogo from '../assets/FM-logo.png'
import { useReveal } from '../hooks/useReveal'

export default function AboutSection() {
  const ref = useReveal()
  return (
    <section className="about-section reveal" ref={ref}>
      <div className="about-inner">

        <div className="about-left">
          <span className="section-label">[1] About Afrofix</span>
          <h2 className="about-title hero-title">The MENA Region's Only UL-FM Certified Manufacturer</h2>
          <div className="about-logos-mobile">
            <img src={ULLogo} alt="UL Listed" />
            <img src={FMLogo} alt="FM Approved" />
          </div>
          <p className="about-body">
            AFROFIX is considered one of the pioneers' Egyptian manufacturers of certified products by the Underwriter's Laboratories and FM approvals.
          </p>
          <p className="about-body">
            AFROFIX is MEP Support Systems Manufacturer of the MENA region's most ambitious projects. We provide the precision-engineered support systems that hold together power plants, skyscrapers, and water treatment facilities.
          </p>
          <a href="#certificates" className="btn-glass about-cta">View Certificates</a>
        </div>

        <div className="about-right">
          <img src={ULLogo} alt="UL Listed" />
          <img src={FMLogo} alt="FM Approved" />
        </div>

      </div>
    </section>
  )
}
