import React from 'react'
import { motion } from 'framer-motion'

const services = [
  {
    title: 'Product Engineering',
    desc: 'From 0→1 to scale. Web, mobile, and platform teams that ship predictably.',
    bullets: ['SaaS, platforms, marketplaces', 'API-first architectures', 'Perf, reliability, observability'],
  },
  {
    title: 'Foundations & Infra',
    desc: 'DevEx and infrastructure that accelerates teams without adding drag.',
    bullets: ['CI/CD, IaC, platform engineering', 'Cloud cost + performance tuning', 'SRE, resilience, compliance'],
  },
  {
    title: 'AI & Data Systems',
    desc: 'Pragmatic ML and data products with measurable outcomes.',
    bullets: ['Retrieval, agents, evals', 'Realtime analytics pipelines', 'Governance & safety by design'],
  },
]

export default function Services(){
  return (
    <section id="services" className="py-24">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="flex items-end justify-between mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">What we do</h2>
          <p className="text-white/60 text-sm max-w-md">Engagement models from seed-stage velocity to enterprise-grade programs.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div key={s.title} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="text-white font-semibold text-lg">{s.title}</div>
              <p className="mt-2 text-white/70 text-sm">{s.desc}</p>
              <ul className="mt-4 space-y-2 text-white/70 text-sm list-disc pl-5">
                {s.bullets.map(b => <li key={b}>{b}</li>)}
              </ul>
              <div className="mt-6">
                <a href="#contact" className="text-sm font-semibold" style={{ color: 'var(--primary)' }}>Get a quote →</a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
