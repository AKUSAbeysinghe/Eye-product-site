import React from 'react';
import atelierImage from "../../assets/Atelier/orengeglass.jpg";

export default function Atelier() {
  const stats = [
    { label: 'FOUNDED', value: '2011' },
    { label: 'OPTOMETRISTS', value: 'Two' },
    { label: 'HOUSES CARRIED', value: '48' },
    { label: 'LENS LAB', value: 'In-house' },
  ];

  const principles = [
    {
      id: '01',
      title: 'Independence',
      description: "We don't carry frames owned by lens conglomerates. Every house we stock is family- or designer-run.",
    },
    {
      id: '02',
      title: 'Patience',
      description: 'Exams run an hour, fittings take as long as they take, and lenses are cut once — correctly.',
    },
    {
      id: '03',
      title: 'Restraint',
      description: 'Eyewear is worn on the face. We choose frames that disappear gracefully, not ones that announce themselves.',
    },
  ];

  return (
    <>
      {/* Header Section */}
      <section className="w-full bg-[#fbf9f6] text-[#111111] px-6 py-16 md:px-16 md:py-24 border-b border-gray-300 font-sans">
        <div className="max-w-7xl mx-auto space-y-6 md:space-y-8">
          <div className="text-[10px] md:text-xs font-semibold tracking-[0.25em] uppercase text-gray-500">
            № 03 / ATELIER
          </div>

          <h2 className="text-6xl md:text-8xl lg:text-[9rem] font-serif tracking-tight leading-[0.95] select-none max-w-5xl">
            A house built <br />
            on <span className="italic font-normal">slow</span> <br />
            looking.
          </h2>
        </div>
      </section>

      {/* Story Section */}
      <section className="w-full bg-[#fbf9f6] text-[#111111] px-6 py-16 md:px-16 md:py-24 font-serif border-b border-gray-300">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 items-center">
          {/* Image Column */}
          <div className="md:col-span-5 flex justify-center md:justify-start">
            <div className="w-full max-w-[420px] aspect-square overflow-hidden bg-gray-100 shadow-sm relative">
              <img 
                src={atelierImage}
                alt="Round gold-framed spectacles placed on elegant folded textured fabric" 
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-[1.02]"
              />
            </div>
          </div>

          {/* Story Text */}
          <div className="md:col-span-7 space-y-6">
            <p className="text-3xl md:text-4xl lg:text-[2.75rem] font-normal tracking-tight leading-[1.25] text-[#111111] max-w-2xl">
              Aperture began in 2011 as a single room above a print shop on Spadina — 
              one optometrist, three drawers of frames, and a kettle. 
              We've grown, slowly, around a single idea: <span className="italic font-normal">eyewear should be chosen with the same care it's made with.</span>
            </p>
          </div>
        </div>
      </section>

      {/* Brand Stats Grid */}
      <section className="w-full bg-[#fbf9f6] text-[#111111] px-6 py-12 md:px-16 md:py-20 font-sans border-b border-gray-300">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          <div className="hidden lg:block lg:col-span-5"></div>

          <div className="lg:col-span-7 space-y-8 w-full">
            <div className="grid grid-cols-2 gap-x-8 gap-y-12 md:gap-x-12 md:gap-y-16">
              {stats.map((stat, index) => (
                <div key={index} className="space-y-3">
                  <h3 className="text-[10px] md:text-xs font-semibold tracking-[0.25em] text-gray-500 uppercase">
                    {stat.label}
                  </h3>
                  <p className="text-3xl md:text-5xl lg:text-6xl font-serif font-normal tracking-tight text-[#111111]">
                    {stat.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Principles Section */}
      <section className="w-full bg-[#fbf9f6] text-[#111111] px-6 py-16 md:px-16 md:py-24 font-sans border-b border-gray-300">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-y-12 lg:gap-x-12 items-start">
          <div className="lg:col-span-3 text-[10px] md:text-xs font-semibold tracking-[0.25em] uppercase text-gray-500 lg:pt-2">
            PRINCIPLES
          </div>

          <div className="lg:col-span-9 divide-y divide-gray-200/80 w-full">
            {principles.map((item) => (
              <div 
                key={item.id} 
                className="grid grid-cols-1 md:grid-cols-12 gap-y-3 md:gap-x-6 py-10 first:pt-0 last:pb-0 items-start"
              >
                <div className="md:col-span-2 text-xl md:text-2xl font-serif font-normal tracking-tight text-[#111111] md:pt-1">
                  {item.id}
                </div>

                <div className="md:col-span-4">
                  <h3 className="text-2xl md:text-3xl font-serif font-normal tracking-tight text-[#111111]">
                    {item.title}
                  </h3>
                </div>

                <div className="md:col-span-6">
                  <p className="text-sm md:text-base text-[#555555] font-light leading-relaxed max-w-xl">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}