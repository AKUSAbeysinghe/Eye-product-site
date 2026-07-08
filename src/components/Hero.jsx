import React from 'react';
import MainBannerImage from "../assets/Mains/CoupleWithGlasses.jpg";


export default function EditorialHero() {
  return (
    <section className="bg-[#f7f5f0] text-neutral-900 min-h-screen px-4 py-6 sm:px-8 sm:py-10 md:px-12 md:py-12 font-serif selection:bg-neutral-200">
      <div className="max-w-7xl mx-auto">
        
        {/* Top Header Meta Row */}
        <div className="flex justify-between items-center text-[10px] sm:text-xs tracking-[0.2em] uppercase text-neutral-500 border-b border-neutral-200 pb-4 font-sans font-medium">
          <div>Vol. XIV · Spring Edition</div>
          <div className="absolute left-1/2 -translate-x-1/2 hidden md:block">Toronto</div>
          <div>№ 042</div>
        </div>

        {/* Mobile-only location layout adjustments */}
        <div className="text-[10px] tracking-[0.2em] uppercase text-neutral-500 text-center pt-2 block md:hidden font-sans font-medium">
          Toronto
        </div>

        {/* Main Dramatic Headline */}
        <div className="mt-8 mb-8 md:mt-12 md:mb-12">
          <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-[10rem] font-normal tracking-tight text-neutral-950 leading-none">
            Seen, precisely.
          </h1>
        </div>

        {/* Split Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start mt-6">
          
          {/* Left Side: Curated Portrait Image */}
          <div className="md:col-span-7 overflow-hidden rounded-sm bg-neutral-200 aspect-[4/3] md:aspect-[16/11]">
            <img 
              src={MainBannerImage}
              alt="Close up of clear framed luxury optical glasses" 
              className="w-full h-full object-cover object-center scale-105"
            />
          </div>

          {/* Right Side: Editorial Body Copy */}
          <div className="md:col-span-5 md:pl-4 flex flex-col justify-center h-full">
            <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal text-neutral-950 leading-[1.25] tracking-tight">
              An independent optical house pairing curated frames with comprehensive eye care — under one roof, by appointment.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}