import useCounter from '../hooks/useCounter'
import { useReveal } from '../hooks/useReveal'

function StatItem({ target, suffix, label }) {
  const { count, ref } = useCounter(target)
  return (
    <div className="stat-item" ref={ref}>
      <span className="stat-number hero-title">{count}{suffix}</span>
      <span className="stat-label">{label}</span>
    </div>
  )
}

export default function StatsSection() {
  const ref = useReveal()
  return (
    <section className="stats-section reveal" ref={ref}>
      <div className="stats-inner">
        <StatItem target={1000} suffix="+" label="Projects" />
        <StatItem target={40} suffix="+" label="Years of Experience" />
      </div>
    </section>
  )
}
