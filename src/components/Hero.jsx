import React from 'react'
import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      <div className="absolute inset-0" aria-hidden>
        <div className="absolute inset-0" style={{ background: 'var(--bg-grad)' }} />
        <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_40%,rgba(255,255,255,0.06),transparent)]" />
        <div className="absolute inset-0 pointer-events-none" style={{ boxShadow: 'inset 0 0 200px rgba(0,0,0,0.6)' }} />
      </div>

      <div className="absolute top-0 right-0 w-full h-full opacity-90">
        <Spline scene="https://prod.spline.design/VyGeZv58yuk8j7Yy/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative max-w-7xl mx-auto w-full px-6 sm:px-8">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 py-24">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-white/5 text-white/80 border border-white/10 backdrop-blur">
                <span className="w-1.5 h-1.5 rounded-full" style={{ background: 'var(--primary)' }} /> Neurodek • Software Engineering
              </span>
              <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white">
                Building serious software for teams that ship
              </h1>
              <p className="mt-5 text-lg text-white/80 max-w-xl">
                We design and engineer scalable products and platforms — from venture-backed SaaS to high-stakes enterprise systems — with an emphasis on performance, reliability, and developer experience.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <a href="#contact" className="px-5 py-3 rounded-lg font-semibold text-slate-900" style={{ background: 'var(--primary)' }}>Start a project</a>
                <a href="#work" className="px-5 py-3 rounded-lg font-semibold text-white border border-white/10 hover:border-white/20 transition">See our work</a>
              </div>
              <div className="mt-8 text-sm text-white/60 font-mono">
                <div className="bg-black/40 border border-white/10 rounded-lg p-4">
                  <p><span className="text-emerald-400">$</span> npx create-neurodek-app</p>
                  <p className="text-white/50"># scaffolds a production-grade SaaS with best practices</p>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-6" aria-hidden>
          </div>
        </div>
      </div>
    </section>
  )
}
