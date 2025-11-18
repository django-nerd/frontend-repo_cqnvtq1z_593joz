import React from 'react'

export default function Footer(){
  return (
    <footer className="py-12 border-t border-white/10 bg-black/20">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-white/60 text-sm">© {new Date().getFullYear()} Neurodek. All rights reserved.</p>
        <div className="flex items-center gap-6 text-white/70 text-sm">
          <a href="#services" className="hover:text-white">Services</a>
          <a href="#work" className="hover:text-white">Work</a>
          <a href="#contact" className="hover:text-white">Contact</a>
        </div>
      </div>
    </footer>
  )
}
