import { useState } from 'react'
import Navbar from './components/navbar/navbar';
import Hero from './components/hero/hero'
import SubHero from './components/sub-hero/sub-hero';
import About from './components/about/about';
import Skills from './components/skills/skills';
import Projects from './components/projects/projects';
import Footer from './components/footer/footer';

function App() {

  return (
    <>
      <Navbar />
      <Hero/>
      <SubHero />
      <About />
      <Skills />
      <Projects />
      <Footer />
    </>
  )
}

export default App
