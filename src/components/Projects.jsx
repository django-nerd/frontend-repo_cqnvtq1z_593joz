import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTheme } from './ThemeProvider'

const cases = [
  {
    key: 'ultraviolet',
    tag: 'SaaS • DevTools',
    title: 'FluxForge — CI visualizer for monorepos',
    summary: 'Realtime pipeline maps, intelligent caching, and flaky test isolation for massive monorepos.',
    metrics: ['-38% build time', '+24% throughput', 'SOC2 ready'],
  },
  {
    key: 'electricBlue',
    tag: 'Platform • Fintech',
    title: 'Ledgerline — Embedded payouts at scale',
    summary: 'Programmable treasury rails and reconciliation for marketplaces with multi-tenant ledgers.',
    metrics: ['$3B+ processed', '99.99% uptime', 'ISO 27001'],
  },
  {
    key: 'neonGreen',
    tag: 'ML • Healthcare',
    title: 'AtlasDx — Quant insights for clinical ops',
    summary: 'Scheduling optimizer and anomaly detection that reduced patient wait by double digits.',
    metrics: ['-21% wait time', '+12% utilization', 'HIPAA aligned'],
  },
]

export default function Projects() {
  const { setTheme, theme } = useTheme()

  return (
    <section id="work" className="relative py-24">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="flex items-end justify-between mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">Selected work</h2>
          <p className="text-white/60 text-sm max-w-md">Open a case to change the site mood. We tailor aesthetics and systems to the product and audience.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {cases.map((c, idx) => (
            <motion.button key={c.title} onClick={() => setTheme(c.key)} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.05 }} className="group relative rounded-2xl overflow-hidden border border-white/10 bg-white/5 text-left">
              <div className="aspect-video bg-gradient-to-br from-white/10 to-transparent" />
              <div className="p-5">
                <div className="text-xs text-white/70 uppercase tracking-widest">{c.tag}</div>
                <div className="mt-2 text-white font-semibold text-lg">{c.title}</div>
                <p className="mt-2 text-white/70 text-sm">{c.summary}</p>
                <div className="mt-4 flex flex-wrap gap-2 text-xs text-white/70 font-mono">
                  {c.metrics.map(m => (
                    <span key={m} className="px-2 py-1 rounded bg-black/40 border border-white/10">{m}</span>
                  ))}
                </div>
              </div>
              <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition" style={{ boxShadow: 'inset 0 0 0 2px var(--primary)' }} />
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        <motion.div key={theme.name} className="fixed left-0 right-0 bottom-0 h-24 pointer-events-none" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} style={{ background: `radial-gradient(60% 60% at 50% 100%, var(--glow), transparent)` }} />
      </AnimatePresence>
    </section>
  )
}
