"use client";
import React, { useState } from "react";

const Header = () => {
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [searchQuery, setSearchQuery] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const categories = ["All Categories", "Mobiles", "Tablets"];

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setIsDropdownOpen(false);
  };

  return (
    <div className="bg-green-500 px-2 sm:px-4 py-3 rounded-sm">
      <div className="flex flex-col md:flex-row items-center justify-between gap-3 max-w-7xl mx-auto">
        {/* Search Section */}
        <div className="flex items-center bg-white rounded-full w-full md:flex-1 md:max-w-lg">
          {/* Category Dropdown */}
          <div className="relative">
            <button
              onClick={handleDropdownToggle}
              type="button"
              className="flex hover:cursor-pointer items-center gap-1 px-2 sm:px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-l-full"
            >
              <span className="text-xs sm:text-sm font-medium truncate max-w-20 sm:max-w-none">
                {selectedCategory}
              </span>
              <svg
                className={`w-3 h-3 sm:w-4 sm:h-4 transition-transform shrink-0 ${
                  isDropdownOpen ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {/* Dropdown Menu */}
            {isDropdownOpen && (
              <div className="absolute top-full left-0 mt-2 bg-white rounded-lg shadow-xl py-2 w-48 border border-gray-200 z-10">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => handleCategorySelect(category)}
                    type="button"
                    className="block hover:cursor-pointer w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                  >
                    {category}
                  </button>
                ))}
              </div>
            )}
          </div>
          {/* Vertical Divider */}
          <div className="w-px h-6 bg-gray-300 shrink-0"></div>
          {/* Search Input */}
          <input
            type="text"
            placeholder="Search anything..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="flex-1 px-2 sm:px-4 py-2 text-xs sm:text-sm text-gray-700 outline-none min-w-0"
          />
          {/* Search Button */}
          <button className="px-2 sm:px-4 py-2 hover:cursor-pointer hover:bg-gray-50 rounded-r-full shrink-0">
            <svg
              className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </div>

        {/* Info Badges - Hidden on mobile, visible from tablet (md) onwards */}
        <div className="hidden md:flex items-center gap-4 xl:gap-8 shrink-0">
          <div className="text-white text-[10px] lg:text-xs xl:text-sm font-medium whitespace-nowrap">
            SELL GADGETS AT BEST PRICES
          </div>
          <div className="text-white text-[10px] lg:text-xs xl:text-sm font-medium whitespace-nowrap">
            30 DAYS MONEY BACK
          </div>
          <div className="text-white text-[10px] lg:text-xs xl:text-sm font-medium whitespace-nowrap">
            100% SECURE PAYMENT
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
