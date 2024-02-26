"use client"
import React, { useState } from 'react'

import { OrganizationChart } from 'primereact/organizationchart';
import { TreeNode } from 'primereact/treenode';
        
import Navbar from '../../../components/navbar'

export default function About() {

      const [selection, setSelection] = useState<TreeNode[]>([]);
      const [data] = useState<TreeNode[]>([
                {
                    expanded: true,
                    type: 'person',
                    data: {
                        image: 'https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png',
                        name: 'Amy Elsner',
                        title: 'CEO'
                    },
                    children: [
                        {
                            expanded: true,
                            type: 'person',
                            data: {
                                image: 'https://primefaces.org/cdn/primereact/images/avatar/annafali.png',
                                name: 'Anna Fali',
                                title: 'CMO'
                            },
                            children: [
                                {
                                    label: 'Sales'
                                },
                                {
                                    label: 'Marketing'
                                }
                            ]
                        },
                        {
                            expanded: true,
                            type: 'person',
                            data: {
                                image: 'https://primefaces.org/cdn/primereact/images/avatar/stephenshaw.png',
                                name: 'Stephen Shaw',
                                title: 'CTO'
                            },
                            children: [
                                {
                                    expanded: true,
                            type: 'person',
                            data: {
                                image: 'https://primefaces.org/cdn/primereact/images/avatar/stephenshaw.png',
                                name: 'Stephen Shaw',
                                title: 'CTO'
                            },
                            children: [{}]
                                },
                                {
                                    label: 'UI/UX Design'
                                }
                            ]
                        }
                    ]
                }
            ]);
        
            const nodeTemplate = (node: TreeNode) => {
                if (node.type === 'person') {
                    return (
                        <div className="flex flex-column bg-white ring-1 ring-gray-500 rounded-lg">
                            <div className="flex flex-col items-center w-[200px] h-[240px]">
                                <div className='h-[70%] w-full rounded-lg bg-gray-400'>
                                </div>
                                <span className="font-bold mb-2">{node.data.name}</span>
                                <span>{node.data.title}</span>
                            </div>
                        </div>
                    );
                }else if (node.label) {
                  return (
                        <div className='bg-white ring-1 ring-gray-500  text-gray-600 px-4 py-2  rounded-lg'>
                              <h1>
                                    {node.label}
                              </h1>
                        </div>
                  );
              }
          
              return null;
            };
      
  return (
      <div className="bg-gray-100 w-screen min-h-screen overflow-x-hidden text-gray-600">
            <Navbar />
            <div className='w-[80vw] mx-auto flex flex-col space-y-12 mt-[110px]'>
                  {/* heading */}
                  <div className='flex items-center space-x-3'>
                        <div className='w-1 h-[40px] rounded bg-blue-400'></div>
                        <h1 className='text-gray-600 text-3xl font-extrabold'>PROFILE</h1>
                  </div>
                  {/* body */}
                  <div className='w-full flex flex-col space-y-8'>
                        {/* visi */}
                        <div className='w-full flex flex-col space-y-3'>
                              <div className='flex items-center space-x-3 bg-gray-200 w-[100px]'>
                                    <div className='w-1 h-[40px] rounded bg-orange-300'></div>
                                    <h1 className='text-gray-600 text-[24px] font-extrabold'>VISI</h1>
                              </div>
                              <div className='w-full'>
                                    <p className='text-justify text-lg font-light'>
                                          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis ipsa atque distinctio rem illo, et aspernatur repellat eum itaque vero voluptatibus, quia voluptas eveniet ut inventore doloribus molestias nostrum deserunt ipsam laborum! Repellendus!
                                    </p>
                              </div>
                        </div>
                        {/* misi */}
                        <div className='w-full flex flex-col space-y-3'>
                              <div className='flex items-center space-x-3 bg-gray-200 w-[100px]'>
                                    <div className='w-1 h-[40px] rounded bg-orange-300'></div>
                                    <h1 className='text-gray-600 text-[24px] font-extrabold'>MISI</h1>
                              </div>
                              <div className='w-full'>
                                    <p className='text-justify text-lg font-light'>
                                          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis ipsa atque distinctio rem illo, et aspernatur repellat eum itaque vero voluptatibus, quia voluptas eveniet ut inventore doloribus molestias nostrum deserunt ipsam laborum! Repellendus!
                                    </p>
                              </div>
                        </div>
                        {/* struktur */}
                        <div className='min-h-screen w-full '>
                              <div className='flex items-center space-x-3 bg-gray-200 w-[180px]'>
                                    <div className='w-1 h-[40px] rounded bg-orange-300'></div>
                                    <h1 className='text-gray-600 text-[24px] font-extrabold'>STRUKTUR</h1>
                              </div>
                              <div className="card overflow-x-auto py-5">
                                    <OrganizationChart value={data} selectionMode="multiple" selection={selection} onSelectionChange={(e) => setSelection(e.data)} nodeTemplate={nodeTemplate} />
                              </div>
                        </div>
                  </div>
            </div>
      </div>
  )
}