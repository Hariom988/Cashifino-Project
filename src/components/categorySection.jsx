import React from "react";
import { theme } from "../../config/theme";
import heroImage from "../../public/hero-image.jpg";
import Link from "next/link";
import Carousel from "./carousel";
const CategorySection = () => {
  const categories = [
    {
      id: 1,
      name: "Mobiles",
      to: "/mobile",
      icon: (
        <svg
          width="28"
          height="40"
          viewBox="0 0 28 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-7 sm:w-6 sm:h-8 md:w-7 md:h-9"
        >
          <g filter="url(#filter0_d_29_1449)">
            <path
              d="M21.2092 0.5H6.79078C5.52562 0.5 4.5 1.52562 4.5 2.79078V28.7221C4.5 29.9872 5.52562 31.0129 6.79078 31.0129H21.2092C22.4744 31.0129 23.5 29.9872 23.5 28.7221V2.79078C23.5 1.52562 22.4744 0.5 21.2092 0.5Z"
              stroke="#10B981"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M23.5 4.3573H4.5V26.2839H23.5V4.3573Z"
              stroke="#10B981"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12.1426 28.6504H15.8567"
              stroke="#10B981"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M16.9775 11.3519C15.8412 12.4317 14.3341 13.0345 12.7665 13.0363H9.06085C8.74552 13.0362 8.44304 13.1612 8.21967 13.3838C7.9963 13.6064 7.87025 13.9084 7.86914 14.2238V15.9671C7.87577 16.2802 8.0054 16.5782 8.23 16.7964C8.45459 17.0147 8.75609 17.1358 9.06927 17.1335H12.7749C14.3425 17.1353 15.8496 17.7381 16.9859 18.8179L17.765 19.5549V10.6191L16.9775 11.3519Z"
              fill="#10B981"
              stroke="#10B981"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12.5303 13.0276V17.1459"
              stroke="#10B981"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M10.2771 21.1928C10.1551 21.1939 10.0341 21.1709 9.92099 21.1251C9.80789 21.0793 9.70495 21.0116 9.61809 20.926C9.53122 20.8403 9.46214 20.7383 9.41481 20.6258C9.36748 20.5133 9.34283 20.3926 9.34229 20.2706V17.1334H11.4478L11.2078 20.3254C11.1927 20.5614 11.0879 20.7828 10.9149 20.9441C10.7419 21.1054 10.5137 21.1944 10.2771 21.1928Z"
              stroke="#10B981"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M20.1226 10.6359C20.1226 9.98003 19.5909 9.44836 18.9351 9.44836C18.2792 9.44836 17.7476 9.98003 17.7476 10.6359V19.5337C17.7476 20.1895 18.2792 20.7212 18.9351 20.7212C19.5909 20.7212 20.1226 20.1895 20.1226 19.5337V10.6359Z"
              stroke="#10B981"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <defs>
            <filter
              id="filter0_d_29_1449"
              x="0"
              y="0"
              width="28"
              height="39.5128"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_29_1449"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_29_1449"
                result="shape"
              />
            </filter>
          </defs>
        </svg>
      ),
      count: "1",
    },
    {
      id: 2,
      name: "Tablets",
      to: "/tablet",
      icon: (
        <svg
          width="35"
          height="29"
          viewBox="0 0 35 29"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-5 sm:w-7 sm:h-6 md:w-8 md:h-7"
        >
          <path
            d="M20.4135 20.0315V25.5048C20.4135 26.2992 20.0979 27.061 19.5362 27.6227C18.9745 28.1844 18.2127 28.5 17.4183 28.5H3.49518C2.70081 28.5 1.93897 28.1844 1.37727 27.6227C0.815562 27.061 0.5 26.2992 0.5 25.5048V3.49518C0.5 2.70081 0.815562 1.93897 1.37727 1.37727C1.93897 0.815562 2.70081 0.5 3.49518 0.5H17.4183C18.2127 0.5 18.9745 0.815562 19.5362 1.37727C20.0979 1.93897 20.4135 2.70081 20.4135 3.49518V8.18591"
            stroke="#10B981"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M20.4135 20.0316V23.0361H0.5V4.54333H20.4135V8.20462"
            stroke="#10B981"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9.38281 25.8542H11.5302"
            stroke="#10B981"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12.4761 16.6684H18.0658V19.0999L24.3543 14.4977L18.0658 9.90015V12.327H12.4761"
            stroke="#10B981"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M19.0158 10.5942V9.01507C19.0133 8.90669 19.0326 8.7989 19.0725 8.69809C19.1124 8.59729 19.1722 8.50551 19.2482 8.4282C19.3242 8.35089 19.4149 8.28961 19.515 8.248C19.6152 8.20638 19.7226 8.18528 19.831 8.18593H23.3665C23.5386 8.18566 23.7062 8.24013 23.8452 8.34146C23.9842 8.44279 24.0874 8.58571 24.1398 8.74956L24.4239 9.63461C24.4761 9.79894 24.5791 9.94248 24.7181 10.0446C24.857 10.1467 25.0247 10.2021 25.1972 10.2029H33.0182C33.125 10.2023 33.2309 10.2228 33.3298 10.2633C33.4286 10.3037 33.5185 10.3633 33.5943 10.4386C33.6701 10.514 33.7302 10.6035 33.7712 10.7022C33.8122 10.8008 33.8333 10.9066 33.8333 11.0134V19.2164C33.8333 19.4326 33.7475 19.6399 33.5946 19.7928C33.4417 19.9457 33.2344 20.0315 33.0182 20.0315H19.831C19.6148 20.0315 19.4075 19.9457 19.2546 19.7928C19.1017 19.6399 19.0158 19.4326 19.0158 19.2164V18.4059"
            stroke="#10B981"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M22.7988 13.3611H30.8993"
            stroke="#10B981"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M13.6407 14.4977H8.88477"
            stroke="#10B981"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      count: "2",
    },
    {
      id: 3,
      name: "All Products",
      to: "/all-product",
      icon: (
        <svg
          className="w-5 h-5 sm:w-6 sm:h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
          />
        </svg>
      ),
      count: "3",
    },
  ];

  return (
    <div
      id="container"
      className="bg-gray-100  py-3 sm:py-4 md:py-6 px-2 sm:px-3 md:px-4 lg:px-6"
    >
      <div className="max-w-7xl items-stretch mx-auto flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6">
        {/* category-section */}
        <section
          id="category-section"
          className="bg-white rounded-lg shadow-md w-full sm:w-80 xl:w-96 p-3 sm:p-4 md:p-5 lg:p-6 h-full shrink-0"
        >
          {/* Header */}
          <h2
            className="text-base sm:text-lg md:text-xl font-bold mb-3 sm:mb-4 md:mb-6"
            style={{ color: theme.text.primary }}
          >
            Category
          </h2>

          <div className="h-px mb-4 sm:mb-5 md:mb-7 -mt-2 md:-mt-3 w-full bg-slate-200 relative">
            <span className="absolute left-0 top-0 h-px w-16 sm:w-20 md:w-24 bg-emerald-400"></span>
          </div>

          {/* Category List */}
          <div className="space-y-2 sm:space-y-2.5 md:space-y-3">
            {categories.map((category) => (
              <Link href={category.to} key={category.id}>
                <button
                  key={category.id}
                  className="w-full hover:cursor-pointer flex items-center justify-between p-2 sm:p-2.5 md:p-3 rounded-lg hover:shadow-md transition-all duration-300 group"
                  style={{
                    backgroundColor: theme.background,
                    border: `1px solid ${theme.primaryLight}`,
                  }}
                >
                  {/* Left side - Icon and Name */}
                  <div className="flex items-center gap-1.5 sm:gap-2 md:gap-3 min-w-0">
                    <div
                      className="p-1 sm:p-1.5 md:p-2 rounded-lg transition-colors duration-300 shrink-0"
                      style={{
                        color: theme.primary,
                      }}
                    >
                      {category.icon}
                    </div>
                    <span
                      className="font-medium text-xs sm:text-sm md:text-base group-hover:translate-x-1 transition-transform duration-300 truncate"
                      style={{ color: theme.text.primary }}
                    >
                      {category.name}
                    </span>
                  </div>

                  {/* Right side - Count Badge */}
                  <span
                    className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 flex items-center justify-center rounded-full text-[10px] sm:text-xs md:text-sm font-semibold text-white shrink-0 ml-1"
                    style={{ backgroundColor: theme.primary }}
                  >
                    {category.count}
                  </span>
                </button>
              </Link>
            ))}
          </div>
        </section>

        {/* hero-section */}
        <Carousel />
      </div>
    </div>
  );
};

export default CategorySection;
