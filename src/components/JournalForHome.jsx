import React from 'react';

const Journal = () => {
  const articles = [
    {
      type: "FIELD NOTE",
      title: "Why titanium ages better than steel",
      description: "A short essay on memory metals and the case for thinner temples.",
      slug: "titanium-ages-better"
    },
    {
      type: "GUIDE",
      title: "Choosing lenses for screen-heavy days",
      description: "Blue light, anti-fatigue, photochromic — what actually matters.",
      slug: "lenses-for-screen-days"
    },
  ];

  return (
    <div className="min-h-screen bg-[#F7F5F0] text-[#1A1A1A] font-sans antialiased">
      <div className="max-w-6xl mx-auto px-6 py-12 md:px-16 lg:px-24">
        
        {/* Header */}
        <header className="mb-16">
          <span className="text-xs font-medium tracking-[0.25em] text-[#1A1A1A] font-mono">
            № 03 / JOURNAL
          </span>
        </header>

        {/* Featured Journal Entry (JournalEntry style) */}
        <div className="mb-24">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
            {/* Category */}
            <div className="md:col-span-3 lg:col-span-3 pt-3 md:text-right md:pr-12">
              <span className="text-xs font-semibold tracking-[0.25em] text-[#76746E] block leading-relaxed">
                HOUSE <br /> VISIT
              </span>
            </div>

            {/* Main Title */}
            <div className="md:col-span-6 lg:col-span-6">
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-[3.75rem] font-normal leading-[1.15] tracking-tight hover:opacity-80 transition-opacity cursor-pointer">
                Inside the workshop of Masunaga, Fukui
              </h1>
            </div>

            {/* Description */}
            <div className="md:col-span-3 lg:col-span-3 pt-3">
              <p className="font-serif text-[1rem] sm:text-base leading-relaxed text-[#54534E] max-w-[200px] md:max-w-xs">
                Two weeks with the makers behind our most quietly worn frame.
              </p>
            </div>
          </div>

          {/* Decorative Line */}
          <div className="mt-16 md:mt-20">
            <hr className="border-[#E2DFD8] border-t" />
          </div>
        </div>

        {/* Article Feed */}
        <main className="space-y-0">
          {articles.map((article, index) => (
            <article
              key={index}
              className="border-t border-[#E2DFD8] py-12 lg:py-16 grid grid-cols-1 md:grid-cols-12 gap-6 items-start last:border-b last:border-[#E2DFD8]"
            >
              {/* Category */}
              <div className="md:col-span-2 lg:col-span-3 pt-2">
                <span className="text-xs font-semibold tracking-[0.2em] text-[#76746E]">
                  {article.type}
                </span>
              </div>

              {/* Title */}
              <div className="md:col-span-7 lg:col-span-6">
                <h2 className="font-serif text-4xl sm:text-5xl lg:text-[3.5rem] font-normal leading-[1.1] tracking-tight hover:opacity-80 transition-opacity cursor-pointer">
                  {article.title}
                </h2>
              </div>

              {/* Description */}
              <div className="md:col-span-3 lg:col-span-3 pt-2 md:text-right">
                <p className="font-serif text-[1rem] sm:text-base leading-relaxed text-[#54534E] max-w-xs md:ml-auto">
                  {article.description}
                </p>
              </div>
            </article>
          ))}
        </main>
      </div>
    </div>
  );
};

export default Journal;