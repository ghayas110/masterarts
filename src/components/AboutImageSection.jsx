"use client";
import Image from "next/image";

export default function ImageSection() {
  return (
    <section className="w-full bg-black flex justify-center items-center py-10">
      <div className="max-w-6xl w-full flex gap-6">
        {/* Left Image (Colored) */}
        <div className="flex-1 rounded-xl overflow-hidden">
          <Image
            src="/bitcoin-handshake.png" // Replace with actual image path
            alt="Bitcoin Handshake"
            width={600}
            height={400}
            className="w-full h-full object-cover rounded-xl"
          />
        </div>

        {/* Right Image (Grayscale) */}
        <div className="flex-1 rounded-xl overflow-hidden">
          <Image
            src="/smiling-professional.jpeg" // Replace with actual image path
            alt="Smiling Professional"
            width={600}
            height={100}
            className="w-full  object-cover rounded-xl grayscale"
          />
        </div>
      </div>
    </section>
  );
}
