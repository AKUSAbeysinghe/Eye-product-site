import React, { useState, useRef, useEffect } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isShopOpen, setIsShopOpen] = useState(false);
  const shopRef = useRef(null);

  const mainCategories = [
    { name: 'Eyeglasses', href: '/eyeglasses' },
    { name: 'Sunglasses', href: '/sunglasses' },
    { name: 'Contact Lenses', href: '/contact-lenses' },
    { name: 'Lens Solutions & Eye Care', href: '/lens-solutions' },
    { name: 'Accessories', href: '/accessories' },
    { name: 'Eye Care Services', href: '/eye-care-services' },
    { name: 'Brands', href: '/brands' },
  ];

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (shopRef.current && !shopRef.current.contains(event.target)) {
        setIsShopOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleShop = () => {
    setIsShopOpen(prev => !prev);
  };

  // WhatsApp number (from your contact details)
  const whatsappNumber = "+14165550142"; // +1 (416) 555-0142

  const handleBookExam = () => {
    const message = "Hi, I'd like to book an eye exam. Can you help me with available times?";
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <nav className="w-full bg-[#fbf9f6] text-[#222222] font-sans border-b border-gray-200/50 px-6 md:px-12 py-5 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Logo */}
        <a 
          href="/" 
          className="text-2xl md:text-3xl tracking-tight select-none hover:opacity-80 transition-opacity"
        >
          <span className="font-serif font-normal">Aperture </span>
          <span className="font-serif italic">Optic</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-8 xl:space-x-12 text-xs font-medium tracking-[0.2em] text-[#444444]">
          
          {/* SHOP Dropdown */}
          <div ref={shopRef} className="relative">
            <button
              onClick={toggleShop}
              className="hover:text-black transition-colors duration-200 flex items-center gap-1 focus:outline-none"
              aria-expanded={isShopOpen}
              aria-haspopup="true"
            >
              SHOP
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className={`h-3 w-3 transition-transform duration-200 ${isShopOpen ? 'rotate-180' : ''}`} 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {/* Dropdown Menu */}
            {isShopOpen && (
              <div className="absolute left-0 top-full mt-3 w-56 bg-white shadow-xl border border-gray-100 py-3 z-50 rounded-sm">
                {mainCategories.map((category) => (
                  <a
                    key={category.name}
                    href={category.href}
                    className="block px-6 py-3 text-sm hover:bg-gray-50 hover:text-black transition-all"
                    onClick={() => setIsShopOpen(false)}
                  >
                    {category.name}
                  </a>
                ))}
              </div>
            )}
          </div>

          <a href="/eye-exams" className="hover:text-black transition-colors duration-200">EYE EXAMS</a>
          <a href="/journal" className="hover:text-black transition-colors duration-200">JOURNAL</a>
          <a href="/atelier" className="hover:text-black transition-colors duration-200">ATELIER</a>
          <a href="/visit" className="hover:text-black transition-colors duration-200">VISIT</a>
          <a href="/about" className="hover:text-black transition-colors duration-200">ABOUT</a>
        </div>

        {/* Book Exam Button - Now opens WhatsApp */}
        <div className="hidden lg:block">
          <button 
            onClick={handleBookExam}
            className="inline-block border border-black px-6 py-3 text-xs font-medium tracking-[0.2em] text-black hover:bg-black hover:text-[#fbf9f6] transition-all duration-300 cursor-pointer"
          >
            BOOK EXAM
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="lg:hidden text-black focus:outline-none p-2"
          aria-label="Toggle menu"
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden mt-6 pt-6 border-t border-gray-200 flex flex-col space-y-1 text-sm font-medium text-[#444444]">
          <div className="font-semibold text-black mb-3 px-2">SHOP</div>
          {mainCategories.map((category) => (
            <a
              key={category.name}
              href={category.href}
              className="pl-6 py-3 hover:bg-gray-50 hover:text-black transition-colors rounded-md"
              onClick={() => setIsOpen(false)}
            >
              {category.name}
            </a>
          ))}

          <div className="h-px bg-gray-200 my-4" />

          <a href="/eye-exams" className="py-3 px-2 hover:bg-gray-50 hover:text-black transition-colors" onClick={() => setIsOpen(false)}>EYE EXAMS</a>
          <a href="/journal" className="py-3 px-2 hover:bg-gray-50 hover:text-black transition-colors" onClick={() => setIsOpen(false)}>JOURNAL</a>
          <a href="/atelier" className="py-3 px-2 hover:bg-gray-50 hover:text-black transition-colors" onClick={() => setIsOpen(false)}>ATELIER</a>
          <a href="/visit" className="py-3 px-2 hover:bg-gray-50 hover:text-black transition-colors" onClick={() => setIsOpen(false)}>VISIT</a>
          <a href="/About" className="py-3 px-2 hover:bg-gray-50 hover:text-black transition-colors" onClick={() => setIsOpen(false)}>ABOUT</a>

          {/* Mobile Book Exam Button - WhatsApp */}
          <button 
            onClick={() => {
              handleBookExam();
              setIsOpen(false);
            }}
            className="mt-6 mx-2 block text-center border border-black py-4 text-black hover:bg-black hover:text-[#fbf9f6] transition-all duration-300 font-medium rounded-sm"
          >
            BOOK EXAM
          </button>
        </div>
      )}
    </nav>
  );
}