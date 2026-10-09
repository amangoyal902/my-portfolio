import { GraduationCap, Briefcase, MapPin, Target, Download } from 'lucide-react'
import amanImg from "/src/assets/aman.jpg"
import SectionTitle, { Reveal } from './SectionTitle'
import { links } from '../data/projects'
const info = [[GraduationCap, 'Education', 'MCA first year'], [Briefcase, 'Experience', 'Frontend Developer Internship'], [MapPin, 'Location', 'Jaipur, Rajasthan'], [Target, 'Focus', 'Modern Frontend Development']]
export default function About() {
  return (
    <section id="about" className="section">
      <SectionTitle eyebrow="Who I am" title="About Me" />
      <div className="grid items-center gap-12 md:grid-cols-[1fr_1.4fr]">
        <Reveal>
          <div className="mx-auto max-w-xs rounded-3xl bg-gradient-to-br from-violet2 via-fuchsia2 to-cyan2 p-[2px] shadow-[0_0_50px_-8px_rgba(168,85,247,.6)]">
            {/* TODO: replace with  */}
            <img src={amanImg} alt="Aman Goyal" className="rounded-3xl" />
            {/* <div className="grad-text flex aspect-square items-center justify-center rounded-3xl bg-ink font-display text-7xl font-bold" role="img" aria-label="Profile photo placeholder">AG</div> */}
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="text-slate-400">I'm a MCA first year student and Frontend Developer passionate about building responsive, accessible and visually polished web experiences. I enjoy turning ideas into clean React interfaces, and I'm always learning new tools to ship better products.</p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {info.map(([Icon, k, v]) => (
              <div key={k} className="glass glow-hover flex items-center gap-3 p-4">
                <Icon className="shrink-0 text-fuchsia-400" size={22} />
                <div><p className="text-xs text-slate-500">{k}</p><p className="text-sm font-medium text-white">{v}</p></div>
              </div>
            ))}
          </div>
          <a href={links.resume} download className="btn-primary mt-8"><Download size={16} />Download Resume</a>
        </Reveal>
      </div>
    </section>
  )
}
