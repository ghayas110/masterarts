"use client";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full bg-black text-white py-12">
      {/* Call-to-Action Box */}
      <div className="mx-auto w-11/12 md:w-3/4 lg:w-2/3 bg-gray-900 p-10 rounded-xl text-center relative">
        <h2 className="text-3xl md:text-4xl font-bold leading-tight">
          Ready to Forge Some Degen Designs That'll Make Your Project Go{" "}
          <span className="italic text-cyan-400">Viral?</span>
        </h2>
        <p className="mt-4 text-lg font-semibold cursor-pointer hover:underline">
          Ape Into Design →
        </p>

        {/* Floating Design Elements */}
        <div className="absolute top-2 left-6 w-3 h-3 bg-cyan-400 rotate-45"></div>
        <div className="absolute top-2 right-6 w-3 h-3 bg-cyan-400 rotate-45"></div>
        <div className="absolute bottom-4 left-1/2 w-3 h-3 bg-cyan-400 rotate-45 transform -translate-x-1/2"></div>
      </div>

      {/* Footer Content */}
      <div className="mt-10 px-6 md:px-16 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
        {/* Logo & Description */}
        <div className="mb-6 md:mb-0">
          <Image
          src="https://masterarts.co/wp-content/uploads/2024/04/Logo_Header-08.svg"
          alt="Master Arts Logo"
            width={180}
            height={50}
          />
          <p className="text-gray-400 mt-2">
            Welcome to Master Arts, we believe in designing imaginations.
          </p>
        </div>

        {/* Contact Section */}
        <div className="mb-6 md:mb-0">
          <h3 className="font-semibold text-lg">Contact Us</h3>
          <p className="text-gray-400">Telegram - @elegantmaster</p>
          <p className="text-gray-400">themaster@masterarts.co</p>
        </div>

        {/* Follow Us & Email Subscription */}
        <div>
          <h3 className="font-semibold text-lg">Follow Us</h3>
          <div className="mt-3 flex space-x-3">
            <input
              type="email"
              placeholder="example@gmail.com"
              className="px-4 py-2 bg-gray-800 border border-gray-700 rounded-md text-white"
            />
            <button className="bg-cyan-400 text-black px-4 py-2 rounded-md hover:bg-cyan-500">
              Send
            </button>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-12 text-center text-gray-500 text-sm">
        Copyright © 2024 Master Arts.
      </div>
    </footer>
  );
}
