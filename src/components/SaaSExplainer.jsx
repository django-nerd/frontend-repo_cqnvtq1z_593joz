import React from 'react'
import { motion } from 'framer-motion'

export default function SaaSExplainer(){
  const items = [
    { k: 'Design System', v: 'Tokenized UI kit + a11y baked-in' },
    { k: 'Auth & Billing', v: 'SSO, roles, Stripe, metering' },
    { k: 'Data Layer', v: 'Typed SDKs, migrations, backups' },
    { k: 'Observability', v: 'Tracing, logs, SLOs, on-call' },
    { k: 'Compliance', v: 'SOC2-ready controls from day 0' },
  ]
  return (
    <section id="saas" className="py-24">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="flex items-end justify-between mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">Our SaaS playbook</h2>
          <p className="text-white/60 text-sm max-w-md">Everything you need to launch and scale with confidence. We ship platform primitives so features land fast.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="rounded-2xl border border-white/10 bg-black/40 p-6 font-mono text-sm text-white/80">
            <pre>{`// app.config.ts\nexport default defineConfig({\n  ui: { theme: 'system', tokens: true },\n  auth: { sso: true, roles: ['owner','admin','member'] },\n  billing: { provider: 'stripe', metering: true },\n  data: { primary: 'postgres', analytics: 'clickhouse' },\n})`}</pre>
          </motion.div>
          <div className="grid gap-4">
            {items.map((i, idx) => (
              <motion.div key={i.k} initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.03 }} className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 p-4">
                <span className="text-white font-medium">{i.k}</span>
                <span className="text-white/70 text-sm">{i.v}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
