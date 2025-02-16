"use client";
import { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [prevScroll, setPrevScroll] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      if (currentScroll === 0) {
        // Always show header when at the top
        setIsVisible(true);
        setHasScrolled(false);
      } else if (currentScroll > prevScroll) {
        // Hide on Scroll Down
        setIsVisible(false);
      } else {
        // Show on Scroll Up
        setIsVisible(true);
      }

      setPrevScroll(currentScroll);
      setHasScrolled(currentScroll > 50); // Turn background black when scrolled
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScroll]);

  return (
    <header
      className={`fixed top-0 left-0 w-full flex items-center p-6 transition-all duration-300 z-50 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      } ${hasScrolled ? "bg-black shadow-lg" : "bg-transparent"}`}
    >
      {/* Logo */}
      <Link href="/" className="flex items-center">
        <Image
          src="https://masterarts.co/wp-content/uploads/2024/04/Logo_Header-08.svg"
          alt="Master Arts Logo"
          width={400}
          height={50}
          className="cursor-pointer"
        />
      </Link>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex gap-x-11 text-lg ml-20">
        <Link href="/" className="hover:text-cyan-400 font-bold text-xl">Home</Link>
        <Link href="/about" className="hover:text-cyan-400 font-bold text-xl">About</Link>
        <Link href="/services" className="hover:text-cyan-400 font-bold text-xl">Services</Link>
        <Link href="/portfolio" className="hover:text-cyan-400 font-bold text-xl">Portfolio</Link>
        <Link href="/contact" className="hover:text-cyan-400 font-bold text-xl">Contact</Link>
      </nav>

      {/* Mobile Menu Button */}
      <button className="md:hidden ml-auto" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-0 left-0 w-full bg-black p-6 flex flex-col gap-4 md:hidden">
          <Link href="/" className="hover:text-cyan-400 font-medium" onClick={() => setIsOpen(false)}>Home</Link>
          <Link href="/about" className="hover:text-cyan-400 font-medium" onClick={() => setIsOpen(false)}>About</Link>
          <Link href="/services" className="hover:text-cyan-400 font-medium" onClick={() => setIsOpen(false)}>Services</Link>
          <Link href="/portfolio" className="hover:text-cyan-400 font-medium" onClick={() => setIsOpen(false)}>Portfolio</Link>
          <Link href="/contact" className="hover:text-cyan-400 font-medium" onClick={() => setIsOpen(false)}>Contact</Link>
        </div>
      )}
    </header>
  );
}
