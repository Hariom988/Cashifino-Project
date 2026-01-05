"use client";
import React, { useState, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Vivo from "../../public/assets/brandNames/vivo.svg";
import Lava from "../../public/assets/brandNames/lava.svg";
import Oppo from "../../public/assets/brandNames/oppo.svg";
import Samsung from "../../public/assets/brandNames/samsung.svg";
import Realme from "../../public/assets/brandNames/realme.svg";
import Motorola from "../../public/assets/brandNames/motorola.svg";
import Xiaomi from "../../public/assets/brandNames/xiaomi.svg";
import Poco from "../../public/assets/brandNames/poco.svg";
import Iq00 from "../../public/assets/brandNames/iqoo.svg";
import Iphone from "../../public/assets/brandNames/iphone.svg";
import Oneplus from "../../public/assets/brandNames/oneplus.svg";

const TopSellingBrands = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const scrollContainerRef = useRef(null);

  const brands = [
    { name: "Apple", logo: Iphone },
    { name: "Xiaomi", logo: Xiaomi },
    { name: "Samsung", logo: Samsung },
    { name: "Vivo", logo: Vivo },
    { name: "OnePlus", logo: Oneplus },
    { name: "OPPO", logo: Oppo },
    { name: "Realme", logo: Realme },
    { name: "Motorola", logo: Motorola },
    { name: "Iqoo", logo: Iq00 },
    { name: "Lava", logo: Lava },
  ];

  const scrollLeft = () => {
    const container = scrollContainerRef.current;
    if (container) {
      const cardWidth =
        container.querySelector(".brand-card")?.offsetWidth || 0;
      const gap = 16; // Gap between cards
      const scrollAmount = cardWidth + gap;

      container.scrollBy({
        left: -scrollAmount,
        behavior: "smooth",
      });

      setScrollPosition(container.scrollLeft - scrollAmount);
    }
  };

  const scrollRight = () => {
    const container = scrollContainerRef.current;
    if (container) {
      const cardWidth =
        container.querySelector(".brand-card")?.offsetWidth || 0;
      const gap = 16; // Gap between cards
      const scrollAmount = cardWidth + gap;

      container.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });

      setScrollPosition(container.scrollLeft + scrollAmount);
    }
  };

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      setScrollPosition(scrollContainerRef.current.scrollLeft);
    }
  };

  const isAtStart = scrollPosition <= 0;
  const isAtEnd = () => {
    if (!scrollContainerRef.current) return false;
    const container = scrollContainerRef.current;
    return (
      container.scrollLeft + container.clientWidth >= container.scrollWidth - 10
    );
  };

  return (
    <section className="jsx-e4c0ee4aadd7f829 jsx-e4c0ee4aadd7f829 py-8 sm:py-12 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8">
          Top Selling Brands
        </h2>

        {/* Carousel Container */}
        <div className="relative">
          {/* Left Arrow Button */}
          {!isAtStart && (
            <button
              onClick={scrollLeft}
              className="hidden hover:cursor-pointer sm:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-10 h-10 lg:w-12 lg:h-12 items-center justify-center bg-white rounded-full shadow-lg hover:bg-gray-50 transition-all duration-200 border border-gray-200"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-5 h-5 lg:w-6 lg:h-6 text-gray-700" />
            </button>
          )}

          {/* Scrollable Brands Container */}
          <div
            ref={scrollContainerRef}
            onScroll={handleScroll}
            className="flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {brands.map((brand, index) => (
              <div
                key={index}
                className="brand-card shrink-0 w-36 sm:w-44 lg:w-48 bg-gray-50 rounded-lg p-6 flex flex-col items-center justify-center hover:shadow-md transition-shadow duration-200 cursor-pointer"
              >
                {/* Brand Logo */}
                <div className="w-20 h-20 sm:w-24 sm:h-24 mb-4 flex items-center justify-center">
                  <img
                    src={brand.logo.src}
                    alt={brand.name}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>

                {/* Brand Name */}
                <p className="text-sm sm:text-base font-semibold text-gray-900 text-center">
                  {brand.name}
                </p>
              </div>
            ))}
          </div>

          {/* Right Arrow Button */}
          {!isAtEnd() && (
            <button
              onClick={scrollRight}
              className="hidden hover:cursor-pointer sm:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-10 h-10 lg:w-12 lg:h-12 items-center justify-center bg-white rounded-full shadow-lg hover:bg-gray-50 transition-all duration-200 border border-gray-200"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-5 h-5 lg:w-6 lg:h-6 text-gray-700" />
            </button>
          )}
        </div>

        {/* Mobile: Show scroll hint */}
        <p className="sm:hidden text-center text-xs text-gray-500 mt-4">
          Swipe to see more brands →
        </p>
      </div>

      {/* Hide scrollbar CSS */}
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default TopSellingBrands;
