import React from 'react';

export default function Footer() {
  return (
    <footer className="w-full bg-[#fbf9f6] text-[#111111] px-6 pt-16 pb-8 md:px-16 md:pt-24 md:pb-10 border-t border-gray-300 font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* Main Grid: Info block + Link columns */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 pb-16 md:pb-24">
          
          {/* Brand Vision & Address (Left side, takes 5 columns) */}
          <div className="md:col-span-5 space-y-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif tracking-tight leading-[1.1]">
              Considered eyewear, <br />
              <span className="italic font-normal">precisely fitted.</span>
            </h2>
            
            <p className="text-sm text-[#444444] leading-relaxed max-w-sm">
              A boutique optical house and clinic — independent frames, comprehensive eye care, and lenses ground in-house since 2011.
            </p>
            
            <div className="pt-4 text-xs tracking-wide text-[#555555] space-y-1">
              <p>42 Rue Mercer</p>
              <p>Toronto, ON M5V 1H2</p>
              <p className="pt-1">Mon–Sat · 10–19h</p>
            </div>
          </div>

          {/* Spacer column for balance */}
          <div className="hidden md:block md:col-span-1"></div>

          {/* Link Columns (Right side, takes 6 columns split into 3) */}
          <div className="md:col-span-6 grid grid-cols-2 sm:grid-cols-3 gap-8 md:gap-4">
            
            {/* Column 1: Shop */}
            <div className="space-y-4">
              <h3 className="text-[10px] font-semibold tracking-[0.25em] text-gray-500 uppercase">SHOP</h3>
              <ul className="space-y-3 text-sm text-[#222222]">
                <li><a href="/contact-lenses" className="hover:opacity-70 transition-opacity">Contact Lenses</a></li>
                <li><a href="/eyeglasses" className="hover:opacity-70 transition-opacity">Optical</a></li>
                <li><a href="/sunglasses" className="hover:opacity-70 transition-opacity">Sun</a></li>
              </ul>
            </div>

            {/* Column 2: House */}
            <div className="space-y-4">
              <h3 className="text-[10px] font-semibold tracking-[0.25em] text-gray-500 uppercase">HOUSE</h3>
              <ul className="space-y-3 text-sm text-[#222222]">
                <li><a href="/eye-exams" className="hover:opacity-70 transition-opacity">Eye Exams</a></li>
                <li><a href="/journal" className="hover:opacity-70 transition-opacity">Journal</a></li>
                <li><a href="/atelier" className="hover:opacity-70 transition-opacity">Atelier</a></li>
                <li><a href="/visit" className="hover:opacity-70 transition-opacity">Visit</a></li>
              </ul>
            </div>

            {/* Column 3: Practical */}
            <div className="space-y-4 col-span-2 sm:col-span-1">
              <h3 className="text-[10px] font-semibold tracking-[0.25em] text-gray-500 uppercase">PRACTICAL</h3>
              <ul className="space-y-3 text-sm text-[#222222]">
                <li><a href="/questions" className="hover:opacity-70 transition-opacity">Questions</a></li>
                <li><a href="/policies" className="hover:opacity-70 transition-opacity">Policies</a></li>
                <li><a href="mailto:hello@aperture.optic" className="hover:opacity-70 transition-opacity break-all">hello@aperture.optic</a></li>
              </ul>
            </div>

          </div>
        </div>

        {/* Bottom Sub-footer bar */}
        <div className="border-t border-gray-200/60 pt-6 flex flex-col sm:flex-row justify-between items-center text-xs tracking-wider text-[#555555] space-y-2 sm:space-y-0">
          <div>
            © 2026 Aperture Optic
          </div>
          <div className="font-serif italic tracking-wide text-gray-400">
            Est. MMXI
          </div>
        </div>

      </div>
    </footer>
  );
}