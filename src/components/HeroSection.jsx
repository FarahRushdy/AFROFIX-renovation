import ULLogo from '../assets/UL-logo.png'
import FMLogo from '../assets/FM-logo.png'

export default function HeroSection() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">MEP Support Systems for the Region's Most Iconic Landmarks.</h1>
        <p className="hero-subtitle large-body">The African Company For Trading & Engineering manufactures Egyptian, globally-certified Electro-Mechanical MEP support solutions since 1984.</p>
      </div>
      <div className="hero-stamps">
        <img src={ULLogo} alt="UL Certified" />
        <img src={FMLogo} alt="FM Approved" />
      </div>
    </section>
  )
}
