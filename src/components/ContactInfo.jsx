import React from 'react'
import phone from '../assets/phone.png'
import mail from '../assets/mail.png'
import adress from '../assets/adress.png'

function ContactInfo({customStyle, addressHidden}) {

    const info = [
        {icon: phone, text: '+92 300 6606128', link: 'tel:+923006606128'},
        {icon: mail, text: 'azmenterprises@outlook.com', link: 'mailto:azmenterprises@outlook.commailto:azmenterprises@outlook.com'},
        {icon: adress, text: 'p6446 Muhammad Khan Town Mansoorabad Faisalabad, Pakistan', link: '', hidden: addressHidden}
    ]

  return (
    <div className={`flex gap-4 ${customStyle}`}>
        {info.map((item, index) => {
            return(
            <a key={index} href={item.link} className={`flex gap-1 items-center ${item.hidden ? 'max-lg:hidden' : ''}`}>
            <img src={item.icon} alt="icon" />
            <p className='reg-14 text-white'>{item.text}</p>
            </a >
            )
        })}
    </div>
  )
}

export default ContactInfo