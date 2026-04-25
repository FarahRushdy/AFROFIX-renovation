import { useState } from 'react'

const reasons = [
  {
    title: 'Global Distribution',
    body: 'Scale your portfolio with the region\'s only dual-certified UL/FM MEP support supplier. We provide the stock, the technical submittals, and the global reputation.',
  },
  {
    title: 'Regional Representation',
    body: 'We are looking for established logistics partners to carry AFROFIX engineering into new Middle Eastern, African, and European territories.',
  },
  {
    title: 'Private-Label Manufacturing',
    body: 'Leverage our large facility and high-quality production. We provide bespoke, unbranded, or private-label fabrication for international engineering houses.',
  },
  {
    title: 'General Technical Inquiries',
    body: 'Request custom fabrication designs or technical submittals for active mega-project tenders.',
  },
]

const COMPANY_EMAIL = 'info@afrofix.com'

export default function ContactPage() {
  const [form, setForm] = useState({
    name: '',
    company: '',
    type: '',
    subject: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  function handleChange(e) {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    const body = [
      `Name: ${form.name}`,
      `Company: ${form.company}`,
      `Company Type: ${form.type}`,
      `Subject: ${form.subject}`,
      ``,
      form.message,
    ].join('\n')

    const mailto = `mailto:${COMPANY_EMAIL}?subject=${encodeURIComponent(form.subject || 'Contact Form Inquiry')}&body=${encodeURIComponent(body)}`
    window.location.href = mailto
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 5000)
  }

  return (
    <main className="contact-page">

      {/* ── Why Contact ──────────────────────────────────── */}
      <section className="contact-why">
        <span className="section-label">[1] Why Contact AFROFIX</span>
        <div className="contact-why-grid">
          {reasons.map((r, i) => (
            <div key={i} className="contact-why-card">
              <h3 className="contact-why-title">{r.title}</h3>
              <p className="contact-why-body">{r.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Form + Details ───────────────────────────────── */}
      <section className="contact-bottom">

        {/* Form */}
        <div className="contact-form-wrap">
          <span className="section-label">[2] Contact Form</span>
          <form className="contact-form glass-form" onSubmit={handleSubmit} noValidate>
            <div className="contact-field-row">
              <div className="contact-field">
                <input
                  className="contact-input"
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="contact-field">
                <input
                  className="contact-input"
                  type="text"
                  name="company"
                  placeholder="Company Name"
                  value={form.company}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="contact-field">
              <select
                className="contact-input contact-select"
                name="type"
                value={form.type}
                onChange={handleChange}
              >
                <option value="" disabled>Company Type</option>
                <option>Contractor</option>
                <option>Consultant</option>
                <option>Developer</option>
                <option>Distributor</option>
                <option>Engineering Firm</option>
                <option>Government Entity</option>
                <option>Other</option>
              </select>
            </div>

            <div className="contact-field">
              <input
                className="contact-input"
                type="text"
                name="subject"
                placeholder="Subject"
                value={form.subject}
                onChange={handleChange}
                required
              />
            </div>

            <div className="contact-field">
              <textarea
                className="contact-input contact-textarea"
                name="message"
                placeholder="Message"
                rows={6}
                value={form.message}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit" className="btn-glass contact-submit">
              {submitted ? 'Opening Email Client…' : 'Send Message'}
            </button>
          </form>
        </div>

        {/* Details */}
        <div className="contact-details">
          <span className="section-label">[3] Contact Details</span>
          <ul className="contact-details-list">
            <li className="contact-detail-item">
              <svg className="contact-detail-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
              </svg>
              <span>Plot No. 122 – 6th Industrial Zone Extension, 6th of October City, Egypt</span>
            </li>
            <li className="contact-detail-item">
              <svg className="contact-detail-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
              </svg>
              <a href={`mailto:${COMPANY_EMAIL}`} className="contact-detail-link">{COMPANY_EMAIL}</a>
            </li>
            <li className="contact-detail-item">
              <svg className="contact-detail-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
              </svg>
              <a href="tel:+20100101298" className="contact-detail-link">(+2) 0100 1012 985</a>
            </li>
          </ul>
        </div>

      </section>

    </main>
  )
}
