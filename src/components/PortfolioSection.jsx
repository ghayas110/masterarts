"use client";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";

const categories = [
  "All Project",
  "Social Media Posts",
  "Branding",
  "Sticker Design",
  "NFT",
  "Illustration",
  "Animated Gif",
];

const projects = [
  {
    title: "CatCoin 2.0",
    image: "/catcoin.png", // Replace with actual image path
    category: "Social Media Posts",
  },
  {
    title: "Anon Gems",
    image: "/anon-gem.avif",
    category: "Branding",
  },
  {
    title: "Crypto Illustration",
    image: "/crypto-illustration.avif",
    category: "Illustration",
  },
  {
    title: "NFT Artwork",
    image: "/nft-artwork.gif",
    category: "NFT",
  },
  {
    title: "Sticker Pack",
    image: "/sticker-pack.avif",
    category: "Sticker Design",
  },
  {
    title: "Animated Logo",
    image: "/animated-logo.gif",
    category: "Animated Gif",
  },
];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All Project");

  // Filter projects based on category
  const filteredProjects =
    activeCategory === "All Project"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <section className="w-full bg-black text-white px-6 md:px-16 py-16">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <p className="text-gray-400 text-lg uppercase font-semibold">Our Portfolio</p>
        <h2 className="text-4xl md:text-5xl font-extrabold mt-2">Our Latest Masterpieces!</h2>

        {/* Categories */}
        <div className="mt-6 flex flex-wrap gap-4">
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => setActiveCategory(category)}
              className={`text-lg font-semibold ${
                activeCategory === category ? "text-cyan-400 border-b-2 border-cyan-400" : "text-gray-400"
              } transition-all`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Grid Layout for Projects */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative rounded-lg overflow-hidden shadow-lg cursor-pointer hover:scale-105 transition-all"
            >
              <div className="w-full h-[250px] md:h-[300px] lg:h-[350px] overflow-hidden rounded-lg">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={400}
                  height={300}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
