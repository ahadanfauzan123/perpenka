"use client"
import { Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, Input, Radio, RadioGroup, Stack, useDisclosure } from '@chakra-ui/react'
import React, {useEffect, useState} from 'react'

import { LuMenu } from "react-icons/lu";
import { MdClose } from "react-icons/md";
import { CiFacebook } from "react-icons/ci";
import { BsWhatsapp } from 'react-icons/bs';

import { motion, useScroll } from "framer-motion";
import Logo from "../public/img/logo.jpg"
import Image from 'next/image';

function Navbar() {
  interface UseDisclosure {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
  }
  
  // Replace 'any' with appropriate types if possible
  const { isOpen, onOpen, onClose }: UseDisclosure = useDisclosure(); 
  useEffect(() => {
    if (isOpen){
      console.log("buka")
    }
  }, [isOpen])
  
  // const [placement, setPlacement] = useState('right')
  const btnRef = React.useRef()

  const { scrollYProgress } = useScroll();

  return (
    <motion.div  className='w-full flex items-start flex-col fixed z-40 ease-in-out'>
      <nav className=" bg-white shadow-lg h-[90px] w-full px-10 flex items-center justify-between text-gray-600">
        <div className="text-xl font-bold h-12 w-12">
          <Image src={Logo} alt="logo" className="w-full h-full" />
        </div>
        <div className="hidden lg:flex items-center justify-end space-x-4">
          <h3 className="text-md hover:text-blue-600 transition-all duration-300"><a href="./">home</a></h3>
          <h3 className="text-md hover:text-blue-600 transition-all duration-300"><a href="./about">profile</a></h3>
          <h3 className="text-md hover:text-blue-600 transition-all duration-300"><a href="./news">berita</a></h3>
          <h3 className="text-md hover:text-blue-600 transition-all duration-300"><a href="./gallery">galeri</a></h3>
          <h3 className="text-md hover:text-blue-600 transition-all duration-300"><a href="./contact">kontak</a></h3>
        </div>
        
        <LuMenu className='inline-flex lg:hidden text-xl' onClick={onOpen}/>
        
        {isOpen == true? (
          <div className='flex items-center justify-center lg:hidden absolute top-0 left-0 bg-white w-screen h-[60vh]'>
            <div className='bg-white w-[85%] h-[95%] flex flex-col pb-3 space-y-4'>
              <div className='w-full flex justify-end'>
                <MdClose className="text-xl" onClick={onClose} />
              </div>
              {/* navigate */}
              <div className="flex flex-col space-y-2 flex-1">
                <h3 className="text-md w-full p-2 active:bg-gray-200 hover:bg-gray-200"><a href="./">home</a></h3>
                <h3 className="text-md w-full p-2 active:bg-gray-200 hover:bg-gray-200"><a href="./about">profile</a></h3>
                <h3 className="text-md w-full p-2 active:bg-gray-200 hover:bg-gray-200"><a href="./news">berita</a></h3>
                <h3 className="text-md w-full p-2 active:bg-gray-200 hover:bg-gray-200"><a href="./gallery">galeri</a></h3>
                <h3 className="text-md w-full p-2 active:bg-gray-200 hover:bg-gray-200"><a href="./contact">kontak</a></h3>
              </div>
              <div className='w-full flex items-center justify-center space-x-3'>
                <p className='text-sm font-light'>hubungi lewat: </p>
                <a href='https://wa.me/6281905639178' className=' bg-white p-1 rounded ring-1 ring-green-400'>
                    <BsWhatsapp className='text-xl text-green-400' />
                </a>
              </div>
            </div>
          </div>
        ) :  (
          <></>
        )}
      
      </nav>
      <motion.div className='h-2 rounded-r bg-gradient-to-r from-[#1c2d8c] to-[#122383] w-screen origin-left' style={{ scaleX: scrollYProgress }} />
    </motion.div>
  )
}

export default Navbar