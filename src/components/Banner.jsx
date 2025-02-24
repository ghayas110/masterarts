import Image from "next/image";
import Link from "next/link";

export default function Banner() {
  return (
    <div className="relative h-screen bg-black w-full overflow-hidden bg-transparent text-white flex items-center px-6 md:px-16" style={{backgroundColor:'black'}}>
      {/* Background Image */}
      <div className="absolute inset-0 ">
        <Image 
          src="https://masterarts.co/wp-content/uploads/2025/01/BG-Transparent-WEBP-01-scaled.avif"
          alt="Background"
          fill
          className="object-cover"
          quality={100}
        />
      </div>

      {/* Main Content */}
      <div className="flex flex-col w-full items-start justify-center">
        {/* Heading Section */}
        <div className="max-w-6xl z-50">
          <h2 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-extrabold leading-tight ">
            Minting Viral <br /> Graphic Designs
          </h2>
        </div>

        {/* Description & CTA Section */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between space-y-6 sm:space-y-0 sm:space-x-4 mt-6 w-full z-50">
          <Link href="#" className="px-6 py-3 text-lg sm:text-xl md:text-2xl text-white font-semibold rounded-full hover:bg-white hover:text-black transition-all">
            Get a Quote →
          </Link>
          <p className="max-w-2xl text-sm sm:text-base md:text-lg lg:text-xl text-white">
            Step into the world of Loading Logo where we mint viral crypto branding that
            sets your project apart in the digital landscape because here, innovation meets imagination!
          </p>
        </div>
      </div>

      {/* Social Media Links */}
      <div className="absolute right-4 top-1/3 -translate-y-1/2 flex flex-col space-y-6 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl gap-10">
        <Link href="#" className="rotate-90 text-white hover:text-white">Behance</Link>
        <Link href="#" className="rotate-90 text-white hover:text-white">Telegram</Link>
        <Link href="#" className="rotate-90 text-white hover:text-white">Twitter</Link>
        <Link href="#" className="rotate-90 text-white hover:text-white">YouTube</Link>
      </div>
    </div>
  );
}
