import React from 'react'
import logo from '../assets/logo.png'


function Logo() {
  return (
    <div className='flex gap-2 items-center'>
        <img className='size-[60px] max-md:size-12' src={logo} alt="logo" />
        <h1 className='bold-24 max-md:bold-16'>AZM Enterprises</h1>
    </div >
  )
}

export default Logo