import { useState, useMemo } from 'react'
import projects, { projectCategories } from '../data/projects.js'

const featured = projects[0]

function ProjectCard({ project }) {
  return (
    <div className="proj-card">
      <div className="proj-card-img">
        <img src={project.image} alt={project.title} />
      </div>
      <div className="proj-card-overlay" />
      <div className="proj-card-info">
        <span className="proj-card-location">{project.location}</span>
        <span className="proj-card-title">{project.title}</span>
      </div>
    </div>
  )
}

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState('All Projects')

  const filtered = useMemo(() =>
    activeCategory === 'All Projects'
      ? projects
      : projects.filter(p => p.category === activeCategory),
    [activeCategory]
  )

  return (
    <main className="proj-page">

      {/* ── Hero ───────────────────────────────────────── */}
      <section
        className="proj-hero"
        style={{ backgroundImage: `url(${featured.image})` }}
      >
        <div className="proj-hero-overlay" />
        <div className="proj-hero-location">{featured.location}</div>
        <div className="proj-hero-bottom">
          <h1 className="proj-hero-title hero-title">{featured.title}</h1>
          <p className="proj-hero-desc">{featured.description}</p>
        </div>
      </section>

      {/* ── Archive ────────────────────────────────────── */}
      <section className="proj-archive">
        <div className="proj-archive-header">
          <span className="section-label">[1] Our Projects Archive</span>
          <p className="proj-archive-intro">
            Managing the complexities of Tier 1 developments requires a supply chain that speaks the language of
            engineering. We are integrated into the region's largest project architectures because we deliver more than
            hardware — we deliver the certified security required to sustain the icons of tomorrow.
          </p>
        </div>

        <div className="proj-tabs">
          {projectCategories.map(cat => (
            <button
              key={cat}
              className={`sol-tab${activeCategory === cat ? ' sol-tab--active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="proj-grid">
          {filtered.map(p => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      </section>

    </main>
  )
}
