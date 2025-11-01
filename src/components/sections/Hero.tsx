"use client";
import React from "react";
import AnimatedButton from "../AnimatedButton";

const Hero: React.FC = () => {
  return (
    <div
      className="relative min-h-screen flex items-center justify-center overflow-hidden 
                 bg-cover bg-center px-4 sm:px-8 md:px-12 lg:px-24 xl:px-32 
                 py-24 sm:py-32 md:py-40"
      style={{ backgroundImage: 'url(/images/hero-bg.png)' }}
    >
      <div className="cmpad hero-banner w-full">
        <div className="relative z-10 text-center max-w-4xl mx-auto animate-[fadeIn_1s_ease-out]">
          
          <div className="inline-block text-sm sm:text-base text-white/70 mb-3">
            Promptverse.AI
          </div>

          <h1 className="font-normal text-[30px] sm:text-[36px] md:text-[46px] lg:text-[56px] 
                         leading-tight sm:leading-[110%] md:leading-[120%] mb-5 text-white">
            Find Inspiration.
            <br className="hidden sm:block" /> Create, Generate, Produce & Automate.
          </h1>

          <p className="text-[13px] sm:text-[15px] md:text-[16px] leading-relaxed 
                        text-white/60 max-w-[700px] mx-auto font-light px-2 sm:px-0">
            Welcome to Promptverse. Effortlessly create content, explore endless prompts, 
            and stay ahead with real-time trends. Automate emails, social media, and more, 
            while our AI extracts knowledge from any document or URL. Experience a stunning, 
            futuristic design that boosts productivity.
          </p>

          <div className="flex justify-center flex-wrap gap-4 mt-10">
            <div className="shuffle">
              <AnimatedButton
                href=""
                label="Start Generating"
                className="w-fit transparent-btn"
                icon={
                  <svg
                    width="21"
                    height="21"
                    viewBox="0 0 21 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.5025 3.6L4.0025 5L5.4025 2.5L4.0025 0L6.5025 1.4L9.0025 0L7.6025 2.5L9.0025 5L6.5025 3.6ZM18.5025 13.4L21.0025 12L19.6025 14.5L21.0025 17L18.5025 15.6L16.0025 17L17.4025 14.5L16.0025 12L18.5025 13.4ZM21.0025 0L19.6025 2.5L21.0025 5L18.5025 3.6L16.0025 5L17.4025 2.5L16.0025 0L18.5025 1.4L21.0025 0ZM12.3425 10.78L14.7825 8.34L12.6625 6.22L10.2225 8.66L12.3425 10.78ZM13.3725 5.29L15.7125 7.63C16.1025 8 16.1025 8.65 15.7125 9.04L4.0425 20.71C3.6525 21.1 3.0025 21.1 2.6325 20.71L0.2925 18.37C-0.0975 18 -0.0975 17.35 0.2925 16.96L11.9625 5.29C12.3525 4.9 13.0025 4.9 13.3725 5.29Z"
                      fill="white"
                    />
                  </svg>
                }
              />
            </div>

            <div className="shuffle">
              <AnimatedButton
                href=""
                label="Download"
                className="w-fit white-btn"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
