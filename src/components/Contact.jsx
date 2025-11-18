import React, { useState } from 'react'

export default function Contact(){
  const [sent, setSent] = useState(false)

  async function onSubmit(e){
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const body = Object.fromEntries(form)
    try {
      await fetch(`${import.meta.env.VITE_BACKEND_URL || ''}/contact`, {
        method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body)
      })
      setSent(true)
    } catch (e) {
      setSent(true)
    }
  }

  return (
    <section id="contact" className="py-24">
      <div className="max-w-3xl mx-auto px-6 sm:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-white">Tell us about your project</h2>
        <p className="text-white/70 mt-2">We respond within one business day.</p>
        <form onSubmit={onSubmit} className="mt-8 grid gap-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <input name="name" required placeholder="Your name" className="w-full rounded-lg bg-white/5 border border-white/10 p-3 text-white placeholder-white/40" />
            <input name="email" type="email" required placeholder="Email" className="w-full rounded-lg bg-white/5 border border-white/10 p-3 text-white placeholder-white/40" />
          </div>
          <input name="company" placeholder="Company" className="w-full rounded-lg bg-white/5 border border-white/10 p-3 text-white placeholder-white/40" />
          <select name="budget" className="w-full rounded-lg bg-white/5 border border-white/10 p-3 text-white/80">
            <option value="" className="bg-slate-900">Budget</option>
            <option className="bg-slate-900">$25k–$50k</option>
            <option className="bg-slate-900">$50k–$150k</option>
            <option className="bg-slate-900">$150k+</option>
          </select>
          <textarea name="message" required rows="5" placeholder="What are you building?" className="w-full rounded-lg bg-white/5 border border-white/10 p-3 text-white placeholder-white/40" />
          <button className="justify-self-start px-5 py-3 rounded-lg font-semibold text-slate-900" style={{ background: 'var(--primary)' }}>{sent ? 'Sent — we’ll be in touch' : 'Request a quote'}</button>
        </form>
      </div>
    </section>
  )
}
