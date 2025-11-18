import React from 'react'
import { motion } from 'framer-motion'
import { SiNextdotjs, SiReact, SiTailwindcss, SiVercel, SiAmazonaws, SiKubernetes, SiDocker, SiPostgresql, SiMongodb, SiPython, SiFastapi, SiTypescript, SiGraphql } from 'react-icons/si'

const techs = [
  { icon: SiNextdotjs, name: 'Next.js' },
  { icon: SiReact, name: 'React' },
  { icon: SiTypescript, name: 'TypeScript' },
  { icon: SiTailwindcss, name: 'Tailwind' },
  { icon: SiVercel, name: 'Vercel' },
  { icon: SiAmazonaws, name: 'AWS' },
  { icon: SiDocker, name: 'Docker' },
  { icon: SiKubernetes, name: 'Kubernetes' },
  { icon: SiPostgresql, name: 'Postgres' },
  { icon: SiMongodb, name: 'MongoDB' },
  { icon: SiPython, name: 'Python' },
  { icon: SiFastapi, name: 'FastAPI' },
  { icon: SiGraphql, name: 'GraphQL' },
]

export default function TechWall() {
  return (
    <section id="stack" className="relative py-24">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="flex items-end justify-between mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">The stack we ship</h2>
          <p className="text-white/60 text-sm max-w-md">Proven tools only. We balance innovation with pragmatism for velocity without compromising stability.</p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {techs.map((t, i) => (
            <motion.div key={t.name} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.03 }} className="group relative rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur hover:bg-white/10">
              <t.icon className="w-8 h-8 text-white" aria-hidden />
              <div className="mt-3 font-medium text-white">{t.name}</div>
              <div className="absolute inset-0 rounded-xl ring-2 opacity-0 group-hover:opacity-100 transition" style={{ boxShadow: '0 0 0 1px var(--primary) inset', borderColor: 'var(--primary)' }} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
