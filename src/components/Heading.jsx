import React from 'react'

function Heading({topLabel, botLabel, customStyle, h2Style}) {
  return (
    <div className={`flex flex-col gap-0 ${customStyle}`}>
        <h2 className={`bold-24 text-main ${h2Style}`}>{topLabel}</h2>
        <h1 className='bold-40'>{botLabel}</h1>
    </div>
  )
}

export default Heading