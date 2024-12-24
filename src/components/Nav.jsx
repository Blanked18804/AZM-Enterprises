import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Nav({customStyle, onClick}) {

    const navigate = useNavigate()

    const nav = [
        {name: 'Home', section: 'hero'},
        {name: 'About Us', section: 'about-us'},
        {name: 'Products', section: 'products'},
        {name: 'Contact Us', section: 'contact-us'},
    ]

    const handleNav = (sectionId, event) => {
        event.preventDefault()
        navigate('/')
        setTimeout(() => {
            const element = document.getElementById(sectionId)
            if (element){
                if (sectionId === 'hero' || sectionId === 'products'){
                    element.scrollIntoView({ behavior:'smooth' })
                }else if (sectionId === 'about-us'){
                    window.scrollTo({
                        top: element.offsetTop - 100,
                        behavior:  'smooth',
                    })
                }else {
                    window.scrollTo({
                        top: element.offsetTop - 20,
                        behavior:  'smooth',
                    })
                }
            }
        }, 0)
    }

    const handleClick = (sectionId, e) => {
      handleNav(sectionId, e)
      if (onClick){
        onClick(e)
      }

    }
 
  return (
    <nav>
      <ul className={`flex gap-8 ${customStyle}`}>
        {nav.map((item, index) => {
          return(
            <li key={index}>
                <Link to='/' onClick={(e) => handleClick(item.section, e)} className='bold-16 relative transition-all duration-300 before:content-[""] before:absolute before:-bottom-1 before:left-0 before:w-full before:h-[2px] before:scale-0 before:bg-main before:transition-all before:duration-300 hover:text-main hover:before:scale-100 max-md:bold-12' >{item.name}</Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default Nav