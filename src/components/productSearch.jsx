import { FiSearch } from "react-icons/fi";
import React from "react";
import Iphone from "../../public/assets/brandNames/iphone.svg";
import HeroImage from "../../public/assets/mobileSellingPage/hero-image.png";
import Xiaomi from "../../public/assets/brandNames/xiaomi.svg";
import Samsung from "../../public/assets/brandNames/samsung.svg";
import Vivo from "../../public/assets/brandNames/vivo.svg";

const ProductSearch = ({ title }) => {
  const brands = [
    { id: 1, name: "Apple", logo: Iphone },
    { id: 2, name: "Xiaomi", logo: Xiaomi },
    { id: 3, name: "Samsung", logo: Samsung },
    { id: 4, name: "Vivo", logo: Vivo },
  ];
  const placeholderTitle = `Search your ${title} to sell`;
  return (
    <>
      <div className="bg-[#F9FAFB] rounded-3xl relative overflow-hidden">
        <div className="flex flex-col lg:flex-row items-center gap-4">
          {/* Left Content */}
          <div className="flex-1 p-10 w-full z-10">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8 ">
              Sell Old {title} for Instant Cash
            </h1>

            {/* Features */}
            <div className="flex flex-wrap gap-6 mb-8">
              <div className="flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="text-base text-gray-700">Maximum Value</span>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="text-base text-gray-700">
                  Safe & Hassle-free
                </span>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="text-base text-gray-700">
                  Free Doorstep Pickup
                </span>
              </div>
            </div>

            {/* Search Input */}
            <div className="mb-10">
              <div className="relative">
                <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />
                <input
                  type="text"
                  placeholder={placeholderTitle}
                  className="w-full pl-12 pr-4 py-3.5 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                />
              </div>
            </div>

            {/* Brand Selection */}
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="h-px flex-1 bg-gray-300"></div>
                <span className="text-sm text-gray-600">Or choose a brand</span>
                <div className="h-px flex-1 bg-gray-300"></div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
                {brands.map((brand) => (
                  <button
                    key={brand.id}
                    className="bg-white border hover:cursor-pointer border-gray-200 rounded-xl px-4 py-2 hover:border-primary hover:shadow-md transition-all"
                  >
                    <img
                      src={brand.logo.src}
                      alt={brand.name}
                      className="h-8 w-auto mx-auto"
                    />
                  </button>
                ))}
                <button className="hover:cursor-pointer rounded-xl hover:border-primary transition-all">
                  <span className="text-xs font-medium text-gray-700">
                    More Brands ›
                  </span>
                </button>
              </div>
            </div>
          </div>

          {/* Right Image Container */}
          <div className="hidden lg:block shrink-0 relative h-full">
            <img
              src={HeroImage.src}
              alt="Sell your phone for cash"
              className="w-125 h-full object-cover mix-blend-multiply"
              style={{
                maskImage:
                  "linear-gradient(to right, transparent 0%, black 15%, black 100%)",
                WebkitMaskImage:
                  "linear-gradient(to right, transparent 0%, black 15%, black 100%)",
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductSearch;
