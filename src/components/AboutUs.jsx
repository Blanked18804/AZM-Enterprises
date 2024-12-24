import React from 'react'
import Heading from './Heading'
import aboutUs from '../assets/about-us.png'

function AboutUs() {
  return (
    <section id='about-us' className='px-16 flex gap-16 items-center max-md:px-8 max-lg:flex-col-reverse max-lg:text-center'>
        <div className='w-1/2 flex flex-col gap-8 max-lg:w-full'>
            <Heading topLabel="About Us" botLabel="Our Journey From The Beginning" />
            <p className='reg-16 text-reg-text max-md:reg-14'>AZM Enterprises was founded in 2005 with company headquarters at Muhammad Khan Town, Faisalabad, Pakistan. AZM Enterprises provides products that promote animal well-being and long-term productivity through the careful and conscientious implementation of science. By consistently providing exceptional quality, our products are recognized as providing security to both distributors and consumers. Strong relationships with our distribution partners ensure consistent product availability throughout the region. AZM Enterprises consistently delivers world-class products and aims to keep delivering world-class products even in the future.</p>
        </div>

        <img className='w-1/2 max-lg:w-full' src={aboutUs} alt="labortary image" />
    </section>
  )
}

export default AboutUs