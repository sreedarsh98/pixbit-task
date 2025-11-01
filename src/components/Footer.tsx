"use client";
import React from "react";
import {
  FaFacebookF,
  FaGoogle,
  FaInstagram,
  FaYoutube,
  FaWhatsapp,
  FaTelegramPlane,
} from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white pt-16 sm:pt-20 md:pt-24 pb-10 sm:pb-14 md:pb-16 px-4 cmpad ">
      <div className="max-w-7xl mx-auto">
        {/* === Brand Title === */}
        <h1 className="font-normal text-[60px] sm:text-[60px] md:text-[80px] lg:text-[140px] xl:text-[152px] leading-[100%] text-white mb-12 sm:mb-16 md:mb-20 text-center md:text-left break-words">
          Promptverse AI
        </h1>

        {/* === Footer Grid === */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-12 md:gap-16">
          {/* === Column 1: Navigation === */}
          <div>
            <h3 className="text-[#828282] font-light text-[15px] sm:text-[16px] leading-[24px] mb-3 sm:mb-4">
              Navigation
            </h3>
            <ul className="space-y-2 text-white/80 font-light text-[15px] sm:text-[16px] leading-[24px]">
              <li>Schedule</li>
              <li>Courses</li>
              <li>Pricing</li>
              <li>Payment</li>
              <li>Study in Spain</li>
              <li>Books</li>
            </ul>
          </div>

          {/* === Column 2: About Section === */}
          <div>
            <ul className="space-y-2 text-white/80 font-light text-[15px] sm:text-[16px] leading-[24px] mt-[20px] sm:mt-[30px] md:mt-[32px]">
              <li>About school</li>
              <li>Gallery</li>
              <li>News</li>
              <li>Contacts</li>
            </ul>
          </div>

          {/* === Column 3: Contact Info === */}
          <div>
            <h3 className="text-[#828282] font-light text-[15px] sm:text-[16px] leading-[24px] mb-3 sm:mb-4">
              Contact us
            </h3>
            <ul className="space-y-2 text-white/80 font-light text-[15px] sm:text-[16px] leading-[24px]">
              <li>+1 (406) 555-0120</li>
              <li>+1 (480) 555-0103</li>
              <li>help@promptverse.com</li>
            </ul>
          </div>

          {/* === Column 4: Socials & Chat === */}
          <div className="flex flex-col gap-8">
            {/* Follow us */}
            <div>
              <h3 className="text-[#828282] font-light text-[15px] sm:text-[16px] leading-[24px] mb-3 sm:mb-4">
                Follow us
              </h3>
              <div className="flex flex-wrap gap-3 sm:gap-4">
                <a
                  href="#"
                  className="p-2 border border-white/20 rounded-full hover:bg-white/10 transition"
                >
                  <FaFacebookF className="text-white text-[16px] sm:text-[18px]" />
                </a>
                <a
                  href="#"
                  className="p-2 border border-white/20 rounded-full hover:bg-white/10 transition"
                >
                  <FaGoogle className="text-white text-[16px] sm:text-[18px]" />
                </a>
                <a
                  href="#"
                  className="p-2 border border-white/20 rounded-full hover:bg-white/10 transition"
                >
                  <FaInstagram className="text-white text-[16px] sm:text-[18px]" />
                </a>
                <a
                  href="#"
                  className="p-2 border border-white/20 rounded-full hover:bg-white/10 transition"
                >
                  <FaYoutube className="text-white text-[16px] sm:text-[18px]" />
                </a>
              </div>
            </div>

            {/* Let’s chat */}
            <div>
              <h3 className="text-[#828282] font-light text-[15px] sm:text-[16px] leading-[24px] mb-3 sm:mb-4">
                Let’s chat
              </h3>
              <div className="flex flex-wrap gap-3 sm:gap-4">
                <a
                  href="#"
                  className="p-2 border border-white/20 rounded-full hover:bg-white/10 transition"
                >
                  <FaWhatsapp className="text-white text-[16px] sm:text-[18px]" />
                </a>
                <a
                  href="#"
                  className="p-2 border border-white/20 rounded-full hover:bg-white/10 transition"
                >
                  <FaTelegramPlane className="text-white text-[16px] sm:text-[18px]" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* === Copyright / Bottom Line === */}
        <div className="border-t border-white/10 mt-12 sm:mt-16 pt-6 sm:pt-8 text-center text-white/60 text-[13px] sm:text-[14px]">
          © {new Date().getFullYear()} Promptverse AI. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
