import React from "react";
import Link from "next/link";

import {
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaPinterestP,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-background shadow-2xs border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 md:py-6">
        {/* Main Footer Content */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-4">
          {/* Company Info Section */}
          <div>
            <h3 className="text-sm font-bold mb-2">CASHIFINO</h3>
            <p className="text-[10px] text-gray-500 mb-1">HOTLINE 24/7</p>
            <a
              href="tel:+919876543210"
              className="text-base font-bold text-primary hover:text-primaryHover transition-colors block"
            >
              +919876543210
            </a>
            <a
              href="mailto:contact@cashifino.com"
              className="text-[10px] text-gray-500 hover:text-gray-700 transition-colors block mt-1"
            >
              contact@cashifino.com
            </a>

            {/* Social Media Icons */}
            <div className="flex gap-1.5 mt-3">
              <a
                href="#"
                className="w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center hover:bg-primary hover:text-green-500 transition-colors"
              >
                <FaTwitter size={10} />
              </a>
              <a
                href="#"
                className="w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center hover:bg-primary hover:text-green-500 transition-colors"
              >
                <FaFacebookF size={10} />
              </a>
              <a
                href="#"
                className="w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center hover:bg-primary hover:text-green-500 transition-colors"
              >
                <FaInstagram size={10} />
              </a>
              <a
                href="#"
                className="w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center hover:bg-primary hover:text-green-500 transition-colors"
              >
                <FaYoutube size={10} />
              </a>
              <a
                href="#"
                className="w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center hover:bg-primary hover:text-green-500 transition-colors"
              >
                <FaPinterestP size={10} />
              </a>
            </div>
          </div>

          {/* Top Categories */}
          <div>
            <h4 className="text-[10px] font-bold mb-2 uppercase">
              Top Categories
            </h4>
            <ul className="space-y-1 text-[10px] text-gray-600">
              <li>
                <Link
                  href="mobile-sell"
                  className="hover:text-primary transition-colors"
                >
                  Mobiles
                </Link>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Tablets
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-[10px] font-bold mb-2 uppercase">Company</h4>
            <ul className="space-y-1 text-[10px] text-gray-600">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  About Cashifino
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Career
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Help Center */}
          <div>
            <h4 className="text-[10px] font-bold mb-2 uppercase">
              Help Center
            </h4>
            <ul className="space-y-1 text-[10px] text-gray-600">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Track Order
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  FAQs
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Get Your Device Valued Section */}
        <div className="border-t border-gray-200 pt-4 mb-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
            <div>
              <h3 className="text-sm font-bold">
                GET YOUR DEVICE VALUED{" "}
                <span className="text-primary">INSTANTLY</span>
              </h3>
              <p className="text-[10px] text-gray-600">
                Select your device and get an instant price quote
              </p>
            </div>
            <button className="bg-primary hover:bg-primaryHover text-white font-semibold px-5 py-2 rounded-lg transition-colors whitespace-nowrap text-xs">
              GET QUOTE NOW
            </button>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-200 pt-3 flex flex-col sm:flex-row justify-between items-center gap-2 text-[10px] text-gray-600">
          <div className="flex items-center gap-2">
            <select className="border border-gray-300 rounded px-2 py-0.5 text-[10px] bg-white">
              <option>INR</option>
              <option>USD</option>
              <option>EUR</option>
            </select>
            <select className="border border-gray-300 rounded px-2 py-0.5 text-[10px] bg-white">
              <option>🇺🇸 Eng</option>
              <option>🇮🇳 हिन्दी</option>
            </select>
          </div>

          <p className="text-[10px] text-center sm:text-right">
            © {new Date().getFullYear()} Cashifino. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
