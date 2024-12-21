import React from 'react'
import Hero from '../components/sections/Hero'
import AbouUs from '../components/sections/AbouUs'
import Filler from '../components/sections/Filler'
import OurVision from '../components/sections/OurVision'
import ProductType from '../components/sections/ProductType'
import Testimonial from '../components/sections/Testimonial'
import Products from '../components/sections/Products'
import CeoMessage from '../components/sections/CeoMessage'
import Contact from '../components/sections/Contact'
import Footer from '../components/sections/Footer'

function Home() {
  return (
    <>
      <Hero />
      <AbouUs />
      <Filler />
      <OurVision />
      <ProductType />
      <Testimonial />
      <Products />
      <CeoMessage />
      <Contact />
      <Footer />
    </>
  )
}

export default Home