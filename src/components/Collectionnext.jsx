import React from 'react';
import Optical from "../assets/Mains/Optical.jpg";
import SunGlasses from "../assets/Mains/BoyGlass.jpg";
import Accessory from "../assets/Mains/Accessory.jpg";
import Brands from "../assets/Mains/Brands.jpg";

export default function CollectionCategoriesGrid() {
  const collections = [
    {
      title: 'Optical',
      count: '42 FRAMES',
      description: 'Acetate, titanium and rimless silhouettes from independent houses across Japan, Italy and France.',
      image: Optical,
      alt: 'Gold wire-rimmed optical glasses resting on elegant folded beige fabric',
      aspectRatio: 'aspect-square md:aspect-[14/13]',
      alignSelf: 'self-start',
      link: '/eyeglasses',           // ← Added
    },
    {
      title: 'Sun',
      count: '28 FRAMES',
      description: 'Polarised, mineral glass and prescription-ready. Cut for everyday wear, not the runway.',
      image: SunGlasses,
      alt: 'Collection of premium tortoiseshell and black frame sunglasses overhead view',
      aspectRatio: 'aspect-[4/5] md:aspect-[13/15]',
      alignSelf: 'self-end md:mt-24',
      link: '/sunglasses',               // ← Added
    },
    {
      title: 'Accessories',
      count: '42 FRAMES',
      description: 'Acetate, titanium and rimless silhouettes from independent houses across Japan, Italy and France.',
      image: Accessory,
      alt: 'Gold wire-rimmed optical glasses resting on elegant folded beige fabric',
      aspectRatio: 'aspect-square md:aspect-[14/13]',
      alignSelf: 'self-start',
      link: '/accessories',       // ← Added
    },
    {
      title: 'Brands',
      count: '28 FRAMES',
      description: 'Polarised, mineral glass and prescription-ready. Cut for everyday wear, not the runway.',
      image: Brands,
      alt: 'Collection of premium tortoiseshell and black frame sunglasses overhead view',
      aspectRatio: 'aspect-[4/5] md:aspect-[13/15]',
      alignSelf: 'self-end md:mt-24',
      link: '/brands',            // ← Added
    },
  ];

  return (
    <section className="bg-[#f7f5f0] text-neutral-900 px-6 py-12 sm:px-12 sm:py-16 md:px-16 md:py-24 font-serif selection:bg-neutral-200">
      <div className="max-w-7xl mx-auto">
        
        {/* Asymmetric Flex/Grid layout container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 items-start">
          {collections.map((item, index) => (
            <div 
              key={index} 
              className={`flex flex-col w-full group cursor-pointer ${item.alignSelf}`}
            >
              {/* Card Image Wrapper */}
              <div className={`w-full overflow-hidden rounded-sm bg-neutral-200 ${item.aspectRatio}`}>
                <img 
                  src={item.image} 
                  alt={item.alt} 
                  className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.015]"
                />
              </div>

              {/* Card Metadata / Typography Row */}
              <div className="mt-6 flex flex-col space-y-3">
                
                {/* Header Row: Title and Frame Count Link */}
                <div className="flex justify-between items-baseline">
                  <h3 className="text-3xl sm:text-4xl font-normal text-neutral-950 tracking-tight">
                    {item.title}
                  </h3>
                  
                  <a 
                    href={item.link} 
                    className="font-sans text-[10px] sm:text-xs font-semibold tracking-[0.15em] uppercase text-neutral-600 group-hover:text-neutral-950 transition-colors duration-200 flex items-center gap-1.5 hover:underline"
                  >
                    {item.count} <span className="text-[11px] font-normal transform translate-y-[-0.5px]">→</span>
                  </a>
                </div>

                {/* Subtext Description */}
                <p className="font-sans text-sm sm:text-base text-neutral-500 font-normal leading-relaxed max-w-xl pr-4">
                  {item.description}
                </p>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}