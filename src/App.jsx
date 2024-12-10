import { useState } from 'react'
import Hero from './components/sections/Hero'
import AbouUs from './components/sections/AbouUs'
import Filler from './components/sections/Filler'
import OurVision from './components/sections/OurVision'
import ProductType from './components/sections/ProductType'
import Testiomonial from './components/sections/Testiomonial'
import Products from './components/sections/Products'
import CeoMessage from './components/sections/CeoMessage'
import Contact from './components/sections/Contact'

function App() {

  return (
    <>
      <Hero />
      <AbouUs />
      <Filler />
      <OurVision />
      <ProductType />
      <Testiomonial />
      <Products />
      <CeoMessage />
      <Contact />
    </>
  )
}

export default App
