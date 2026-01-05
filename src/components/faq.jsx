"use client";
import React, { useState } from "react";
import { ChevronUp } from "lucide-react";

const faq = ({ faqs, title = "FAQs" }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-8 sm:py-12 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-full">
        {/* Section Title */}
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8">
          {title}
        </h2>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-b border-gray-200 pb-4 last:border-b-0"
            >
              {/* Question Header */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between text-left py-3 focus:outline-none group"
                aria-expanded={openIndex === index}
              >
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 pr-4">
                  {faq.question}
                </h3>

                {/* Chevron Icon with Rotation Animation */}
                <span
                  className={`shrink-0 transition-transform duration-300 ${
                    openIndex === index ? "rotate-0" : "rotate-180"
                  }`}
                >
                  <ChevronUp className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600" />
                </span>
              </button>

              {/* Answer Content with Smooth Expand/Collapse */}
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index
                    ? "max-h-96 opacity-100 mt-2"
                    : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default faq;
