"use client";
import React from "react";
import Marquee from "react-fast-marquee";

interface Card {
  id: number;
  title: string;
  url: string;
}

const cards: Card[] = [
  {
    id: 1,
    title: "Write an attractive hero title for the following website",
    url: "https://tailatlas.com/",
  },
  {
    id: 2,
    title: "Write an attractive hero title for the following website",
    url: "https://tailatlas.com/",
  },
  {
    id: 3,
    title: "Write an attractive hero title for the following website",
    url: "https://tailatlas.com/",
  },
  {
    id: 4,
    title: "Write an attractive hero title for the following website",
    url: "https://tailatlas.com/",
  },
  {
    id: 5,
    title: "Write an attractive hero title for the following website",
    url: "https://tailatlas.com/",
  },
  {
    id: 6,
    title: "Write an attractive hero title for the following website",
    url: "https://tailatlas.com/",
  },
  {
    id: 7,
    title: "Write an attractive hero title for the following website",
    url: "https://tailatlas.com/",
  },
  {
    id: 8,
    title: "Write an attractive hero title for the following website",
    url: "https://tailatlas.com/",
  },
  {
    id: 9,
    title: "Write an attractive hero title for the following website",
    url: "https://tailatlas.com/",
  },
  {
    id: 10,
    title: "Write an attractive hero title for the following website",
    url: "https://tailatlas.com/",
  },
  {
    id: 11,
    title: "Write an attractive hero title for the following website",
    url: "https://tailatlas.com/",
  },
];

const CardItem: React.FC<{ title: string; url: string }> = ({ title, url }) => (
  <div className="bg-[#0E0E0E]  rounded p-5 min-w-[300px] hover:bg-[#2A2A2A] transition-all duration-300">
    <p className="text-gray-200 text-sm mb-3">
      {title}{" "}
      <img src="/icons/arrow.svg" alt="arrow" className="ml-2 w-4 h-4 inline-block" />{" "}
    </p>
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="text-[#8B5CF6] hover:text-[#A78BFA] text-sm font-medium transition-colors"
    >
      {url}
    </a>
  </div>
);

const PromptverseSection: React.FC = () => {
  return (
    <>
      {/* ✨ HERO SECTION */}
      <section className="w-full bg-black text-white flex flex-col items-center justify-center px-[350px] py-16 pt-[124px]">
        <div className="max-w-3xl text-center mb-12">
          <h1 className="font-normal text-[58px] leading-[120%] tracking-[0] text-center text-white mb-[28px]">
            Create more <br /> with Promptverse
          </h1>
          <p className="text-[#FFFFFF99] text-base md:text-base leading-relaxed text-opacity-60">
            Discover endless creativity with Promptverse. Generate diverse
            content effortlessly using prompts. Stay updated with real-time
            topics, actionable tasks, and relevant insights from any document or
            URL — all in one space. Smarter design. Content more efficiently.
          </p>
        </div>
      </section>

      {/* 🚀 MARQUEE SECTION */}
      <section className="w-full bg-black overflow-hidden relative">
        {/* Row 1 - Left to Right */}
        <Marquee
          pauseOnHover
          gradient
          gradientColor={[0, 0, 0]}
          speed={200}
          className="mb-8"
        >
          <div className="flex gap-6 px-6">
            {cards.map((card) => (
              <CardItem key={`row1-${card.id}`} {...card} />
            ))}
          </div>
        </Marquee>
        {/* Row 2 - Right to Left */}
        <Marquee
          pauseOnHover
          gradient
          gradientColor="rgb(0, 0, 0)"
          speed={200}
          className="mb-8"
          direction="right"
        >
          <div className="flex gap-6 px-6">
            {cards.map((card) => (
              <CardItem key={`row1-${card.id}`} {...card} />
            ))}
          </div>
        </Marquee>
        <Marquee
          pauseOnHover
          gradient
          gradientColor={[0, 0, 0]}
          speed={200}
          className="mb-8"
        >
          <div className="flex gap-6 px-6">
            {cards.map((card) => (
              <CardItem key={`row1-${card.id}`} {...card} />
            ))}
          </div>
        </Marquee>
      </section>
    </>
  );
};

export default PromptverseSection;
