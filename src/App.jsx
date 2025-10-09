import Navbar from './components/navbar/navbar';
import Hero from './components/hero/hero'
import SubHero from './components/sub-hero/sub-hero';
import React, { Suspense } from 'react';

const About = React.lazy(() => import ('./components/about/about'))
const Skills = React.lazy(() => import ('./components/skills/skills'))
const Projects = React.lazy(() => import ('./components/projects/projects'))
const Footer = React.lazy(() => import ('./components/footer/footer'))
const Contact = React.lazy(() => import ('./components/contact/contact'))

function App() {

  return (
    <>
      <Navbar />
      <Hero/>
      <SubHero />
      <Suspense fallback={<div>Loading...</div>}/>
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  )
}

export default App
