import { useReveal } from '../hooks/useReveal'

const logos = Array.from({ length: 6 }, (_, i) => ({
  id: i + 1,
  src: new URL(`../assets/consult${i + 1}.png`, import.meta.url).href,
}))

export default function ConsultantsSection() {
  const ref = useReveal()
  return (
    <section className="consultants-section reveal" ref={ref}>
      <div className="consultants-inner">
        <span className="section-label">[6] Our Consultants List</span>
        <h2 className="consultants-title hero-title">Vetted By The Primary Engineering Houses</h2>
        <div className="consultants-grid">
          {logos.map(logo => (
            <div className="consultant-logo" key={logo.id}>
              <img src={logo.src} alt={`Consultant ${logo.id}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
