import React from "react";

import catthumb1 from '../assets/categories/Web-Dev-thumbnail.jpg'
import catthumb2 from '../assets/categories/AI-thumbnail.jpg'
// import HeroSection from '../components/HeroSection/HeroSection'
import HeroSectionMain from "../components/HeroSection/HeroSectionMain";
import Jobs from '../components/Jobs/Jobs';
import CallToAction from "../components/CallToAction";
import FreeResources from "../components/FreeResources/FreeResources";

import Branch from '../components/Branch/Branch'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function Home() {
  

  
  return (
    <>
      {/* <HeroSection/> */}
      <HeroSectionMain />
      <Branch />

      <div className="mx-10 pt-16">
        <h1 className="text-2xl mb-8 font-bold text-gray-900 half-underline sm:text-2xl lg:leading-tight xl:text-2xl sm:text-left text-center">
          Top Categories
        </h1>
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
        >

          <SwiperSlide>
            <div>
              <img src={catthumb1} alt="" className="md:h-[328px] md:w-[368px] sm:h-[300px] sm:w-[340px] h-[280px] w-[320px] bg-gray-500 rounded-md" />

              {/* title */}
              <div>
                <p className="font-semibold">Web Development</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              {/* image */}
              <img src={catthumb2} alt="" className="md:h-[328px] md:w-[368px] sm:h-[300px] sm:w-[340px] h-[280px] w-[320px] bg-gray-500 rounded-md" />

              {/* title */}
              <div>
                <p>title lorem ipsum</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              {/* image */}
              <div className="md:h-[328px] md:w-[368px] sm:h-[300px] sm:w-[340px] h-[280px] w-[320px] bg-gray-500 rounded-md"></div>

              {/* title */}
              <div>
                <p>title lorem ipsum</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              {/* image */}
              <div className="md:h-[328px] md:w-[368px] sm:h-[300px] sm:w-[340px] h-[280px] w-[320px] bg-gray-500 rounded-md"></div>

              {/* title */}
              <div>
                <p>title lorem ipsum</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              {/* image */}
              <div className="md:h-[328px] md:w-[368px] sm:h-[300px] sm:w-[340px] h-[280px] w-[320px] bg-gray-500 rounded-md"></div>

              {/* title */}
              <div>
                <p>title lorem ipsum</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              {/* image */}
              <div className="md:h-[328px] md:w-[368px] sm:h-[300px] sm:w-[340px] h-[280px] w-[320px] bg-gray-500 rounded-md"></div>

              {/* title */}
              <div>
                <p>title lorem ipsum</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              {/* image */}
              <div className="md:h-[328px] md:w-[368px] sm:h-[300px] sm:w-[340px] h-[280px] w-[320px] bg-gray-500 rounded-md"></div>

              {/* title */}
              <div>
                <p>title lorem ipsum</p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>




      <FreeResources/>




      <div className="mx-10 pt-16">
        <h1 className="text-2xl  font-bold text-gray-900 half-underline sm:text-2xl lg:leading-tight xl:text-2xl sm:text-left text-center">
          Jobs and Internships
        </h1>
      </div>
      <Jobs />
      <CallToAction />
    </>
  );
}

export default Home;
