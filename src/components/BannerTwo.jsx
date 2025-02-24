"use client";
import Image from "next/image";

export default function Banner({ title}) {
  return (
    <section className="relative w-full h-[60vh] flex items-center justify-center bg-black text-white">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black to-[#032225] opacity-90"></div>

      {/* Background Waves Image */}
      <Image
        src="https://masterarts.co/wp-content/uploads/2023/01/about_hero_bg.jpg" // Replace with actual image path
        alt="Background Waves"
        layout="fill"
        objectFit="cover"
        className="opacity-50"
      />

      {/* Content */}
      <div className="relative z-10 text-center">
        <h1 className="text-4xl md:text-5xl font-bold">{title}</h1>
        <p className="mt-2 text-gray-400">
          <span className="text-white">Loading Logo</span> &gt; {title}
        </p>
      </div>
    </section>
  );
}
