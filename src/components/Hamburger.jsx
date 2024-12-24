import React from 'react'

function Hamburger({onClick, active, customClass}) {
  return (
    <button onClick={onClick} className={`flex-col gap-3 hidden max-md:flex ${customClass}`}>
        <span style={{transform: active ? 'rotate(45deg) translate(5px, 5px)' : ''}} className='w-8 h-[0.125rem] bg-[#000A2D]'></span>
        <span style={{transform: active ? 'rotate(-45deg) translate(5px, -5px)' : ''}} className='w-8 h-[0.125rem] bg-[#000A2D]'></span>
    </button>
  )
}

export default Hamburger
