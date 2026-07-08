import React, { useState } from 'react';
import GalaryPair from "../components/GalaryPair";
import ProductGrid from "../components/ProductsGrid";

export default function SelectionHeader() {
  // Available categories
  const categories = ['ALL', 'OPTICAL', 'SUN', 'TITANIUM', 'ACETATE', 'RIMLESS'];
  
  // State to track the active filter button
  const [activeCategory, setActiveCategory] = useState('ALL');

  return (
    <section className="w-full bg-[#fbf9f6] text-[#111111] px-6 py-12 md:px-16 md:py-20 border-b border-gray-300">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Top small identifier */}
        <div className="text-[10px] md:text-xs font-medium tracking-[0.25em] uppercase text-gray-500">
          № 01 / Catalogue
        </div>

        {/* Main Title with mixed serif & italic styles */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif tracking-tight leading-[1.05] max-w-4xl select-none">
          The <span className="italic font-normal">current</span> selection.
        </h1>

        {/* Category Filter Buttons */}
        <div className="flex flex-wrap gap-3 pt-4">
          {categories.map((category) => {
            const isActive = activeCategory === category;
            return (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`
                  text-[10px] md:text-xs font-semibold tracking-[0.2em] px-5 py-3 
                  border border-black transition-all duration-200 uppercase
                  ${isActive 
                    ? 'bg-[#111111] text-[#fbf9f6]' 
                    : 'bg-transparent text-[#111111] hover:bg-black/5'
                  }
                `}
              >
                {category}
              </button>
            );
          })}
        </div>

      </div>
      <GalaryPair/>
      <ProductGrid/>
    </section>
  );
}