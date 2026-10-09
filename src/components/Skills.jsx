import { motion } from 'framer-motion'
import SectionTitle, { Reveal } from './SectionTitle'
import { skills } from '../data/skills'
export default function Skills() {
  return (
    <section id="skills" className="section">
      <SectionTitle eyebrow="My toolbox" title="Skills & Technologies" />
      <div className="grid gap-6 lg:grid-cols-3">
        {Object.entries(skills).map(([cat, list], i) => (
          <Reveal key={cat} delay={i * 0.1}>
            <div className="glass glow-hover h-full p-6">
              <h3 className="mb-5 font-display text-lg font-semibold text-white">{cat}</h3>
              <div className="flex flex-wrap gap-2.5">
                {list.map((s) => (
                  <motion.span key={s} whileHover={{ scale: 1.08, y: -3 }} className="cursor-default rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200 transition hover:border-fuchsia-400/60 hover:text-white hover:shadow-[0_0_18px_rgba(192,38,211,.4)]">{s}</motion.span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
