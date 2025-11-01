import React from "react";
import promtImg from "@/assets/images/promt.png";
import AnimatedButton from "../AnimatedButton";

const TrendingPromt: React.FC = () => {
  return (
    <>
      <section className="w-full bg-black text-white flex flex-col items-center justify-center px-[350px] py-16 pt-[124px]">
        <div className="max-w-3xl text-center mb-12">
          <h1 className="font-normal text-[58px] leading-[120%] tracking-[0] text-center text-white mb-[28px]">
            See Trending Prompts
          </h1>
          <p className="text-[#FFFFFF99] text-base md:text-base leading-relaxed text-opacity-60 mb-8">
            Discover endless creativity with Promptverse. Generate diverse
            content effortlessly using prompts. Stay updated with real-time
            topics, actionable tasks, and relevant insights from any document or
            URL — all in one space. Smarter design. Content more efficiently.
          </p>
          <div className="flex justify-center space-x-4">
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
      </section>
      {/* <section className="relative w-full overflow-hidden bg-black cmpad">
        <img
          src={promtImg}
          alt="Promptverse preview"
          className="w-full h-auto object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/90 to-transparent pointer-events-none"></div>
      </section> */}
      <section className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden bg-black cmpad">
        <img
          src="/images/promt.png"
          alt="Promptverse preview"
          className="w-full  object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/90 to-transparent pointer-events-none"></div>
      </section>
    </>
  );
};

export default TrendingPromt;
