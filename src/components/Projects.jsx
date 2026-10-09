import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import SectionTitle from './SectionTitle'
import ProjectCard from './ProjectCard'
import { projects } from '../data/projects'
const filters = ['All', 'React', 'Next.js', 'JavaScript']
export default function Projects() {
  const [f, setF] = useState('All')
  const list = projects.filter((p) => f === 'All' || p.cats.includes(f))
  return (
    <section id="projects" className="section">
      <SectionTitle eyebrow="Selected work" title="Projects" />
      <div className="mb-10 flex flex-wrap justify-center gap-2" role="group" aria-label="Filter projects">
        {filters.map((x) => (
          <button key={x} onClick={() => setF(x)} aria-pressed={f === x}
            className={`rounded-full px-5 py-2 text-sm transition ${f === x ? 'bg-gradient-to-r from-violet2 to-fuchsia2 text-white' : 'glass hover:text-white'}`}>{x}</button>
        ))}
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {list.map((p, i) => <ProjectCard key={p.title} p={{ ...p, featured: p.featured && f === 'All' }} i={i} />)}
        </AnimatePresence>
      </div>
    </section>
  )
}
