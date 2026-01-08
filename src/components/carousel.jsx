"use client";
import React, { useState, useEffect } from "react";
import Image1 from "../../public/assets/carousel/image1.jpg";
import Image2 from "../../public/assets/carousel/image2.jpg";
import Image3 from "../../public/assets/carousel/image3.jpg";
import Image4 from "../../public/assets/carousel/image4.jpg";
const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const images = [Image1, Image2, Image3, Image4];

  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [isHovered, images.length]);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="w-full rounded-2xl pt-8 pb-4 bg-white">
      <div
        className="max-w-6xl mx-auto px-4"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Images Container */}
        <div className="flex items-center justify-center gap-4 mb-6">
          {/* Previous Image Preview */}
          <div className="hidden bg-cover md:flex w-36 h-48 bg-linear-to-br from-gray-50 to-white rounded-xl shadow-md items-center justify-center p-3 opacity-50 hover:opacity-80 transition-all duration-300  ">
            <img
              src={
                images[
                  currentIndex === 0 ? images.length - 1 : currentIndex - 1
                ].src
              }
              alt="Previous"
              className="max-w-full max-h-full object-contain"
            />
          </div>

          {/* Main Image */}
          <div className="relative flex w-3/4 md:w-120 h-56 bg-linear-to-br from-green-50 via-white to-gray-50 rounded-2xl shadow-xl items-center justify-center  overflow-hidden group">
            <div className="absolute inset-0 bg-linear-to-t from-green-500/5 to-transparent"></div>
            <img
              src={images[currentIndex].src}
              alt="Main"
              className="bg-cover max-h-full object-contain transition-all duration-700 ease-in-out transform  relative z-10"
            />
          </div>

          {/* Next Image Preview */}
          <div className="hidden md:flex w-36 h-44 bg-linear-to-br from-gray-50 to-white rounded-xl shadow-md items-center justify-center p-3 opacity-50 hover:opacity-80 transition-all duration-300">
            <img
              src={
                images[
                  currentIndex === images.length - 1 ? 0 : currentIndex + 1
                ].src
              }
              alt="Next"
              className="max-w-full bg-cover max-h-full object-contain"
            />
          </div>
        </div>

        {/* Navigation Controls */}
        <div className="flex items-center justify-center gap-8">
          {/* Previous Button */}
          <button
            onClick={handlePrev}
            className="group hover:cursor-pointer flex items-center gap-2 text-green-600 hover:text-green-700 transition-all duration-300"
            aria-label="Previous"
          >
            <svg
              className="w-8 h-8 transform group-hover:-translate-x-1 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          {/* Indicator Dots */}
          <div className="flex items-center gap-3">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`rounded-full transition-all duration-500 ${
                  index === currentIndex
                    ? "w-8 h-2.5 bg-green-600 shadow-md"
                    : "w-2.5 h-2.5 bg-green-300 hover:bg-green-400"
                }`}
                aria-label={`Slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Next Button */}
          <button
            onClick={handleNext}
            className="group hover:cursor-pointer flex items-center gap-2 text-green-600 hover:text-green-700 transition-all duration-300"
            aria-label="Next"
          >
            <svg
              className="w-8 h-8 transform group-hover:translate-x-1 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
