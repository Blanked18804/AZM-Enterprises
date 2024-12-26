import React, { useState } from 'react'
import Header from './Header'
import heroBg from '../assets/hero-bg.jpg'
import { Link, useNavigate } from 'react-router-dom';

function Hero() {

  const navigate = useNavigate()
  const [headerHeight, setHeaderHeight] = useState(0);

  const handleHeroScorll = (event) => {
    event.preventDefault()
    navigate('/')
    setTimeout(() => {
        const element = document.getElementById('products')
        element.scrollIntoView({ behavior:'smooth' })
    }, 0)
  }

  return (
    <section id='hero'>
      <Header setHeaderHeight={setHeaderHeight} />
      <div className='px-16 bg-cover bg-center text-white text-center flex flex-col gap-8 items-center justify-center' style={{height: `calc(100vh - ${headerHeight}px` ,backgroundImage: `url(${heroBg})`}}>
        <h1 className='bold-40 max-md:bold-24'>Ensuring Health and Vitality in Every Flock</h1>
        <p className='reg-16 w-[65%] max-lg:w-full max-md:reg-12'>At AZM Enterprises, we advance poultry health with innovative veterinary solutions. Our Products and supplements protect, strengthen, and optimize bird well-being.</p>
        <Link to='/' onClick={(event) => handleHeroScorll(event)} className='btn max-md:bold-14'>View Products</Link>
      </div>
    </section>
  )
}

export default Hero