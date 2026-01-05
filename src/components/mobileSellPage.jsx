import React from "react";
import { FiSearch } from "react-icons/fi";
import Link from "next/link";
import HowItWorks from "../components/howItWorks";
import Benefits from "../components/benefits";
import TopSellingBrands from "../components/topSellingBrand";
import Faq from "../components/faq";
import ProductSearch from "../components/productSearch";

const MobileSellPage = () => {
  const mobileSellingFAQs = [
    {
      question: "How do I know the price of my old phone?",
      answer:
        "Just visit the website or app, enter your phone details (brand, model, condition), get an instant price. Accept the offer and schedule a free pickup. You'll get paid once the phone is checked.",
    },
    {
      question: "What should I do if my sell old phone is not turning on?",
      answer:
        "Even if your phone is off or not working, you can still sell it. Just mention the condition, and Cashify will give you a fair price.",
    },
    {
      question: "Can I cancel my sale if I change my mind?",
      answer:
        "Yes, you can cancel the sale before the pickup or inspection is done. Just tell the executive of your decision or reach out to the Cashify support team.",
    },
  ];
  return (
    <>
      <section className="bg-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="text-sm text-gray-500 mb-6">
            <Link href="/">
              <span className="hover:text-primary cursor-pointer">Home</span>
            </Link>
            <span className="mx-2">›</span>
            <Link href="/mobile">
              <span className="text-gray-900">Sell Old Mobile Phone</span>
            </Link>
          </div>

          {/* Main Container */}
          <ProductSearch title={"Mobile Phone"} />
        </div>
      </section>
      <HowItWorks />
      <TopSellingBrands />
      <Faq faqs={mobileSellingFAQs} title="FAQs" />
      <Benefits />
    </>
  );
};

export default MobileSellPage;
