"use client";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const awards = [
  [
    { year: "2019", title: "Indigo Design Award", desc: "Branding and Iconic Logo\nFor a New Crypto Project" },
    { year: "2019", title: "Davey Awards", desc: "Excellence in Motion Graphics\nCrypto Explainer Video" },
    { year: "2020", title: "Vega Digital Awards", desc: "Innovative Graphic Design\nCrypto Whitepaper" },
    { year: "2020", title: "The One Show", desc: "Shortlist for Motion/Animation\nGlobal Awards Competition" },
  ],
  [
    { year: "2021", title: "Red Dot Award", desc: "Excellence in UI/UX Design\nCrypto Web App" },
    { year: "2021", title: "Clio Awards", desc: "Best Visual Identity\nCrypto Branding Campaign" },
    { year: "2022", title: "Awwwards", desc: "Website of the Year\nCrypto Exchange UI" },
    { year: "2022", title: "Webby Awards", desc: "Best Interactive Experience\nNFT Marketplace Design" },
  ],
];

export default function AwardsSlider() {
  const [swiperRef, setSwiperRef] = useState(null);

  return (
    <div className="w-full bg-black text-white px-6 md:px-16 py-10 md:py-16 flex flex-col md:flex-row items-center">
      
      {/* Left Content (Title & Buttons) */}
      <div className="w-full md:w-1/3 text-center md:text-left">
        <p className="text-gray-400 text-lg uppercase">Our Awards</p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mt-2 leading-tight">
          Hodling Awards <br /> Like Crypto Kings!
        </h2>

        {/* Navigation Buttons */}
        <div className="mt-6 flex justify-center md:justify-start space-x-4">
          <button
            className="border border-white px-5 py-3 rounded-md hover:bg-white hover:text-black transition-all"
            onClick={() => swiperRef?.slidePrev()}
          >
            ←
          </button>
          <button
            className="border border-white px-5 py-3 rounded-md hover:bg-white hover:text-black transition-all"
            onClick={() => swiperRef?.slideNext()}
          >
            →
          </button>
        </div>
      </div>

      {/* Right Side - Awards Slider */}
      <div className="w-full md:w-2/3 mt-10 md:mt-0">
        <Swiper
          modules={[Navigation]}
          slidesPerView={1}
          loop={true}
          onSwiper={setSwiperRef}
          className="w-full"
        >
          {awards.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {slide.map((award, idx) => (
                  <div key={idx} className="p-4 sm:p-6  rounded-lg">
                    <h3 className="text-cyan-400 text-2xl sm:text-3xl font-bold">{award.year}</h3>
                    <p className="text-white text-lg sm:text-xl font-semibold mt-2">{award.title}</p>
                    <p className="text-gray-400 text-sm sm:text-base mt-2 whitespace-pre-line">{award.desc}</p>
                  </div>
                ))}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

    </div>
  );
}
