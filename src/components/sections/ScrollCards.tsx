"use client";
import React from "react";
import AnimatedButton from "../AnimatedButton";

const ScrollCards: React.FC = () => {
  const cards = [
    {
      id: 1,
      title: "Enhance Your Projects with Ultra-Realistic AI Voices",
      description1:
        "Create engaging voice content with unique AI Voices perfect for your audience.",
      description2:
        "Generate conversational, long-form, or short-form voice content with consistent quality and performances.",
      tags: [
        "Train voice models",
        "Text-to-speech",
        "AI voice generation",
        "AI music production",
      ],
      image: "/icons/audioImage.jpg",
    },
    {
      id: 2,
      title: "Bring Music to Life with AI Sound Design",
      description1:
        "Use AI to craft immersive soundscapes and dynamic soundtracks for your creative projects.",
      description2:
        "Blend voices, instruments, and effects effortlessly with adaptive AI tools.",
      tags: ["AI composition", "Sound mixing", "Voice blending", "Dynamic mastering"],
      image: "/icons/audioImage.jpg",
    },
    {
      id: 3,
      title: "Transform Text into Lifelike Audio",
      description1:
        "Instantly generate high-quality voiceovers from text using advanced AI synthesis.",
      description2:
        "Perfect for podcasts, videos, and e-learning applications.",
      tags: ["Real-time voices", "Narration", "Podcast creation", "Speech enhancement"],
      image: "/icons/audioImage.jpg",
    },
  ];

  return (
    <>
      <section className="w-full bg-black text-white flex flex-col items-center justify-center px-4 sm:px-8 md:px-16 lg:px-[100px] pt-[124px] pb-16 text-center">
        <h1 className="font-normal text-[32px] sm:text-[42px] md:text-[52px] lg:text-[58px] leading-[120%] mb-[20px] sm:mb-[28px]">
          Generate Audio and Music
        </h1>
        <p className="text-[#FFFFFF99] text-sm sm:text-base md:text-lg leading-relaxed max-w-3xl">
          Discover endless creativity with Promptverse. Generate diverse content
          effortlessly using prompts. Stay updated with real-time topics,
          actionable tasks, and relevant insights — all in one space.
        </p>
      </section>

      <section className="w-full bg-black flex flex-col gap-8 items-center justify-center px-4 sm:px-6 md:px-10 lg:px-[120px] xl:px-[100px] pb-20">
        {cards.map((card, index) => (
          <div
            key={card.id}
            className={`w-full bg-[#0E0E0E] grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 p-5 sm:p-8 md:p-10 rounded-2xl items-center ${
              index % 2 !== 0 ? "md:flex-row-reverse" : ""
            }`}
          >
            <div className="flex flex-col justify-between text-left order-1 md:order-1">
              <h2 className="font-medium text-[22px] sm:text-[28px] md:text-[34px] leading-[130%] text-white mb-4">
                {card.title}
              </h2>

              <p className="font-light text-[14px] sm:text-[16px] md:text-[18px] leading-[26px] sm:leading-[28px] text-white/60 mb-4">
                {card.description1}
              </p>
              <p className="font-light text-[14px] sm:text-[16px] md:text-[18px] leading-[26px] sm:leading-[28px] text-white/60">
                {card.description2}
              </p>

              <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3 mt-6">
                {card.tags.map((tag, i) => (
                  <AnimatedButton
                    key={i}
                    href=""
                    label={tag}
                    className="w-full sm:w-fit transparent-btn text-sm py-2 px-5 rounded-full border border-white/30 text-white hover:bg-white/10 transition-all"
                    icon={
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 21 21"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="hidden sm:block"
                      >
                        <path
                          d="M6.5025 3.6L4.0025 5L5.4025 2.5L4.0025 0L6.5025 1.4L9.0025 0L7.6025 2.5L9.0025 5L6.5025 3.6ZM18.5025 13.4L21.0025 12L19.6025 14.5L21.0025 17L18.5025 15.6L16.0025 17L17.4025 14.5L16.0025 12L18.5025 13.4ZM21.0025 0L19.6025 2.5L21.0025 5L18.5025 3.6L16.0025 5L17.4025 2.5L16.0025 0L18.5025 1.4L21.0025 0ZM12.3425 10.78L14.7825 8.34L12.6625 6.22L10.2225 8.66L12.3425 10.78ZM13.3725 5.29L15.7125 7.63C16.1025 8 16.1025 8.65 15.7125 9.04L4.0425 20.71C3.6525 21.1 3.0025 21.1 2.6325 20.71L0.2925 18.37C-0.0975 18 -0.0975 17.35 0.2925 16.96L11.9625 5.29C12.3525 4.9 13.0025 4.9 13.3725 5.29Z"
                          fill="white"
                        />
                      </svg>
                    }
                  />
                ))}
              </div>
            </div>

            <div className="relative w-full h-[220px] sm:h-[280px] md:h-[450px] lg:h-[550px] overflow-hidden rounded-xl mt-6 md:mt-0 order-2 md:order-2">
              <img
                src={card.image}
                alt="AI Voice Preview"
                className="w-full h-full object-cover rounded-xl transition-transform duration-500 hover:scale-105"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center bg-white/10 hover:bg-white/20 rounded-full backdrop-blur-md transition-all duration-300">
                  <img src="/icons/icon1.svg" alt="Play Icon" width={28} height={28} />
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>
    </>
  );
};

export default ScrollCards;
