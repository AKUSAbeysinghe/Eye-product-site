import React from 'react';
import Optical from "../assets/Mains/Optical.jpg";

export default function EditorialCollections() {
  return (
    <section className="bg-[#f7f5f0] text-neutral-900 px-6 py-12 sm:px-12 sm:py-16 md:px-16 md:py-24 font-serif selection:bg-neutral-200">
      <div className="max-w-7xl mx-auto">
        
        {/* Editorial Top Tag / Index */}
         <div className="text-[10px] sm:text-xs font-medium tracking-[0.2em] uppercase text-neutral-500 font-sans mb-4 md:mb-2">
          № 01 / Collections
        </div>

        {/* Headline Centered/Right-leaning Treatment */}
        <div className="flex flex-col md:items-center md:text-center mb-12 md:mb-20">
          <h2 className="text-5xl sm:text-7xl lg:text-8xl font-normal text-neutral-950 tracking-tight leading-[1.1] max-w-4xl">
            Two doors. One <br className="hidden sm:inline" /> point of view.
          </h2>
        </div>

        {/* Asymmetrical Image Layout Grid */}
        {/* <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-end"> */}
          
          {/* Left Block: Elevated Square/Portrait Product Close-up */}
          {/* <div className="md:col-span-6 w-full flex flex-col justify-end">
            <div className="overflow-hidden rounded-sm bg-neutral-200 aspect-square md:aspect-[13/12] w-full">
              <img 
                src={Optical}
                alt="Gold wire-rimmed optical glasses on folded cream fabric" 
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div> */}

          {/* Right Block: Shifted Downward Flat Lay Composition */}
          {/* <div className="md:col-span-6 w-full pt-6 md:pt-0 md:transform md:translate-y-12">
            <div className="overflow-hidden rounded-sm bg-neutral-200 aspect-[4/3] md:aspect-[14/11] w-full">
              <img 
                src="https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=1000&auto=format&fit=crop" 
                alt="Tortoiseshell premium sunglasses flatlay composition" 
                className="w-full h-full object-cover object-center scale-102"
              />
            </div>
          </div> */}

        {/* </div> */}

      </div>
    </section>
  );
}