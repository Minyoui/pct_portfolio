import './App.css';
import Navbar from './components/navbar/navbar';
import Hero from './components/hero/hero'
import SubHero from './components/sub-hero/sub-hero';
import React, { Suspense, useEffect } from 'react';


//DarkMode
import { useDarkMode } from './context/DarkModeContext';

const DarkModeToggle = React.lazy(() => import ('./components/DarkModeToggle/DarkModeToggle'))
const About = React.lazy(() => import ('./components/about/about'))
const Skills = React.lazy(() => import ('./components/skills/skills'))
const Projects = React.lazy(() => import ('./components/projects/projects'))
const Footer = React.lazy(() => import ('./components/footer/footer'))
const Contact = React.lazy(() => import ('./components/contact/contact'))
const Insight = React.lazy(() => import ('./components/insight/insight'))

function App() {
  const { darkMode } = useDarkMode();

  useEffect(() => {
    document.body.classList.toggle('light', darkMode);
  }, [darkMode]);

  return (
    <>
      <Navbar />
      <Hero/>
      <SubHero />
      <Suspense fallback={<div>Loading...</div>}/>
      <About />
      <Skills />
      <Projects />
      <Insight />
      <Contact />
      <Footer />
      <DarkModeToggle />
    </>
  )
}

export default App
