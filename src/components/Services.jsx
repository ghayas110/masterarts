import Image from "next/image";
import Link from "next/link";

const services = [
  { title: "Animated Videos", image: "/animated-videos.png" },
  { title: "Banners & Illustration", image: "/banners-illustration.avif" },
  { title: "Logo & Branding", image: "/logo-branding.png" },
  { title: "Stickers Design", image: "/stickers-design.png" },
];

export default function ServicesSection() {
  return (
    <div className="w-full bg-black text-white px-6 md:px-16 py-16 flex flex-col md:flex-row justify-between items-center">
      
      {/* Left Content */}
      <div className="md:w-1/2">
        <p className="text-gray-400 text-lg uppercase">What Can We Do</p>
        <h2 className="text-4xl md:text-6xl font-extrabold mt-2">
          Services We Can <br /> Meme-ify for You!
        </h2>
        <Link
          href="#"
          className="mt-6 inline-block text-lg font-semibold border border-white px-6 py-3 rounded-full hover:bg-white hover:text-black transition-all duration-300"
        >
          See All Services →
        </Link>
      </div>

      {/* Right Grid */}
      <div className="md:w-1/2 grid grid-cols-2 gap-6 mt-10 md:mt-0">
        {services.map((service, index) => (
          <div
            key={index}
            className="relative group rounded-xl overflow-hidden transition-all duration-300 border border-transparent hover:border-green-400"
          >
            <Image
              src={service.image}
              alt={service.title}
              width={300}
              height={200}
              className="w-full h-auto object-cover brightness-75 group-hover:brightness-100 transition-all duration-300"
            />
            <div className="absolute bottom-4 left-4 text-white text-xl font-semibold">
              <span className="text-cyan-400">● </span>
              {service.title}
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
