import React from "react";
import MoneyIcon from "../../public/assets/howItWorks/cashPaid.svg";
import DeliveryIcon from "../../public/assets/howItWorks/delivery.svg";
import MobileRupeeIcon from "../../public/assets/howItWorks/checkPrice.svg";

const HowItWorks = () => {
  const steps = [
    {
      id: 1,
      title: "Check Price",
      description:
        "Select your device & tell us about its current condition, and our advanced AI tech will tailor make the perfect price for you.",
      icon: MobileRupeeIcon,
    },
    {
      id: 2,
      title: "Schedule Pickup",
      description:
        "Book a free pickup from your home or work at a time slot that best suits your convenience.",
      icon: DeliveryIcon,
    },
    {
      id: 3,
      title: "Get Paid",
      description:
        "Did we mention you get paid as soon as our executive picks up your device? It's instant payment all the way!",
      icon: MoneyIcon,
    },
  ];

  return (
    <section className="py-8 sm:py-12 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 sm:mb-12">
          How Cashifino Works
        </h2>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-6 lg:gap-10">
          {steps.map((step) => (
            <div
              key={step.id}
              className="flex flex-col items-center text-center"
            >
              {/* Icon */}
              <div className="mb-6 sm:mb-8">
                <img
                  src={step.icon.src}
                  alt={step.title}
                  className="w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 object-contain"
                />
              </div>

              {/* Title with Number Badge */}
              <div className="flex items-center gap-3 mb-3 sm:mb-4">
                <span className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 bg-green-500 text-white text-sm sm:text-base font-semibold rounded-full">
                  {step.id}
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900">
                  {step.title}
                </h3>
              </div>

              {/* Description */}
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed max-w-sm">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
