import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Stats from './components/Stats'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Services from './components/Services'
import Contact from './components/Contact'
import Footer from './components/Footer'
export default function App() {
  useEffect(() => { // subtle mouse-follow glow (CSS vars, no re-renders)
    const m = (e) => { document.documentElement.style.setProperty('--mx', e.clientX + 'px'); document.documentElement.style.setProperty('--my', e.clientY + 'px') }
    window.addEventListener('mousemove', m, { passive: true })
    return () => window.removeEventListener('mousemove', m)
  }, [])
  return (
    <div className="relative">
      <div className="bg-grid pointer-events-none fixed inset-0 -z-10" aria-hidden />
      <div className="mouse-glow pointer-events-none fixed inset-0 -z-10" aria-hidden />
      <Navbar />
      <main><Hero /><About /><Stats /><Skills /><Experience /><Projects /><Services /><Contact /></main>
      <Footer />
    </div>
  )
}
