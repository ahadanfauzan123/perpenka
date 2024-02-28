"use client"
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
        
import Navbar from '../../../components/navbar'


export default function About() {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

      
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
                              <div className="card w-full py-5">
                                <Swiper
                                        onSwiper={setThumbsSwiper}
                                        loop={true}
                                        // spaceBetween={2}
                                        slidesPerView={8}
                                        freeMode={true}
                                        watchSlidesProgress={true}
                                        modules={[FreeMode, Navigation, Thumbs]}
                                        className="mySwiper"
                                    >
                                        <SwiperSlide>
                                            <div className=" rounded-l-xl cursor-pointer text-lg font-semibold hover:bg-gray-200 transition-all duration-300 w-[10vw] h-[55px] bg-white shadow-sm shadow-gray-400 flex items-center justify-center">
                                                struktur 1
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className=" cursor-pointer text-lg font-semibold hover:bg-gray-200 transition-all duration-300 w-[10vw] h-[55px] bg-white shadow-sm shadow-gray-400 flex items-center justify-center">
                                                struktur 2
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className=" cursor-pointer text-lg font-semibold hover:bg-gray-200 transition-all duration-300 w-[10vw] h-[55px] bg-white shadow-sm shadow-gray-400 flex items-center justify-center">
                                                struktur 3
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className=" cursor-pointer text-lg font-semibold hover:bg-gray-200 transition-all duration-300 w-[10vw] h-[55px] bg-white shadow-sm shadow-gray-400 flex items-center justify-center">
                                                struktur 4
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className=" cursor-pointer text-lg font-semibold hover:bg-gray-200 transition-all duration-300 w-[10vw] h-[55px] bg-white shadow-sm shadow-gray-400 flex items-center justify-center">
                                                struktur 5
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className=" cursor-pointer text-lg font-semibold hover:bg-gray-200 transition-all duration-300 w-[10vw] h-[55px] bg-white shadow-sm shadow-gray-400 flex items-center justify-center">
                                                struktur 6
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className=" cursor-pointer text-lg font-semibold hover:bg-gray-200 transition-all duration-300 w-[10vw] h-[55px] bg-white shadow-sm shadow-gray-400 flex items-center justify-center">
                                                struktur 7
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <div className="rounded-r-xl cursor-pointer text-lg font-semibold hover:bg-gray-200 transition-all duration-300 w-[10vw] h-[55px] bg-white shadow-sm shadow-gray-400 flex items-center justify-center">
                                                struktur 8
                                            </div>
                                        </SwiperSlide>
                                        
                                </Swiper>
                                <Swiper
                                    // style={{
                                    // '--swiper-navigation-color': '#fff',
                                    // '--swiper-pagination-color': '#fff',
                                    // }}
                                    loop={true}
                                    spaceBetween={10}
                                    // navigation={true}
                                    thumbs={{ swiper: thumbsSwiper }}
                                    modules={[FreeMode, Navigation, Thumbs]}
                                    className="mySwiper2 mt-3"
                                >
                                    <SwiperSlide>
                                    <img className='w-full h-auto max-h-screen rounded-xl' src="https://blog-static.mamikos.com/wp-content/uploads/2021/07/4.-contoh-struktur-organisasi-1024x594-1024x594.jpg" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                    <img className='w-full h-auto max-h-screen rounded-xl' src="https://runsystem.id/wp-content/uploads/2023/10/struktur-organisasi-runs_2023.png" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                    <img className='w-full h-auto max-h-screen rounded-xl' src="https://blog-static.mamikos.com/wp-content/uploads/2021/07/4.-contoh-struktur-organisasi-1024x594-1024x594.jpg" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                    <img className='w-full h-auto max-h-screen rounded-xl' src="https://runsystem.id/wp-content/uploads/2023/10/struktur-organisasi-runs_2023.png" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                    <img className='w-full h-auto max-h-screen rounded-xl' src="https://blog-static.mamikos.com/wp-content/uploads/2021/07/4.-contoh-struktur-organisasi-1024x594-1024x594.jpg" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                    <img className='w-full h-auto max-h-screen rounded-xl' src="https://runsystem.id/wp-content/uploads/2023/10/struktur-organisasi-runs_2023.png" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                    <img className='w-full h-auto max-h-screen rounded-xl' src="https://blog-static.mamikos.com/wp-content/uploads/2021/07/4.-contoh-struktur-organisasi-1024x594-1024x594.jpg" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                    <img className='w-full h-auto max-h-screen rounded-xl' src="https://runsystem.id/wp-content/uploads/2023/10/struktur-organisasi-runs_2023.png" />
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                        </div>
                        </div>
                  </div>
            </div>
  )
}