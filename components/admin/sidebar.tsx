"use client"
import React from 'react'
import Logo from '../../public/img/logo.jpg'

import { Disclosure } from '@headlessui/react'
import { FaChevronUp,FaLink } from "react-icons/fa6";
import { FiUsers } from "react-icons/fi";
import { TbNewSection } from "react-icons/tb";
import { LuNewspaper } from "react-icons/lu";
import { MdOutlineEditNote } from "react-icons/md";
import { IoCalendarOutline } from "react-icons/io5";
import { HiOutlineBellAlert } from "react-icons/hi2";
import Image from 'next/image';

function Sidebar() {
  return (
      <div className='bg-white hidden w-[20%] min-h-screen fixed left-0 top-0 px-3 py-6 pt-0 xl:flex flex-col'>
            {/* logo and title */}
            <div className='w-full h-[90px] flex items-center justify-center space-x-2'>
                  <Image src={Logo} alt='logo' className='w-12 h-12' />
                  <h1 className='text-lg font-semibold'>admin<span className='text-[#ff7f00]'>perpenka</span></h1>
            </div>
                  <div className=' flex flex-col space-y-2 overflow-y-scroll h-[calc(100vh-145px)] w-full '>
                        <Disclosure>
                        {({ open }) => (
                        <>
                        <Disclosure.Button className="mt-1 flex w-full justify-between items-center rounded-lg py-2 px-2 text-left text-md font-medium hover:bg-gray-200 focus:outline-none ">
                        <span>manage anggota</span>
                        <FaChevronUp
                              className={`${
                              open ? 'rotate-180 transform' : ''
                              } h-4 w-4 text-gray-600`}
                        />
                        </Disclosure.Button>
                        <Disclosure.Panel className="pl-4 text-sm text-gray-500 flex flex-col space-y-1">
                              <a href="/admin/users" className='flex items-center py-2 px-2 justify-start space-x-2 rounded-lg w-full hover:bg-gray-200 transition-all duration-200'>
                                    <FiUsers className='h-4 w-4' />
                                    <h3>data anggota</h3>
                              </a>
                              <a href="/admin/users/link" className='flex items-center py-2 px-2 justify-start space-x-2 rounded-lg w-full hover:bg-gray-200 transition-all duration-200'>
                                    <FaLink className='h-4 w-4' />
                                    <h3>link pendaftaran</h3>
                              </a>
                        </Disclosure.Panel>
                        </>
                        )}
                        </Disclosure>
                        <Disclosure>
                        {({ open }) => (
                        <>
                        <Disclosure.Button className="mt-1 flex w-full justify-between items-center rounded-lg py-2 px-2 text-left text-md font-medium hover:bg-gray-200 focus:outline-none ">
                        <span>manage berita</span>
                        <FaChevronUp
                              className={`${
                              open ? 'rotate-180 transform' : ''
                              } h-4 w-4 text-gray-600`}
                        />
                        </Disclosure.Button>
                        <Disclosure.Panel className="pl-4 text-sm text-gray-500 flex flex-col space-y-1">
                              <a href="/admin/news" className='flex items-center py-2 px-2 justify-start space-x-2 rounded-lg w-full hover:bg-gray-200 transition-all duration-200'>
                                    <LuNewspaper className='h-4 w-4' />
                                    <h3>data berita</h3>
                              </a>
                              <a href="/admin/news/add" className='flex items-center py-2 px-2 justify-start space-x-2 rounded-lg w-full hover:bg-gray-200 transition-all duration-200'>
                                    <TbNewSection className='h-4 w-4' />
                                    <h3>tambah berita</h3>
                              </a>
                              <a href="/admin/news/edit" className='flex items-center py-2 px-2 justify-start space-x-2 rounded-lg w-full hover:bg-gray-200 transition-all duration-200'>
                                    <MdOutlineEditNote className='h-4 w-4' />
                                    <h3>edit berita</h3>
                              </a>
                        </Disclosure.Panel>
                        </>
                        )}
                        </Disclosure>
                        <Disclosure>
                        {({ open }) => (
                        <>
                        <Disclosure.Button className="mt-1 flex w-full justify-between items-center rounded-lg py-2 px-2 text-left text-md font-medium hover:bg-gray-200 focus:outline-none ">
                        <span>manage agenda</span>
                        <FaChevronUp
                              className={`${
                              open ? 'rotate-180 transform' : ''
                              } h-4 w-4 text-gray-600`}
                        />
                        </Disclosure.Button>
                        <Disclosure.Panel className="pl-4 text-sm text-gray-500 flex flex-col space-y-1">
                              <a href="/admin/agenda" className='flex items-center py-2 px-2 justify-start space-x-2 rounded-lg w-full hover:bg-gray-200 transition-all duration-200'>
                                    <IoCalendarOutline className='h-4 w-4' />
                                    <h3>tambah agenda</h3>
                              </a>
                              <a href="/admin/agenda/share" className='flex items-center py-2 px-2 justify-start space-x-2 rounded-lg w-full hover:bg-gray-200 transition-all duration-200'>
                                    <HiOutlineBellAlert className='h-4 w-4' />
                                    <h3>share</h3>
                              </a>
                        </Disclosure.Panel>
                        </>
                        )}
                        </Disclosure>
                        <Disclosure >
                        {({ open }) => (
                        <>
                        <Disclosure.Button className="mt-1 flex w-full justify-between items-center rounded-lg py-2 px-2 text-left text-md font-medium hover:bg-gray-200 focus:outline-none ">
                        <span>manage foto</span>
                        <FaChevronUp
                              className={`${
                              open ? 'rotate-180 transform' : ''
                              } h-4 w-4 text-gray-600`}
                        />
                        </Disclosure.Button>
                        <Disclosure.Panel className="pl-4 text-sm text-gray-500 flex flex-col space-y-1">
                              <a href="/admin/galeri" className='flex items-center py-2 px-2 justify-start space-x-2 rounded-lg w-full hover:bg-gray-200 transition-all duration-200'>
                                    <IoCalendarOutline className='h-4 w-4' />
                                    <h3>data foto&video</h3>
                              </a>
                              <a href="/admin/galeri/addphoto" className='flex items-center py-2 px-2 justify-start space-x-2 rounded-lg w-full hover:bg-gray-200 transition-all duration-200'>
                                    <IoCalendarOutline className='h-4 w-4' />
                                    <h3>tambah foto</h3>
                              </a>
                              <a href="/admin/galeri/addvideo" className=' flex items-center py-2 px-2 justify-start space-x-2 rounded-lg w-full hover:bg-gray-200 transition-all duration-200'>
                                    <HiOutlineBellAlert className='h-4 w-4' />
                                    <h3>tambah video</h3>
                              </a>
                        </Disclosure.Panel>
                        </>
                        )}
                        </Disclosure>
                        {/* button logout
                        <div className='w-full flex items-center justify-center'>
                              <div className='flex items-center justify-center w-[60%] h-[45px] rounded-xl bg-red-500 text-white text-lg font-light'>logout</div>
                        </div> */}
                  </div>
      </div>
  )
}

export default Sidebar