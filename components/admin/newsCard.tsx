"use client"
import React, { useContext } from 'react'
import { Fragment, useState } from 'react'

import { Dialog, Transition } from '@headlessui/react'
import { HiOutlineDotsVertical } from "react-icons/hi";
import { IoEyeOutline } from "react-icons/io5";
import { Timestamp } from 'firebase/firestore';

type CounterProps = {
      judul: string;
      body: string;
      postedOn: string;
    };
function NewsCard({body,judul, postedOn}: CounterProps) {
      
  let [isOpen, setIsOpen] = useState(false)
  function closeModal() {
      setIsOpen(false)
    }
  
    function openModal() {
      setIsOpen(true)
    }
  return (
      <div className='shadow-sm shadow-gray-300 w-full rounded-xl bg-white h-[120px] flex'>
      {/* left */}
      <div className='bg-gray-300 flex-[0.25] scale-110 h-full rounded-l-xl'>

      </div>
      {/* right */}
      <div className='flex-[0.75] flex justify-between h-full rounded-r-xl px-4 pt-2 py-1'>
            {/* informaton */}
            <div className=' flex-[0.8] flex flex-col space-y-1'>
                  {/* title */}
                  <h1 className=' italic font-light text-xs text-gray-500'>{postedOn}</h1>
                  {/* brief */}
                  <h1 className='font-semibold w-full truncate text-xl text-gray-700'>{judul}</h1>
                  {/* time */}
                  <span className='text-sm font-medium text-gray-500'>ini adalaha brief berita</span>
            </div>
            {/* buttons */}
            <div className='flex-[0.2] flex flex-col items-end justify-between h-full'>
                  <div className='w-8 h-8 rounded ring-1 ring-gray-400 flex items-center justify-center'>
                        <HiOutlineDotsVertical className='text-xl text-gray-600 cursor-pointer' />
                  </div>
                  <div onClick={openModal} className='cursor-pointer text-sm bg-orange-400 py-1 px-3 rounded-xl flex items-center justify-center space-x-1'>
                        <h3 className='text-white'>view</h3>
                        <IoEyeOutline className='text-lg text-white' />
                  </div>
                  <Transition appear show={isOpen} as={Fragment}>
                  <Dialog as="div" className="relative z-10" onClose={closeModal}>
                  <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                  >
                        <div className="fixed inset-0 bg-black/25" />
                  </Transition.Child>

                  <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                        <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0 scale-95"
                        enterTo="opacity-100 scale-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100 scale-100"
                        leaveTo="opacity-0 scale-95"
                        >
                        <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                              <Dialog.Title
                              as="h3"
                              className="text-lg font-medium leading-6 text-gray-900"
                              >
                              Payment successful
                              </Dialog.Title>
                              <div className="mt-2">
                              <p className="text-sm text-gray-500">
                              Your payment has been successfully submitted. We’ve sent
                              you an email with all of the details of your order.
                              </p>
                              </div>

                              <div className="mt-4">
                              <button
                              type="button"
                              className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                              onClick={closeModal}
                              >
                              Got it, thanks!
                              </button>
                              </div>
                        </Dialog.Panel>
                        </Transition.Child>
                        </div>
                  </div>
                  </Dialog>
                  </Transition>
            </div>

      </div>
</div>
  )
}

export default NewsCard