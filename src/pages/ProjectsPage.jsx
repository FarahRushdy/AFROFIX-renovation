import { useState, useMemo, useRef, useEffect } from 'react'
import projects, { projectCategories } from '../data/projects.js'

function ProjectCard({ project, onClick }) {
  return (
    <button className="proj-card" onClick={() => onClick(project)}>
      <div className="proj-card-img">
        <img src={project.image} alt={project.title} />
      </div>
      <div className="proj-card-overlay" />
      <div className="proj-card-info">
        <span className="proj-card-location">{project.location}</span>
        <span className="proj-card-title">{project.title}</span>
      </div>
    </button>
  )
}

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState('All Projects')
  const [featuredIndex, setFeaturedIndex] = useState(0)
  const [featured, setFeatured] = useState(projects[0])
  const heroRef = useRef(null)
  const autoRef = useRef(null)

  const filtered = useMemo(() =>
    activeCategory === 'All Projects'
      ? projects
      : projects.filter(p => p.category === activeCategory),
    [activeCategory]
  )

  useEffect(() => {
    autoRef.current = setInterval(() => {
      setFeaturedIndex(i => {
        const next = (i + 1) % projects.length
        setFeatured(projects[next])
        return next
      })
    }, 8000)
    return () => clearInterval(autoRef.current)
  }, [])

  function handleCard(project) {
    clearInterval(autoRef.current)
    setFeaturedIndex(projects.indexOf(project))
    setFeatured(project)
    setTimeout(() => {
      if (!heroRef.current) return
      const headerHeight = document.querySelector('nav')?.offsetHeight || 70
      const top = heroRef.current.getBoundingClientRect().top + window.scrollY - headerHeight
      window.scrollTo({ top, behavior: 'smooth' })
    }, 50)
  }

  return (
    <main className="proj-page">

      {/* ── Hero ───────────────────────────────────────── */}
      <section ref={heroRef} className="proj-hero">
        {projects.map((p, i) => (
          <div
            key={p.id}
            className="proj-hero-bg"
            style={{
              backgroundImage: `url(${p.image})`,
              opacity: i === featuredIndex ? 1 : 0,
            }}
          />
        ))}
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
            <ProjectCard key={p.id} project={p} onClick={handleCard} />
          ))}
        </div>
      </section>

    </main>
  )
}
