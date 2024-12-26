import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import logo from '../assets/logo.png'

function Logo() {

  const navigate = useNavigate()

  const handleHeroScorll = (event) => {
    event.preventDefault()
    navigate('/')
    setTimeout(() => {
        const element = document.getElementById('hero')
        element.scrollIntoView({ behavior:'smooth' })
    }, 0)
  }

  return (
    <Link to='/' onClick={(event) => handleHeroScorll(event)} className='flex gap-2 items-center'>
        <img className='size-[60px] max-md:size-12' src={logo} alt="logo" />
        <h1 className='bold-24 max-md:bold-16'>AZM Enterprises</h1>
    </Link >
  )
}

export default Logo