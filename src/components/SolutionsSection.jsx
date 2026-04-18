import { Link } from 'react-router-dom'
import { useReveal } from '../hooks/useReveal'
import firefighting from '../assets/firefighting.png'
import hvac from '../assets/hvac.png'
import plumbing from '../assets/plumbing.png'
import samstrut from '../assets/samstrut.png'
import steelstructure from '../assets/steelstructure.png'
import fixation from '../assets/fixation.png'

const solutions = [
  { title: 'Fire Fighting', image: firefighting },
  { title: 'HVAC Systems', image: hvac },
  { title: 'Plumbing', image: plumbing },
  { title: 'SAM Strut', image: samstrut },
  { title: 'Steel Structure Support', image: steelstructure },
  { title: 'Fixation', image: fixation },
]

export default function SolutionsSection() {
  const ref = useReveal()
  return (
    <section className="solutions-section reveal" ref={ref}>
      <div className="solutions-header">
        <span className="section-label">[2] Our Solutions</span>
      </div>
      <div className="solutions-grid">
        {solutions.map(s => (
          <Link
            key={s.title}
            to={`/solutions?category=${encodeURIComponent(s.title)}`}
            className="solution-card"
            style={{ backgroundImage: `url(${s.image})` }}
          >
            <div className="solution-overlay" />
            <h3 className="solution-title hero-title">{s.title}</h3>
          </Link>
        ))}
      </div>
      <div className="solutions-footer">
        <a href="/solutions" className="btn-glass">View All Solutions</a>
      </div>
    </section>
  )
}
