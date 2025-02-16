import React from "react";

export default function FunFact() {
  return (
    <div className="relative w-full flex justify-center items-center mt-[-100px] bg-black">
      {/* Fun Fact Box */}
      <div className="bg-gray-900 backdrop-blur-md text-white rounded-xl px-10 py-8 md:px-14 md:py-12 w-[90%] max-w-6xl shadow-lg flex flex-col md:flex-row items-center md:items-start justify-between">
        
        {/* Left Section - Title & Description */}
        <div className="md:w-1/2">
          <h2 className="text-3xl md:text-4xl font-extrabold">Our Fun Fact</h2>
          <p className="text-sm md:text-lg text-gray-300 mt-4">
            Behind every creative endeavor, quirky stats emerge that embody our passion and dedication to design excellence.
            Embrace these fun facts - they represent our agency's journey.
          </p>
        </div>

        {/* Right Section - Stats */}
        <div className="md:w-1/2 grid grid-cols-2 gap-6 md:gap-10 text-center md:text-right mt-6 md:mt-0">
          {/* Clients */}
          <div>
            <h3 className="text-4xl md:text-5xl font-bold">220<span className="text-cyan-400">+</span></h3>
            <p className="text-sm md:text-base text-gray-300">Global Happy Clients</p>
          </div>

          {/* Projects */}
          <div>
            <h3 className="text-4xl md:text-5xl font-bold">450<span className="text-cyan-400">+</span></h3>
            <p className="text-sm md:text-base text-gray-300">Project Completed</p>
          </div>

          {/* Years of Experience */}
          <div>
            <h3 className="text-4xl md:text-5xl font-bold">5<span className="text-cyan-400">+</span></h3>
            <p className="text-sm md:text-base text-gray-300">Years of Experience</p>
          </div>

          {/* Digital Products */}
          <div>
            <h3 className="text-4xl md:text-5xl font-bold">15<span className="text-cyan-400">+</span></h3>
            <p className="text-sm md:text-base text-gray-300">Digital Products</p>
          </div>
        </div>

      </div>
    </div>
  );
}
