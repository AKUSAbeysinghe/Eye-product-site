import React from 'react';
import EyeExam from "../../assets/EyeExams/EyeExam.jpg";

export default function ClinicServices() {
  const services = [
    {
      id: '№ 01',
      title: 'Comprehensive Eye Exam',
      duration: '60 MIN',
      price: 'Rs. 13,775',
      description: 'Full refraction, ocular health assessment, digital retinal imaging, and OCT scan.',
    },
    {
      id: '№ 02',
      title: 'Contact Lens Assessment & Fitting',
      duration: '45 MIN',
      price: 'Rs. 9,025',
      description: 'Comprehensive fitting, trial lenses, and training for new and experienced wearers.',
    },
    {
      id: '№ 03',
      title: 'Dry Eye Evaluation & Treatment',
      duration: '40 MIN',
      price: 'Rs. 11,400',
      description: 'Tear film analysis, meibography, and personalized treatment plan.',
    },
    {
      id: '№ 04',
      title: 'Pediatric Eye Exam',
      duration: '45 MIN',
      price: 'Rs. 12,350',
      description: 'Specialized exam for children including vision development and binocular vision assessment.',
    },
    {
      id: '№ 05',
      title: 'Diabetic Eye Exam',
      duration: '50 MIN',
      price: 'Rs. 15,200',
      description: 'Detailed retinal examination with dilation and advanced imaging for diabetic patients.',
    },
    {
      id: '№ 06',
      title: 'Glaucoma Screening & Monitoring',
      duration: '30 MIN',
      price: 'Rs. 8,075',
      description: 'Intraocular pressure measurement, optic nerve evaluation, and visual field testing.',
    },
    {
      id: '№ 07',
      title: 'Macular Health Assessment',
      duration: '35 MIN',
      price: 'Rs. 9,025',
      description: 'Advanced imaging for early detection of macular degeneration and other retinal conditions.',
    },
    {
      id: '№ 08',
      title: 'Emergency Eye Care',
      duration: 'Varies',
      price: 'Rs. 9,025+',
      description: 'Same-day appointments for eye infections, injuries, sudden vision changes, and foreign body removal.',
    },
  ];

  return (
    <>
      {/* ====================== CLINIC FEATURE SECTION ====================== */}
      <section className="w-full bg-[#fbf9f6] text-[#111111] px-6 py-16 md:px-16 md:py-24 border-b border-gray-300 font-sans">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Side: Content */}
          <div className="lg:col-span-7 space-y-6 md:space-y-8">
            <div className="text-[10px] md:text-xs font-medium tracking-[0.25em] uppercase text-gray-500">
              № 02 / THE CLINIC
            </div>

            <h2 className="text-5xl md:text-7xl lg:text-8xl font-serif tracking-tight leading-[1.05] select-none">
              An hour of <br />
              <span className="italic font-normal">careful</span> <br />
              attention.
            </h2>

            <p className="text-base md:text-lg text-[#444444] leading-relaxed max-w-xl font-light">
              Two registered optometrists. One exam room. No quotas, no upsell scripts — just a thorough look at how your eyes are doing today.
            </p>
          </div>

          {/* Right Side: Image */}
          <div className="lg:col-span-5 w-full pt-2 lg:pt-16">
            <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-100 shadow-sm">
              <img 
                src={EyeExam}
                alt="Aperture Optic examination room equipped with modern optometry instruments" 
                className="w-full h-full object-cover grayscale-[15%] contrast-[105%]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ====================== SERVICES & PRICING SECTION ====================== */}
      <section className="w-full bg-[#fbf9f6] text-[#111111] px-6 py-16 md:px-16 md:py-24 font-sans">
        <div className="max-w-7xl mx-auto">
          
          {/* Section Header */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 pb-12 items-start">
            <div className="md:col-span-3 text-[10px] md:text-xs font-semibold tracking-[0.25em] uppercase text-gray-500 pt-3">
              SERVICES
            </div>
            <div className="md:col-span-9">
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif tracking-tight leading-[1.1] text-left max-w-2xl">
                Professional eye care,<br />transparent pricing.
              </h2>
            </div>
          </div>

          {/* Divider */}
          <div className="w-full h-[1px] bg-black mb-6"></div>

          {/* Services List */}
          <div className="divide-y divide-gray-200">
            {services.map((service) => (
              <div 
                key={service.id} 
                className="grid grid-cols-1 md:grid-cols-12 gap-y-4 md:gap-x-6 py-10 items-start hover:bg-black/[0.01] transition-colors duration-150 group"
              >
                {/* Service Number */}
                <div className="md:col-span-1 text-[10px] md:text-xs font-medium tracking-[0.2em] text-gray-400 pt-2">
                  {service.id}
                </div>

                {/* Service Details */}
                <div className="md:col-span-7 space-y-3">
                  <div className="flex flex-wrap items-baseline gap-x-4">
                    <h3 className="text-2xl md:text-3xl font-serif tracking-tight text-[#111111]">
                      {service.title}
                    </h3>
                    <span className="text-[10px] md:text-xs font-semibold tracking-[0.2em] text-gray-400 whitespace-nowrap">
                      {service.duration}
                    </span>
                  </div>
                  <p className="text-sm md:text-base text-[#555555] max-w-xl font-light leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Spacer */}
                <div className="hidden md:block md:col-span-2"></div>

                {/* Price */}
                <div className="md:col-span-2 text-left md:text-right text-3xl md:text-4xl font-serif tracking-tight text-[#111111] pt-1">
                  {service.price}
                </div>
              </div>
            ))}
          </div>

          {/* Note at bottom */}
          <div className="mt-12 text-center text-sm text-gray-500 max-w-md mx-auto">
            All prices are for uninsured patients. Many insurance plans are accepted — we’ll verify your coverage before your visit.
          </div>
        </div>
      </section>
    </>
  );
}