"use client"
import React, {useState, ChangeEvent} from 'react'
import Sidebar from '../../../../../components/admin/sidebar'
import Topbar from '../../../../../components/admin/topbar'
import AddPhotoBanner from '../../../../../components/admin/addPhotoBanner';
import AddPhotoGallery from '../../../../../components/admin/addPhotoGallery';

import { Tab } from '@headlessui/react'
import AddPhotoStruktur from '../../../../../components/admin/addPhotoStruktur';

function classNames(...classes: (string | undefined | null | false | 0)[]) {
      return classes.filter(Boolean).join(' ')
}

function AddPhoto() {
      
  return (
      <div className='w-screen min-h-screen bg-blue-100 flex text-gray-600'>
            {/* sidebar */}
            <Sidebar />
            <div className="w-full xl:w-[80%] min-h-screen ml-auto flex flex-col">
                  {/* topbar */}
                  <Topbar />
                  {/* body */}
                  <div className='pt-[90px] min-h-[calc(100vh-90px)] w-full  '>
                  <Tab.Group>
                        <Tab.List className="flex space-x-1 rounded-xl rounded-t-none bg-orange-600/40 p-1">
                              {/* banner header */}
                              <Tab
                              className={({ selected }) =>
                              classNames(
                                    'w-full rounded-lg py-2.5 text-sm font-medium leading-5',
                                    ' focus:outline-none ring-0',
                                    selected
                                    ? 'bg-white text-gray-600 text-lg shadow ease-linear duration-300'
                                    : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
                              )
                              }
                              >
                              banner
                              </Tab>
                              {/* gallery header */}
                              <Tab
                              className={({ selected }) =>
                              classNames(
                                    'w-full rounded-lg py-2.5 text-sm font-medium leading-5',
                                    ' focus:outline-none ring-0',
                                    selected
                                    ? 'bg-white text-gray-600 text-lg shadow ease-linear duration-300'
                                    : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
                              )
                              }
                              >
                              gallery
                              </Tab>
                              {/* Struktur header */}
                              <Tab
                              className={({ selected }) =>
                              classNames(
                                    'w-full rounded-lg py-2.5 text-sm font-medium leading-5',
                                    ' focus:outline-none ring-0',
                                    selected
                                    ? 'bg-white text-gray-600 text-lg shadow ease-linear duration-300'
                                    : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
                              )
                              }
                              >
                              struktur
                              </Tab>
                        </Tab.List>
                        <Tab.Panels className="mt-[40px] w-[100%] mx-auto">
                        {/* banner panel */}
                              <Tab.Panel
                              className={classNames(
                              'rounded-xl w-full p-3 flex flex-col space-y-5',
                              ' focus:outline-none'
                              )}
                              >
                              <div className='flex items-center w-[60%] mx-auto space-x-3'>
                                    <div className='w-1 h-[40px] rounded bg-blue-400'></div>
                                    <h1 className='text-gray-600 text-3xl font-extrabold'>tambah foto banner</h1>
                              </div>
                              <AddPhotoBanner />
                        </Tab.Panel>
                        {/* gallery panel */}
                        <Tab.Panel
                              className={classNames(
                              'rounded-xl w-full p-3',
                              ' focus:outline-none'
                              )}
                              >
                              <AddPhotoGallery />
                        </Tab.Panel>
                        {/* gallery panel */}
                        <Tab.Panel
                              className={classNames(
                              'rounded-xl w-full p-3',
                              ' focus:outline-none'
                              )}
                              >
                              <AddPhotoStruktur />
                        </Tab.Panel>
                        </Tab.Panels>
                  </Tab.Group>
                  </div>
            </div>
      </div>
  )
}

export default AddPhoto