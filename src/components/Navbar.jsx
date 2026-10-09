import { useEffect, useState } from 'react'
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion'
import { Menu, X } from 'lucide-react'
const items = ['home', 'about', 'skills', 'experience', 'projects', 'contact']
export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('home')
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 25 })
  useEffect(() => {
    const io = new IntersectionObserver((es) => es.forEach((e) => e.isIntersecting && setActive(e.target.id)), { rootMargin: '-45% 0px -50% 0px' })
    items.forEach((id) => { const el = document.getElementById(id); el && io.observe(el) })
    return () => io.disconnect()
  }, [])
  return (
    <motion.header initial={{ y: -80 }} animate={{ y: 0 }} className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-ink/40 backdrop-blur-xl">
      <motion.div style={{ scaleX }} className="absolute inset-x-0 top-0 h-0.5 origin-left bg-gradient-to-r from-violet2 via-fuchsia2 to-cyan2" />
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8" aria-label="Main">
        <a href="#home" className="font-display text-xl font-bold text-white">Aman<span className="grad-text">.</span></a>
        <ul className="hidden items-center gap-1 md:flex">
          {items.map((i) => (
            <li key={i}><a href={`#${i}`} className={`rounded-lg px-3 py-2 text-sm capitalize transition ${active === i ? 'bg-white/10 text-white' : 'hover:text-white'}`}>{i}</a></li>
          ))}
        </ul>
        <a href="#contact" className="btn-primary hidden !py-2 md:inline-flex">Contact Me</a>
        <button className="rounded-lg p-2 text-white md:hidden" onClick={() => setOpen(!open)} aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open}>
          {open ? <X /> : <Menu />}
        </button>
      </nav>
      <AnimatePresence>
        {open && (
          <motion.ul initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-t border-white/5 bg-ink/95 px-5 md:hidden">
            {items.map((i) => (
              <li key={i}><a href={`#${i}`} onClick={() => setOpen(false)} className={`block py-3 capitalize ${active === i ? 'text-white' : ''}`}>{i}</a></li>
            ))}
            <li className="py-3"><a href="#contact" onClick={() => setOpen(false)} className="btn-primary w-full">Contact Me</a></li>
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
