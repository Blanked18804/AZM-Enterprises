import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Nav() {

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
 
  return (
    <nav>
      <ul className='flex gap-8'>
        {nav.map((item, index) => {
          return(
            <li key={index}>
                <Link to='/' onClick={(e) => handleNav(item.section, e)} className='bold-16'>{item.name}</Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default Nav