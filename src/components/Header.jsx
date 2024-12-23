import React, { useEffect, useRef } from 'react'
import logo from '../assets/logo.png'
import Nav from './Nav'
import ContactInfo from './ContactInfo'
import SocialInfo from './SocialInfo'


function Header({setHeaderHeight}) {

  const headerRef = useRef(null);

  useEffect(() => {
    const updateHeight = () => {
      if (headerRef.current){
        setHeaderHeight(headerRef.current.offsetHeight);
      }
    };

    updateHeight();
    window.addEventListener('resize', updateHeight);

    return() => {
      window.removeEventListener('resize', updateHeight);
    }
  }, [setHeaderHeight]);
  
  return (
    <header id='header' ref={headerRef} >
      <div className='bg-main-grad px-16 py-5 flex justify-between items-center max-md:hidden'>
        <ContactInfo addressHidden={true} />
        <SocialInfo />
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