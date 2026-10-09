import { useEffect, useRef, useState } from 'react'
import { animate, useInView } from 'framer-motion'
import { Reveal } from './SectionTitle'
const stats = [[10, '+', 'Projects'], [6, '+', 'Technologies'], [100, '%', 'Responsive Designs']]
function Count({ to, suffix }) {
  const ref = useRef(null), inView = useInView(ref, { once: true }), [n, setN] = useState(0)
  useEffect(() => { if (inView) { const c = animate(0, to, { duration: 1.6, onUpdate: (v) => setN(Math.round(v)) }); return () => c.stop() } }, [inView, to])
  return <span ref={ref}>{n}{suffix}</span>
}
export default function Stats() {
  return (
    <section className="mx-auto grid max-w-6xl gap-4 px-5 sm:grid-cols-2 sm:px-8 lg:grid-cols-4" aria-label="Statistics">
      {stats.map(([n, s, l], i) => (
        <Reveal key={l} delay={i * 0.08}><div className="glass glow-hover p-6 text-center"><p className="grad-text font-display text-4xl font-bold"><Count to={n} suffix={s} /></p><p className="mt-1 text-sm text-slate-400">{l}</p></div></Reveal>
      ))}
      <Reveal delay={0.24}><div className="glass glow-hover p-6 text-center"><p className="grad-text font-display text-2xl font-bold leading-[2.5rem]">Frontend</p><p className="mt-1 text-sm text-slate-400">Developer</p></div></Reveal>
    </section>
  )
}
