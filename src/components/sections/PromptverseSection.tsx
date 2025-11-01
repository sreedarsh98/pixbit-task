"use client";
import React from "react";
import Marquee from "react-fast-marquee";

interface Card {
  id: number;
  title: string;
  url: string;
}

const cards: Card[] = Array.from({ length: 11 }, (_, i) => ({
  id: i + 1,
  title: "Write an attractive hero title for the following website",
  url: "https://tailatlas.com/",
}));

const CardItem: React.FC<{ title: string; url: string }> = ({ title, url }) => (
  <div className="bg-[#0E0E0E] rounded-xl p-5 sm:p-6 min-w-[260px] sm:min-w-[300px] hover:bg-[#2A2A2A] transition-all duration-300">
    <p className="text-gray-200 text-sm sm:text-base mb-3 flex items-center gap-2">
      {title}
      <img
        src="/icons/arrow.svg"
        alt="arrow"
        className="w-4 h-4 inline-block"
      />
    </p>
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="text-[#8B5CF6] hover:text-[#A78BFA] text-xs sm:text-sm font-medium transition-colors break-all"
    >
      {url}
    </a>
  </div>
);

const PromptverseSection: React.FC = () => {
  return (
    <>
      <section className="w-full bg-black text-white flex flex-col items-center justify-center px-4 sm:px-8 md:px-16 lg:px-32 xl:px-[350px] py-16 pt-[124px]">
        <div className="max-w-7xl text-center mb-12">
          <h1 className="font-normal text-[36px] sm:text-[44px] md:text-[52px] lg:text-[58px] leading-[120%] tracking-[0] text-center text-white mb-[20px] sm:mb-[28px]">
            Create more with Promptverse
          </h1>
          <p className="text-[#FFFFFF99] text-sm sm:text-base leading-relaxed text-opacity-60">
            Discover endless creativity with Promptverse. Generate diverse
            content effortlessly using prompts. Stay updated with real-time
            topics, actionable tasks, and relevant insights from any document or
            URL — all in one space. Smarter design. Content more efficiently.
          </p>
        </div>
      </section>

      <section className="w-full bg-black overflow-hidden relative pb-12">
        {/* Row 1 - Left to Right */}
        <Marquee
          pauseOnHover
          gradient={false}
          speed={100}
          className="mb-6 sm:mb-8"
        >
          <div className="flex gap-4 sm:gap-6 px-4 sm:px-6">
            {cards.map((card) => (
              <CardItem key={`row1-${card.id}`} {...card} />
            ))}
          </div>
        </Marquee>

        <Marquee
          pauseOnHover
          gradient={false}
          speed={100}
          direction="right"
          className="mb-6 sm:mb-8"
        >
          <div className="flex gap-4 sm:gap-6 px-4 sm:px-6">
            {cards.map((card) => (
              <CardItem key={`row2-${card.id}`} {...card} />
            ))}
          </div>
        </Marquee>

        {/* Row 3 - Left to Right */}
        <Marquee
          pauseOnHover
          gradient={false}
          speed={100}
          className="mb-6 sm:mb-8"
        >
          <div className="flex gap-4 sm:gap-6 px-4 sm:px-6">
            {cards.map((card) => (
              <CardItem key={`row3-${card.id}`} {...card} />
            ))}
          </div>
        </Marquee>
      </section>
    </>
  );
};

export default PromptverseSection;
