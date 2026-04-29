import React, { useRef, useState } from "react";
import { EffectCoverflow, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper React components
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import Image from "next/image";

// import './styles.css';
// import required modules
// Import Swiper styles
export default function CarouselAbout({
  fromHomePage = false,
}: {
  fromHomePage: boolean;
}) {
  const images = [
    "744F56A2-F74C-44F9-96CB-CEA2A25BE523.JPG.webp",
    "B6CE9FED-9B68-462F-9700-53E98BC03CDC.webp",
    "IMG_2302.JPG.webp",
    "IMG_2303.JPG.webp",
    "IMG_3758.webp",
    "IMG_3760.webp",
    "IMG_3763.webp",
    "img1.webp",
    "img10.webp",
    "img11.webp",
    "img12.webp",
    "img13.webp",
    "img14.webp",
    "img16.webp",
    "img17.webp",
    // "img18.webp",
    "img19.webp",
    "img2.webp",
    "img20.webp",
    "img21.webp",
    "img22.webp",
    "img23.webp",
    "img24.webp",
    "img25.webp",
    "img26.webp",
    "img27.webp",
    "img3.webp",
    "img4.webp",
    // "img5.webp",
    "img6.webp",
    "img7.webp",
    "img8.webp",
    "img9.webp",
  ];
  return (
    <div
      className={`bg-[#ffffff] py-10 relative ${fromHomePage && "max-w-[90%] mx-auto rounded-[30px]"}`}
    >
      <div className="max-w-[90%] mx-auto">
        <h3 className="text-[#4B4740] font-borscha md:max-w-full  text-5xl lg:text-7xl uppercase text-center md:text-left">
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
          centeredSlides={false}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true}
          modules={[EffectCoverflow]}
          className="mySwiper"
        >
          <>
            {images.map((img, index) => (
              <SwiperSlide
                key={index}
                className="max-w-72 md:max-w-96 rounded-2xl overflow-hidden max-h-72 md:max-h-92 h-72 md:min-h-92"
              >
                <Image
                  src={`https://media.vickyakku.com/gallery/${img}`}
                  alt="vicky-akku"
                  width={100}
                  height={100}
                  quality={50}
                sizes="100vw"
                  className="w-full h-72 md:h-92  object-cotain"
                  loading="lazy"
                />
              </SwiperSlide>
            ))}
          </>
        </Swiper>
      </div>
    </div>
  );
}
