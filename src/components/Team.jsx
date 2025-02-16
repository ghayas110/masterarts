"use client";
import Image from "next/image";

const teamMembers = [
  {
    name: "The Master",
    role: "Creative Director",
    image: "/team1.png", // Replace with actual image paths
    bgColor: "bg-blue-500",
  },
  {
    name: "The Mystery",
    role: "Production Manager",
    image: "/team2.png",
    bgColor: "bg-blue-400",
  },
  {
    name: "The Flash",
    role: "Motion Graphic Designer",
    image: "/team3.webp",
    bgColor: "bg-green-600",
  },
  {
    name: "The Pixel Prodigy",
    role: "Graphic Designer",
    image: "/team4.webp",
    bgColor: "bg-purple-500",
  },
];

export default function TeamSection() {
  return (
    <div className="w-full bg-black text-white px-6 md:px-16 py-16 text-center">
      {/* Section Heading */}
      <p className="text-gray-400 text-lg uppercase">Our Team</p>
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mt-2">
        The Master Minds!
      </h2>

      {/* Team Grid */}
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="relative group rounded-xl overflow-hidden transition-all duration-300 border border-transparent hover:border-green-400"
          >
            {/* Zoom-in Effect on Hover */}
            <div className="overflow-hidden">
              <Image
                src={member.image}
                alt="Team Member"
                width={300}
                height={200}
                className="w-full h-auto object-cover brightness-75 group-hover:brightness-100 transition-transform duration-300 transform group-hover:scale-110"
              />
            </div>

            {/* Name & Role */}
            <div className="absolute bottom-4 left-4 text-white text-lg font-semibold">
              <span className="text-cyan-400">● </span>
              {member.name}
              <p className="text-sm text-gray-300">{member.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
