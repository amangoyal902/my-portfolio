import { useState } from 'react'
import { Mail, Linkedin, Github, MapPin, CheckCircle2 } from 'lucide-react'
import SectionTitle, { Reveal } from './SectionTitle'
import { links } from '../data/projects'
const field = 'w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-slate-500 outline-none transition focus:border-fuchsia-400 focus:shadow-[0_0_20px_rgba(192,38,211,.3)]'
export default function Contact() {
  const [v, setV] = useState({ name: '', email: '', subject: '', message: '' })
  const [err, setErr] = useState({}), [ok, setOk] = useState(false)
  const set = (k) => (e) => setV({ ...v, [k]: e.target.value })
  const submit = (e) => {
    e.preventDefault()
    const x = {}
    if (v.name.trim().length < 2) x.name = 'Please enter your name'
    if (!/^\S+@\S+\.\S+$/.test(v.email)) x.email = 'Enter a valid email'
    if (v.subject.trim().length < 3) x.subject = 'Please add a subject'
    if (v.message.trim().length < 10) x.message = 'Message must be at least 10 characters'
    setErr(x)
    if (!Object.keys(x).length) { // TODO: connect to EmailJS / Formspree here
      setOk(true); setV({ name: '', email: '', subject: '', message: '' }); setTimeout(() => setOk(false), 5000)
    }
  }
  const info = [[Mail, 'amanskgoyal@gmail.com', links.email], [Linkedin, 'https://www.linkedin.com/in/aman-goyal2003', links.linkedin], [Github, 'https://github.com/amangoyal902', links.github], [MapPin, 'Jaipur, Rajasthan, India']]
  const Err = ({ k }) => err[k] ? <p className="mt-1 text-xs text-pink-400" role="alert">{err[k]}</p> : null
  return (
    <section id="contact" className="section">
      <SectionTitle eyebrow="Get in touch" title="Let's Build Something Amazing" />
      <div className="grid gap-10 lg:grid-cols-2">
        <Reveal>
          <p className="text-slate-400">Hiring for a frontend role or have a project in mind? Send a message — I'd love to hear from you.</p>
          <ul className="mt-6 space-y-4">
            {info.map(([Icon, t, href]) => (
              <li key={t}>{href ? <a href={href} target="_blank" rel="noreferrer" className="glass glow-hover flex items-center gap-3 p-4 text-white"><Icon size={18} className="text-fuchsia-400" />{t}</a>
                : <div className="glass flex items-center gap-3 p-4 text-white"><Icon size={18} className="text-fuchsia-400" />{t}</div>}</li>
            ))}
          </ul>
        </Reveal>
        <Reveal delay={0.1}>
          <form onSubmit={submit} noValidate className="glass space-y-4 p-6 sm:p-8">
            <div className="grid gap-4 sm:grid-cols-2">
              {['name', 'email'].map((k) => (
                <div key={k}><label htmlFor={k} className="mb-1 block text-xs capitalize text-slate-400">{k}</label>
                  <input id={k} type={k === 'email' ? 'email' : 'text'} value={v[k]} onChange={set(k)} className={field} placeholder={`Your ${k}`} aria-invalid={!!err[k]} /><Err k={k} /></div>
              ))}
            </div>
            <div><label htmlFor="subject" className="mb-1 block text-xs text-slate-400">Subject</label>
              <input id="subject" value={v.subject} onChange={set('subject')} className={field} placeholder="Subject" /><Err k="subject" /></div>
            <div><label htmlFor="message" className="mb-1 block text-xs text-slate-400">Message</label>
              <textarea id="message" rows={5} value={v.message} onChange={set('message')} className={field} placeholder="Tell me about your project..." /><Err k="message" /></div>
            <button type="submit" className="btn-primary w-full">Send Message</button>
            {ok && <p className="flex items-center gap-2 rounded-xl bg-emerald-500/10 p-3 text-sm text-emerald-300" role="status"><CheckCircle2 size={16} />Thanks! Your message has been sent.</p>}
          </form>
        </Reveal>
      </div>
    </section>
  )
}
