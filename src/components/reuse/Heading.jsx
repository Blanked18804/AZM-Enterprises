import React from 'react'

function Heading({topLabel, botLabel, customStyle}) {
  return (
    <div className={`flex flex-col gap-0 `}>
        <h2 className='bold-24 text-main'>{topLabel}</h2>
        <h1 className='bold-40 text-bold-text'>{botLabel}</h1>
    </div>
  )
}

export default Heading