import React from 'react'
import logo from '../../assets/logo.png'

function Footer() {
    const nav = ['Home', 'About Us', 'Products', 'Contact Us']

  return (
    <section className='px-16 pb-8'>
        <footer className='flex flex-col gap-16 items-center'>
            <div className='flex gap-2 items-center'>
                <img className='size-[60px]' src={logo} alt="logo" />
                <h1 className='bold-24'>AZM Enterprises</h1>
            </div >
            <div className='flex flex-col gap-8 items-center w-full'>
                <ul className='flex gap-8'>
                    {nav.map((item, index) => {
                        return(
                            <li key={index}><a href="#" className='bold-16'>{item}</a></li>
                        )
                    })}
                </ul>
                <div className='h-[2px] w-full bg-main'></div>
                <div className='flex justify-between w-full'>
                    <p className='reg-14 text-reg-text'>Copyright©2024 by azmenterprises</p>
                    <div className='flex gap-4 items-center'>
                        <p className='reg-14 text-reg-text'>Terms of Use</p>
                        <span className='w-[2px] h-4 bg-reg-text'></span>
                        <p className='reg-14 text-reg-text'>Privacy Ploicy</p>
                    </div>
                </div>
            </div>
        </footer>
    </section>
  )
}

export default Footer