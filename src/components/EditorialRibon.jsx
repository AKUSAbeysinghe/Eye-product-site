import React from 'react';

export default function EditorialStatsRibbon() {
  const stats = [
    { value: '13', label: 'Years Independent' },
    { value: '48', label: 'Houses Carried' },
    { value: '1 hr', label: 'Average Exam' },
    { value: '7 days', label: 'Lens Turnaround' },
  ];

  return (
    <section className="bg-[#f7f5f0] text-neutral-900 font-serif selection:bg-neutral-200 w-full">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12">
        
        {/* Top Boundary Line */}
        <div className="border-t border-neutral-400/60 w-full" />

        {/* Grid Container */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-6 py-12 md:py-16 items-start">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col space-y-2 md:space-y-3">
              
              {/* Stat Number / Value */}
              <span className="text-6xl sm:text-7xl lg:text-8xl font-normal text-neutral-950 tracking-tight leading-none">
                {stat.value}
              </span>
              
              {/* Stat Metadata Label */}
              <span className="font-sans text-[10px] sm:text-xs font-medium tracking-[0.2em] uppercase text-neutral-600 leading-normal">
                {stat.label}
              </span>

            </div>
          ))}
        </div>

        {/* Bottom Boundary Line */}
        <div className="border-b border-neutral-400/60 w-full" />

      </div>
    </section>
  );
}