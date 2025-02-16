"use client";
import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="w-full  text-white px-6 md:px-16 py-16">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        {/* Left Side - Content */}
        <div className="lg:w-1/2">
          <p className="text-gray-400 text-lg uppercase font-semibold">
            About Our Agency
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mt-2 leading-tight">
            Your Trusted Brand <br /> in the CryptoVerse
          </h2>
          <p className="mt-4 text-gray-400 text-lg leading-relaxed">
            At Master Arts, we're passionate about leveraging the power of
            creativity to elevate projects within the dynamic world of
            cryptocurrency. With a team of skilled designers and animators, we
            specialize in crafting visually captivating solutions tailored
            specifically for the blockchain industry. From social media posts to
            logo designs, we're dedicated to delivering top-tier graphics and
            animations that leave a lasting impression.
          </p>
          <div className="mt-4 w-14 h-1 bg-cyan-400"></div>
        </div>

        {/* Right Side - Image Layout */}
        <div className="lg:w-1/2 flex flex-col gap-6">
          {/* Top Image */}
          <div className="relative overflow-hidden rounded-lg">
            <Image
              src="/developer.jpeg" // Replace with actual image path
              alt="Developer Working"
              width={600}
              height={350}
              className="w-full h-auto rounded-lg grayscale hover:grayscale-0 transition-all duration-500"
            />
          </div>

          {/* Bottom Two Images - Grid Layout */}
        
        </div>
      </div>
    </section>
  );
}
