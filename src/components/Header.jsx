import React, { useEffect, useRef } from 'react'
import Nav from './Nav'
import Hamburger from './Hamburger'
import ContactInfo from './ContactInfo';
import SocialInfo from './SocialInfo';
import Logo from './Logo';

function Header({setHeaderHeight = null}) {

  const headerRef = useRef(null);

  useEffect(() => {
    const updateHeight = () => {
      if (headerRef.current && setHeaderHeight){
        setHeaderHeight(headerRef.current.offsetHeight);
      }
    };

    updateHeight();
    window.addEventListener('resize', updateHeight);

    return() => {
      window.removeEventListener('resize', updateHeight);
    }
  }, [setHeaderHeight]);
  
  function showSideBar(){
    const sideBar = document.querySelector("#sideBar");
    sideBar.classList.add("right-0");
    sideBar.classList.remove("right-[-60vw]");
    document.body.style.overflowY = "hidden";
  }
  function hideSideBar(){
    const sideBar = document.querySelector("#sideBar");
    sideBar.classList.add("right-[-60vw]");
    sideBar.classList.remove("right-0");
    document.body.style.overflowY = "unset";
  }

  return (
    <header id='header' ref={headerRef} className='w-full'>
      <div className='bg-main-grad px-16 py-5 flex justify-between items-center max-md:hidden'>
        <ContactInfo addressHidden={true} />
        <SocialInfo />
      </div >
      <div className='w-full px-16 py-5 bg-white sticky top-0 flex justify-between items-center max-md:px-8'>
        <Logo />
        <Nav customStyle='max-md:hidden' />
        <Hamburger onClick={showSideBar} active={false}/>
        <div id='sideBar' className='bg-white pt-8 w-1/2  h-screen fixed top-0 right-[-60vw] shadow-[rgba(0,_0,_0,_0.1)_-10px_0px_10px] flex-col gap-8 items-center transition-all duration-[600ms] ease-in hidden max-md:flex'>
          <Hamburger onClick={hideSideBar} active={true} />
          <Nav onClick={hideSideBar} customStyle='flex-col items-center' />
        </div>
      </div>
    </header>
  )
}

export default Header