import React from 'react';
import GalaryGlass from "../assets/Mains/Galary.jpg";
import Galarycouple from "../assets/Mains/CoupleWithSunGlass.jpg";

export default function EditorialGalleryPair() {
  return (
    <section className="bg-[#f7f5f0] text-neutral-900 px-6 py-8 sm:px-12 sm:py-12 md:px-16 md:py-16 selection:bg-neutral-200">
      <div className="max-w-7xl mx-auto">
        
        {/* Top Minimal Line Break */}
        <div className="border-t border-neutral-300/40 w-full mb-8 md:mb-12" />

        {/* Dynamic Image Flex/Grid Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-stretch">
          
          {/* Left Column: Product Context Image */}
          <div className="w-full overflow-hidden rounded-sm bg-neutral-200 aspect-[4/5] sm:aspect-[13/14] md:aspect-[14/15]">
            <img 
              src={GalaryGlass}
              alt="Minimalist gold circular glasses displaying soft lens shadows over textured linen sheets" 
              className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-[1.01]"
            />
          </div>

          {/* Right Column: Close-up Portrait Model Frame Shot */}
          <div className="w-full overflow-hidden rounded-sm bg-neutral-200 aspect-[4/5] sm:aspect-[13/14] md:aspect-[14/15]">
            <img 
              src={Galarycouple}
              alt="Frontal portrait presentation layout highlighting translucent clear geometric eyeglass structures" 
              className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-[1.01]"
            />
          </div>

        </div>

      </div>
    </section>
  );
}