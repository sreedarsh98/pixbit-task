"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react"; // For hamburger icons
import AnimatedButton from "./AnimatedButton";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#0a0a0a] border-b border-white/20 z-50">
      <div className="cmpad">
        <div className="py-4 flex justify-between items-center">
          {/* Left Menu (Desktop) */}
          <ul className="hidden md:flex space-x-8 text-sm text-gray-300">
            <li className="hover:text-white cursor-pointer transition">About</li>
            <li className="hover:text-white cursor-pointer transition">Technologies</li>
            <li className="hover:text-white cursor-pointer transition">Products</li>
            <li className="hover:text-white cursor-pointer transition">Discover</li>
          </ul>

          {/* Logo Center */}
          <div className="flex items-center gap-2">
            <Image
              src="/images/logo.png"
              alt="Logo"
              width={200}
              height={260}
              className="w-[160px] md:w-[220px] h-[40px] md:h-[50px] object-contain"
            />
          </div>

          {/* Right Menu (Desktop) */}
          <div className="hidden md:flex items-center space-x-8 text-sm text-gray-300">
            <span className="hover:text-white cursor-pointer transition">Team</span>
            <span className="hover:text-white cursor-pointer transition">Pricing</span>
            <span className="hover:text-white cursor-pointer transition">Buy Premium</span>
            <AnimatedButton href="" label="Get Started" className="w-fit white-btn" />
          </div>

          {/* Hamburger Menu (Mobile) */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-300 focus:outline-none"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#0a0a0a] border-t border-white/20 px-6 pb-4 text-gray-300 space-y-4 text-sm animate-fadeIn">
          <ul className="space-y-2">
            <li className="hover:text-white cursor-pointer transition">About</li>
            <li className="hover:text-white cursor-pointer transition">Technologies</li>
            <li className="hover:text-white cursor-pointer transition">Products</li>
            <li className="hover:text-white cursor-pointer transition">Discover</li>
            <li className="hover:text-white cursor-pointer transition">Team</li>
            <li className="hover:text-white cursor-pointer transition">Pricing</li>
            <li className="hover:text-white cursor-pointer transition">Buy Premium</li>
          </ul>

          <AnimatedButton href="" label="Get Started" className=" white-btn" />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
