import React from 'react'
import Form from './Form'
import Heading from './Heading'
import ContactInfo from './ContactInfo'
import SocialInfo from './SocialInfo'

function Contact() {

  return (
    <section id='contact-us' className='px-16 py-32 bg-main-grad flex gap-32 items-center max-md:px-8 max-lg:flex-col'>
      <div className='w-1/2 flex flex-col gap-8 max-lg:w-full max-lg:text-center max-lg:items-center'>
        <Heading topLabel="Contact Us" botLabel="Get In Touch With Us" customStyle="text-white" h2Style="text-white"/>
        <p className='reg-16 text-white max-md:reg-14'>We're here to help! Please feel free to contact us with any questions or concerns. We'll get back to you as soon as possible.</p>
        <ContactInfo customStyle='flex-col max-lg:items-center' />
        <SocialInfo />
      </div>
      <Form customStyle='max-lg:w-[70%] max-md:w-full' />
    </section>
  )
}

export default Contact