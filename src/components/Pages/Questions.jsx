import React from 'react';

export default function Questions() {
  return (
    <>
      {/* Questions Header Section */}
      <section className="w-full bg-[#fbf9f6] text-[#111111] px-6 py-16 md:px-16 md:py-24 border-b border-gray-300 font-sans">
        <div className="max-w-7xl mx-auto space-y-6 md:space-y-8">
          {/* Section Identifier */}
          <div className="text-[10px] md:text-xs font-semibold tracking-[0.25em] uppercase text-gray-500">
            № 05 / QUESTIONS
          </div>
          {/* Large Mixed-Style Headline */}
          <h2 className="text-6xl md:text-8xl lg:text-[9rem] font-serif tracking-tight leading-[0.95] select-none max-w-5xl">
            Common <span className="italic font-normal">questions.</span>
          </h2>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="w-full bg-[#fbf9f6] text-[#111111] px-6 py-16 md:px-16 md:py-24 font-sans border-b border-gray-300">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-x-8 gap-y-16">
            
            {/* Left Column - Intro / Contact Prompt */}
            <div className="md:col-span-5">
              <div className="sticky top-8 space-y-6">
                <p className="text-2xl md:text-3xl font-serif tracking-tight leading-tight max-w-md">
                  Not finding what you’re looking for? Reach out — we’re happy to help.
                </p>
                <div className="text-xl font-serif">
                  <a 
                    href="mailto:hello@aperture.optic" 
                    className="inline-flex items-center gap-2 hover:text-gray-600 transition-colors group"
                  >
                    hello@aperture.optic
                    <span className="text-base group-hover:translate-x-0.5 transition-transform">→</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column - Questions List */}
            <div className="md:col-span-7 space-y-12">
              
              {/* Question 1 */}
              <div className="space-y-4 border-b border-gray-200 pb-10">
                <h3 className="text-2xl md:text-3xl font-serif tracking-tight">
                  Do you accept walk-ins?
                </h3>
                <p className="text-lg md:text-xl font-light leading-relaxed text-[#444444]">
                  Yes. We welcome walk-ins during our regular hours. However, booking an appointment is recommended if you need a full eye exam or have specific frame adjustments.
                </p>
              </div>

              {/* Question 2 */}
              <div className="space-y-4 border-b border-gray-200 pb-10">
                <h3 className="text-2xl md:text-3xl font-serif tracking-tight">
                  How long does it take to get new glasses?
                </h3>
                <p className="text-lg md:text-xl font-light leading-relaxed text-[#444444]">
                  Most single-vision prescriptions are ready in 7–10 business days. Progressives and more complex prescriptions typically take 10–14 business days. Rush service is available for an additional fee.
                </p>
              </div>

              {/* Question 3 */}
              <div className="space-y-4 border-b border-gray-200 pb-10">
                <h3 className="text-2xl md:text-3xl font-serif tracking-tight">
                  Do you work with insurance?
                </h3>
                <p className="text-lg md:text-xl font-light leading-relaxed text-[#444444]">
                  We work with most major vision insurance providers. Please bring your insurance card to your visit. We can also provide a detailed receipt for out-of-network claims.
                </p>
              </div>

              {/* Question 4 */}
              <div className="space-y-4 border-b border-gray-200 pb-10">
                <h3 className="text-2xl md:text-3xl font-serif tracking-tight">
                  Can I transfer my prescription?
                </h3>
                <p className="text-lg md:text-xl font-light leading-relaxed text-[#444444]">
                  Absolutely. Simply email us a copy of your prescription or have your previous provider send it directly. We’ll verify it and get started right away.
                </p>
              </div>

              {/* Question 5 */}
              <div className="space-y-4">
                <h3 className="text-2xl md:text-3xl font-serif tracking-tight">
                  What is your return policy?
                </h3>
                <p className="text-lg md:text-xl font-light leading-relaxed text-[#444444]">
                  We offer a 30-day satisfaction guarantee on all frames and lenses. Custom prescriptions and progressive lenses are final sale but can be adjusted for fit at no charge.
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Closing / Visit Prompt */}
      <section className="w-full bg-[#fbf9f6] text-[#111111] px-6 py-16 md:px-16 md:py-20 font-sans">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-block border border-gray-300 rounded-full px-8 py-3 text-sm tracking-widest uppercase">
            STILL HAVE QUESTIONS?
          </div>
          <p className="mt-6 text-xl font-light max-w-md mx-auto">
            Visit us at 42 Rue Mercer or send us a message. We reply within one business day.
          </p>
        </div>
      </section>
    </>
  );
}