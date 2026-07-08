import React from 'react';

export default function Policies() {
  return (
    <>
      {/* Policies Header Section */}
      <section className="w-full bg-[#fbf9f6] text-[#111111] px-6 py-16 md:px-16 md:py-24 border-b border-gray-300 font-sans">
        <div className="max-w-7xl mx-auto space-y-6 md:space-y-8">
          {/* Section Identifier */}
          <div className="text-[10px] md:text-xs font-semibold tracking-[0.25em] uppercase text-gray-500">
            № 06 / POLICIES
          </div>
          {/* Large Mixed-Style Headline */}
          <h2 className="text-6xl md:text-8xl lg:text-[9rem] font-serif tracking-tight leading-[0.95] select-none max-w-5xl">
            Our <span className="italic font-normal">promises.</span>
          </h2>
        </div>
      </section>

      {/* Policies Content */}
      <section className="w-full bg-[#fbf9f6] text-[#111111] px-6 py-16 md:px-16 md:py-24 font-sans border-b border-gray-300">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-x-8 gap-y-16">
            
            {/* Left Column - Intro */}
            <div className="md:col-span-5">
              <div className="sticky top-8 space-y-6">
                <p className="text-2xl md:text-3xl font-serif tracking-tight leading-tight max-w-md">
                  Transparency and care are at the heart of everything we do.
                </p>
                <p className="text-lg text-[#555555] font-light">
                  Please read our policies below. If you have any questions, we’re always here to help.
                </p>
              </div>
            </div>

            {/* Right Column - Policies List */}
            <div className="md:col-span-7 space-y-16">
              
              {/* Return & Exchange Policy */}
              <div className="space-y-6">
                <h3 className="text-[10px] md:text-xs font-semibold tracking-[0.25em] uppercase text-gray-500">
                  RETURNS &amp; EXCHANGES
                </h3>
                <div className="space-y-6 text-lg leading-relaxed">
                  <p>
                    We offer a <span className="font-medium">30-day satisfaction guarantee</span> on all frames and lenses. Items must be returned in their original condition with all packaging and documentation.
                  </p>
                  <p className="text-[#555555]">
                    Custom prescriptions, progressive lenses, and made-to-order items are final sale but can be adjusted for fit at no additional charge.
                  </p>
                </div>
              </div>

              {/* Warranty */}
              <div className="space-y-6">
                <h3 className="text-[10px] md:text-xs font-semibold tracking-[0.25em] uppercase text-gray-500">
                  MANUFACTURER WARRANTY
                </h3>
                <div className="space-y-4 text-lg leading-relaxed">
                  <p>
                    All frames come with a <span className="font-medium">two-year warranty</span> against manufacturing defects. Lenses are covered for one year against scratches and coating failure under normal use.
                  </p>
                  <p className="text-[#555555]">
                    We will repair or replace defective items at no charge during the warranty period.
                  </p>
                </div>
              </div>

              {/* Prescription & Eye Exam Policy */}
              <div className="space-y-6">
                <h3 className="text-[10px] md:text-xs font-semibold tracking-[0.25em] uppercase text-gray-500">
                  PRESCRIPTIONS &amp; EYE EXAMS
                </h3>
                <div className="space-y-4 text-lg leading-relaxed">
                  <p>
                    We require a valid prescription from a licensed optometrist. Prescriptions are valid for 2 years for most patients (1 year for those under 19 or over 65 in Ontario).
                  </p>
                </div>
              </div>

              {/* Pricing & Payment */}
              <div className="space-y-6">
                <h3 className="text-[10px] md:text-xs font-semibold tracking-[0.25em] uppercase text-gray-500">
                  PRICING &amp; PAYMENT
                </h3>
                <div className="space-y-4 text-lg leading-relaxed">
                  <p>
                    All prices are in CAD and include applicable taxes. We accept Visa, Mastercard, American Express, Apple Pay, and debit. Financing options are available through our partners.
                  </p>
                </div>
              </div>

              {/* Privacy & Data */}
              <div className="space-y-6">
                <h3 className="text-[10px] md:text-xs font-semibold tracking-[0.25em] uppercase text-gray-500">
                  PRIVACY POLICY
                </h3>
                <div className="space-y-4 text-lg leading-relaxed">
                  <p>
                    We respect your privacy. Your prescription and personal information are kept strictly confidential and are only used to provide you with the best possible care. We never sell your data.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Closing Section */}
      <section className="w-full bg-[#fbf9f6] text-[#111111] px-6 py-16 md:px-16 md:py-20 font-sans">
        <div className="max-w-7xl mx-auto text-center space-y-6">
          <div className="text-sm uppercase tracking-[0.25em] text-gray-500">
            HAVE MORE QUESTIONS?
          </div>
          <a 
            href="mailto:hello@aperture.optic" 
            className="inline-block text-2xl md:text-3xl font-serif hover:text-gray-600 transition-colors"
          >
            hello@aperture.optic
          </a>
          <p className="text-sm text-gray-500 max-w-xs mx-auto">
            We reply within one business day.
          </p>
        </div>
      </section>
    </>
  );
}