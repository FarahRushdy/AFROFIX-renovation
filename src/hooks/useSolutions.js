import { useState, useEffect } from 'react'
import { client, urlFor } from '../lib/sanity'

const QUERY = `*[_type == "solution"] | order(order asc) {
  _id,
  name,
  category,
  image,
  certifications,
  standards,
  usage,
  features,
  sizeRange,
  material,
  finish,
  order
}`

function mapSolution(doc) {
  return {
    id: doc._id,
    name: doc.name,
    category: doc.category,
    image: doc.image ? urlFor(doc.image).width(800).auto('format').url() : null,
    certifications: doc.certifications || null,
    standards: doc.standards || null,
    usage: doc.usage || null,
    features: doc.features || [],
    sizeRange: doc.sizeRange || null,
    material: doc.material || null,
    finish: doc.finish || null,
  }
}

export function useSolutions() {
  const [solutions, setSolutions] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    client.fetch(QUERY)
      .then(data => setSolutions(data.map(mapSolution)))
      .catch(setError)
      .finally(() => setLoading(false))
  }, [])

  return { solutions, loading, error }
}
