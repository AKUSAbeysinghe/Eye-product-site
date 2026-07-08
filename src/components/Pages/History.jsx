import React from 'react';

export default function History() {
  return (
    <>
      {/* History Header Section */}
      <section className="w-full bg-[#fbf9f6] text-[#111111] px-6 py-16 md:px-16 md:py-24 border-b border-gray-300 font-sans">
        <div className="max-w-7xl mx-auto space-y-6 md:space-y-8">
          {/* Section Identifier */}
          <div className="text-[10px] md:text-xs font-semibold tracking-[0.25em] uppercase text-gray-500">
            № 02 / HISTORY
          </div>
          {/* Large Mixed-Style Headline */}
          <h2 className="text-6xl md:text-8xl lg:text-[9rem] font-serif tracking-tight leading-[0.95] select-none max-w-5xl">
            Our <span className="italic font-normal">story.</span>
          </h2>
        </div>
      </section>

      {/* Timeline / Story Content */}
      <section className="w-full bg-[#fbf9f6] text-[#111111] px-6 py-16 md:px-16 md:py-24 font-sans border-b border-gray-300">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-x-12 gap-y-16">
            
            {/* Left Column - Intro */}
            <div className="md:col-span-5">
              <div className="sticky top-8 space-y-8">
                <p className="text-2xl md:text-3xl font-serif tracking-tight leading-tight">
                  From a small idea to a considered atelier.
                </p>
                <div className="h-px bg-gray-200 w-16"></div>
              </div>
            </div>

            {/* Right Column - Timeline */}
            <div className="md:col-span-7 space-y-16">
              
              {/* 2018 */}
              <div className="flex gap-8">
                <div className="w-20 flex-shrink-0 text-right">
                  <div className="text-4xl font-serif text-gray-300">2018</div>
                </div>
                <div className="flex-1 pt-2">
                  <h4 className="text-xl font-medium mb-2">The Beginning</h4>
                  <p className="text-[#555555] leading-relaxed">
                    Aperture was founded in a small studio on Queen West with a simple mission: to offer beautiful, well-made eyewear with genuine care and expertise.
                  </p>
                </div>
              </div>

              {/* 2020 */}
              <div className="flex gap-8">
                <div className="w-20 flex-shrink-0 text-right">
                  <div className="text-4xl font-serif text-gray-300">2020</div>
                </div>
                <div className="flex-1 pt-2">
                  <h4 className="text-xl font-medium mb-2">The Atelier Opens</h4>
                  <p className="text-[#555555] leading-relaxed">
                    We moved into our permanent home at 42 Rue Mercer. The space was designed to feel calm and welcoming — a place where you can slow down and choose with intention.
                  </p>
                </div>
              </div>

              {/* 2022 */}
              <div className="flex gap-8">
                <div className="w-20 flex-shrink-0 text-right">
                  <div className="text-4xl font-serif text-gray-300">2022</div>
                </div>
                <div className="flex-1 pt-2">
                  <h4 className="text-xl font-medium mb-2">Expanding the Collection</h4>
                  <p className="text-[#555555] leading-relaxed">
                    We began working directly with independent makers from Japan, Italy, and Denmark, curating a collection that balances timeless design with contemporary style.
                  </p>
                </div>
              </div>

              {/* 2024 */}
              <div className="flex gap-8">
                <div className="w-20 flex-shrink-0 text-right">
                  <div className="text-4xl font-serif text-gray-300">2024</div>
                </div>
                <div className="flex-1 pt-2">
                  <h4 className="text-xl font-medium mb-2">Today</h4>
                  <p className="text-[#555555] leading-relaxed">
                    What started as a small studio has grown into a trusted destination for those who value quality, craftsmanship, and a more personal approach to vision care.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Closing Reflection */}
      <section className="w-full bg-[#fbf9f6] text-[#111111] px-6 py-20 md:py-28 font-sans">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <p className="text-3xl md:text-4xl font-serif tracking-tight leading-tight">
            “We don’t just sell glasses.<br />
            We help people see the world more clearly — in every sense.”
          </p>
          <p className="text-sm uppercase tracking-widest text-gray-500 pt-6">
            — The Aperture Team
          </p>
        </div>
      </section>
    </>
  );
}