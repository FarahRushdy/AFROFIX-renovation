import { useState, useEffect } from 'react'
import projects from '../data/projects'
import { useReveal } from '../hooks/useReveal'

export default function ProjectsSection() {
  const revealRef = useReveal()
  const [current, setCurrent] = useState(0)
  const [fading, setFading] = useState(false)

  useEffect(() => {
    const timer = setInterval(() => advance(c => (c + 1) % projects.length), 6000)
    return () => clearInterval(timer)
  }, [])

  function advance(nextFn) {
    setFading(true)
    setTimeout(() => {
      setCurrent(prev => nextFn(prev))
      setFading(false)
    }, 500)
  }

  const project = projects[current]

  return (
    <section className="projects-section reveal" ref={revealRef}>
      {projects.map((p, i) => (
        <div
          key={i}
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
          {project.subtitle}
        </p>
        <div className="projects-actions">
          <a href="#project" className="btn-glass">View Project</a>
          <a href="#projects" className="btn-glass">View All Projects</a>
        </div>
      </div>
    </section>
  )
}
