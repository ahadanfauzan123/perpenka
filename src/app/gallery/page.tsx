import React from 'react'
import Navbar from '../../../components/navbar';
import Footer from '../../../components/footer';
import Image from 'next/image';

function Gallery() {
      const data = [
        {
          imageLink:
            "https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
        },
        {
          imageLink:
            "https://images.unsplash.com/photo-1432462770865-65b70566d673?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
        },
        {
          imageLink:
            "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80",
        },
        {
          imageLink:
            "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80",
        },
        {
          imageLink:
            "https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80",
        },
        {
          imageLink:
            "https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80",
        },
        {
          imageLink:
            "https://demos.creative-tim.com/material-kit-pro/assets/img/examples/blog5.jpg",
        },
        {
          imageLink:
            "https://material-taillwind-pro-ct-tailwind-team.vercel.app/img/content2.jpg",
        },
        {
          imageLink:
            "https://images.unsplash.com/photo-1620064916958-605375619af8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1493&q=80",
        },
      ];
     
      return (
            <div className='bg-gray-100 w-screen min-h-screen overflow-x-hidden text-gray-600'>
                  <Navbar isGray={true} />
                  <div className='w-[80vw] mx-auto flex flex-col space-y-12 mt-[110px]'>
                        {/* heading */}
                        <div className='flex items-center space-x-3'>
                              <div className='w-1 h-[40px] rounded bg-blue-400'></div>
                              <h1 className='text-gray-600 text-3xl font-extrabold'>GALLERY</h1>
                        </div>
                        {/* body */}
                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
                        {data.map(({ imageLink }, index) => (
                              <div key={index}>
                              <img
                              className="h-[240px] w-full max-w-full rounded-lg object-cover object-center"
                              src={imageLink}
                              alt="gallery-photo"
                              />
                              </div>
                        ))}
                        </div>
                  </div>
                  <Footer />
            </div>
      );
    }
     

export default Gallery