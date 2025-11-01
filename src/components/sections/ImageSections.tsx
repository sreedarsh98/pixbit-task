"use client";
import React from "react";

const ImageSections: React.FC = () => {
  return (
    <>
      <section className="w-full bg-black text-white flex flex-col items-center justify-center px-4 sm:px-8 md:px-16 lg:px-[250px] py-16">
        <div className="text-center mb-12">
          <h1 className="font-normal text-[32px] sm:text-[40px] md:text-[50px] lg:text-[58px] leading-[120%] mb-[20px] sm:mb-[28px]">
            Images like never seen before
          </h1>
          <p className="text-[#FFFFFF99] text-sm sm:text-base leading-relaxed text-opacity-60">
            Discover endless creativity with Promptverse. Generate diverse
            content effortlessly using prompts. Stay updated with real-time
            topics, actionable tasks, and relevant insights from any document or
            URL — all in one space. Smarter design. Content more efficiently.
          </p>
        </div>
      </section>

      <section className="w-full bg-black flex items-center justify-center px-4 sm:px-6 md:px-12 pb-16">
        <div
          className="w-full max-w-7xl bg-[#0E0E0E] grid grid-cols-1 md:grid-cols-2 
                     gap-4 sm:gap-6 md:gap-8 p-4 sm:p-6 md:p-10 rounded-2xl"
        >
          <div className="w-full h-[260px] sm:h-[380px] md:h-[600px] overflow-hidden rounded-xl">
            <img
              src="/images/image1.jpg"
              alt="Artwork 1"
              className="w-full h-full object-cover rounded-xl transition-transform duration-500 hover:scale-105"
            />
          </div>

          <div
            className="grid grid-cols-2 grid-rows-2 md:grid-cols-2 md:grid-rows-2 
                       gap-4 sm:gap-6 h-auto md:h-[600px]"
          >
            <div className="overflow-hidden rounded-xl">
              <img
                src="/images/image2.jpg"
                alt="Artwork 2"
                className="w-full h-full object-cover rounded-xl transition-transform duration-500 hover:scale-105"
              />
            </div>
            <div className="overflow-hidden rounded-xl">
              <img
                src="/images/image3.jpg"
                alt="Artwork 3"
                className="w-full h-full object-cover rounded-xl transition-transform duration-500 hover:scale-105"
              />
            </div>
            <div className="overflow-hidden rounded-xl">
              <img
                src="/images/image4.jpg"
                alt="Artwork 4"
                className="w-full h-full object-cover rounded-xl transition-transform duration-500 hover:scale-105"
              />
            </div>
            <div className="overflow-hidden rounded-xl">
              <img
                src="/images/image5.jpg"
                alt="Artwork 5"
                className="w-full h-full object-cover rounded-xl transition-transform duration-500 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ImageSections;
