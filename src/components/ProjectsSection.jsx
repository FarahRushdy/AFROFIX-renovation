import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useProjects } from '../hooks/useProjects'
import { useReveal } from '../hooks/useReveal'

export default function ProjectsSection() {
  const { projects } = useProjects()
  const revealRef = useReveal()
  const [current, setCurrent] = useState(0)
  const [fading, setFading] = useState(false)

  useEffect(() => {
    if (projects.length === 0) return
    const timer = setInterval(() => advance(c => (c + 1) % projects.length), 6000)
    return () => clearInterval(timer)
  }, [projects])

  function advance(nextFn) {
    setFading(true)
    setTimeout(() => {
      setCurrent(prev => nextFn(prev))
      setFading(false)
    }, 500)
  }

  const project = projects[current]
  if (!project) return null

  return (
    <section className="projects-section reveal" ref={revealRef}>
      {projects.map((p, i) => (
        <div
          key={p.id}
          className="projects-bg"
          style={{
            backgroundImage: `url(${p.image})`,
            opacity: i === current ? 1 : 0,
          }}
        />
      ))}
      <div className="projects-overlay" />

      <div className="projects-content">
        <span className="section-label">[5] Our Projects Archive</span>
        <h2 className={`projects-title hero-title${fading ? ' fade-out' : ' fade-in'}`}>
          {project.title}
        </h2>
        <p className={`projects-subtitle large-body${fading ? ' fade-out' : ' fade-in'}`}>
          {project.description}
        </p>
        <div className="projects-actions">
          <Link to="/projects" className="btn-glass">View All Projects</Link>
        </div>
      </div>
    </section>
  )
}
