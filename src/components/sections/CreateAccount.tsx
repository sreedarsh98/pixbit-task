"use client";
import React from "react";
import AnimatedButton from "../AnimatedButton";

const CreateAccount: React.FC = () => {
  return (
    <section className="relative w-full bg-[#0E0E0E] text-white flex flex-col items-center justify-center py-16 sm:py-20 md:py-28 pt-[100px] sm:pt-[120px] overflow-hidden">
      <img
        className="absolute left-4 sm:left-8 top-[60px] sm:top-[80px] w-[60px] sm:w-[80px] md:w-[100px] h-[60px] sm:h-[80px] md:h-[100px] object-contain opacity-80"
        src="/icons/star.svg"
        alt="Star Icon"
      />

      <div className="text-center max-w-[100%] sm:max-w-2xl md:max-w-7xl px-4 mb-10 sm:mb-12">
        <h1 className="font-normal text-[30px] sm:text-[42px] md:text-[52px] lg:text-[58px] leading-[120%] text-center text-white mb-[16px] sm:mb-[20px] md:mb-[28px]">
          Promptverse has no limitation.
        </h1>
        <h1 className="font-normal text-[30px] sm:text-[42px] md:text-[52px] lg:text-[58px] leading-[120%] text-center text-white mb-[28px]">
          Get started on a journey with Promptverse.
        </h1>

        <div className="flex justify-center">
          <div className="shuffle">
            <AnimatedButton
              href=""
              label={"Create an Account"}
              className="w-fit transparent-btn text-sm sm:text-base px-6 py-3 sm:px-8 sm:py-4"
              icon={
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 21 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="ml-1"
                >
                  <path
                    d="M6.5025 3.6L4.0025 5L5.4025 2.5L4.0025 0L6.5025 1.4L9.0025 0L7.6025 2.5L9.0025 5L6.5025 3.6ZM18.5025 13.4L21.0025 12L19.6025 14.5L21.0025 17L18.5025 15.6L16.0025 17L17.4025 14.5L16.0025 12L18.5025 13.4ZM21.0025 0L19.6025 2.5L21.0025 5L18.5025 3.6L16.0025 5L17.4025 2.5L16.0025 0L18.5025 1.4L21.0025 0ZM12.3425 10.78L14.7825 8.34L12.6625 6.22L10.2225 8.66L12.3425 10.78ZM13.3725 5.29L15.7125 7.63C16.1025 8 16.1025 8.65 15.7125 9.04L4.0425 20.71C3.6525 21.1 3.0025 21.1 2.6325 20.71L0.2925 18.37C-0.0975 18 -0.0975 17.35 0.2925 16.96L11.9625 5.29C12.3525 4.9 13.0025 4.9 13.3725 5.29Z"
                    fill="white"
                  />
                </svg>
              }
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreateAccount;
