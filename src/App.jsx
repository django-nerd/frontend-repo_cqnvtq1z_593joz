import React from 'react'
import ThemeProvider from './components/ThemeProvider'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Projects from './components/Projects'
import SaaSExplainer from './components/SaaSExplainer'
import TechWall from './components/TechWall'
import Blog from './components/Blog'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen text-white" style={{ background: 'var(--bg-grad)' }}>
        <Navbar />
        <Hero />
        <Services />
        <Projects />
        <SaaSExplainer />
        <TechWall />
        <Blog />
        <Contact />
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default App
