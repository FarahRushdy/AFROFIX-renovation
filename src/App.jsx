import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout'
import LoadingScreen from './components/LoadingScreen'
import HeroSection from './components/HeroSection'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import SolutionsPage from './pages/SolutionsPage'
import ProjectsPage from './pages/ProjectsPage'
import QualityPage from './pages/QualityPage'
import ContactPage from './pages/ContactPage'

function App() {
  return (
    <BrowserRouter>
      <LoadingScreen />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<><HeroSection /><HomePage /></>} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/solutions" element={<SolutionsPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/quality" element={<QualityPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
