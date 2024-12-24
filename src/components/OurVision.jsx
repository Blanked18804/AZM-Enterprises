import React from 'react'
import Heading from './Heading'
import mission from '../assets/mission.png'
import quality from '../assets/Quality.png'
import innovations from '../assets/innovations.png'


function OurVision() {
    const visionAsset = [
      {icon: mission, heading: "Mission", desc: "Our mission is to empower poultry farmers with reliable and effective medicines, enhancing the vitality and productivity of their flocks."},
      {icon: quality, heading: "Quality", desc: "We ensure the highest standards of quality in every product through premium ingredients and rigorous testing of the product."},
      {icon: innovations, heading: "Innovations", desc: "We embrace cutting-edge technologies and scientific advancements to develop innovative solutions for poultry health management."},
    ]

  return (
    <section className='px-16 flex flex-col gap-16 max-md:px-8'>
        <div className='flex flex-col gap-8 items-center'>
            <Heading topLabel="Our Vision" botLabel="What We Aim" customStyle="items-center"/>
            <p className='reg-16 text-reg-text text-center w-[75%] max-md:reg-14 max-md:w-full'>We are committed to becoming one of the top businesses in the world by introducing innovations and providing top-notch veterinary and poultry products with excellent services. This version emphasizes your commitment and clarifies your focus on both veterinary and poultry products. We aim to contribute and mold the future of poultry health through disease prevention in order to improve the future of poultry.</p>
        </div>
        <div className='flex gap-8 max-md:overflow-x-auto max-md:snap-x max-md:snap-mandatory'>
          {visionAsset.map((item, index) => {
            return(
              <div key={index} className='w-1/3 p-8 border-2 border-border rounded-3xl flex flex-col gap-4 items-center text-center max-md:min-w-[80%] max-md:px-4 max-md:snap-center'>
                <img className='size-[60px]' src={item.icon} alt={item.heading} />
                <h2 className='bold-24 max-md:bold-16'>{item.heading}</h2>
                <p className='reg-16 text-reg-text max-md:reg-14'>{item.desc}</p>
              </div>
            )
          })}
        </div>
    </section>
  )
}

export default OurVision