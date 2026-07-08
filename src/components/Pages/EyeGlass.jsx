import React, { useEffect, useState } from 'react';

// Import your gallery images (adjust paths as needed)
import GalaryGlass from "../../assets/Mains/Galary.jpg";
import GalaryCouple from "../../assets/Mains/CoupleWithSunGlass.jpg";

const Eyeglasses = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [activeCategory, setActiveCategory] = useState('ALL');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  const WHATSAPP_NUMBER = '94771234567';

  // Categories matching your database subcategories for Eyeglasses (Category ID 1)
  const categories = [
    'ALL',
    'MENS',
    'WOMENS',
    'KIDS',
    'READING',
    'BLUE LIGHT',
    'COMPUTER',
    'PRESCRIPTION'
  ];

  const fetchEyeglasses = async () => {
    setIsLoading(true);
    setError("");

    try {
      const res = await fetch("http://localhost/Eye-products-DB/api/get_products.php");
      const data = await res.json();

      if (data.success && Array.isArray(data.data)) {
        const glasses = data.data.filter(item => Number(item.category_id) === 1);
        setProducts(glasses);
        setFilteredProducts(glasses);
      } else {
        setError("Failed to load products");
      }
    } catch (err) {
      console.error(err);
      setError("Cannot connect to server.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchEyeglasses();
  }, []);

  // Filter products
  useEffect(() => {
    if (activeCategory === 'ALL') {
      setFilteredProducts(products);
    } else {
      const subcategoryMap = {
        'MENS': 1,
        'WOMENS': 2,
        'KIDS': 3,
        'READING': 4,
        'BLUE LIGHT': 5,
        'COMPUTER': 6,
        'PRESCRIPTION': 7,
      };

      const filtered = products.filter(
        item => Number(item.sub_category_id) === subcategoryMap[activeCategory]
      );
      setFilteredProducts(filtered);
    }
  }, [activeCategory, products]);

  const formatPrice = (price) => {
    return new Intl.NumberFormat("en-LK").format(price);
  };

  const handleWhatsAppClick = (product) => {
    const message = `Hi! I'm interested in:\n\n` +
                    `*${product.name}*\n` +
                    `Brand: ${product.brand || 'Premium'}\n` +
                    `Price: Rs. ${formatPrice(product.price)}\n\n` +
                    `Please send more details.`;

    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <>
      {/* ==================== SELECTION HEADER ==================== */}
      <section className="w-full bg-[#fbf9f6] text-[#111111] px-6 py-12 md:px-16 md:py-20 border-b border-gray-300">
        <div className="max-w-7xl mx-auto space-y-8">
          <div className="text-[10px] md:text-xs font-medium tracking-[0.25em] uppercase text-gray-500">
            № 01 / Eyeglasses
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif tracking-tight leading-[1.05] max-w-4xl select-none">
            The <span className="italic font-normal">current</span> selection.
          </h1>

          <div className="flex flex-wrap gap-3 pt-4">
            {categories.map((category) => {
              const isActive = activeCategory === category;
              return (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`
                    text-[10px] md:text-xs font-semibold tracking-[0.2em] px-5 py-3 
                    border border-black transition-all duration-200 uppercase
                    ${isActive 
                      ? 'bg-[#111111] text-[#fbf9f6]' 
                      : 'bg-transparent text-[#111111] hover:bg-black/5'
                    }
                  `}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* ==================== EDITORIAL GALLERY PAIR ==================== */}
      <section className="bg-[#f7f5f0] text-neutral-900 px-6 py-8 sm:px-12 sm:py-12 md:px-16 md:py-16">
        <div className="max-w-7xl mx-auto">
          <div className="border-t border-neutral-300/40 w-full mb-8 md:mb-12" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-stretch">
            <div className="w-full overflow-hidden rounded-sm bg-neutral-200 aspect-[4/5] sm:aspect-[13/14] md:aspect-[14/15]">
              <img 
                src={GalaryGlass}
                alt="Elegant eyeglasses collection" 
                className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-[1.01]"
              />
            </div>

            <div className="w-full overflow-hidden rounded-sm bg-neutral-200 aspect-[4/5] sm:aspect-[13/14] md:aspect-[14/15]">
              <img 
                src={GalaryCouple}
                alt="Couple wearing premium eyewear" 
                className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-[1.01]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ==================== PRODUCT GRID ==================== */}
      <section className="bg-[#f7f5f0] text-neutral-900 px-6 py-12 sm:px-12 md:px-16 md:py-20 font-serif">
        <div className="max-w-7xl mx-auto">
          {isLoading && (
            <div className="text-center py-20 text-xl">Loading collection...</div>
          )}

          {error && (
            <div className="text-red-600 text-center py-10">{error}</div>
          )}

          {!isLoading && !error && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 items-start">
              {filteredProducts.map((product, idx) => (
                <div 
                  key={product.id} 
                  className="flex flex-col w-full group cursor-pointer"
                  onClick={() => handleWhatsAppClick(product)}
                >
                  <div className="w-full flex flex-col mb-6">
                    <div className="flex justify-between items-baseline border-b border-neutral-300/60 pb-2">
                      <span className="font-sans text-[10px] sm:text-xs font-semibold tracking-[0.2em] uppercase text-neutral-500">
                        {product.brand || 'PREMIUM'}
                      </span>
                      <span className="text-3xl sm:text-4xl font-normal text-neutral-950 tracking-tight">
                        Rs. {formatPrice(product.price)}
                      </span>
                    </div>

                    <h3 className="text-3xl sm:text-4xl font-normal text-neutral-950 tracking-tight mt-3">
                      {product.name}
                    </h3>

                    <div className="flex justify-between items-baseline font-sans text-[11px] sm:text-xs text-neutral-400 mt-1">
                      <span className="italic">
                        {product.description ? product.description.substring(0, 60) + '...' : 'Premium Eyewear'}
                      </span>
                      <span className="tracking-widest uppercase font-medium">
                        № {String(idx + 1).padStart(2, '0')}
                      </span>
                    </div>
                  </div>

                  <div className="w-full overflow-hidden rounded-sm bg-neutral-200 aspect-square sm:aspect-[14/13] md:aspect-[13/14] relative">
                    {product.image_url ? (
                      <img 
                        src={`http://localhost/Eye-products-DB/${product.image_url}`} 
                        alt={product.name} 
                        className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.015]"
                        onError={(e) => {
                          e.currentTarget.src = "https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=1000&auto=format&fit=crop";
                        }}
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-8xl bg-neutral-100">
                        👓
                      </div>
                    )}

                    {product.popular === "1" && (
                      <span className="absolute top-4 right-4 bg-black text-white text-xs tracking-widest px-4 py-1.5">
                        BEST SELLER
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}

          {filteredProducts.length === 0 && !isLoading && (
            <p className="text-center text-xl py-20 text-neutral-500">
              No products found in this category.
            </p>
          )}
        </div>
      </section>
    </>
  );
};

export default Eyeglasses;