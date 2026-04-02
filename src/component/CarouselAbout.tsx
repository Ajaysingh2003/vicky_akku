import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import './styles.css';

// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";

export default function CarouselAbout() {
  return (
    <div className="bg-[#ffffff] py-10">
      <div className="max-w-[90%] mx-auto">
        <h3 className="text-[#4B4740] font-passion-one md:max-w-full  text-5xl lg:text-7xl uppercase text-center md:text-left">
          Global presence
        </h3>
        <p className="text-[20px] capitalize text-[#535353] mb-6 text-center md:text-start">
          From regular batches in Mumbai to workshops across India and
          international invitations, including Dubai, Vicky–Akku continue to
          share their love for dance with students everywhere.
        </p>
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide className="max-w-72 md:max-w-96 rounded-2xl  overflow-hidden  ">
            <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
          </SwiperSlide>
          <SwiperSlide className="max-w-72 md:max-w-96 rounded-2xl  overflow-hidden  ">
            <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
          </SwiperSlide>
          <SwiperSlide className="max-w-72 md:max-w-96 rounded-2xl  overflow-hidden  ">
            <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
          </SwiperSlide>
          <SwiperSlide className="max-w-72 md:max-w-96 rounded-2xl  overflow-hidden  ">
            <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
          </SwiperSlide>
          <SwiperSlide className="max-w-72 md:max-w-96 rounded-2xl  overflow-hidden  ">
            <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
          </SwiperSlide>
          <SwiperSlide className="max-w-72 md:max-w-96 rounded-2xl  overflow-hidden  ">
            <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
          </SwiperSlide>
          <SwiperSlide className="max-w-72 md:max-w-96 rounded-2xl  overflow-hidden  ">
            <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
