import React from 'react'
// import { CurrencyDollarIcon, UsersIcon, TrendingUpIcon } from '@heroicons/react/outline'

function AdminCard() {
  return (
    <div className='grid grid-cols-1 tablet:grid-cols-3 gap-x-5 mobile:gap-y-6 tablet:gap-y-0'>
        {/* card 1 */}
        <div className='adminCard'>
            {/* title */}
            <div className='adminCardTitle bg-gradient-to-tr from-red-500 to-red-400'>
                <h1 className='text-lg font-bold text-color' >Salary</h1>
            </div>
            {/* body */}
            <div className='flex justify-between items-center w-full px-6'>
                <h1 className='text-4xl font-extrabold text-colorProduct'>$40k</h1>
                <div className='bg-red-400 p-3 rounded-full'>
                    {/* <CurrencyDollarIcon className='h-8 text-white'/> */}
                </div>
            </div>
            {/* button */}
        </div>
        {/* card 1 */}
        <div className='adminCard'>
            {/* title */}
            <div className='adminCardTitle bg-gradient-to-tr from-blue-500 to-blue-400'>
                <h1 className='text-lg font-bold text-color' >Users</h1>
            </div>
            {/* body */}
            <div className='flex justify-between items-center w-full px-6'>
                <h1 className='text-4xl font-extrabold text-color'>5086</h1>
                <div className='bg-blue-400 p-4 rounded-full'>
                    {/* <UsersIcon className='h-7 text-white'/> */}
                </div>
            </div>
            {/* button */}
        </div>
        {/* card 1 */}
        <div className='adminCard'>
            {/* title */}
            <div className='adminCardTitle bg-gradient-to-tr from-yellow-500 to-yellow-300'>
                <h1 className='text-lg font-bold text-color' >Profit</h1>
            </div>
            {/* body */}
            <div className='flex justify-between items-center w-full px-6'>
                <h1 className='text-4xl font-extrabold text-colorProduct'>$32k</h1>
                <div className='bg-yellow-400 p-3 rounded-full'>
                    {/* <TrendingUpIcon className='h-8 text-white'/> */}
                </div>
            </div>
            {/* button */}
        </div>
        
    </div>
  )
}

export default AdminCard