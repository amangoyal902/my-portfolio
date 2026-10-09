import { motion } from 'framer-motion'
export const Reveal = ({ children, delay = 0, className = '' }) => (
  <motion.div className={className} initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.6, delay }}>{children}</motion.div>
)
export default function SectionTitle({ eyebrow, title }) {
  return (
    <Reveal className="mb-12 text-center">
      <p className="mb-2 text-xs font-semibold uppercase tracking-[0.3em] text-cyan-300">{eyebrow}</p>
      <h2 className="font-display text-3xl font-bold text-white sm:text-4xl md:text-5xl">{title}</h2>
      <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-violet2 to-fuchsia2" />
    </Reveal>
  )
}
