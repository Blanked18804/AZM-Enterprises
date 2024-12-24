import React from 'react'
import Heading from './Heading'
import electrolytes from '../assets/electrolytes.png'
import antibiotics from '../assets/antibiotics.png'
import livertonics from '../assets/livertonics.png'
import multiVitamins from '../assets/multi-vitamins.png'

function ProductType() {
    const productAssets = [
        {icon: electrolytes, heading: "Electrolytes", desc: "Essential for maintaining fluid balance and preventing dehydration, especially during heat stress and transportation. Electrolytes ensure your hens stay hydrated and healthy."},
        {icon: antibiotics, heading: "Antibiotics", desc: "Vital for preventing and treating bacterial infections in poultry. Our antibiotics help maintain a healthy flock, ensuring quick recovery and minimizing illness impact."},
        {icon: livertonics, heading: "Livertonics", desc: "Supports liver function, aiding digestion, detoxification, and nutrient metabolism. Enhances overall health, helping your hens efficiently process nutrients."},
        {icon: multiVitamins, heading: "Multi Vitamins", desc: "Provide essential vitamins and minerals for growth, immunity, and vitality. Boost your hens' immune systems, enhance growth rates, and improve overall well-being."},
    ]

  return (
    <section className='px-16 flex flex-col gap-16 max-md:px-8'>
        <div className='flex flex-col gap-8 items-center'>
            <Heading topLabel="Product Types" botLabel="What We Offer" customStyle="items-center"/>
            <p className='reg-16 text-reg-text text-center w-[75%] max-md:reg-14 max-md:w-full'>We are committed to becoming one of the top businesses in the world by introducing innovations and providing top-notch veterinary and poultry products with excellent services. This version emphasizes your commitment and clarifies your focus on both veterinary and poultry products. We aim to contribute and mold the future of poultry health through disease prevention in order to improve the future of poultry.</p>
        </div>
        <div className='flex gap-8 flex-wrap max-md:flex-row max-md:flex-nowrap max-md:overflow-x-auto max-md:snap-x max-md:snap-mandatory'>
          {productAssets.map((item, index) => {
            return(
              <div key={index} className='p-8 border-2 border-border rounded-3xl flex flex-col gap-4 max-md:min-w-[70%] max-md:items-center max-md:text-center max-md:snap-center' style={{width: 'calc(50% - 16px)'}}>
                <img className='size-[60px]' src={item.icon} alt={item.heading} />
                <h2 className='bold-24'>{item.heading}</h2>
                <p className='reg-16 text-reg-text max-md:reg-14'>{item.desc}</p>
              </div>
            )
          })}
        </div>
    </section>
  )
}

export default ProductType