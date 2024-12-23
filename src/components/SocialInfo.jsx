import React from 'react'
import { FaFacebook, FaInstagram  } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa6";

function SocialInfo() {

    const social = [
        {icon: FaFacebookF, link: 'https://facebook.com'},
        {icon: RiInstagramFill, link: 'https://instagram.com'},
        {icon: FaLinkedinIn, link: 'https://pk.linkedin.com/in/mushtaq-ahmad-979357147'},
    ]

  return (
    <div className='flex gap-4 h-5'>
        {social.map((item, index) => {
            const Icon = item.icon;
            return(
            <a key={index} href={item.link} target='_blank' rel="noopener noreferrer" className='flex gap-1 items-center'>
            <Icon style={{ color: "white", width: "20px", height: "20px" }} />
            </a>
        )
        })}
    </div>
  )
}

export default SocialInfo