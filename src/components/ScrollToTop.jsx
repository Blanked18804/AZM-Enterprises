import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import arrow from '../assets/arrow.png'

function ScrollToTop() {

    const navigate = useNavigate()
    const [isHidden, setIsHidden] = useState(true)

    useEffect(() => {
        const handleVisibility = () => {
            const aboutUsSection = document.getElementById('about-us')
            const topSection = aboutUsSection?.getBoundingClientRect().top || 0
            const offset = 200

            if (topSection <= window.innerHeight - offset){
                setIsHidden(false)
            }else{
                setIsHidden(true)
            }
        }

        window.addEventListener('scroll', handleVisibility)

        return () => {
            window.removeEventListener('scroll', handleVisibility)
        }
    }, [])

    const handleScorll = (event) => {
        event.preventDefault()
        navigate('/')
        setTimeout(() => {
            const element = document.getElementById('hero')
            element.scrollIntoView({ behavior:'smooth' })
        }, 0)
    }

  return (
    <Link to='/' onClick={(event) => handleScorll(event)} className={`fixed bottom-16 right-8 rotate-180 p-2 bg-white border-2 border-[#000A2D] rounded-full cursor-pointer max-md:bottom-8 max-md:right-4 max-md:p-1 ${isHidden ? 'hidden' : ''}`}>
        <img className='size-6 max-md:size-4' src={arrow} alt="to top" />
    </Link>
  )
}

export default ScrollToTop