import { useState, useEffect } from 'react'
import { client, urlFor } from '../lib/sanity'

const QUERY = `*[_type == "project"] | order(order asc) {
  _id,
  title,
  location,
  category,
  description,
  image,
  order
}`

function mapProject(doc) {
  return {
    id: doc._id,
    title: doc.title,
    location: doc.location,
    category: doc.category,
    description: doc.description,
    image: doc.image ? urlFor(doc.image).width(1200).auto('format').url() : null,
  }
}

export function useProjects() {
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    client.fetch(QUERY)
      .then(data => setProjects(data.map(mapProject)))
      .catch(setError)
      .finally(() => setLoading(false))
  }, [])

  return { projects, loading, error }
}
