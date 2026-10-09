import SectionTitle, { Reveal } from './SectionTitle'
const points = ['Built responsive UI components', 'Worked with React and modern frontend tools', 'Improved website layouts', 'Implemented reusable components', 'Worked with Git and GitHub']
export default function Experience() {
  return (
    <section id="experience" className="section">
      <SectionTitle eyebrow="Journey" title="Experience" />
      <div className="relative mx-auto max-w-3xl border-l border-white/10 pl-8">
        <span className="absolute -left-[7px] top-2 h-3.5 w-3.5 animate-pulse rounded-full bg-fuchsia-500 shadow-[0_0_14px_#C026D3]" />
        <Reveal>
          <div className="glass glow-hover p-6">
            <h3 className="font-display text-xl font-semibold text-white">Frontend Developer Intern</h3>
            <p className="mt-2 text-sm text-slate-400">Worked on responsive website UI, reusable frontend components, responsive layouts and modern frontend technologies.</p>
            <ul className="mt-4 space-y-2 text-sm">
              {points.map((p) => <li key={p} className="flex gap-2"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300" />{p}</li>)}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
