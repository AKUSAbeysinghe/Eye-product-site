import React from 'react';

export default function OpticalFeature() {
  // WhatsApp number from your contact details
  const whatsappNumber = "+14165550142"; // +1 (416) 555-0142

  const handleBookExam = () => {
    const message = "Hi, I'd like to book an eye exam. Can you help me with available times?";
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="bg-[#f7f5f0] text-neutral-900 px-6 py-12 md:px-16 md:py-20 flex justify-center items-center font-serif selection:bg-neutral-200">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
        
        {/* Left Side: Full Crop Portrait Image (Uncomment when you add real image) */}
        {/* 
        <div className="md:col-span-6 w-full overflow-hidden rounded-sm bg-neutral-200 aspect-square md:aspect-[14/13]">
          <img 
            src="https://images.unsplash.com/photo-1511556532299-8f662fc26c06?q=80&w=1200&auto=format&fit=crop" 
            alt="Close up of crystal clear designer eyewear frames" 
            className="w-full h-full object-cover object-center scale-102"
          />
        </div> 
        */}

        {/* Right Side: Editorial Content & Call to Actions */}
        <div className="md:col-span-6 flex flex-col justify-between h-full py-2">
          
          {/* Statement Paragraph (Uncomment when ready) */}
          {/* 
          <p className="text-3xl sm:text-4xl lg:text-5xl font-normal text-neutral-950 leading-[1.22] tracking-tight max-w-xl">
            An independent optical house pairing curated frames with comprehensive eye care — under one roof, by appointment.
          </p> 
          */}

          {/* Action Buttons Container */}
          <div className="mt-12 md:mt-auto flex flex-col sm:flex-row items-stretch sm:items-center gap-4 font-sans text-xs font-bold tracking-[0.2em] uppercase">
            
            {/* Secondary: Shop Frames */}
            <a 
              href="#shop" 
              className="border border-neutral-900 bg-transparent text-neutral-900 px-8 py-4 text-center transition-colors duration-200 hover:bg-neutral-900 hover:text-[#f7f5f0]"
            >
              Shop Frames
            </a>

            {/* Primary: Book An Exam - Now opens WhatsApp */}
            <button 
              onClick={handleBookExam}
              className="border border-neutral-900 bg-neutral-900 text-[#f7f5f0] px-8 py-4 text-center transition-colors duration-200 hover:bg-neutral-800 cursor-pointer"
            >
              Book An Exam
            </button>

          </div>

        </div>

      </div>
    </section>
  );
}