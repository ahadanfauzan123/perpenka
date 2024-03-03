import React from 'react'
import Navbar from '../../../components/navbar'
import NewsCard from '../../../components/newsCard'
import Footer from '../../../components/footer'

function News() {
      
  return (
      <div className="bg-gray-100 w-screen min-h-screen overflow-x-hidden text-gray-600">
            <Navbar isGray={true} />
            <div className='w-[80vw] mx-auto flex flex-col space-y-12 mt-[110px]'>
                  {/* heading */}
                  <div className='flex items-center space-x-3'>
                        <div className='w-1 h-[40px] rounded bg-blue-400'></div>
                        <h1 className='text-gray-600 text-3xl font-extrabold'>NEWS</h1>
                  </div>
                  {/* body */}
                  <div className='w-full flex flex-col space-y-3 lg:space-y-2'>
                        <NewsCard />  
                        <NewsCard />  
                        <NewsCard />  
                        {/* <div classNameName='w-[350px] h-[350px] bg-blue-400'></div> */}
                  </div>
            </div>
            <Footer  />
      </div>
  )
}

export default News