import React from 'react'
import literature from '../assets/literature.png'
import symposium from '../assets/symposium.png'
import salesRepresentative from '../assets/sales-representative.png'


function Filler() {

    const fillerAssets = [
        {icon: literature, heading: "Literature", desc: "Access detailed literature of products to stay informed about their benefits, usage, and scientific foundations."},
        {icon: symposium, heading: "Symposium", desc: "Symposiums and consultation meetings are organized about new products and medications."},
        {icon: salesRepresentative, heading: "Sales Representative", desc: "Top-tier sales reps and distributors are spread across Pakistan marketing and promoting our products."}
    ]

  return (
    <section className='bg-main-grad py-32 px-16 text-white flex gap-32 max-md:flex-col max-md:items-center'>
        {fillerAssets.map((item, index) => {
            return(
                <div key={index} className='w-1/3 flex flex-col gap-4 items-center text-center max-md:w-full'>
                    <img className='size-[60px]' src={item.icon} alt={literature} />
                    <h2 className='bold-24'>{item.heading}</h2>
                    <p className='reg-16'>{item.desc}</p>
                </div>
            )
        })}
    </section>
  )
}

export default Filler