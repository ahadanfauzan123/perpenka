import React from 'react'
import { BsWhatsapp } from "react-icons/bs";

function WhatsApp() {
  return (
      <a href='https://wa.me/' className='z-50 bottom-8 right-8 fixed bg-white p-2 rounded ring-2 ring-green-400'>
            <BsWhatsapp className='text-2xl text-green-400' />
      </a>
  )
}

export default WhatsApp