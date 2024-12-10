import React from 'react'
import Heading from '../reuse/Heading'
import colon from '../../assets/testimony.png'

function Testiomonial() {
  const testimonials = [
    {icon: colon, desc: "Using these products has been a game-changer for our poultry farm. The rate of growth of our flock has significantly increased, far exceeding our expectations.", name: "Mian Waheed"},
    {icon: colon, desc: "The products were exceptionaly accelerating the growth rate of our flock. We saw remarkable improvement in a short time. Highly recommend for boosting flock development.", name: "Muhammad Shahzad"}
  ]

  return (
    <section className='py-32 px-16 bg-main-grad flex flex-col gap-16 items-center'>
      <Heading topLabel="Testimonials" botLabel="What Others Say About Us" customStyle="items-center text-white" h2Style="text-white"/>
      <div className='flex gap-8'>
        {testimonials.map((item, index) => {
          return(
            <div key={index} className='bg-white w-half p-8 rounded-3xl flex flex-col gap-4'>
              <img className='w-[52px] h-[45px]' src={item.icon} alt="Colon" />
              <p>{item.desc}</p>
              <h2 className='bold-24'>{item.name}</h2>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Testiomonial