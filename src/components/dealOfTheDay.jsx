"use client";
import { theme } from "../../config/theme";

import React, { useState, useEffect } from "react";
function DealOfTheDay() {
  // Static content data
  const content = {
    images: [
      "https://m.media-amazon.com/images/I/71u-1krs2XL.jpg", // Main View
      "https://www.radioshackla.com/media/catalog/product/4/6/462472500011_kitdecelul_1_bcmnp9vo5hgaj73c.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=700&width=700&canvas=700:700", // Back View
      "https://media.tatacroma.com/Croma%20Assets/Communication/Mobiles/Images/251175_6_hxxs60.png", // Side View
      "https://m.media-amazon.com/images/I/61yt9Y7xv0L.jpg", // front View
    ],
    badgeText: "SAVE ₹199.00",
    reviewCount: 12,
    title: "Xiomi Redmi Note 11 Pro 256GB 2023, Black Smartphone",
    currentPrice: 5690.0,
    originalPrice: 4590.0,
    features: [
      "Intel LGA 1700 Socket: Supports 13th & 12th Gen Intel Core",
      "DDR5 Compatible: 4*SMD DIMMs with XMP 3.0 Memory",
      "Commanding Power Design: Twin 16+1+2 Phases Digital VRM",
    ],
    tags: ["FREE SHIPPING", "FREE GIFT"],
    stock: {
      sold: 26,
      total: 75,
    },
  };

  // --- STATE MANAGEMENT ---

  // 1. Image State
  const [activeImage, setActiveImage] = useState(content.images[0]);

  // 2. Timer State
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // --- LOGIC ---

  // Initialize Timer Logic
  useEffect(() => {
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 2); // Ends in 2 days
    targetDate.setHours(targetDate.getHours() + 3);
    targetDate.setMinutes(targetDate.getMinutes() + 3);

    const interval = setInterval(() => {
      const now = new Date();
      const difference = targetDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / 1000 / 60) % 60);
        const seconds = Math.floor((difference / 1000) % 60);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div
        id="main-container"
        className="flex flex-col w-full mx-auto border border-gray-200 shadow-sm rounded-lg overflow-hidden font-sans bg-white"
      >
        {/* header */}
        <div
          className="py-4 px-6 font-bold text-xl uppercase tracking-wide flex justify-between items-center"
          style={{
            backgroundColor: theme.primary,
            color: theme.text.primary,
          }}
        >
          <span>Deals of the day</span>
        </div>

        {/* content area */}
        <div className="flex flex-col lg:flex-row p-6 gap-8">
          {/* image area */}
          <div className="flex flex-row gap-4 lg:w-5/12 select-none">
            {/* Thumbnails */}
            <div className="flex flex-col gap-3">
              {content.images.map((img, idx) => (
                <div
                  key={idx}
                  onClick={() => setActiveImage(img)}
                  className={`w-12 h-16 border rounded cursor-pointer overflow-hidden transition-all duration-200 
                    ${
                      activeImage === img
                        ? "border-teal-600 ring-1 ring-teal-600"
                        : "border-gray-200 hover:border-gray-400"
                    }
                  `}
                >
                  <img
                    src={img}
                    alt={`thumb-${idx}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>

            {/* Main Image Container */}
            <div className="relative flex-1 flex items-center justify-center">
              {/* Badge */}
              <img
                src={activeImage}
                className="max-h-100 object-contain transition-opacity duration-300"
                alt="Product Main"
              />
            </div>
          </div>

          {/* content area */}
          <div className="flex-1 flex flex-col gap-3">
            {/* Title */}
            <h1 className="text-2xl font-bold text-gray-800 leading-tight">
              {content.title}
            </h1>

            {/* Price */}
            <div className="flex items-end gap-3 my-1">
              <span
                className="text-3xl font-bold"
                style={{ color: theme.primary }}
              >
                ₹{content.currentPrice.toFixed(2)}
              </span>
              <span className="text-lg text-gray-400 line-through mb-1">
                ₹{content.originalPrice.toFixed(2)}
              </span>
            </div>

            {/* Description/Features */}
            <ul className="text-sm text-gray-600 space-y-1 mb-2">
              {content.features.map((feature, idx) => (
                <li key={idx} className="flex items-start">
                  <span className="mr-2 text-lg leading-4">•</span>
                  {feature}
                </li>
              ))}
            </ul>

            {/* Tags */}
            <div className="flex gap-3 mb-4">
              {content.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 bg-teal-50 text-teal-600 text-xs font-bold uppercase rounded border border-teal-100"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Timer Section */}
            <div className="flex items-center gap-6 border-t border-gray-100 pt-6">
              <div className="flex flex-col">
                <span className="text-xs font-bold text-gray-800">
                  HURRY UP!
                </span>
                <span className="text-xs font-bold text-gray-800">
                  PROMOTION WILL
                </span>
                <span className="text-xs font-bold text-gray-800">
                  EXPIRE IN
                </span>
              </div>

              <div className="flex gap-3">
                {[
                  { val: timeLeft.days, label: "d" },
                  { val: timeLeft.hours, label: "h" },
                  { val: timeLeft.minutes, label: "m" },
                  { val: timeLeft.seconds, label: "s" },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col items-center justify-center bg-gray-100 w-12 h-12 rounded shadow-inner relative group hover:bg-gray-200 transition-colors"
                  >
                    <span className="font-bold text-lg text-gray-800 z-10">
                      {item.val}
                    </span>
                    <span className="absolute bottom-1 right-1 text-[10px] text-gray-500 font-medium">
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DealOfTheDay;
