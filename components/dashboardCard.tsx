import React from 'react'
import {motion} from "framer-motion"

export interface Props {
  judul: string;
}

function Card(props: Props) {
  return (
    <motion.div
    whileHover={{ scale: 1.02 }}
    onHoverStart={e => {}}
    onHoverEnd={e => {}}
    className='bg-white text-gray-600 w-[30%] h-[500px] flex flex-col space-y-3'>
      <div className='bg-gray-400 w-full h-[60%]'></div>
      <div className='flex flex-col space-y-3 w-full px-5'>
      <h1 className='font-semibold text-xl'>{props.judul}</h1>
      <p className='text-gray-600 text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque at temporibus provident, quis modi exercitationem a qui adipisci itaque pariatur!</p>
      <a href="./" className='bg-blue-400 text-white px-5 py-2 w-[120px] font-bold rounded-lg'>read more</a>
      </div>
    </motion.div>
  )
}

export default Card