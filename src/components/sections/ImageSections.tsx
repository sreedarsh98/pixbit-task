import React from "react";

const ImageSections: React.FC = () => {
  return (
    <>
      <section className="w-full bg-black text-white flex flex-col items-center justify-center px-[350px]">
        <div className="text-center mb-12">
          <h1 className="font-normal text-[58px] leading-[120%] tracking-[0] text-center text-white mb-[28px]">
            Images like never seen before
          </h1>
          <p className="text-[#FFFFFF99] text-base md:text-base leading-relaxed text-opacity-60">
            Discover endless creativity with Promptverse. Generate diverse
            content effortlessly using prompts. Stay updated with real-time
            topics, actionable tasks, and relevant insights from any document or
            URL — all in one space. Smarter design. Content more efficiently.
          </p>
        </div>
      </section>

     <section className="w-full bg-black flex items-center justify-center cmpad">
  <div className="w-full bg-[#0E0E0E] grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 p-[24px] sm:p-[32px] md:px-[48px] md:py-[48px] rounded-2xl">
    
    {/* Left Large Image */}
    <div className="w-full h-[300px] sm:h-[400px] md:h-[600px] overflow-hidden rounded-xl">
      <img
        src="/images/image1.jpg"
        alt="Artwork 1"
        className="w-full h-full object-cover rounded-xl transition-transform duration-500 hover:scale-105"
      />
    </div>

    {/* Right Grid (Equal Height to Left on Desktop) */}
    <div className="grid grid-cols-2 grid-rows-2 gap-4 h-[300px] sm:h-[400px] md:h-[600px]">
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
