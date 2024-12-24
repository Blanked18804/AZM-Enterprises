import React from 'react'
import Nav from './Nav'
import logo from '../assets/logo.png'
import Logo from './Logo'

function Footer() {

  return (
    <footer className='px-16 pb-8 flex flex-col gap-16 items-center max-md:px-8'>
        <Logo />
        <div className='flex flex-col gap-8 items-center w-full'>
            <Nav />
            <div className='h-[2px] w-full bg-main'></div>
            <div className='flex justify-between w-full'>
                <p className='reg-14 text-reg-text max-md:reg-14'>Copyright©2024 by azmenterprises</p>
                <div className='flex gap-4 items-center'>
                    <p className='reg-14 text-reg-text max-md:reg-12'>Terms of Use</p>
                    <span className='w-[2px] h-4 bg-reg-text'></span>
                    <p className='reg-14 text-reg-text max-md:reg-12'>Privacy Ploicy</p>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer