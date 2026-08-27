import { useCallback, useRef } from 'react'

export function useReveal() {
  const observerRef = useRef(null)

  // Callback ref so the observer is (re)attached whenever the node mounts —
  // including when a component renders null first (async data) and the real
  // DOM appears on a later render.
  const ref = useCallback((el) => {
    observerRef.current?.disconnect()
    observerRef.current = null

    if (!el) return

    if (el.classList.contains('revealed')) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('revealed')
          observer.disconnect()
        }
      },
      { threshold: 0.08 }
    )

    observer.observe(el)
    observerRef.current = observer
  }, [])

  return ref
}
