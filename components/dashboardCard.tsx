import React from 'react'
import {motion} from "framer-motion"

type CounterProps = {
  judul: string;
  post: string;
};
function Card({judul, post}: CounterProps) {
  return (
    <motion.div
    whileHover={{ scale: 1.02 }}
    onHoverStart={e => {}}
    onHoverEnd={e => {}}
    className='bg-white rounded-2xl shadow-lg shadow-gray-300 text-gray-600 w-[85%] lg:w-[30%] h-[500px] flex flex-col space-y-3'>
      <div className='bg-gray-400 rounded-t-2xl w-full h-[60%]'></div>
      <div className='flex flex-col space-y-3 w-full px-5'>
      <h1 className='font-semibold text-xl'>{judul}</h1>
      <p className='text-gray-600 text-sm'>{post}</p>
      <a href="./" className='bg-blue-400 text-white px-5 py-2 w-[120px] font-bold rounded-lg'>read more</a>
      </div>
    </motion.div>
  )
}

export default Card