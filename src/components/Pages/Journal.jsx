import React from 'react';
import SunGlass from "../../assets/Journal/SunGlass.jpg";
import BlueLightGlass from "../../assets/Journal/BlueLightGlass.jpg";
import GlassinYellow from "../../assets/Journal/Glass.jpg";
import LemonGlass from "../../assets/Journal/LemonGlass.jpg";
import Sunglass from "../../assets/Journal/glassesonlimegirl.jpg";

export default function Journal() {
  return (
    <>
      {/* ==================== JOURNAL HEADER ==================== */}
      <section className="w-full bg-[#fbf9f6] text-[#111111] px-6 py-16 md:px-16 md:py-24 border-b border-gray-300 font-sans">
        <div className="max-w-7xl mx-auto space-y-6 md:space-y-8">
          
          {/* Section Identifier */}
          <div className="text-[10px] md:text-xs font-semibold tracking-[0.25em] uppercase text-gray-500">
            № 05 / JOURNAL
          </div>

          {/* Large Mixed-Style Headline */}
          <h2 className="text-6xl md:text-8xl lg:text-9xl font-serif tracking-tight leading-[0.95] select-none max-w-5xl">
            Notes from <br />
            <span className="italic font-normal">the bench.</span>
          </h2>

        </div>
      </section>

      {/* ==================== EDITORIAL IMAGE BANNER ==================== */}
      <section className="w-full bg-[#fbf9f6] px-6 py-12 md:px-16 md:py-20 border-b border-gray-300">
        <div className="max-w-7xl mx-auto">
          <div className="w-full overflow-hidden bg-[#faf8f4] p-4 md:p-8 border border-gray-200/40 shadow-sm">
            <div className="relative aspect-[16/10] w-full overflow-hidden">
              <img 
                src={Sunglass} 
                alt="Minimalist round gold-framed optical glasses resting on elegant folded beige fabric" 
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-[1.02]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ==================== JOURNAL POST HEADER ==================== */}
      <header className="w-full bg-[#fbf9f6] text-[#111111] px-6 py-12 md:px-16 md:py-20 border-b border-gray-300/70 font-sans">
        <div className="max-w-7xl mx-auto space-y-6">
          
          {/* Top Meta Information Row */}
          <div className="flex justify-between items-center text-[10px] md:text-xs font-semibold tracking-[0.2em] text-gray-500 uppercase">
            <div className="flex items-center space-x-2">
              <span>FIELD NOTE</span>
              <span className="text-gray-300">•</span>
              <span>MARCH 2026</span>
            </div>
            <div>
              <span>6 MIN</span>
            </div>
          </div>

          {/* Main Editorial Headline */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-normal tracking-tight leading-[1.05] text-[#111111] max-w-5xl select-none">
            Why titanium ages better than steel
          </h1>

          {/* Short Essay Subheading Description */}
          <p className="text-base md:text-lg lg:text-xl text-[#444444] font-light leading-relaxed max-w-2xl pt-2">
            A short essay on memory metals and the case for thinner temples.
          </p>

        </div>
      </header>

      {/* ==================== EDITORIAL GRID ==================== */}
      <section className="w-full bg-[#fbf9f6] text-[#111111] px-6 py-12 md:px-16 md:py-20 font-sans border-b border-gray-300">
        <div className="max-w-7xl mx-auto">
          
          {/* Two-Column Grid layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-16">
            {[
              {
                id: 1,
                image: BlueLightGlass,
                alt: "Close up portrait of a person wearing clear acetate optical frames",
                category: "GUIDE",
                date: "FEBRUARY 2026",
                readTime: "9 MIN",
                title: "Choosing lenses for screen-heavy days",
                description: "Blue light, anti-fatigue, photochromic — what actually matters."
              },
              {
                id: 2,
                image: SunGlass,
                alt: "Tortoiseshell sunglasses arranged flat on a light textured surface",
                category: "HOUSE VISIT",
                date: "JANUARY 2026",
                readTime: "12 MIN",
                title: "Inside the workshop of Masunaga, Fukui",
                description: "Two weeks with the makers behind our most quietly worn frame."
              },
              {
                id: 3,
                image: GlassinYellow,
                alt: "Close up portrait of a person wearing clear acetate optical frames",
                category: "GUIDE",
                date: "FEBRUARY 2026",
                readTime: "9 MIN",
                title: "Choosing lenses for screen-heavy days",
                description: "Blue light, anti-fatigue, photochromic — what actually matters."
              },
              {
                id: 4,
                image: LemonGlass,
                alt: "Tortoiseshell sunglasses arranged flat on a light textured surface",
                category: "HOUSE VISIT",
                date: "JANUARY 2026",
                readTime: "12 MIN",
                title: "Inside the workshop of Masunaga, Fukui",
                description: "Two weeks with the makers behind our most quietly worn frame."
              }
            ].map((article) => (
              <article key={article.id} className="flex flex-col space-y-5 group cursor-pointer">
                
                {/* Card Image Wrapper */}
                <div className="w-full aspect-[4/3] overflow-hidden bg-gray-100 shadow-sm relative">
                  <img 
                    src={article.image} 
                    alt={article.alt} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.015]"
                  />
                </div>

                {/* Meta Tags Row */}
                <div className="flex justify-between items-center text-[10px] md:text-xs font-semibold tracking-[0.2em] text-gray-500 uppercase">
                  <div className="flex items-center space-x-2">
                    <span>{article.category}</span>
                    <span className="text-gray-300 font-normal">•</span>
                    <span>{article.date}</span>
                  </div>
                  <div>
                    <span>{article.readTime}</span>
                  </div>
                </div>

                {/* Title & Description */}
                <div className="space-y-3">
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-serif font-normal tracking-tight leading-[1.1] text-[#111111]">
                    {article.title}
                  </h3>
                  <p className="text-sm md:text-base text-[#555555] font-light leading-relaxed max-w-xl">
                    {article.description}
                  </p>
                </div>

              </article>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}