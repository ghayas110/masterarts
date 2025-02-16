"use client";
import { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import Image from "next/image";

// Testimonials Data
const testimonials = [
  {
    company: "Byte AI",
    logo: "/byte-logo.avif",
    text: "Byte AI News hit the jackpot with Master Arts! Their custom mascot and GIFs are pure gold. The robot mascot embodies our brand's vibe, charming our audience instantly. The GIFs, from welcome to purchase, are seamless and engaging. Huge thumbs up!",
    rating: 5,
    author: "Enrico",
    role: "CMO at Byte AI",
  },
  {
    company: "Piena Finance",
    logo: "/piena-logo.avif",
    text: "Piena Finance has never looked better! The branding work done by Master Arts transformed our entire customer experience. The animations and visual assets provided have elevated our presence in the financial sector. Highly recommended!",
    rating: 5,
    author: "Sophia",
    role: "Head of Design at Piena",
  },
  {
    company: "OXO AI",
    logo: "/oxo-logo.avif",
    text: "We entrusted Master Arts with our rebranding, and they exceeded expectations. The graphics and mascots they created are simply outstanding, and the engagement on our platforms has skyrocketed. A truly exceptional experience!",
    rating: 5,
    author: "Liam",
    role: "CEO at OXO AI",
  },
];

export default function TestimonialSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const logoSwiperRef = useRef(null);
  const contentSwiperRef = useRef(null);
  const isSyncing = useRef(false); // Prevents infinite loops

  const syncSliders = (index) => {
    if (isSyncing.current) return;
    isSyncing.current = true;
    setActiveIndex(index);
    logoSwiperRef.current?.slideTo(index);
    contentSwiperRef.current?.slideTo(index);
    setTimeout(() => (isSyncing.current = false), 100); // Prevents fast re-triggers
  };

  return (
    <div className="w-full bg-black text-white px-6 md:px-16 py-16 flex flex-col lg:flex-row items-center justify-center gap-12">
      {/* Left Side: Diamond Portfolio-Style Logo Slider */}
      <div className="relative w-full lg:w-1/3 flex justify-center items-center">
        <Swiper
          onSwiper={(swiper) => (logoSwiperRef.current = swiper)}
          slidesPerView={3}
          centeredSlides={true}
          loop={true}
          className="w-full max-w-sm"
          onSlideChange={(swiper) => syncSliders(swiper.realIndex)}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index} className="flex justify-center">
              <div
                className={`relative transform transition-all ${
                  index === activeIndex
                    ? "scale-100 opacity-100 z-10"
                    : "scale-75 opacity-50"
                }`}
              >
                <Image
                  src={testimonial.logo}
                  alt={testimonial.company}
                  width={90}
                  height={280}
                  className="w-18 h-58 transform rotate-45"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Right Side: Testimonial Text Slider */}
      <div className="w-full lg:w-2/3 relative">
        <Swiper
          onSwiper={(swiper) => (contentSwiperRef.current = swiper)}
          slidesPerView={1}
          effect="fade"
          loop={true}
          modules={[Navigation, EffectFade]}
          className="w-full relative"
          onSlideChange={(swiper) => syncSliders(swiper.realIndex)}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide
              key={index}
              className={`absolute w-full transition-opacity duration-500 ${
                index === activeIndex ? "opacity-100 visible" : "opacity-0 invisible"
              }`}
            >
              <div className="text-left">
                <p className="text-lg md:text-xl italic">
                  “{testimonial.text}”
                </p>

                {/* Star Rating */}
                <div className="flex mt-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <span key={i} className="text-red-500 text-xl">★</span>
                  ))}
                </div>

                {/* Author & Role */}
                <div className="mt-4 text-white">
                  <h3 className="text-lg font-semibold">{testimonial.author}</h3>
                  <p className="text-gray-400 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation Buttons */}
        <div className="mt-6 flex space-x-4">
          <button
            className="border border-white px-4 py-2 rounded-md hover:bg-white hover:text-black transition-all"
            onClick={() => syncSliders((activeIndex - 1 + testimonials.length) % testimonials.length)}
          >
            ←
          </button>
          <button
            className="border border-white px-4 py-2 rounded-md hover:bg-white hover:text-black transition-all"
            onClick={() => syncSliders((activeIndex + 1) % testimonials.length)}
          >
            →
          </button>
        </div>
      </div>
    </div>
  );
}
