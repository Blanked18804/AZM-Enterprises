import React, { useEffect, useState } from 'react'
import phone from '../../assets/phone.png'
import mail from '../../assets/mail.png'
import logo from '../../assets/logo.png'

function Navbar() {

  const [height, setHeight] = useState(0);

  const info = [
    {icon: phone, text: '+92 300 6606128'},
    {icon: mail, text: 'azmenterprises@outlook.com'}
  ]

  const nav = ['Home', 'About Us', 'Products', 'Contact Us']

  useEffect(() => {
    heightCalc()
    window.addEventListener('resize', heightCalc)

    return () => {
      window.removeEventListener('resize', heightCalc)
    }
  }, [height])

  function heightCalc(){
    let headerHeight = document.querySelector('#header').offsetHeight;
    setHeight(headerHeight)
    console.log(height);
  }

  return (
    <section>
      <header id='header'>
        <div className='bg-main-grad text-white px-14 py-6'>
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
        </div>

        <div className='px-14 py-6 flex justify-between items-center'>
          <div className='flex gap-2 items-center'>
            <img className='size-[60px]' src={logo} alt="logo" />
            <h1 className='bold-24'>AZM Enterprises</h1>
          </div>

          <nav>
            <ul className='flex gap-8'>
              {nav.map((item, index) => {
                return(
                  <li key={index}><a href="#" className='bold-16'>{item}</a></li>
                )
              })}
            </ul>
          </nav>
        </div>
      </header>
    </section>
  )
}

export default Navbar