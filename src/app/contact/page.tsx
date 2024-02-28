"use client"
import React, {useState, ChangeEvent} from 'react'
import Navbar from '../../../components/navbar'
import { Input, Text } from '@chakra-ui/react'

function Contact() {
      const [value, setValue] = useState<string>('');

      const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
      setValue(event.target.value);
  };
  return (
      <div className="bg-gray-100 w-screen min-h-screen overflow-x-hidden text-gray-600">
            <Navbar isGray={true} />
            <div className='w-[80vw] mx-auto flex flex-col space-y-12 mt-[110px]'>
                  {/* heading */}
                  <div className='flex items-center space-x-3'>
                        <div className='w-1 h-[40px] rounded bg-blue-400'></div>
                        <h1 className='text-gray-600 text-3xl font-extrabold'>CONTACT</h1>
                  </div>
                  <div>
                        <Text mb='8px'>Value: {value}</Text>
                        <Input
                        value={value}
                        onChange={handleChange}
                        placeholder='Here is a sample placeholder'
                        size='sm'
                        />
                  </div>
            </div>
      </div>
  )
}

export default Contact