import { useState, useMemo, useRef, useEffect } from 'react'
import { useProjects } from '../hooks/useProjects'

export const projectCategories = [
  'All Projects',
  'Commercial',
  'Residential',
  'Healthcare',
  'Government & Civic',
  'Hospitality',
  'Industrial',
  'Transportation',
  'Education',
]

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
  const { projects, loading } = useProjects()
  const [activeCategory, setActiveCategory] = useState('All Projects')
  const [featuredIndex, setFeaturedIndex] = useState(0)
  const [featured, setFeatured] = useState(null)
  const heroRef = useRef(null)
  const autoRef = useRef(null)

  useEffect(() => {
    if (projects.length > 0 && !featured) {
      setFeatured(projects[0])
    }
  }, [projects])

  const filtered = useMemo(() =>
    activeCategory === 'All Projects'
      ? projects
      : projects.filter(p => p.category === activeCategory),
    [activeCategory, projects]
  )

  useEffect(() => {
    if (projects.length === 0) return
    autoRef.current = setInterval(() => {
      setFeaturedIndex(i => {
        const next = (i + 1) % projects.length
        setFeatured(projects[next])
        return next
      })
    }, 8000)
    return () => clearInterval(autoRef.current)
  }, [projects])

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

  if (loading) return <main className="proj-page proj-loading"><span className="section-label">Loading projects…</span></main>

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
        {featured && (
          <>
            <div className="proj-hero-location">{featured.location}</div>
            <div className="proj-hero-bottom">
              <h1 className="proj-hero-title hero-title">{featured.title}</h1>
              <p className="proj-hero-desc">{featured.description}</p>
            </div>
          </>
        )}
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
