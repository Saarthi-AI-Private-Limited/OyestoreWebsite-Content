import { useState } from 'react'
import './App.css'

import Hero from './components/Hero'
import Trips from './components/Trips'
import TravelPackages from './components/TravelPages'
import TestimonialSection from './components/TestimonialSection'
import Banners from './components/Banners'
import Footer from './components/Footer'
import Overlay from './components/Overlay'
function App() {

  return (
    <>
     <Hero />
     <Trips />
     <Overlay/>
     <TravelPackages />
     <TestimonialSection />
     <Banners />
     <Footer />
      
    </>
  )
}

export default App
