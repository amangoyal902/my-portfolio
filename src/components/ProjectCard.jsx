import { motion } from 'framer-motion'
import { Github, ExternalLink } from 'lucide-react'
export default function ProjectCard({ p, i }) {
  return (
    <motion.article layout initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ delay: i * 0.05 }}
      className={`glass glow-hover group flex flex-col overflow-hidden ${p.featured ? 'md:col-span-1' : ''}`}>
      {/* TODO: replace the gradient block with <img src="/projects/name.jpg" alt="..." loading="lazy" /> */}
      <div className={`relative overflow-hidden ${p.featured ? 'h-52 sm:h-64' : 'h-40'}`}>
        <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-violet2/60 via-fuchsia2/40 to-cyan2/30 font-display text-5xl font-bold text-white/30 transition duration-500 group-hover:scale-110" role="img" aria-label={`${p.title} preview placeholder`}>{p.title[0]}</div>
        <div className="absolute inset-0 bg-gradient-to-t from-ink/80 to-transparent opacity-0 transition group-hover:opacity-100" />
        {p.featured && <span className="absolute left-3 top-3 rounded-full bg-gradient-to-r from-violet2 to-fuchsia2 px-3 py-1 text-xs font-semibold text-white">Featured</span>}
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-lg font-semibold text-white sm:text-xl">{p.title}</h3>
        <p className="mt-2 text-sm text-slate-400">{p.desc}</p>
        <div className="mt-4 flex flex-wrap gap-2">{p.tags.map((t) => <span key={t} className="rounded-md bg-white/5 px-2.5 py-1 text-xs text-cyan-200">{t}</span>)}</div>
        <div className="mt-auto flex gap-3 pt-5">
          <a href={p.github} target="_blank" rel="noreferrer" className="btn-ghost !px-4 !py-2"><Github size={15} />GitHub</a>
          <a href={p.demo} target="_blank" rel="noreferrer" className="btn-primary !px-4 !py-2"><ExternalLink size={15} />Live Demo</a>
        </div>
      </div>
    </motion.article>
  )
}
