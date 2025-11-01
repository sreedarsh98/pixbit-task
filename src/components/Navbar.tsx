import React from "react";
import Image from 'next/image';
import AnimatedButton from "./AnimatedButton";


const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-[#0a0a0a] border-b border-white/20 z-50  pt-2 pb-2 w-full">
      <div className="cmpad">
      <div className="py-4 flex justify-between items-center">
        {/* Left Menu */}
        <ul className="hidden md:flex space-x-8 text-sm text-gray-300">
          <li className="hover:text-white cursor-pointer transition">About</li>
          <li className="hover:text-white cursor-pointer transition">Technologies</li>
          <li className="hover:text-white cursor-pointer transition">Products</li>
          <li className="hover:text-white cursor-pointer transition">Discover</li>
        </ul>

        {/* Logo Center */}
        <div className="flex items-center gap-2">
         
          <Image src="/images/logo.png" alt="Logo" width={200} height={260} className="w-[220px] h-[50px] object-contain" />
        </div>

        {/* Right Menu */}
      <div className="hidden md:flex items-center space-x-8 text-sm text-gray-300">
          <span className="hover:text-white cursor-pointer transition">Team</span>
          <span className="hover:text-white cursor-pointer transition">Pricing</span>
          <span className="hover:text-white cursor-pointer transition">Buy Premium</span>

         
          <AnimatedButton href="" label=" Get Started" className="w-fit white-btn" />
        </div>
      </div>
      </div>
    </nav>
  );
};

export default Navbar;
