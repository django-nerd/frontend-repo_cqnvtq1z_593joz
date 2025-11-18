import React from 'react'
import { motion } from 'framer-motion'

const posts = [
  { title: 'Ship velocity without breaking safety', tag: 'Process', tldr: 'How we balance speed with SLOs and runbooks that scale.' },
  { title: 'Evaluating AI systems in production', tag: 'AI/ML', tldr: 'Beyond benchmarks: continuous eval pipelines tied to business KPIs.' },
  { title: 'Designing DX for multi-tenant SaaS', tag: 'DevEx', tldr: 'Patterns for permissions, metering, and observability from day 0.' },
]

export default function Blog(){
  return (
    <section id="blog" className="py-24">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="flex items-end justify-between mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">Insights</h2>
          <p className="text-white/60 text-sm max-w-md">Short, technical notes on building and operating modern software systems.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {posts.map((p, i) => (
            <motion.article key={p.title} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="text-xs uppercase tracking-widest text-white/60">{p.tag}</div>
              <h3 className="mt-2 text-white font-semibold">{p.title}</h3>
              <p className="mt-2 text-white/70 text-sm">{p.tldr}</p>
              <a href="#" className="mt-4 inline-flex text-sm font-semibold" style={{ color: 'var(--primary)' }}>Read →</a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
