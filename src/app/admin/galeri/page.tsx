import React from 'react'
import Sidebar from '../../../../components/admin/sidebar'
import Topbar from '../../../../components/admin/topbar'

function ManageGallery() {
  return (
      <div className='w-screen min-h-screen bg-purple-200 flex text-gray-600'>
            {/* sidebar */}
            <Sidebar />
            <div className="w-[80%] min-h-screen ml-auto flex flex-col ">
                  {/* topbar */}
                  <Topbar />
                  {/* body */}
                  <div className='mt-[90px] min-h-[calc(100vh-90px)] w-full '>
                        <div className='w-full h-screen bg-blue-400 flex'></div>
                  </div>
            </div>
      </div>
  )
}

export default ManageGallery