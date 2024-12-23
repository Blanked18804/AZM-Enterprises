import React from 'react'
import Hero from '../components/Hero'
import AboutUs from '../components/AboutUs'
import Filler from '../components/Filler'
import OurVision from '../components/OurVision'
import ProductType from '../components/ProductType'
import Testimonial from '../components/Testimonial'
import Products from '../components/Products'
import CeoMessage from '../components/CeoMessage'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

function Home() {
  return (
    <>
      <Hero />
      <AboutUs />
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