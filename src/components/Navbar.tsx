"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import AnimatedButton from "./AnimatedButton";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#0a0a0a] border-b border-white/20 z-50">
      <div className="cmpad">
        <div className="py-4 flex items-center justify-between w-full">
          {/* === Left (Desktop nav - hidden on medium & small) === */}
          <div className="flex-1 hidden xl:flex justify-start">
            <ul className="flex space-x-8 text-sm text-gray-300">
              <li className="hover:text-white cursor-pointer transition">About</li>
              <li className="hover:text-white cursor-pointer transition">Technologies</li>
              <li className="hover:text-white cursor-pointer transition">Products</li>
              <li className="hover:text-white cursor-pointer transition">Discover</li>
            </ul>
          </div>

          {/* === Center (Logo always perfectly centered) === */}
          <div className="flex-shrink-0 flex justify-center">
            <Image
              src="/images/logo.png"
              alt="Promptverse Logo"
              width={200}
              height={260}
              className="w-[150px] sm:w-[180px] md:w-[200px] h-[40px] xl:h-[50px] object-contain"
            />
          </div>

          {/* === Right area (desktop or mobile button/hamburger) === */}
          <div className="flex-1 flex justify-end items-center gap-3 text-gray-300 text-sm">
            {/* Desktop (≥1024px) */}
            <div className="hidden xl:flex items-center space-x-6">
              <span className="hover:text-white cursor-pointer transition">Team</span>
              <span className="hover:text-white cursor-pointer transition">Pricing</span>
              <span className="hover:text-white cursor-pointer transition">Buy Premium</span>
              <AnimatedButton href="" label="Get Started" className="w-fit white-btn" />
            </div>

            {/* Mobile & Tablet (≤1023px) */}
            <div className="flex xl:hidden items-center gap-3">
              <AnimatedButton
                href=""
                label="Get Started"
                className="white-btn text-sm px-4 py-2"
              />
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-300 focus:outline-none"
                aria-label="Toggle menu"
              >
                {isOpen ? <X size={26} /> : <Menu size={26} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* === Mobile / Medium Dropdown === */}
      {isOpen && (
        <div className="xl:hidden bg-[#0a0a0a] border-t border-white/20 px-6 pb-4 text-gray-300 space-y-4 text-sm animate-fadeIn">
          <ul className="space-y-2">
            <li className="hover:text-white cursor-pointer transition">About</li>
            <li className="hover:text-white cursor-pointer transition">Technologies</li>
            <li className="hover:text-white cursor-pointer transition">Products</li>
            <li className="hover:text-white cursor-pointer transition">Discover</li>
            <li className="hover:text-white cursor-pointer transition">Team</li>
            <li className="hover:text-white cursor-pointer transition">Pricing</li>
            <li className="hover:text-white cursor-pointer transition">Buy Premium</li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
