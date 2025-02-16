"use client";
import { useState } from "react";
import { motion } from "framer-motion";

export default function VideoSection() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full bg-black text-white px-6 md:px-16 py-16 flex flex-col items-center">
      {/* Title Section */}
      <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-center max-w-3xl">
        Transforming Crypto Visions into Vibrant Animated Realities: <br />
        Where Blockchain Innovation Meets Artistic Mastery!
      </h2>

      {/* Video Thumbnail */}
      <div
        className="relative mt-10 cursor-pointer"
        onClick={() => setIsOpen(true)}
      >
        {/* Darkened Video Image */}
        <div className="relative group ">
          <img
            src="/video-thumbnail.png"
            alt="Video Preview"
            className="w-full max-w-5xl rounded-xl transition-all duration-300 brightness-50 group-hover:brightness-100"
          />

          {/* Play Button with Wave Effect */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              className="relative flex items-center justify-center"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <div className="w-16 h-16 bg-white/20 rounded-full absolute animate-ping"></div>
              <div className="w-12 h-12 bg-white/40 rounded-full absolute animate-ping delay-200"></div>
              <button className="w-14 h-14 bg-white rounded-full flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 text-black"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14.752 11.168l-4.5-2.5a1 1 0 00-1.5.866v5a1 1 0 001.5.866l4.5-2.5a1 1 0 000-1.732z"
                  />
                </svg>
              </button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Modal (Tailwind-based, not Ant Design) */}
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 z-50">
          <div className="relative w-full max-w-4xl">
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 text-white bg-black p-2 rounded-full hover:bg-gray-700"
              onClick={() => setIsOpen(false)}
            >
              ✕
            </button>

            {/* YouTube Video */}
            <iframe
              className="w-full h-[300px] sm:h-[450px] md:h-[500px] rounded-lg"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
              title="YouTube Video"
              allow="autoplay; encrypted-media"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
}
