"use client";
import React from "react";
import { motion } from "framer-motion";

const Features: React.FC = () => {
  const features = [
    {
      title: "Write mails and replies",
      desc: "We are visionaries. We will tell you everything you need about the market at the moment, but also predict how the cost of housing and your area will change in a few years.",
    },
    {
      title: "Read pdf and attachments",
      desc: "We do not want to sell you any specific object, our goal is to find the ‘right’ apartment for you and remain partners for many years.",
    },
    {
      title: "Scans Images",
      desc: "We provide a full range of services for the purchase and sale of real estate, from searching for an object and ending with paperwork.",
    },
    {
      title: "Write codes & programs",
      desc: "The housing should make your life better. Therefore, when selecting real estate, we carefully learn your request and find only what is ideal.",
    },
    {
      title: "Research",
      desc: "We have more than 130 objects in our portfolio, but for you we will make an individual selection with only suitable options.",
    },
    {
      title: "Automation",
      desc: "Whether it’s the legal execution of a transaction, interior design or the technical details of a building, our brokers will tell you everything.",
    },
  ];

  return (
    <section className="bg-black text-white px-4 sm:px-8 md:px-16 lg:px-24 xl:px-[100px] py-16 sm:py-20 md:py-28 mb-20 sm:mb-28">
      <div className="mx-auto max-w-7xl">
        <h2 className="font-normal text-[32px] sm:text-[44px] md:text-[56px] lg:text-[64px] leading-[100%] tracking-[0] text-white/50 mb-3 sm:mb-4">
          More features
        </h2>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          className="font-normal text-[32px] sm:text-[44px] md:text-[56px] lg:text-[64px] leading-[100%] tracking-[0] text-white flex flex-wrap items-center"
        >
          <motion.span
            className="font-normal text-white"
            initial={{ backgroundSize: "0% 100%" }}
            whileInView={{ backgroundSize: "100% 100%" }}
            transition={{ duration: 1, ease: "easeInOut", delay: 0.2 }}
            viewport={{ once: true }}
          >
            Promptverse AI
          </motion.span>

          <motion.span
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
            viewport={{ once: true }}
            className="font-normal text-white/50 mx-2 mt-2 sm:mt-0"
          >
            offers to an individual
          </motion.span>
        </motion.h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 md:gap-12 border-t border-white/20 pt-10 sm:pt-12">
          {features.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="space-y-3"
            >
              <h3 className="font-medium text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] leading-[28px] sm:leading-[30px] md:leading-[32px] text-white">
                {item.title}
              </h3>
              <p className="font-light text-[14px] sm:text-[15px] md:text-[16px] leading-[22px] sm:leading-[24px] text-[#828282]">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
