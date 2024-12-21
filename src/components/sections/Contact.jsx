import React from 'react'
import Form from './Form'
import Heading from '../reuse/Heading'
import phone from '../../assets/phone.png'
import mail from '../../assets/mail.png'
import adress from '../../assets/adress.png'

function Contact() {
  const info = [
    {icon: phone, text: '+92 300 6606128'},
    {icon: mail, text: 'azmenterprises@outlook.com'},
    {icon: adress, text: 'p6446 Muhammad Khan Town Mansoorabad Faisalabad, Pakistan'}
  ]

  return (
    <section id='contact-us' className='px-16 py-32 bg-main-grad flex gap-32'>
      <div className='w-half flex flex-col gap-8'>
        <Heading topLabel="Contact Us" botLabel="Get In Touch With Us" customStyle="text-white" h2Style="text-white"/>
        <p className='reg-16 text-white'>We're here to help! Please feel free to contact us with any questions or concerns. We'll get back to you as soon as possible.</p>
        <div className='flex flex-col gap-4'>
          {info.map((item, index) => {
            return(
              <div key={index} className='flex gap-2 items-center'>
                <img src={item.icon} alt="info" />
                <p className='reg-16 text-white'>{item.text}</p>
              </div>
            )
          })}
        </div>
      </div>
      <Form />
    </section>
  )
}

export default Contact