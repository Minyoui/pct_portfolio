import { useState } from 'react'
import Navbar from './components/navbar/navbar';
import Hero from './components/hero/hero'
import SubHero from './components/sub-hero/sub-hero';

function App() {

  return (
    <>
      <Navbar />
      <Hero/>
      <SubHero />
    </>
  )
}

export default App
