import React from 'react'

function Button({label, customStyle}) {
  return (
    <button className={`px-8 py-3 bg-main border-2 border-main text-white bold-16 rounded-xl hover:bg-white hover:text-main transition-all duration-300 ${customStyle}`}>{label}</button>
  )
}

export default Button