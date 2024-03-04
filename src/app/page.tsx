"use client"
import { useState } from "react";
import Image from "next/image";
import Card from "../../components/dashboardCard";
import Navbar from "../../components/navbar";

import { Swiper, SwiperSlide } from 'swiper/react';
import Calendar from 'react-calendar';

import { motion, useAnimation, Variants, useScroll } from "framer-motion"// React
import { inView } from "framer-motion"
import { useInView } from "react-intersection-observer";

// swiper
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
//react calendar
import 'react-calendar/dist/Calendar.css';

import FeaturedImageGallery from "../../components/featuredImageGallery";
import Footer from "../../components/footer";
import AnimatedCounter from  "../../components/counter";
import WhatsApp from "../../components/whatsapp";
import Banner1 from "../../public/img/4.jpg"
import Banner2 from "../../public/img/5.png"
import Banner3 from "../../public/img/3.jpg"

import { NewsContext } from "../../context/NewsContext";
import { useContext } from "react";

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

export default function Home() {

  const {posts} = useContext(NewsContext);
  console.log(posts, "🔥")

  const exampleVariant = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  }
  const control = useAnimation()
const [ref, inView] = useInView()
  const [value, onChange] = useState<Value>(new Date());
  const { scrollYProgress } = useScroll();
  const cardVariants: Variants = {
    offscreen: {
      x: -80
    },
    onscreen: {
      x: 0,
      // rotate: -10,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8
      }
    }
  };
  return (
    <motion.div 
    
    className="bg-gray-100 w-screen min-h-screen overflow-x-hidden">
      {/* navbar */}
      <Navbar isGray={false} />
      {/* heading */}
      <div className="bg-gray-300 z-20 w-full h-screen relative m-0 p-0 overflow-x-hidden">
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
          <div className="w-full h-full relative">
            <Image src={Banner1} alt="banner 1"  className="absolute top-0 left-0 z-40 w-full h-full object-contain" />
          </div>
          
        </SwiperSlide>
        <SwiperSlide>
        <div className="w-full h-full relative">
            <Image src={Banner2} alt="banner 1"  className="absolute top-0 left-0 z-40 w-full h-full object-contain" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="w-full h-full relative">
            <Image src={Banner3} alt="banner 1"  className="absolute top-0 left-0 z-40 w-full h-full object-contain" />
          </div>
        </SwiperSlide>
      </Swiper>
      </div>
      {/* section 2  bg-[#ff7f00]*/}
      <div className="w-full flex py-[60px] flex-col bg-[#1c2d8c] ">
        <div className=" w-[80vw] mx-auto min-h-[80vh] lg:h-[80vh] flex flex-col space-y-8 lg:space-y-0 lg:flex-row items-center justify-between">
          <motion.div 
          // animate={{ x: 100 }}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.8 }}
          variants={cardVariants}
          className="flex-[0.50] flex flex-col space-y-3">
            <h1 className="text-6xl font-bold text-gray-50 ">tentang <span className="text-[#ff7f00]">perpenka</span></h1>
            <p className=" text-gray-50">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem dolores quis, laborum aperiam ducimus possimus! Recusandae error dolorem quae esse officiis molestias explicabo voluptatum laborum. Tempore eaque labore molestiae corporis, qui neque, non, nulla provident voluptate rerum quas beatae eum?</p>
            <div className="flex flex-col space-y-4">
              <div className="w-full h-1 rounded bg-gray-50 opacity-75"></div>
              <div className="flex items-center space-x-8">
                <div className="flex flex-col items-center space-y-2">
                  <h1 className="text-3xl font-extrabold text-gray-50"><AnimatedCounter from={0} to={5000} /><span>+</span></h1>
                  <p className="text-md font-light text-gray-50">peserta</p>
                </div>
                <div className="flex flex-col items-center space-y-2">
                  <h1 className="text-3xl font-extrabold text-gray-50"><AnimatedCounter from={0} to={20} /><span>+</span></h1>
                  <p className="text-md font-light text-gray-50">acara tahunan</p>
                </div>
                <div className="flex flex-col items-center space-y-2">
                  <h1 className="text-3xl font-extrabold text-gray-50"><AnimatedCounter from={0} to={50} /><span>+</span></h1>
                  <p className="text-md font-light text-gray-50">kota/kabupaten</p>
                </div>
              </div>

            </div>
          </motion.div>
          <div className="bg-gray-400 rounded-xl w-[240px] h-[240px]"></div>
        </div>
      </div>
      {/* section 3 */}
      <div className="w-[80vw] mx-auto min-h-screen lg:h-screen flex flex-col space-y-4 items-center mt-10">
        <h1 className="text-4xl font-extrabold text-gray-600">LATEST NEWS</h1>
        <div className="flex flex-col lg:flex-row items-center justify-center space-x-0 space-y-5 lg:space-y-0 lg:space-x-5 w-full h-[80%]">
          {posts.map(post => (
          <Card key={post.id} post={post.data.body} judul={post.data.title}  />
          
          ))}
        </div>
      </div>
      {/* section 4 */}
      <div className="w-full flex flex-col items-center space-y-8 py-10">
        <h1 className="text-4xl font-extrabold text-gray-600">GALERI</h1>
        <FeaturedImageGallery />
      </div>
      {/* section 5 */}
      <div className="w-full bg-[1c2d8c] bg-gradient-to-tr from-[#ff7f00] to-[#e9841e] py-10 my-10">
        <div className=" w-[80vw] mx-auto flex flex-col space-y-10 items-center">
          <h1 className="text-4xl font-extrabold text-gray-50">AGENDA</h1>
          <div className="flex items-start justify-center space-x-8 w-full ">
          <Calendar className={`flex-[0.4] text-gray-50 h-[400px] rounded-lg shadow-lg `} onChange={onChange} value={value} />
          <div className="flex-[0.55] flex flex-col space-y-8">
            <div className="flex flex-col space-y-1">
              <div className="flex space-x-2 items-center">
                <div className="bg-blue-400 h-[35px] w-1 rounded "></div>
                <h1 className="text-2xl font-semibold text-gray-50">April</h1>
              </div>
              <p className="text-gray-50 ml-3 text-sm">Tidak ada Kegiatan.</p>
            </div>
            <div className="flex flex-col space-y-1">
              <div className="flex space-x-2 items-center">
                <div className="bg-blue-400 h-[35px] w-1 rounded "></div>
                <h1 className="text-2xl font-semibold text-gray-50">Tempat</h1>
              </div>
              <p className="text-gray-50 ml-3 text-sm">20 April 2024</p>
            </div>
            <div className="flex flex-col space-y-1">
              <div className="flex space-x-2 items-center">
                <div className="bg-blue-400 h-[35px] w-1 rounded "></div>
                <h1 className="text-2xl font-semibold text-gray-50">Waktu</h1>
              </div>
              <p className="text-gray-50 ml-3 text-sm">11:00 AM</p>
            </div>
          </div>
          </div>
        </div>
      </div>
      {/*  */}
      {/* contact */}
      <WhatsApp />
      {/* footer */}
      <Footer />
    </motion.div>
  );
}