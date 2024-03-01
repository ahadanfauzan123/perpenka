"use client"
import React, {useEffect, useState} from 'react'
import Image from 'next/image';
import Logo from "../public/img/logofix.png"
import "../src/app/globals.css";

import { LuMenu } from "react-icons/lu";
import { MdClose } from "react-icons/md";
import { CiFacebook } from "react-icons/ci";
import { BsWhatsapp } from 'react-icons/bs';
import { FiHome,FiUsers, } from "react-icons/fi";
import { TbNews } from "react-icons/tb";
import { IoImagesOutline } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa6";
import { IoIosArrowRoundForward } from "react-icons/io";

import { motion, useScroll } from "framer-motion";
import { Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, Input, Radio, RadioGroup, Stack, useDisclosure } from '@chakra-ui/react'


type UseColorProps = {
  isGray: boolean;
}
function Navbar({isGray}: UseColorProps) {
  interface UseDisclosure {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
  }
  
  const [showNavbar, setShowNavbar] = useState(false);
  const [navbarHeight, setNavbarHeight] = useState(90); // Tinggi navbar awal
  const [prevScrollPos, setPrevScrollPos] = useState(0);
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

  
  useEffect(() => {
    const scrollHeader = () => {
      if(window.scrollY >= 20) {
        setShowNavbar(true)
      } else {
        setShowNavbar(false)
      }
    }
    window.addEventListener('scroll', scrollHeader);
    return () => {
      window.removeEventListener('scroll', scrollHeader);
    }

  }, []);

  return (
    <motion.div  className={`  fixed w-full flex items-start flex-col z-40 ease-in-out`}>
      <nav className={`${showNavbar===true? 'bg-white shadow-lg text-gray-600 h-[90px] ease-in duration-300' : isGray===true?'bg-transparent text-gray-600 text-lg h-[82px] ease-out duration-300' : 'bg-transparent text-white text-lg h-[82px] ease-out duration-300'} w-full px-10 flex items-center justify-between`}>
        <a href='/' className="text-xl font-bold h-12 w-12">
          <Image src={Logo} alt="logo" className={`w-full h-full ${showNavbar===false ? 'opacity-50' : ''}`} />
        </a>
        <div className="hidden lg:flex items-center justify-end space-x-5">
          <div className='flex items-center space-x-1 hover:-translate-y-1 hover:font-semibold hover:text-blue-600 transition-all duration-300'>
            <FiHome className={`text-lg ${showNavbar===false? 'hidden' : 'inline-flex'}`} />
            <h3 className="text-md"><a href="./">home</a></h3>
          </div>
          <div className='flex items-center space-x-1 hover:-translate-y-1 hover:font-semibold hover:text-blue-600 transition-all duration-300'>
            <FiUsers className={`text-lg ${showNavbar===false? 'hidden' : 'inline-flex'}`} />
            <h3 className="text-md"><a href="./about">profile</a></h3>
          </div>
          <div className='flex items-center space-x-1 hover:-translate-y-1 hover:font-semibold hover:text-blue-600 transition-all duration-300'>
            <TbNews className={`text-lg ${showNavbar===false? 'hidden' : 'inline-flex'}`} />
            <h3 className="text-md"><a href="./news">berita</a></h3>
          </div>
          <div className='flex items-center space-x-1 hover:-translate-y-1 hover:font-semibold hover:text-blue-600 transition-all duration-300'>
            <IoImagesOutline className={`text-lg ${showNavbar===false? 'hidden' : 'inline-flex'}`} />
            <h3 className="text-md"><a href="./gallery">galeri</a></h3>
          </div>
          <motion.a
          whileHover={{ scale: 1.05 }}
          onHoverStart={e => {}}
          onHoverEnd={e => {}}
          className='arrCon text-lg font-extralight text-white bg-blue-500 h-[48px] px-3 rounded-full w-[140px] flex items-center justify-center space-x-[1px]' href="./contact">
            <span>daftar</span>
            <IoIosArrowRoundForward className='text-4xl text-gray-200 arrow' />
          </motion.a>
        </div>
        
        <LuMenu className='cursor-pointer inline-flex lg:hidden text-2xl' onClick={onOpen}/>
        
        {isOpen == true? (
          <div className='z-50 text-gray-600 flex items-center justify-center lg:hidden absolute top-0 left-0 bg-white w-screen h-[60vh] transition-all ease-in-out duration-500'>
            <div className='bg-white w-[85%] h-[95%] flex flex-col pb-3 space-y-4'>
              <div className='w-full flex justify-end'>
                <MdClose className="text-xl" onClick={onClose} />
              </div>
              {/* navigate */}
              <div className="flex flex-col space-y-2 flex-1">
                <a href='./' className='w-full p-2 rounded-md active:bg-gray-200 hover:bg-gray-200 flex items-center justify-start space-x-2 hover:pl-4 trasition-all duration-300'>
                  <FiHome className='text-lg' />
                  <h3 className="text-md flex-1">home</h3>
                </a>
                <a href='./about' className='w-full p-2 rounded-md active:bg-gray-200 hover:bg-gray-200 flex items-center justify-start space-x-2 hover:pl-4 trasition-all duration-300'>
                  <FiUsers className='text-lg' />
                  <h3 className="text-md flex-1">profile</h3>
                </a>
                <a href='./news' className='w-full p-2 rounded-md active:bg-gray-200 hover:bg-gray-200 flex items-center justify-start space-x-2 hover:pl-4 trasition-all duration-300'>
                  <TbNews className='text-lg' />
                  <h3 className="text-md flex-1">berita</h3>
                </a>
                <a href='./gallery' className='w-full p-2 rounded-md active:bg-gray-200 hover:bg-gray-200 flex items-center justify-start space-x-2 hover:pl-4 trasition-all duration-300'>
                  <IoImagesOutline className='text-lg' />
                  <h3 className="text-md flex-1">galeri</h3>
                </a>
                <a className='arrCon text-md font-extralight text-white translate-y-6 bg-blue-500 h-[46px] px-3 rounded-full w-full flex items-center justify-center space-x-[1px]' href="./contact">
                  <span>daftar keanggotaan</span>
                  <IoIosArrowRoundForward className='text-4xl text-gray-200 arrow' />
                </a> 
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
      <motion.div className='z-40 h-2 rounded-r bg-gradient-to-r from-[#1c2d8c] to-[#122383] w-screen origin-left' style={{ scaleX: scrollYProgress }} />
    </motion.div>
  )
}

export default Navbar