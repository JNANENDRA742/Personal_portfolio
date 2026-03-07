import { useState , useEffect } from 'react'

import './App.css'
import './index.css'
import Navbar from './components/Navbar'
import ParticleBackground from './components/ParticlesBackground'
import About from './sections/About'
// import Skill from './sections/Skill'
import Skills from './sections/Skills'
import Projects from './sections/Projects'
import Footer from './sections/Footer'
import Contact from './sections/Contact'
import TopButton from './components/TopButton'
import CursorCursor from './components/CustomCursor'


function App() {

  return (
    <div className='bg-black text-white'>
      <CursorCursor />
      <TopButton />
      <ParticleBackground />
      <Navbar />


      <section id="about" className="scroll-mt-20 ">
        <About />
      </section>

      
      <section id="skills" className="scroll-mt-20 reveal">
        <Skills />
    {/* <Skill /> */}
      </section>

      <section id="projects" className="scroll-mt-20 min-h-screen reveal">
        <Projects />
      </section>

      <section id="contact" className="scroll-mt-20 reveal">
        <Contact />
      </section>

      <Footer className="scroll-mt-20 reveal"/>
    </div>
  )
}

export default App
