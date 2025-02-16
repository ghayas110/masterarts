"use client";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import Image from "next/image";

const projects = [
  {
    title: "CatCoin 2.0",
    image: "/catcoin.png",
    background: "bg-yellow-500",
    circleColor: "bg-yellow-300",
  },
  {
    title: "Developers",
    image: "/dapp.png",
    background: "bg-blue-500",
    circleColor: "bg-cyan-400",
  },
  {
    title: "ANON GEM",
    image: "/anon-gem.avif",
    background: "bg-red-500",
    circleColor: "bg-red-400",
  },
];

export default function PortfolioSlider() {
  const [activeIndex, setActiveIndex] = useState(1); // Start with the 2nd object

  return (
    <div className="w-full bg-black text-white px-6 md:px-16 py-16">
      {/* Section Title */}
      <div className="text-center mb-10">
        <p className="text-gray-400 text-lg uppercase">Latest Projects</p>
        <h2 className="text-4xl md:text-5xl font-extrabold mt-2">
          Portfolio to Explore
        </h2>
      </div>

      {/* Swiper Slider */}
      <Swiper
        effect="coverflow"
        centeredSlides
        slidesPerView={1.8} // Ensures left and right slides are visible
        loop={true}
        initialSlide={1} // Center the 2nd item on load
        pagination={{ clickable: true }}
        modules={[Pagination, EffectCoverflow]}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 250, // Adjusts depth for 3D effect
          modifier: 1.2, // Makes the center image slightly larger
          slideShadows: false,
        }}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        className="w-full max-w-9xl mx-auto"
      >
        {projects.map((project, index) => (
          <SwiperSlide key={index} className={`p-4 rounded-xl ${project.background}`}>
            <div className="relative w-full h-[350px] md:h-[500px] flex items-center justify-center">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className={`object-cover rounded-xl shadow-lg ${
                  activeIndex === index ? "scale-105" : "opacity-80"
                } transition-all duration-300`}
              />
              {activeIndex === index && (
                <div className="absolute bottom-0 left-0 mr-12 flex items-center">
                  <div
                    className={`absolute left-0 top-0 w-full h-60 rounded-tl-full rounded-tr-full xl:${project.circleColor} md:bg-transparent p-10 opacity-90`}
                  ></div>
                  <div className="relative z-10 text-white ml-3 p-10">
                    <h3 className="text-xl md:text-2xl font-bold">{project.title}</h3>
                    <button className="mt-2 text-lg text-white opacity-80">
                      See Details
                    </button>
                  </div>
                </div>
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Pagination Dots */}
      <div className="mt-6 flex justify-center space-x-2">
        {projects.map((_, index) => (
          <div
            key={index}
            className={`h-3 w-3 rounded-full ${
              activeIndex === index ? "bg-cyan-400" : "bg-gray-500"
            } transition-all`}
          ></div>
        ))}
      </div>
    </div>
  );
}
