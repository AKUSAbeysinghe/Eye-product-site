import React from 'react';

export default function About() {
  return (
    <>
      {/* About Header Section */}
      <section className="w-full bg-[#fbf9f6] text-[#111111] px-6 py-16 md:px-16 md:py-24 border-b border-gray-300 font-sans">
        <div className="max-w-7xl mx-auto space-y-6 md:space-y-8">
          {/* Section Identifier */}
          <div className="text-[10px] md:text-xs font-semibold tracking-[0.25em] uppercase text-gray-500">
            № 01 / ABOUT
          </div>
          {/* Large Mixed-Style Headline */}
          <h2 className="text-6xl md:text-8xl lg:text-[9rem] font-serif tracking-tight leading-[0.95] select-none max-w-5xl">
            A different <span className="italic font-normal">way</span> <br />
            to see.
          </h2>
        </div>
      </section>

      {/* Story Section */}
      <section className="w-full bg-[#fbf9f6] text-[#111111] px-6 py-16 md:px-16 md:py-24 font-sans border-b border-gray-300">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-x-8 gap-y-12 items-start">
          
          {/* Left Column */}
          <div className="md:col-span-5 space-y-8">
            <div className="space-y-6">
              <h3 className="text-2xl md:text-3xl font-serif tracking-tight leading-tight">
                Aperture is a modern optical atelier in Toronto.
              </h3>
              <p className="text-lg leading-relaxed text-[#444444]">
                We believe that eyewear is more than a medical device — it is a personal expression of how you see and want to be seen by the world.
              </p>
            </div>
          </div>

          {/* Right Column - Story */}
          <div className="md:col-span-7">
            <div className="max-w-2xl space-y-8 text-lg md:text-xl leading-relaxed text-[#333333]">
              <p>
                Founded in 2018, Aperture was born from a frustration with impersonal chain stores and a desire to bring thoughtful, high-quality vision care back to the city.
              </p>
              <p>
                Our atelier brings together carefully selected independent eyewear brands, expert opticians, and a calm, considered space where you can take your time choosing frames that truly feel like you.
              </p>
              <p>
                Every pair is fitted with precision and care. Every prescription is handled with attention to detail. We exist to make the experience of getting new glasses something you look forward to.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values / Philosophy */}
      <section className="w-full bg-[#fbf9f6] text-[#111111] px-6 py-16 md:px-16 md:py-24 font-sans border-b border-gray-300">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-x-8 gap-y-16">
            
            <div className="md:col-span-5">
              <h3 className="text-[10px] md:text-xs font-semibold tracking-[0.25em] uppercase text-gray-500 mb-6">
                OUR APPROACH
              </h3>
            </div>

            <div className="md:col-span-7 space-y-12">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                <div>
                  <div className="text-xl font-serif mb-3">Craftsmanship</div>
                  <p className="text-[#555555]">We work with independent makers who still believe in quality over quantity.</p>
                </div>
                <div>
                  <div className="text-xl font-serif mb-3">Transparency</div>
                  <p className="text-[#555555]">No pressure. No upselling. Just honest advice and fair pricing.</p>
                </div>
                <div>
                  <div className="text-xl font-serif mb-3">Care</div>
                  <p className="text-[#555555]">From the moment you walk in until long after you leave, your vision is our priority.</p>
                </div>
                <div>
                  <div className="text-xl font-serif mb-3">Sustainability</div>
                  <p className="text-[#555555]">We prioritize durable, responsibly made frames that will last for years.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Closing / Atelier Info */}
      <section className="w-full bg-[#fbf9f6] text-[#111111] px-6 py-20 md:py-24 font-sans">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-2xl md:text-3xl font-serif tracking-tight max-w-2xl mx-auto leading-tight">
            We invite you to visit our atelier in the heart of Toronto.
          </p>
          <div className="mt-10 inline-flex items-center gap-3 text-sm uppercase tracking-widest text-gray-500">
            <span>42 Rue Mercer</span>
            <span className="text-gray-300">•</span>
            <span>Toronto, ON</span>
          </div>
        </div>
      </section>
    </>
  );
}