import { useState, useEffect, useRef } from 'react'
import { useReveal } from '../hooks/useReveal'

const logos = Array.from({ length: 14 }, (_, i) => ({
  id: i + 1,
  src: new URL(`../assets/cust${i + 1}.png`, import.meta.url).href,
}))

function getPerPage() {
  if (window.innerWidth < 640) return 2
  if (window.innerWidth < 1024) return 3
  return 5
}

export default function CustomersSection() {
  const revealRef = useReveal()
  const [page, setPage] = useState(0)
  const [transitioning, setTransitioning] = useState(true)
  const [perPage, setPerPage] = useState(5)
  const timerRef = useRef(null)

  const realPages = Math.ceil(logos.length / perPage)

  // Build pages array + clone of first page at end for seamless loop
  const pages = [
    ...Array.from({ length: realPages }, (_, i) =>
      logos.slice(i * perPage, (i + 1) * perPage)
    ),
    logos.slice(0, perPage), // clone of first page
  ]

  useEffect(() => {
    const update = () => setPerPage(getPerPage())
    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [])

  useEffect(() => {
    setPage(0)
  }, [perPage])

  useEffect(() => {
    timerRef.current = setInterval(() => setPage(p => p + 1), 5000)
    return () => clearInterval(timerRef.current)
  }, [perPage])

  // When we land on the clone, instantly jump back to real page 0
  useEffect(() => {
    if (page === realPages) {
      const reset = setTimeout(() => {
        setTransitioning(false)
        setPage(0)
      }, 700)
      return () => clearTimeout(reset)
    }
  }, [page, realPages])

  // Re-enable transition two frames after the instant jump renders
  useEffect(() => {
    if (!transitioning) {
      const raf = requestAnimationFrame(() => {
        requestAnimationFrame(() => setTransitioning(true))
      })
      return () => cancelAnimationFrame(raf)
    }
  }, [transitioning])

  return (
    <section className="customers-section reveal" ref={revealRef}>
      <div className="customers-inner">
        <span className="section-label">[3] Our Main Customers</span>
        <h2 className="customers-title hero-title">The Giants' Choice</h2>
        <div className="logos-viewport">
          <div
            className="logos-track"
            style={{
              transform: `translateX(calc(${page} * -100%))`,
              transition: transitioning ? 'transform 0.7s cubic-bezier(0.4, 0, 0.2, 1)' : 'none',
            }}
          >
            {pages.map((group, pageIdx) => (
              <div className="logos-page" key={pageIdx}>
                {group.map(logo => (
                  <div className="logo-placeholder" key={logo.id}>
                    <img src={logo.src} alt={`Customer ${logo.id}`} />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
