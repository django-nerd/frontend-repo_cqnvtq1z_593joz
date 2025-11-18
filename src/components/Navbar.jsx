import React from 'react'

export default function Navbar(){
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-black/20 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 text-white font-semibold">
          <span className="inline-block w-2.5 h-2.5 rounded-full" style={{ background: 'var(--primary)' }} /> Neurodek
        </a>
        <nav className="hidden md:flex items-center gap-6 text-white/80">
          <a href="#services" className="hover:text-white">Services</a>
          <a href="#work" className="hover:text-white">Work</a>
          <a href="#saas" className="hover:text-white">SaaS</a>
          <a href="#stack" className="hover:text-white">Stack</a>
          <a href="#blog" className="hover:text-white">Insights</a>
        </nav>
        <a href="#contact" className="hidden sm:inline-flex px-4 py-2 rounded-md font-semibold text-slate-900" style={{ background: 'var(--primary)' }}>Start</a>
      </div>
    </header>
  )
}
