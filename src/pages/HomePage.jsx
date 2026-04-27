import { Helmet } from 'react-helmet-async'
import SEO from '../components/SEO'
import AboutSection from '../components/AboutSection'
import StatsSection from '../components/StatsSection'
import SolutionsSection from '../components/SolutionsSection'
import CTASection from '../components/CTASection'
import CustomersSection from '../components/CustomersSection'
import ProjectsSection from '../components/ProjectsSection'
import ConsultantsSection from '../components/ConsultantsSection'

export default function HomePage() {
  return (
    <>
      <SEO
        title="MEP Support Systems Manufacturer in Egypt"
        description="Egypt's first manufacturer of MEP pipe support systems. UL Listed, FM Approved products for fire fighting, HVAC, plumbing, SAM strut and steel structure applications."
        path="/"
      />
      <Helmet>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "AFROFIX",
          "description": "Egypt's first manufacturer of MEP pipe support systems including fire fighting, HVAC, plumbing, and SAM strut products. UL Listed and FM Approved.",
          "url": "https://afrofix.com",
          "logo": "https://afrofix.com/favicon.png",
          "image": "https://afrofix.com/favicon.png",
          "telephone": ["+20100101290", "+201272522278"],
          "email": "info@afrofix.com",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Plot No. 132 – 6th Industrial Zone Extension",
            "addressLocality": "6th October City",
            "addressRegion": "Giza",
            "addressCountry": "EG"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": "29.9792",
            "longitude": "30.9561"
          },
          "sameAs": ["https://afrofix.com"],
          "hasCredential": ["UL Listed", "FM Approved", "ISO 9001:2015"]
        })}</script>
      </Helmet>
      <AboutSection />
      <StatsSection />
      <SolutionsSection />
      <CustomersSection />
      <ProjectsSection />
      <ConsultantsSection />
      <CTASection />
    </>
  )
}
