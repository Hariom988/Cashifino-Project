import React from "react";
import BestPrice from "../../public/assets/benefits/bestPrice.svg";
import Fast from "../../public/assets/benefits/fast.svg";
import Invoice from "../../public/assets/benefits/invoice.svg";
import Security from "../../public/assets/benefits/security.svg";
import Price from "../../public/assets/benefits/instantPrice.svg";

const Benefits = () => {
  const benefits = [
    {
      title: "Best Prices",
      description: "Objective AI-based pricing",
      icon: BestPrice,
    },
    {
      title: "Instant Payment",
      description:
        "Instant Money Transfer in your preferred mode at time of pick up or store drop off",
      icon: Price,
    },
    {
      title: "Simple & Convenient",
      description: "Check price, schedule pickup & get paid",
      icon: Price, // Replace with your actual icon
    },
    {
      title: "Free Doorstep Pickup",
      description: "No fees for pickup across 1500 cities across India",
      icon: Fast,
    },
    {
      title: "Factory Grade Data Wipe",
      description: "100% Safe and Data Security Guaranteed",
      icon: Security,
    },
    {
      title: "Valid Purchase Invoice",
      description: "Genuine Bill of Sale",
      icon: Invoice,
    },
  ];

  return (
    <section className="bg-green-50 rounded-2xl py-6 px-3 sm:px-1 lg:px-8 xl:px-10">
      <div className="">
        {/* Section Title */}
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8 lg:mb-10">
          Why Us
        </h2>

        {/* Benefits Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-6 lg:gap-x-10 lg:gap-y-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-start gap-3">
              {/* Icon - No background container */}
              <div className="shrink-0 w-10 h-10 lg:w-14 lg:h-14">
                <img
                  src={benefit.icon.src}
                  alt={benefit.title}
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Text Content */}
              <div className="flex-1">
                <h3 className="text-base lg:text-lg font-bold text-gray-900 mb-1 leading-tight">
                  {benefit.title}
                </h3>
                <p className="text-xs lg:text-sm text-gray-600 leading-snug">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
