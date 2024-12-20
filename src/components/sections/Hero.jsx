import React from 'react'
import Navbar from './Navbar'
import heroBg from '../../assets/hero-bg.jpg'

function Hero() {
  return (
    <section>
      <Navbar />
      <div className='px-28 bg-cover bg-center text-white text-center flex flex-col gap-8 items-center justify-center' style={{height: "calc(100vh - 170px" ,backgroundImage: `url(${heroBg})`}}>
        <h1 className='bold-40'>Ensuring Health and Vitality in Every Flock</h1>
        <p className='reg-16 w-[70%]'>At AZM Enterprises, we advance poultry health with innovative veterinary solutions. Our Products and supplements protect, strengthen, and optimize bird well-being.</p>
        <a href="/" className='btn'>View Products</a>
      </div>
    </section>
  )
}

export default Hero