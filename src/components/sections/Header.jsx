import React, { useEffect, useState } from 'react'
import logo from '../../assets/logo.png'
import phone from '../../assets/phone.png'
import mail from '../../assets/mail.png'
import adress from '../../assets/adress.png'
import Nav from './Nav'

function Header() {
  
  const info = [
    {icon: phone, text: '+92 300 6606128'},
    {icon: mail, text: 'azmenterprises@outlook.com'},
    {icon: adress, text: 'p6446 Muhammad Khan Town Mansoorabad Faisalabad, Pakistan'}
  ]
  const social = [
    {icon: phone},
    {icon: mail}
  ]

  return (
    <header id='header'>
      <div className='bg-main-grad text-white px-16 py-5 flex justify-between'>
        <div className='flex gap-4'>
          {info.map((item, index) => {
            return(
              <div key={index} className='flex gap-1 items-center'>
                <img src={item.icon} alt="icon" />
                <p className='reg-14'>{item.text}</p>
              </div>
            )
          })}
        </div>
        <div className='flex gap-4'>
          {social.map((item, index) => {
            return(
              <div key={index} className='flex gap-1 items-center'>
                <img src={item.icon} alt="icon" />
                <p className='reg-14'>{item.text}</p>
              </div>
            )
          })}
        </div>
      </div >
      <div className='px-16 py-5 bg-white sticky top-0 flex justify-between items-center'>
        <div className='flex gap-2 items-center'>
          <img className='size-[60px]' src={logo} alt="logo" />
          <h1 className='bold-24'>AZM Enterprises</h1>
        </div >
        <Nav />
      </div>
    </header>
  )
}

export default Header