"use client";
import Image from "next/image";

export default function AboutSection2() {
  return (
    <section className="w-full bg-black text-white px-6 md:px-16 py-16">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        
        {/* Left Side - Image with Cyan Background Effect */}
        <div className="relative lg:w-1/2 flex justify-center">
          {/* Cyan Background Block Behind Image */}
          <div className="absolute bottom-[-30px] right-[-30px] w-full h-full bg-cyan-400 rounded-2xl"></div>

          {/* Main Image */}
          <div className="relative overflow-hidden rounded-xl shadow-lg z-10">
            <Image
              src="/developer.jpeg" // Replace with actual image path
              alt="Designer Working on Tablet"
              width={600}
              height={400}
              className="w-svw h-full object-cover rounded-xl"
            />
          </div>
        </div>

        {/* Right Side - Content Section */}
        <div className="lg:w-1/2">
          <p className="text-gray-400 text-lg uppercase font-semibold">
            Why Choose Us
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mt-2 leading-tight">
            Your Crypto <br /> Branding Master
          </h2>
          <p className="mt-4 text-gray-400 text-lg leading-relaxed">
            At Master Arts, we're not just designers; we're partners committed 
            to your success. With expertise in cryptocurrency branding and a 
            proven track record of delivering outstanding results, we're here 
            to bring your vision to life.
          </p>
          <p className="mt-4 text-gray-400 text-lg leading-relaxed">
            Whether you're seeking stunning graphics, captivating animations, 
            or comprehensive branding solutions, we have the expertise and 
            ingenuity to elevate your brand. Trust Master Arts to be your 
            creative ally in the ever-evolving world of blockchain.
          </p>

          {/* Cyan Underline */}
          <div className="mt-6 w-14 h-1 bg-cyan-400"></div>
        </div>
      </div>
    </section>
  );
}
