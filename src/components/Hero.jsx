import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Download } from 'lucide-react'
import { links } from '../data/projects'
const roles = ['Frontend Developer', 'React Developer', 'Creative Web Developer']
export default function Hero() {
  const [r, setR] = useState(0), [txt, setTxt] = useState(''), [del, setDel] = useState(false)
  useEffect(() => { // typing effect
    const full = roles[r]
    const t = setTimeout(() => {
      if (!del) { setTxt(full.slice(0, txt.length + 1)); if (txt === full) setDel(true) }
      else { setTxt(full.slice(0, txt.length - 1)); if (txt.length <= 1) { setDel(false); setR((r + 1) % roles.length) } }
    }, txt === full && !del ? 1400 : del ? 40 : 80)
    return () => clearTimeout(t)
  }, [txt, del, r])
  const social = [[Github, links.github, 'GitHub'], [Linkedin, links.linkedin, 'LinkedIn'], [Mail, links.email, 'Email']]
  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden pt-20">
      <div className="absolute -left-24 top-20 h-72 w-72 animate-blob rounded-full bg-violet2/30 blur-[100px]" />
      <div className="absolute -right-24 bottom-10 h-80 w-80 animate-blob rounded-full bg-fuchsia2/25 blur-[110px]" />
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-12 sm:px-8 lg:grid-cols-2">
        <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }}>
          <span className="glass inline-flex items-center gap-2 px-4 py-1.5 text-xs text-cyan-200">
            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />Available for Frontend Opportunities
          </span>
          <h1 className="mt-6 font-display text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">Hi, I'm <span className="grad-text">Aman Goyal</span></h1>
          <p className="mt-3 h-9 font-display text-xl text-slate-200 sm:text-3xl" aria-live="polite">{txt}<span className="animate-pulse text-fuchsia-400">|</span></p>
          <p className="mt-5 max-w-lg text-slate-400">I build responsive, modern and user-friendly web applications using React, JavaScript and modern frontend technologies — clean code, polished interfaces, real-world impact.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#projects" className="btn-primary">View Projects</a>
            <a href={links.resume} download className="btn-ghost"><Download size={16} />Download Resume</a>
          </div>
          <div className="mt-8 flex gap-3">
            {social.map(([Icon, href, label]) => (
              <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label} className="glass glow-hover p-3 text-white"><Icon size={18} /></a>
            ))}
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }} className="relative mx-auto w-full max-w-md">
          <div className="glass relative animate-float border-fuchsia-500/30 p-5 shadow-[0_0_60px_-10px_rgba(192,38,211,.5)]">
            <div className="mb-4 flex gap-1.5"><i className="h-3 w-3 rounded-full bg-red-400" /><i className="h-3 w-3 rounded-full bg-yellow-400" /><i className="h-3 w-3 rounded-full bg-green-400" /></div>
            <pre className="overflow-x-auto font-mono text-xs leading-6 sm:text-sm"><code>
<span className="text-fuchsia-400">const</span> <span className="text-cyan-300">aman</span> = {'{'}{'\n'}
{'  '}role: <span className="text-pink-300">"Frontend Dev"</span>,{'\n'}
{'  '}stack: [<span className="text-pink-300">"React"</span>, <span className="text-pink-300">"Next.js"</span>],{'\n'}
{'  '}location: <span className="text-pink-300">"Jaipur, IN"</span>,{'\n'}
{'  '}openToWork: <span className="text-violet-300">true</span>{'\n'}
{'}'}
            </code></pre>
          </div>
          {['React', 'JavaScript', 'Tailwind', 'Next.js'].map((b, i) => (
            <span key={b} style={{ animationDelay: `${i * 0.8}s` }} className={`glass absolute animate-float px-3 py-1 text-xs text-white ${['-left-2 -top-4', '-right-2 top-10', '-left-4 bottom-8', '-right-3 -bottom-4'][i]}`}>{b}</span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
