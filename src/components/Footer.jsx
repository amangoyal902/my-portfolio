import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react'
import { links } from '../data/projects'
export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/20">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-5 px-5 py-10 text-center sm:px-8">
        <div><p className="font-display text-lg font-bold text-white">Aman Goyal</p><p className="text-sm text-slate-500">Frontend Developer</p></div>
        <nav aria-label="Footer" className="flex flex-wrap justify-center gap-4 text-sm">
          {['home', 'about', 'skills', 'experience', 'projects', 'contact'].map((i) => <a key={i} href={`#${i}`} className="capitalize hover:text-white">{i}</a>)}
        </nav>
        <div className="flex gap-3">
          {[[Github, links.github, 'https://github.com/amangoyal902'], [Linkedin, links.linkedin, 'https://www.linkedin.com/in/aman-goyal2003'], [Mail, links.email, 'amanskgoyal@gmail.com']].map(([I, h, l]) => (
            <a key={l} href={h} aria-label={l} target="_blank" rel="noreferrer" className="glass p-2.5 text-white transition hover:text-fuchsia-400"><I size={16} /></a>
          ))}
        </div>
        <p className="text-xs text-slate-500">© 2026 Aman Goyal. All rights reserved.</p>
      </div>
      <a href="#home" aria-label="Back to top" className="fixed bottom-5 right-5 z-40 rounded-full bg-gradient-to-r from-violet2 to-fuchsia2 p-3 text-white shadow-lg shadow-fuchsia-600/40 transition hover:-translate-y-1"><ArrowUp size={18} /></a>
    </footer>
  )
}
