import React from 'react'

function Footer() {
  return (
    <div className='h-[70vh] w-full flex items-start justify-between px-6 py-2 divide-x-2 divide-gray-300'>
      <div className='flex flex-col space-y-4 flex-[0.3]'>
            <h1 className='text-4xl font-extrabold'>PERPENKA</h1>
      </div>
      {/* contact */}
            <div className='flex flex-col items-center space-y-4 flex-[0.3]'>
                  <h1 className='text-xl font-light'>contact : </h1>
                  <div className='flex items-center justify-center space-x-4'>
                        <div className='w-12 h-12 rounded-md bg-white shadow-sm shadow-gray-300'></div>
                        <div className='w-12 h-12 rounded-md bg-white shadow-sm shadow-gray-300'></div>
                        <div className='w-12 h-12 rounded-md bg-white shadow-sm shadow-gray-300'></div>
                        <div className='w-12 h-12 rounded-md bg-white shadow-sm shadow-gray-300'></div>
                  </div>
            </div>
      {/* address */}
      <div className='flex flex-col space-y-4 items-end flex-[0.4]'>
            <div className=''>
                  <h1 className='text-xl font-light'>address </h1>
                  <p className='text-lg font-light text-gray-500 w-[280px]'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque libero voluptatibus modi soluta fugiat quae sapiente itaque molestiae excepturi. Cumque maxime voluptatum numquam labore explicabo?</p>
            </div>
      </div>
      
    </div>
  )
}

export default Footer