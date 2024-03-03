"use client"
import React, { useContext } from 'react'
import { Fragment, useState } from 'react'
import Sidebar from '../../../../components/admin/sidebar'
import Topbar from '../../../../components/admin/topbar'

import { NewsContext } from '../../../../context/NewsContext'
import NewsCard from '../../../../components/admin/newsCard'

function DataBerita() {
  const {posts} = useContext(NewsContext)

  return (
      <div className='w-screen min-h-screen bg-blue-100 flex text-gray-600'>
      {/* sidebar */}
      <Sidebar />
      <div className="w-full xl:w-[80%] min-h-screen ml-auto flex flex-col">
            {/* topbar */}
            <Topbar />
            <div className='w-full flex flex-col space-y-5 mt-[90px] py-6 h-screen bg-blue-100'>
                  {/* header */}
                  <div className='flex items-center w-[60%] mx-auto space-x-3'>
                        <div className='w-1 h-[40px] rounded bg-blue-400'></div>
                              <h1 className='text-gray-600 text-3xl font-extrabold'>kelola berita</h1>
                  </div>
                  {/* body */}
                  <div className='w-[60%] flex flex-col space-y-3 mx-auto'>
                  {posts.map(post => (
                        <>
                        {/* <NewsCard key={post.id} body={post.data.body} postedOn={String(post.data.postedOn)} judul={post.data.title}  /> */}
            
                        </>
          
                  ))}
                  </div>
            </div>
      </div>
      </div>
  )
}

export default DataBerita