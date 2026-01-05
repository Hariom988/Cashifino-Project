import React from "react";
import Link from "next/link";
import ProductSearch from "../components/productSearch";
import HowItWorks from "../components/howItWorks";
import TopSellingBrand from "../components/topSellingBrand";
import Faq from "../components/faq";
import Benefits from "../components/benefits";

const TabletSellingPage = () => {
  const tabletSellingFAQs = [
    {
      question: "Can I sell my tablet even if the screen is cracked?",
      answer:
        "Yes, you can sell tablets with cracked screens. Just mention the condition during the evaluation, and we'll provide a fair price based on the damage.",
    },
    {
      question: "How long does the tablet pickup process take?",
      answer:
        "Once you schedule a pickup, our executive will arrive at your doorstep within 24-48 hours based on your selected time slot.",
    },
    {
      question: "Do you accept all tablet brands?",
      answer:
        "We accept most popular tablet brands including Apple iPad, Samsung Galaxy Tab, Lenovo, and more. Check our website for the complete list.",
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
            <Link href="">
              <span className="text-gray-900">Sell Old Tablet Phone</span>
            </Link>
          </div>
          {/* Main Container */}
          <ProductSearch title={"Tablet"} />
        </div>
      </section>
      <HowItWorks />
      <TopSellingBrand />
      <Faq faqs={tabletSellingFAQs} title="FAQs" />
      <Benefits />
    </>
  );
};

export default TabletSellingPage;
