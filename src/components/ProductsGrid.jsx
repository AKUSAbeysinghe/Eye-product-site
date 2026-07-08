import React from 'react';

export default function EditorialProductGrid() {
  const products = [
    {
      brand: 'MASUNAGA',
      name: 'Halden',
      price: '$540',
      material: 'Rose Gold Titanium',
      index: '№ 01',
      image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=1000&auto=format&fit=crop',
      alt: 'Premium tortoiseshell sunglasses arranged gracefully on a soft cream background',
    },
    {
      brand: 'LUNETTERIE GÉNÉRALE',
      name: 'Mercer',
      price: '$480',
      material: 'Champagne Acetate',
      index: '№ 02',
      image: 'https://images.unsplash.com/photo-1508296695146-257a814070b4?q=80&w=1000&auto=format&fit=crop',
      alt: 'Gold wire-rimmed optical glasses reflecting soft light over textured woven fabric',
    },
  ];

  return (
    <section className="bg-[#f7f5f0] text-neutral-900 px-6 py-12 sm:px-12 md:px-16 md:py-20 font-serif selection:bg-neutral-200">
      <div className="max-w-7xl mx-auto">
        
        {/* Main Products Grid Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 items-start">
          {products.map((product, idx) => (
            <div key={idx} className="flex flex-col w-full group cursor-pointer">
              
              {/* Top Text Segment: Structured Header Block */}
              <div className="w-full flex flex-col mb-6">
                
                {/* Row 1: Brand Name & Large Serif Price */}
                <div className="flex justify-between items-baseline border-b border-neutral-300/60 pb-2">
                  <span className="font-sans text-[10px] sm:text-xs font-semibold tracking-[0.2em] uppercase text-neutral-500">
                    {product.brand}
                  </span>
                  <span className="text-3xl sm:text-4xl font-normal text-neutral-950 tracking-tight">
                    {product.price}
                  </span>
                </div>

                {/* Row 2: Product Name Title */}
                <h3 className="text-3xl sm:text-4xl font-normal text-neutral-950 tracking-tight mt-3">
                  {product.name}
                </h3>

                {/* Row 3: Material Composition & Technical Catalogue Index */}
                <div className="flex justify-between items-baseline font-sans text-[11px] sm:text-xs text-neutral-400 mt-1">
                  <span className="italic font-serif text-neutral-500">
                    {product.material}
                  </span>
                  <span className="tracking-widest uppercase font-medium">
                    {product.index}
                  </span>
                </div>

              </div>

              {/* Bottom Image Segment: Framed Product Photography */}
              <div className="w-full overflow-hidden rounded-sm bg-neutral-200 aspect-square sm:aspect-[14/13] md:aspect-[13/14]">
                <img 
                  src={product.image} 
                  alt={product.alt} 
                  className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.015]"
                />
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}