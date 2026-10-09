import { Code2, Smartphone, Atom, Layout, Sparkles, Zap, Brain, Eye } from 'lucide-react'
import SectionTitle, { Reveal } from './SectionTitle'
const services = [[Code2, 'Frontend Development', 'Clean, maintainable interfaces built with modern tooling.'], [Smartphone, 'Responsive Web Design', 'Layouts that look right on every screen size.'], [Atom, 'React Development', 'Component-driven apps with reusable architecture.'], [Layout, 'UI Development', 'Pixel-aware, polished and accessible UI.']]
const why = [[Smartphone, 'Responsive Development'], [Code2, 'Clean Code'], [Sparkles, 'Modern UI'], [Zap, 'Fast Learning'], [Brain, 'Problem Solving'], [Eye, 'Attention to Detail']]
const Card = ({ Icon, title, text, i }) => (
  <Reveal delay={i * 0.06} className="h-full"><div className="glass glow-hover h-full p-6"><Icon className="mb-4 text-fuchsia-400" size={28} /><h3 className="font-display font-semibold text-white">{title}</h3>{text && <p className="mt-2 text-sm text-slate-400">{text}</p>}</div></Reveal>
)
export default function Services() {
  return (
    <section id="services" className="section">
      <SectionTitle eyebrow="What I do" title="Services" />
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{services.map(([I, t, d], i) => <Card key={t} Icon={I} title={t} text={d} i={i} />)}</div>
      <div className="mt-24"><SectionTitle eyebrow="Why me" title="Why Work With Me" /></div>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{why.map(([I, t], i) => <Card key={t} Icon={I} title={t} i={i} />)}</div>
    </section>
  )
}
