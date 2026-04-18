import { useState, useMemo, useRef } from 'react'
import { useSearchParams } from 'react-router-dom'
import products, { categories } from '../data/solutions.js'

function FeaturedProduct({ product }) {
  return (
    <div className="sol-featured">
      <div className="sol-featured-img">
        <img src={product.image} alt={product.name} />
      </div>
      <div className="sol-featured-info">
        <h2 className="sol-featured-name hero-title">{product.name}</h2>

        {(product.certifications || product.standards) && (
          <div className="sol-tags">
            {product.certifications && (
              <span className="sol-tag">{product.certifications}</span>
            )}
            {product.standards && (
              <span className="sol-tag">{product.standards}</span>
            )}
          </div>
        )}

        <div className="sol-featured-details">
          {product.usage && (
            <p className="sol-detail-row">
              <span className="sol-detail-label">Usage</span>
              <span className="sol-detail-value">{product.usage}</span>
            </p>
          )}
          {product.features?.length > 0 && (
            <div className="sol-detail-row sol-detail-row--block">
              <span className="sol-detail-label">Features</span>
              <ul className="sol-features-list">
                {product.features.map((f, i) => <li key={i}>{f}</li>)}
              </ul>
            </div>
          )}
          {product.sizeRange && (
            <p className="sol-detail-row">
              <span className="sol-detail-label">Size Range</span>
              <span className="sol-detail-value">{product.sizeRange}</span>
            </p>
          )}
          {product.material && (
            <p className="sol-detail-row">
              <span className="sol-detail-label">Material</span>
              <span className="sol-detail-value">{product.material}</span>
            </p>
          )}
          {product.finish && (
            <p className="sol-detail-row">
              <span className="sol-detail-label">Finish</span>
              <span className="sol-detail-value">{product.finish}</span>
            </p>
          )}
        </div>
        <a href="#quotation" className="btn-glass sol-cta">Ask For Quotation</a>
      </div>
    </div>
  )
}

function ProductCard({ product, onClick }) {
  return (
    <button className="sol-card" onClick={() => onClick(product)}>
      <img src={product.image} alt={product.name} className="sol-card-img" />
      <div className="sol-card-overlay" />
      <div className="sol-card-info">
        <span className="sol-card-name">{product.name}</span>
        <span className="sol-card-cat">{product.category}</span>
      </div>
    </button>
  )
}

export default function SolutionsPage() {
  const [searchParams] = useSearchParams()
  const initialCategory = (() => {
    const cat = searchParams.get('category')
    return cat && categories.includes(cat) ? cat : 'All Categories'
  })()

  const [activeCategory, setActiveCategory] = useState(initialCategory)
  const [featured, setFeatured] = useState(() =>
    initialCategory !== 'All Categories'
      ? products.find(p => p.category === initialCategory) || products[0]
      : products[0]
  )
  const [search, setSearch] = useState('')
  const [appliedSearch, setAppliedSearch] = useState('')

  const featuredRef = useRef(null)
  const resultsRef = useRef(null)

  const filtered = useMemo(() => {
    let list = activeCategory === 'All Categories'
      ? products
      : products.filter(p => p.category === activeCategory)
    if (appliedSearch.trim()) {
      const q = appliedSearch.toLowerCase()
      list = list.filter(p =>
        p.name.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.usage?.toLowerCase().includes(q) ||
        p.features?.some(f => f.toLowerCase().includes(q))
      )
    }
    return list
  }, [activeCategory, appliedSearch])

  function scrollTo(ref, padding = 0) {
    if (!ref.current) return
    const headerHeight = document.querySelector('nav')?.offsetHeight || 70
    const top = ref.current.getBoundingClientRect().top + window.scrollY - headerHeight - padding
    window.scrollTo({ top, behavior: 'smooth' })
  }

  function handleSearch() {
    setActiveCategory('All Categories')
    setAppliedSearch(search)
    setTimeout(() => scrollTo(resultsRef), 80)
  }

  function handleSearchKey(e) {
    if (e.key === 'Enter') handleSearch()
  }

  function handleSearchChange(e) {
    setSearch(e.target.value)
    if (e.target.value === '') setAppliedSearch('')
  }

  function handleCategory(cat) {
    setActiveCategory(cat)
    setSearch('')
    setAppliedSearch('')
    const first = cat === 'All Categories'
      ? products[0]
      : products.find(p => p.category === cat)
    if (first) setFeatured(first)
  }

  function handleCard(product) {
    setFeatured(product)
    setTimeout(() => scrollTo(featuredRef, 24), 50)
  }

  const gridProducts = filtered.filter(p => p.id !== featured.id)

  return (
    <main className="sol-page">
      <div className="sol-header">
        <span className="section-label">[1] Our Solutions</span>
        <div className="sol-search-row">
          <input
            className="sol-search"
            type="text"
            placeholder="Search for solution..."
            value={search}
            onChange={handleSearchChange}
            onKeyDown={handleSearchKey}
          />
          <button className="sol-search-btn" onClick={handleSearch}>Search</button>
        </div>
      </div>

      <div className="sol-tabs">
        {categories.map(cat => (
          <button
            key={cat}
            className={`sol-tab${activeCategory === cat ? ' sol-tab--active' : ''}`}
            onClick={() => handleCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="sol-body">
        {filtered.length === 0 ? (
          <p className="sol-empty" ref={resultsRef}>No products found for "{appliedSearch}".</p>

        ) : (
          <>
            <div ref={featuredRef}>
              <FeaturedProduct product={featured} />
            </div>
            {gridProducts.length > 0 && (
              <div className="sol-grid" ref={resultsRef}>
                {gridProducts.map(p => (
                  <ProductCard key={p.id} product={p} onClick={handleCard} />
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </main>
  )
}
