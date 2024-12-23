import React, { useState } from 'react'
import Header from './Header'
import heroBg from '../assets/hero-bg.jpg'

function Hero() {

  const [headerHeight, setHeaderHeight] = useState(0);

  console.log(headerHeight)

  return (
    <section id='hero'>
      <Header setHeaderHeight={setHeaderHeight} />
      <div className='px-16 bg-cover bg-center text-white text-center flex flex-col gap-8 items-center justify-center' style={{height: `calc(100vh - ${headerHeight}px` ,backgroundImage: `url(${heroBg})`}}>
        <h1 className='bold-40'>Ensuring Health and Vitality in Every Flock</h1>
        <p className='reg-16 w-[65%] max-lg:w-full'>At AZM Enterprises, we advance poultry health with innovative veterinary solutions. Our Products and supplements protect, strengthen, and optimize bird well-being.</p>
        <a href="/" className='btn'>View Products</a>
      </div>
    </section>
  )
}

export default Hero