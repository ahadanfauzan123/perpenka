"use client"
import React, { Fragment, useEffect, useRef, useState } from 'react'

import { Menu, Transition } from '@headlessui/react'
import { FaChevronDown, FaChevronUp } from 'react-icons/fa6'

type CounterProps = {
      users: string;
    };

function Topbar() {
  return (
      <div className='z-30 bg-white w-full xl:w-[80%] ml-auto h-[90px] px-6 fixed top-0 right-0 flex items-center justify-between'>
            <div className=" h-[40px] w-2 bg-gray-400">
                  
            </div>
            <Menu as="div" className="relative inline-block text-left">
                  <div>
                  <Menu.Button className="inline-flex w-full items-center justify-center space-x-2 rounded-full px-4 py-2 text-sm font-medium focus:outline-none">
                        <span className='font-semibold'>admin</span>
                        <div className='bg-gray-400 h-8 w-8 rounded-full '></div>
                  </Menu.Button>
                  </div>
                  <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                  >
                  <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
                        <div className="px-1 py-1 flex flex-col space-y-8">
                        <Menu.Item>
                        {({ active }) => (
                              <button
                              className={`${
                              active ? 'bg-gray-200' : 'text-gray-600'
                              } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                              >
                              {active ? (
                              <FaChevronUp
                                    className="mr-2 h-5 w-5"
                                    aria-hidden="true"
                              />
                              ) : (
                              <FaChevronUp
                                    className="mr-2 h-5 w-5"
                                    aria-hidden="true"
                              />
                              )}
                              profile
                              </button>
                        )}
                        </Menu.Item>
                        <Menu.Item>
                        {({ active }) => (
                              <button
                              className={`${
                              active ? 'bg-red-300 text-white' : 'text-gray-50 bg-red-500'
                              } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                              >
                              {active ? (
                              <FaChevronUp
                                    className="mr-2 h-5 w-5"
                                    aria-hidden="true"
                              />
                              ) : (
                              <FaChevronUp
                                    className="mr-2 h-5 w-5"
                                    aria-hidden="true"
                              />
                              )}
                              logout
                              </button>
                        )}
                        </Menu.Item>
                        </div>
                  </Menu.Items>
                  </Transition>
            </Menu>
            </div>
  )
}

export default Topbar