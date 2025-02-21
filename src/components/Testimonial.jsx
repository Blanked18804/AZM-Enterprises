import React from 'react'
import Heading from './Heading'
import colon from '../assets/testimony.png'

function Testimonial() {
  const testimonials = [
    {icon: colon, desc: "Using these products has been a game-changer for our poultry farm. The rate of growth of our flock has significantly increased, far exceeding our expectations.", name: "Mian Waheed"},
    {icon: colon, desc: "The products were exceptionaly accelerating the growth rate of our flock. We saw remarkable improvement in a short time. Highly recommend for boosting flock development.", name: "Muhammad Shahzad"}
  ]

  return (
    <section className='py-32 px-16 bg-main-grad flex flex-col gap-16 items-center max-md:px-8'>
      <Heading topLabel="Testimonials" botLabel="What Others Say About Us" customStyle="items-center text-center text-white" h2Style="text-white"/>
      <div className='flex gap-8 max-md:flex-col'>
        {testimonials.map((item, index) => {
          return(
            <div key={index} className='bg-white w-1/2 p-8 rounded-3xl flex flex-col gap-4 max-md:w-full max-md:items-center max-md:text-center'>
              <img className='w-[52px] h-[45px]' src={item.icon} alt="Colon" />
              <p className='reg-16 text-reg-text max-md:reg-14'>{item.desc}</p>
              <h2 className='bold-24 max-md:bold-16'>{item.name}</h2>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Testimonial