import { Helmet } from 'react-helmet-async'

const SITE_URL = 'https://afrofix.com'
const DEFAULT_IMAGE = `${SITE_URL}/favicon.png`

export default function SEO({ title, description, path = '', image = DEFAULT_IMAGE }) {
  const canonical = `${SITE_URL}${path}`
  const fullTitle = title
    ? `${title} | AFROFIX`
    : 'AFROFIX — MEP Support Systems Manufacturer in Egypt'

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="AFROFIX" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={image} />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  )
}
