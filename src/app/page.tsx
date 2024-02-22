"use client"
import { useState } from "react";
import Image from "next/image";
import Card from "../../components/dashboardCard";

import { Swiper, SwiperSlide } from 'swiper/react';
import Calendar from 'react-calendar';

// swiper
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './styles.css';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
//react calendar
import 'react-calendar/dist/Calendar.css';

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

export default function Home() {
  const [value, onChange] = useState<Value>(new Date());
  return (
    <div className="bg-gray-100 w-screen min-h-screen overflow-x-hidden">
      <nav className="fixed z-50 bg-white shadow-lg h-[90px] w-full px-10 flex items-center justify-between text-gray-600">
        <h1 className="text-xl font-bold">icon</h1>
        <div className="flex items-center justify-end space-x-4">
          <h3 className="text-md">list 1</h3>
          <h3 className="text-md">list 1</h3>
          <h3 className="text-md">list 1</h3>
          <h3 className="text-md">list 1</h3>
          <h3 className="text-md">list 1</h3>
        </div>
      </nav>
      {/* heading */}
      <div className="bg-gray-300 w-full h-screen relative m-0 p-0 overflow-x-hidden">
      <Swiper 
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]} className="mySwiper">
        <SwiperSlide>
          <div className="bg-red-400 w-full h-full">
            1
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-green-400 w-full h-full">
            1
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-blue-400 w-full h-full">
            1
          </div>
        </SwiperSlide>
      </Swiper>
      </div>
      {/* section 2 */}
      <div className="w-[80vw] mx-auto h-[60vh] flex items-center justify-between">
        <p className="flex-[0.45] text-gray-600">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro aut impedit consequuntur hic mollitia illo iste modi expedita.</p>
        <div className="bg-gray-400 rounded-xl w-[240px] h-[240px]"></div>
      </div>
      {/* section 3 */}
      <div className="w-[80vw] mx-auto h-screen flex flex-col space-y-4 items-center bg-yellow-400">
        <h1 className="text-3xl font-extrabold text-gray-600">LATEST NEWS</h1>
        <div className="flex items-center justify-center space-x-5 w-full h-[80%]">
          <Card judul="judul 1"  />
          <Card judul="judul 2"  />
          <Card judul="judul 3"  />
        </div>
      </div>
      {/* section 4 */}
      <div className="h-screen w-[80vw] mx-auto bg-gray-500">
        <div className="bg-white shadow-lg w-[30vw] h-[60vh]">
        <Calendar className={`text-gray-600 h-[400px]`} onChange={onChange} value={value} />
        </div>
      </div>
    </div>
  );
}
