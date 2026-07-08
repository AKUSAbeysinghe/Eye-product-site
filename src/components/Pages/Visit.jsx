import React from 'react';

export default function VisitContact() {
  return (
    <>
      {/* Visit Header Section */}
      <section className="w-full bg-[#fbf9f6] text-[#111111] px-6 py-16 md:px-16 md:py-24 border-b border-gray-300 font-sans">
        <div className="max-w-7xl mx-auto space-y-6 md:space-y-8">
          {/* Section Identifier */}
          <div className="text-[10px] md:text-xs font-semibold tracking-[0.25em] uppercase text-gray-500">
            № 04 / VISIT
          </div>
          {/* Large Mixed-Style Headline */}
          <h2 className="text-6xl md:text-8xl lg:text-[9rem] font-serif tracking-tight leading-[0.95] select-none max-w-5xl">
            Come <span className="italic font-normal">try</span> <br />
            them on.
          </h2>
        </div>
      </section>

      {/* Atelier Contact Details */}
      <section className="w-full bg-[#fbf9f6] text-[#111111] px-6 py-12 md:px-16 md:py-20 font-sans border-b border-gray-300">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-y-10 md:gap-x-8 items-start">
          {/* Column 1: Atelier Address Block */}
          <div className="md:col-span-4 space-y-3">
            <h3 className="text-[10px] md:text-xs font-semibold tracking-[0.25em] text-gray-500 uppercase">
              ATELIER
            </h3>
            <p className="text-xl md:text-2xl font-serif font-normal tracking-tight leading-relaxed text-[#111111]">
              42 Rue Mercer <br />
              Toronto, ON <br />
              M5V 1H2
            </p>
          </div>

          {/* Column 2 & 3: Hours Table Block */}
          <div className="md:col-span-5 space-y-3">
            <h3 className="text-[10px] md:text-xs font-semibold tracking-[0.25em] text-gray-500 uppercase">
              HOURS
            </h3>
            <div className="grid grid-cols-2 text-xl md:text-2xl font-serif font-normal tracking-tight leading-relaxed text-[#111111]">
              {/* Days Column */}
              <div className="space-y-1">
                <div>Mon–Fri</div>
                <div>Saturday</div>
                <div>Sunday</div>
              </div>
              {/* Times Column */}
              <div className="space-y-1">
                <div>10–19h</div>
                <div>10–18h</div>
                <div className="text-gray-400">Closed</div>
              </div>
            </div>
          </div>

          {/* Column 4: Direct Communication Channels */}
          <div className="md:col-span-3 space-y-3">
            <h3 className="text-[10px] md:text-xs font-semibold tracking-[0.25em] text-gray-500 uppercase">
              DIRECT
            </h3>
            <div className="space-y-1 text-xl md:text-2xl font-serif font-normal tracking-tight text-[#111111]">
              <div>
                <a href="mailto:hello@aperture.optic" className="hover:text-gray-600 transition-colors">
                  hello@aperture.optic
                </a>
              </div>
              <div>
                <a href="tel:+14165550142" className="hover:text-gray-600 transition-colors">
                  +1 (416) 555 0142
                </a>
              </div>
            </div>

            {/* Context Note */}
            <p className="text-xs text-[#555555] font-light leading-relaxed pt-4 max-w-xs font-sans">
              For prescription transfers and insurance questions, please email — we reply within a business day.
            </p>
          </div>
        </div>
      </section>

      {/* Walk-In Header Section */}
      <section className="w-full bg-[#fbf9f6] text-[#111111] px-6 py-16 md:px-16 md:py-24 border-b border-gray-300 font-sans">
        <div className="max-w-7xl mx-auto space-y-4 md:space-y-6">
          {/* Large Mixed-Style Editorial Headline */}
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-serif tracking-tight leading-[1.05] select-none max-w-5xl">
            Or simply <span className="italic font-normal">walk in.</span>
          </h2>
          {/* Transit / Distance Meta Badge Info */}
          <div className="text-[10px] md:text-xs font-semibold tracking-[0.25em] uppercase text-gray-500 flex items-center space-x-2 pt-2">
            <span>STREETCAR 504</span>
            <span className="text-gray-300 font-normal">•</span>
            <span>SPADINA STATION 8 MIN</span>
          </div>
        </div>
      </section>
    </>
  );
}