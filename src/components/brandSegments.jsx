"use client";
import React from "react";
import { theme } from "../../config/theme";
import Vivo from "../../public/assets/brandNames/vivo.svg";
import Lava from "../../public/assets/brandNames/lava.svg";
import Oppo from "../../public/assets/brandNames/oppo.svg";
import Samsung from "../../public/assets/brandNames/samsung.svg";
import Realme from "../../public/assets/brandNames/realme.svg";
import Motorola from "../../public/assets/brandNames/motorola.svg";
import Xiaomi from "../../public/assets/brandNames/xiaomi.svg";
import Poco from "../../public/assets/brandNames/poco.svg";
import Iq00 from "../../public/assets/brandNames/iqoo.svg";
import Iphone from "../../public/assets/brandNames/iphone.svg";
import Oneplus from "../../public/assets/brandNames/oneplus.svg";
import Tablet from "../../public/tablet.png";
import Mobile from "../../public/mobile.png";

const BrandsCategoriesSection = () => {
  const brands = [
    { id: 1, name: "Vivo", logo: Vivo },
    { id: 2, name: "Lava", logo: Lava },
    { id: 3, name: "Oppo", logo: Oppo },
    { id: 4, name: "Samsung", logo: Samsung },
    { id: 5, name: "Realme", logo: Realme },
    { id: 6, name: "Motorola", logo: Motorola },
    { id: 7, name: "Xiaomi", logo: Xiaomi },
    { id: 8, name: "Poco", logo: Poco },
    { id: 9, name: "iQOO", logo: Iq00 },
    { id: 10, name: "iPhone", logo: Iphone },
  ];
  const categories = [
    { id: 1, name: "Mobiles", image: Mobile },
    { id: 2, name: "Tablets", image: Tablet },
  ];
  return (
    <div className="w-full bg-gray-50 py-3 sm:py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-4">
          {/* FEATURED BRANDS */}
          <section className="bg-white rounded-lg shadow-sm p-3 sm:p-4">
            <div className="flex items-center justify-between mb-2 sm:mb-3">
              <h2
                className="text-sm sm:text-base font-bold"
                style={{ color: theme.text.primary }}
              >
                FEATURED BRANDS
              </h2>
              <button
                className="text-xs sm:text-sm font-medium"
                style={{ color: theme.text.secondary }}
              >
                View All
              </button>
            </div>

            {/* Brand Grid - 5 columns x 2 rows */}
            <div className="grid grid-cols-5 gap-2 sm:gap-3">
              {brands.map((brand) => (
                <button
                  key={brand.id}
                  className="aspect-square min-h-10 rounded p-2 flex items-center justify-center"
                >
                  <img
                    src={brand.logo.src}
                    alt={brand.name}
                    className="w-full h-full object-contain"
                  />
                </button>
              ))}
            </div>
          </section>

          {/* TOP CATEGORIES */}
          <section className="flex flex-col bg-white shadow-sm rounded-lg">
            {/* upper text */}
            <div className="flex flex-row justify-between p-4">
              <div>TOP CATEGORIES</div>
              <div>View all</div>
            </div>
            {/* image section */}
            <div className="flex p-5 justify-between items-center flex-row w-[90%] h-3/4 self-center">
              {/* image 1 */}
              <div className="flex p-2 flex-col max-w-[40%] justify-center items-center bg-gray-100 rounded-lg min-h-1/2">
                <img
                  src={Mobile.src}
                  className="max-w-full rounded-lg"
                  alt="mobile"
                />
                <p className="text-center">Mobile</p>
              </div>
              {/* image 2 */}{" "}
              <div className="flex p-2 flex-col max-w-[40%] justify-center items-center bg-gray-100 rounded-lg min-h-1/2">
                <img
                  src={Tablet.src}
                  className="rounded-lg max-w-full"
                  alt="Tablet"
                />
                <p className="text-center ">Tablet</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default BrandsCategoriesSection;
