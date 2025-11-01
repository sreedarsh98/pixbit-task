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
    <footer className="bg-black text-white pt-24 pb-12 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        {/* === Brand Title === */}
        <h1 className=" font-normal text-[272px] md:text-[156px] leading-[100%] text-white mb-20">
          Promptverse AI
        </h1>

        {/* === Footer Grid === */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* === Column 1: Navigation === */}
          <div>
            <h3 className="text-[#828282] font-[BodyFont] font-light text-[16px] leading-[24px] mb-4">
              Navigation
            </h3>
            <ul className="space-y-2 text-white/80 font-light text-[16px] leading-[24px]">
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
            <ul className="space-y-2 text-white/80 font-light text-[16px] leading-[24px] mt-[40px] md:mt-[32px]">
              <li>About school</li>
              <li>Gallery</li>
              <li>News</li>
              <li>Contacts</li>
            </ul>
          </div>

          {/* === Column 3: Contact Info === */}
          <div>
            <h3 className="text-[#828282] font-[BodyFont] font-light text-[16px] leading-[24px] mb-4">
              Contact us
            </h3>
            <ul className="space-y-2 text-white/80 font-light text-[16px] leading-[24px]">
              <li>+1 (406) 555-0120</li>
              <li>+1 (480) 555-0103</li>
              <li>help@promptverse.com</li>
            </ul>
          </div>

          {/* === Column 4: Socials & Chat === */}
          <div className="flex flex-col gap-8">
            {/* Follow us */}
            <div>
              <h3 className="text-[#828282] font-[BodyFont] font-light text-[16px] leading-[24px] mb-4">
                Follow us
              </h3>
              <div className="flex gap-4">
                <a href="#" className="p-2 border border-white/20 rounded-full hover:bg-white/10 transition">
                  <FaFacebookF className="text-white text-[18px]" />
                </a>
                <a href="#" className="p-2 border border-white/20 rounded-full hover:bg-white/10 transition">
                  <FaGoogle className="text-white text-[18px]" />
                </a>
                <a href="#" className="p-2 border border-white/20 rounded-full hover:bg-white/10 transition">
                  <FaInstagram className="text-white text-[18px]" />
                </a>
                <a href="#" className="p-2 border border-white/20 rounded-full hover:bg-white/10 transition">
                  <FaYoutube className="text-white text-[18px]" />
                </a>
              </div>
            </div>

            {/* Let’s chat */}
            <div>
              <h3 className="text-[#828282] font-[BodyFont] font-light text-[16px] leading-[24px] mb-4">
                Let’s chat
              </h3>
              <div className="flex gap-4">
                <a href="#" className="p-2 border border-white/20 rounded-full hover:bg-white/10 transition">
                  <FaWhatsapp className="text-white text-[18px]" />
                </a>
                <a href="#" className="p-2 border border-white/20 rounded-full hover:bg-white/10 transition">
                  <FaTelegramPlane className="text-white text-[18px]" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
