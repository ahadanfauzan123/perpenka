"use client"
import React, {useState, ChangeEvent} from 'react'
import Navbar from '../../../components/navbar'
import { Input, Text } from '@chakra-ui/react'
import Footer from '../../../components/footer';

function Contact() {
      const [value, setValue] = useState<string>('');

      const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
      setValue(event.target.value);
  };
  return (
      <div className="bg-gray-100 w-screen min-h-screen overflow-x-hidden text-gray-600">
            <Navbar isGray={true} />
            <div className='w-[80vw] mx-auto flex flex-col space-y-12 mt-[110px] h-screen'>
                  {/* heading */}
                  <div className='flex items-center space-x-3'>
                        <div className='w-1 h-[40px] rounded bg-blue-400'></div>
                        <h1 className='text-gray-600 text-3xl font-extrabold'>CONTACT</h1>
                  </div>
                  <div className='w-full flex-0.4 bg-gray-200 py-12 flex items-start justify-center'>
                        <a href="" className='bg-blue-400 rounded-3xl font-semibold text-2xl px-12 py-2 text-white'>Daftar Sekarang</a>
                  </div>
            </div>
            <Footer />
      </div>
  )
}

export default Contact