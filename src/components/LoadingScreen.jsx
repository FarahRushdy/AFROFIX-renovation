import { useEffect, useState } from 'react'
import logo from '../assets/Logo OG 2.png'

export default function LoadingScreen() {
  const [hiding, setHiding] = useState(false)
  const [hidden, setHidden] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setHiding(true), 1200)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (!hiding) return
    const timer = setTimeout(() => setHidden(true), 600)
    return () => clearTimeout(timer)
  }, [hiding])

  if (hidden) return null

  return (
    <div className={`loading-screen ${hiding ? 'loading-screen--hiding' : ''}`}>
      <img src={logo} alt="AFROFIX" className="loading-logo" />
    </div>
  )
}
