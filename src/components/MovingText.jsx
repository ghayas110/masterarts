"use client";
import Image from "next/image";

const logos = [
  { src: "/quant-logo.webp", alt: "Quant" },
  { src: "/oxo-logo.png", alt: "OXO" },
  { src: "/syntropy-logo.webp", alt: "Syntropy" },
  { src: "/avalanche-logo.webp", alt: "Avalanche" },
  { src: "/polytrade-logo.webp", alt: "Polytrade" },
  { src: "/berachain-logo.png", alt: "Berachain" },
];

export default function MovingTextWithLogos() {
  return (
    <div className="w-full bg-black py-10">
      {/* Moving Text Section */}
      <div className="overflow-hidden">
        <div className="whitespace-nowrap flex space-x-10 animate-scroll">
          <p className="text-6xl md:text-7xl font-bold text-transparent bg-clip-text outline-text">
            Globally The Whales We've Collaborated With
          </p>
          <p className="text-6xl md:text-7xl font-bold text-transparent bg-clip-text outline-text">
            Globally The Whales We've Collaborated With
          </p>
          <p className="text-6xl md:text-7xl font-bold text-transparent bg-clip-text outline-text">
            Globally The Whales We've Collaborated With
          </p>
        </div>
      </div>

      {/* Logos Section */}
      <div className="flex justify-center items-center mt-10">
        <div className="grid grid-cols-3 md:grid-cols-6 gap-6">
          {logos.map((logo, index) => (
            <div key={index} className="flex justify-center">
              <Image src={logo.src} alt={logo.alt} width={100} height={100} className="h-20 w-auto" />
            </div>
          ))}
        </div>
      </div>

      {/* Tailwind Keyframe Styles */}
      <style jsx>{`
        @keyframes scroll {
          from {
            transform: translateX(100%);
          }
          to {
            transform: translateX(-100%);
          }
        }
        .animate-scroll {
          animation: scroll 10s linear infinite;
        }
        .outline-text {
          color: transparent;
          -webkit-text-stroke: 2px cyan;
        }
      `}</style>
    </div>
  );
}
