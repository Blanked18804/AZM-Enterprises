import React from 'react'

function Form() {

  const inputStyle = "border-none rounded-xl p-2 focus:outline-none resize-none"

  return (
    <form action="https://api.web3forms.com/submit" method="POST" className="flex flex-col gap-8 w-half" id='form'>
        <input type="hidden" name="access_key" value="5cf5a57e-debc-4b9f-ab7a-8190f23d922a" />
        <input className={inputStyle} type="text" placeholder="Full Name"  required/>
        <input className={inputStyle} type="email" placeholder="E-mail"  required/>
        <input className={inputStyle} type="tel" inputMode="numeric" pattern="[0-9]{10,14}" title="Please enter a valid mobile number (10-14 digits)" placeholder="Phone Number"  required/>
        <textarea className={inputStyle} name="textArea" rows="7" placeholder="Message" required></textarea>
        <input className='px-8 py-3 bg-main border-2 border-main text-white bold-16 rounded-xl hover:bg-white hover:text-main transition-all duration-300' type="submit" value="Submit"/>
    </form>
  )
}

export default Form