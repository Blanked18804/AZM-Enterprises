import React from 'react'
import Heading from '../reuse/Heading'
import aboutUs from '../../assets/about-us.png'

function AbouUs() {
  return (
    <section id='about-us' className='px-16 flex gap-16 items-center'>
        <div className='w-half flex flex-col gap-8'>
            <Heading topLabel="About Us" botLabel="Our Journey From The Beginning" />
            <p>AZM Enterprises was founded in 2005 with company headquarters at Muhammad Khan Town, Faisalabad, Pakistan. AZM Enterprises provides products that promote animal well-being and long-term productivity through the careful and conscientious implementation of science. By consistently providing exceptional quality, our products are recognized as providing security to both distributors and consumers. Strong relationships with our distribution partners ensure consistent product availability throughout the region. AZM Enterprises consistently delivers world-class products and aims to keep delivering world-class products even in the future.</p>
        </div>

        <img className='w-half' src={aboutUs} alt="labortary image" />
    </section>
  )
}

export default AbouUs