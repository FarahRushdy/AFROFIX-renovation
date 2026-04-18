const events = [
  {
    year: '1962',
    side: 'left',
    title: 'The Foundation of Expertise',
    body: 'Eng. Mourad Kelada graduates with a Civil Engineering degree from Ain-Shams University, beginning a career across multinational organizations that would shape his industry vision.',
  },
  {
    year: '1981',
    side: 'right',
    title: 'AFROFIX is Born',
    body: 'Identifying a gap in the Egyptian market for electro-mechanical support systems, Eng. Kelada founds The African Company for Trading & Engineering — AFROFIX.',
  },
  {
    year: '1984',
    side: 'left',
    title: 'Pioneer in Pipe Clamp Technology',
    body: 'AFROFIX becomes the first company in Egypt to introduce universal plastic plugs for mounting pipe clamps to walls, setting a new standard for the industry.',
  },
  {
    year: '1990',
    side: 'right',
    title: 'Cable Tray Manufacturing',
    body: 'Through continuous innovation, AFROFIX grows to become one of Egypt\'s top three manufacturers of cable trays, cementing its position as an industry leader.',
  },
  {
    year: '2005',
    side: 'left',
    title: 'UL & FM Global Certifications',
    body: 'AFROFIX achieves internationally recognized UL Listed and FM Approved certifications — becoming the only manufacturer in the MENA region to hold both.',
  },
]

function TimelineItem({ year, side, title, body }) {
  const isLeft = side === 'left'
  return (
    <div className={`timeline-item ${isLeft ? 'timeline-item--left' : 'timeline-item--right'}`}>
      <div className="timeline-content-cell">
        {isLeft && (
          <div className="timeline-card">
            <h3 className="timeline-title hero-title">{title}</h3>
            <p className="about-body">{body}</p>
          </div>
        )}
        {!isLeft && <div className="timeline-year">{year}</div>}
      </div>

      <div className="timeline-center">
        <div className="timeline-connector" />
        <div className="timeline-node" />
        <div className="timeline-connector" />
      </div>

      <div className="timeline-content-cell">
        {isLeft && <div className="timeline-year">{year}</div>}
        {!isLeft && (
          <div className="timeline-card timeline-card--right">
            <h3 className="timeline-title hero-title">{title}</h3>
            <p className="about-body">{body}</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default function TimelineSection() {
  return (
    <section className="timeline-section">
      <span className="section-label">[2] Company Timeline</span>
      <div className="timeline-inner">
        <div className="timeline-track">
          {events.map(e => (
            <TimelineItem key={e.year} {...e} />
          ))}
        </div>

        <div className="timeline-today">
          <div className="timeline-today-node" />
          <h2 className="timeline-today-label hero-title">Today</h2>
          <p className="about-body timeline-today-body">
            AFROFIX stands as Egypt's premier manufacturer of electro-mechanical MEP support systems —
            UL Listed, FM Approved, and trusted by the region's most ambitious engineering firms on
            landmark projects across the MENA region.
          </p>
        </div>

      </div>
    </section>
  )
}
