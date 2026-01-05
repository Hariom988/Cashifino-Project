import React from "react";
import MobileBanner from "../../public/mobile-banner.jpg";
import tabletBanner from "../../public/tablet-banner.jpg";

const PromoBanner = () => {
  return (
    <div className="w-full px-4 py-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 max-w-7xl mx-auto">
        {/* Mobile Promo Banner */}
        <div
          className="relative rounded-2xl overflow-hidden shadow-lg h-40 sm:h-44 md:h-48"
          style={{
            backgroundImage: `url(${MobileBanner.src})`,
            backgroundSize: "cover",
            backgroundPosition: "right bottom", // Keep as is - already good
          }}
        >
          {/* Gradient exactly as in your screenshot */}
          <div className="absolute inset-0 bg-linear-to-r from-gray-900 via-gray-900/95 to-transparent via-50%"></div>

          <div className="relative z-10 flex items-center h-full px-6 md:px-8 lg:px-10">
            <div className="max-w-70">
              <h2 className="text-white text-xl sm:text-2xl md:text-3xl font-bold mb-1 md:mb-2 drop-shadow-lg">
                SELL YOUR MOBILE
              </h2>
              <p className="text-white text-xs sm:text-sm md:text-base mb-3 md:mb-4 opacity-95 drop-shadow-md">
                Get instant cash for your used smartphone
              </p>
              <button className="bg-white hover:cursor-pointer text-black font-semibold px-5 py-2 md:px-6 md:py-2.5 rounded-full hover:bg-gray-100 hover:scale-105 transition-all duration-300 shadow-md text-sm md:text-base">
                Sell Now
              </button>
            </div>
          </div>
        </div>

        {/* Tablet Promo Banner */}
        <div
          className="relative rounded-2xl overflow-hidden shadow-lg h-40 sm:h-44 md:h-48"
          style={{
            backgroundImage: `url(${tabletBanner.src})`,
            backgroundSize: "contain",
            backgroundPosition: "right", // Adjusted to right bottom like mobile
          }}
        >
          {/* Gradient exactly as in your screenshot */}
          <div className="absolute inset-0 bg-linear-to-r from-gray-900 via-gray-900/95 to-transparent via-50%"></div>

          <div className="relative z-10 flex flex-col justify-center h-full px-6 md:px-8 lg:px-10">
            <div className="max-w-[320px]">
              <h2 className="text-white text-lg sm:text-xl md:text-2xl font-bold mb-1 md:mb-2 drop-shadow-lg">
                Sell Your Tablet
              </h2>
              <p className="text-gray-200 text-xs sm:text-sm md:text-base mb-3 md:mb-4 drop-shadow-md">
                Enter your model and get instant quote
              </p>
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Enter device model..."
                  className="flex-1 bg-white/15 backdrop-blur-sm text-white placeholder-gray-300 px-3 py-2 md:py-2.5 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 text-xs sm:text-sm border border-white/30"
                />
                <button className="bg-green-600 hover:cursor-pointer hover:bg-green-700 hover:scale-105 text-white font-semibold px-4 py-2  md:px-5 md:py-2.5 rounded-lg transition-all duration-300 whitespace-nowrap text-xs sm:text-xs shadow-lg">
                  GET QUOTE
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromoBanner;
