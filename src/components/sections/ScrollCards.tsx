"use client";
import React from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import AnimatedButton from "../AnimatedButton";

interface Card {
  id: number;
  title: string;
  description: string;
  tags: string[];
}

const ScrollCards: React.FC = () => {
  const { scrollYProgress } = useScroll();

  const cards: Card[] = [
    {
      id: 1,
      title: "Enhance Your Projects with Ultra-Realistic AI Voices",
      description:
        "Create engaging voice content with unique AI Voices perfect for your audience. Generate conversational, long-form, or short-form voice content with consistent quality and performance.",
      tags: [
        "Train voice models",
        "Text-to-speech",
        "AI voice generation",
        "AI music production",
      ],
    },
    // {
    //   id: 2,
    //   title: "Bring Music to Life with AI Sound Design",
    //   description:
    //     "Use AI to craft immersive soundscapes and dynamic soundtracks for your creative projects. Blend voices, instruments, and effects effortlessly.",
    //   tags: ["AI composition", "Sound mixing", "Voice blending", "Dynamic mastering"],
    // },
    // {
    //   id: 3,
    //   title: "Transform Text into Lifelike Audio",
    //   description:
    //     "Instantly generate high-quality voiceovers from text using state-of-the-art AI synthesis models. Ideal for podcasts, videos, and e-learning.",
    //   tags: ["Real-time voices", "Narration", "Podcast creation", "Speech enhancement"],
    // },
    // {
    //   id: 4,
    //   title: "Create Natural Conversations with AI Dialogue",
    //   description:
    //     "Simulate authentic dialogues for training, entertainment, and storytelling. Customize tone, emotion, and delivery to match your context.",
    //   tags: ["Dialogue design", "Character voices", "Script automation", "Speech cloning"],
    // },
  ];

  return (
    <>
      {/* Header Section */}
      <section className="w-full bg-black text-white flex flex-col items-center justify-center px-6 md:px-[200px] pt-[124px] pb-16 text-center">
        <h1 className="font-normal text-[42px] md:text-[58px] leading-[120%] mb-[28px]">
          Generate Audio and Music
        </h1>
        <p className="text-[#FFFFFF99] text-base md:text-lg leading-relaxed max-w-3xl">
          Discover endless creativity with Promptverse. Generate diverse content
          effortlessly using prompts. Stay updated with real-time topics,
          actionable tasks, and relevant insights — all in one space.
        </p>
      </section>

      <section className="w-full bg-black  items-center justify-center cmpad mb-40">
        <div className="w-full bg-[#0E0E0E] grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 p-[24px] sm:p-[32px] md:px-[48px] md:py-[48px] rounded-2xl items-stretch">
          {/* LEFT SIDE */}
          <div className="flex flex-col justify-between text-left">
            {/* Top part — Heading + Description */}
            <div>
              <h2 className="font-medium text-[36px] leading-[120%] tracking-[0] text-white">
                Enhance Your Projects with Ultra-Realistic AI Voices
              </h2>
              <p className="font-light text-[18px] leading-[28px] text-white/60 mt-6">
                Create engaging voice content with unique AI Voices perfect for
                your audience.
              </p>
              <p className="font-light text-[18px] leading-[28px] text-white/60 mt-6">
                Generate conversational, long-form, or short-form voice content
                with consistent quality and performances.
              </p>
            </div>

            {/* Bottom part — Buttons */}
            <div className="flex flex-wrap gap-3 mt-6">
              {[
                "Train voice models",
                "Text-to-speech",
                "AI voice generation",
                "AI music production",
              ].map((tag, i) => (
                 <div key={i} className='shuffle'>
                              <AnimatedButton
                                href=""
                                label={tag}
                                className="w-fit transparent-btn"
                                icon={
                                  <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6.5025 3.6L4.0025 5L5.4025 2.5L4.0025 0L6.5025 1.4L9.0025 0L7.6025 2.5L9.0025 5L6.5025 3.6ZM18.5025 13.4L21.0025 12L19.6025 14.5L21.0025 17L18.5025 15.6L16.0025 17L17.4025 14.5L16.0025 12L18.5025 13.4ZM21.0025 0L19.6025 2.5L21.0025 5L18.5025 3.6L16.0025 5L17.4025 2.5L16.0025 0L18.5025 1.4L21.0025 0ZM12.3425 10.78L14.7825 8.34L12.6625 6.22L10.2225 8.66L12.3425 10.78ZM13.3725 5.29L15.7125 7.63C16.1025 8 16.1025 8.65 15.7125 9.04L4.0425 20.71C3.6525 21.1 3.0025 21.1 2.6325 20.71L0.2925 18.37C-0.0975 18 -0.0975 17.35 0.2925 16.96L11.9625 5.29C12.3525 4.9 13.0025 4.9 13.3725 5.29Z" fill="white" />
                                  </svg>
                                }
                              />
                            </div>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="relative w-full max-h-[610px] h-full overflow-hidden rounded-xl flex">
            <img
              src="/icons/audioImage.jpg"
              alt="AI Voice Preview"
              className="w-full h-full object-cover rounded-xl transition-transform duration-500 hover:scale-105"
            />
            {/* Play Button Overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 flex items-center justify-center bg-white/10 hover:bg-white/20 rounded-full backdrop-blur-md transition-all duration-300">
                <img src="icons/icon1.svg" alt="Play Icon" width={28} height={28} />
              </div>
            </div>
          </div>
        </div>
         <div className="w-full bg-[#0E0E0E] grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 p-[24px] sm:p-[32px] md:px-[48px] md:py-[48px] rounded-2xl items-stretch mt-8">
          {/* LEFT SIDE */}
          <div className="flex flex-col justify-between text-left">
            {/* Top part — Heading + Description */}
            <div>
              <h2 className="font-medium text-[36px] leading-[120%] tracking-[0] text-white">
                Enhance Your Projects with Ultra-Realistic AI Voices
              </h2>
              <p className="font-light text-[18px] leading-[28px] text-white/60 mt-6">
                Create engaging voice content with unique AI Voices perfect for
                your audience.
              </p>
              <p className="font-light text-[18px] leading-[28px] text-white/60 mt-6">
                Generate conversational, long-form, or short-form voice content
                with consistent quality and performances.
              </p>
            </div>

            {/* Bottom part — Buttons */}
            <div className="flex flex-wrap gap-3 mt-6">
              {[
                "Train voice models",
                "Text-to-speech",
                "AI voice generation",
                "AI music production",
              ].map((tag, i) => (
                 <div key={i} className='shuffle'>
                              <AnimatedButton
                                href=""
                                label={tag}
                                className="w-fit transparent-btn"
                                icon={
                                  <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6.5025 3.6L4.0025 5L5.4025 2.5L4.0025 0L6.5025 1.4L9.0025 0L7.6025 2.5L9.0025 5L6.5025 3.6ZM18.5025 13.4L21.0025 12L19.6025 14.5L21.0025 17L18.5025 15.6L16.0025 17L17.4025 14.5L16.0025 12L18.5025 13.4ZM21.0025 0L19.6025 2.5L21.0025 5L18.5025 3.6L16.0025 5L17.4025 2.5L16.0025 0L18.5025 1.4L21.0025 0ZM12.3425 10.78L14.7825 8.34L12.6625 6.22L10.2225 8.66L12.3425 10.78ZM13.3725 5.29L15.7125 7.63C16.1025 8 16.1025 8.65 15.7125 9.04L4.0425 20.71C3.6525 21.1 3.0025 21.1 2.6325 20.71L0.2925 18.37C-0.0975 18 -0.0975 17.35 0.2925 16.96L11.9625 5.29C12.3525 4.9 13.0025 4.9 13.3725 5.29Z" fill="white" />
                                  </svg>
                                }
                              />
                            </div>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="relative w-full max-h-[610px] h-full overflow-hidden rounded-xl flex">
            <img
              src="/icons/audioImage.jpg"
              alt="AI Voice Preview"
              className="w-full h-full object-cover rounded-xl transition-transform duration-500 hover:scale-105"
            />
            {/* Play Button Overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 flex items-center justify-center bg-white/10 hover:bg-white/20 rounded-full backdrop-blur-md transition-all duration-300">
                <img src="icons/icon1.svg" alt="Play Icon" width={28} height={28} />
              </div>
            </div>
          </div>
        </div>
         <div className="w-full bg-[#0E0E0E] grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 p-[24px] sm:p-[32px] md:px-[48px] md:py-[48px] rounded-2xl items-stretch mt-8">
          {/* LEFT SIDE */}
          <div className="flex flex-col justify-between text-left">
            {/* Top part — Heading + Description */}
            <div>
              <h2 className="font-medium text-[36px] leading-[120%] tracking-[0] text-white">
                Enhance Your Projects with Ultra-Realistic AI Voices
              </h2>
              <p className="font-light text-[18px] leading-[28px] text-white/60 mt-6">
                Create engaging voice content with unique AI Voices perfect for
                your audience.
              </p>
              <p className="font-light text-[18px] leading-[28px] text-white/60 mt-6">
                Generate conversational, long-form, or short-form voice content
                with consistent quality and performances.
              </p>
            </div>

            {/* Bottom part — Buttons */}
             <div className="flex flex-wrap gap-3 mt-6">
              {[
                "Train voice models",
                "Text-to-speech",
                "AI voice generation",
                "AI music production",
              ].map((tag, i) => (
                 <div key={i} className='shuffle'>
                              <AnimatedButton
                                href=""
                                label={tag}
                                className="w-fit transparent-btn"
                                icon={
                                  <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6.5025 3.6L4.0025 5L5.4025 2.5L4.0025 0L6.5025 1.4L9.0025 0L7.6025 2.5L9.0025 5L6.5025 3.6ZM18.5025 13.4L21.0025 12L19.6025 14.5L21.0025 17L18.5025 15.6L16.0025 17L17.4025 14.5L16.0025 12L18.5025 13.4ZM21.0025 0L19.6025 2.5L21.0025 5L18.5025 3.6L16.0025 5L17.4025 2.5L16.0025 0L18.5025 1.4L21.0025 0ZM12.3425 10.78L14.7825 8.34L12.6625 6.22L10.2225 8.66L12.3425 10.78ZM13.3725 5.29L15.7125 7.63C16.1025 8 16.1025 8.65 15.7125 9.04L4.0425 20.71C3.6525 21.1 3.0025 21.1 2.6325 20.71L0.2925 18.37C-0.0975 18 -0.0975 17.35 0.2925 16.96L11.9625 5.29C12.3525 4.9 13.0025 4.9 13.3725 5.29Z" fill="white" />
                                  </svg>
                                }
                              />
                            </div>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="relative w-full max-h-[610px] h-full overflow-hidden rounded-xl flex">
            <img
              src="/icons/audioImage.jpg"
              alt="AI Voice Preview"
              className="w-full h-full object-cover rounded-xl transition-transform duration-500 hover:scale-105"
            />
            {/* Play Button Overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 flex items-center justify-center bg-white/10 hover:bg-white/20 rounded-full backdrop-blur-md transition-all duration-300">
                <img src="/icons/icon1.svg" alt="Play Icon" width={28} height={28} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ScrollCards;
