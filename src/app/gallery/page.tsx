import React from 'react'
import Navbar from '../../../components/navbar';
import Footer from '../../../components/footer';
import Image from 'next/image';
import Logo from "../../../public/img/logofix.png";

function Gallery() {
      const data = [
        {
          imageLink:
            "../../../public/logofix.png"    
        },
        {
          imageLink:
            "../../../public/logofix.png"    
        },
        {
          imageLink:
            "../../../public/logofix.png"    
        },
        {
          imageLink:
            "../../../public/logofix.png"    
        },
        {
          imageLink:
            "../../../public/logofix.png"    
        },
        {
          imageLink:
            "../../../public/logofix.png"    
        },
        {
          imageLink:
            "../../../public/logofix.png"    
        },
        {
          imageLink:
            "../../../public/logofix.png"    
        },
        {
          imageLink:
            "../../../public/logofix.png"    
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
                              <Image 
                              className="h-[240px] w-full max-w-full rounded-lg object-cover object-center"
                              src={Logo}
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