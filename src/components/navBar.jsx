"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const Navbar = () => {
  const router = useRouter();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [cartItemCount, setCartItemCount] = useState(1);
  const [cartPrice, setCartPrice] = useState(1290.0);
  const [currentUser, setCurrentUser] = useState(null);
  // Check for logged in user
  useEffect(() => {
    const user = localStorage.getItem("currentUser");
    if (user) {
      setCurrentUser(JSON.parse(user));
    }

    // Listen for storage changes (when user logs in/out in another tab)
    const handleStorageChange = () => {
      const user = localStorage.getItem("currentUser");
      setCurrentUser(user ? JSON.parse(user) : null);
    };

    window.addEventListener("storage", handleStorageChange);

    // Custom event for same-tab updates
    window.addEventListener("userLogin", handleStorageChange);
    window.addEventListener("userLogout", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
      window.removeEventListener("userLogin", handleStorageChange);
      window.removeEventListener("userLogout", handleStorageChange);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    setCurrentUser(null);
    window.dispatchEvent(new Event("userLogout"));
    router.push("/");
  };

  const navLinks = [
    {
      name: "HOME",
      hasDropdown: false,
      path: "/",
    },
    {
      name: "PAGES",
      hasDropdown: true,
      dropdownItems: [
        { name: "About", path: "/about" },
        { name: "Services", path: "/services" },
        { name: "Team", path: "/team" },
        { name: "FAQ", path: "/faq" },
      ],
    },
    {
      name: "PRODUCTS",
      hasDropdown: true,
      dropdownItems: [
        { name: "All Products", path: "/all-product" },
        { name: "Mobile Sell", path: "/mobile-sell" },
        { name: "Tablet Sell", path: "/tablet-sell" },
      ],
    },
    {
      name: "CONTACT",
      hasDropdown: false,
      path: "/contact",
    },
  ];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo Section */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xl">✓</span>
            </div>
            <div className="hidden hover:cursor-pointer sm:block">
              <h1 className="text-xl font-bold text-gray-900">CASHIFINO</h1>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <div
                key={link.name}
                className="hover:cursor-pointer relative group"
                onMouseEnter={() =>
                  link.hasDropdown && setActiveDropdown(link.name)
                }
                onMouseLeave={() => setActiveDropdown(null)}
              >
                {link.hasDropdown ? (
                  <button className="text-gray-700 hover:cursor-pointer hover:text-green-500 font-medium text-sm flex items-center space-x-1 transition-colors duration-200">
                    <span>{link.name}</span>
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                ) : (
                  <Link
                    href={link.path}
                    className="text-gray-700 hover:text-green-500 font-medium text-sm transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                )}

                {/* Dropdown Menu */}
                {link.hasDropdown && activeDropdown === link.name && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200">
                    {link.dropdownItems.map((item) => (
                      <Link
                        key={item.name}
                        href={item.path}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-500 transition-colors duration-150"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right Section - Icons */}
          <div className="flex items-center space-x-4">
            {/* Wishlist Icon */}
            <button className="hidden hover:cursor-pointer sm:block p-2 text-gray-600 hover:text-green-500 transition-colors duration-200">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
            </button>

            {/* User Icon - Conditional Rendering */}
            {currentUser ? (
              // Logged In User
              <div className="hidden sm:flex items-center space-x-3 relative group">
                <div className="flex items-center space-x-2 cursor-pointer">
                  {currentUser.picture ? (
                    <img
                      src={currentUser.picture}
                      alt={currentUser.name}
                      className="w-8 h-8 rounded-full border-2 border-green-500"
                    />
                  ) : (
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                      <span className="text-white font-semibold text-sm">
                        {currentUser.name?.charAt(0).toUpperCase()}
                      </span>
                    </div>
                  )}
                  <div className="text-xs">
                    <p className="text-gray-400">WELCOME</p>
                    <p className="font-medium text-gray-700 max-w-30 truncate">
                      {currentUser.name}
                    </p>
                  </div>
                  <svg
                    className="w-4 h-4 text-gray-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>

                {/* Dropdown Menu */}
                <div className="absolute top-full right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <div className="px-4 py-2 border-b border-gray-100">
                    <p className="text-sm font-semibold text-gray-800">
                      {currentUser.name}
                    </p>
                    <p className="text-xs text-gray-500 truncate">
                      {currentUser.email}
                    </p>
                  </div>

                  <Link
                    href="/orders"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-500 transition-colors duration-150"
                  >
                    My Orders
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="w-full hover:cursor-pointer text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors duration-150"
                  >
                    Logout
                  </button>
                </div>
              </div>
            ) : (
              // Not Logged In
              <Link
                href="/login"
                className="hidden hover:cursor-pointer sm:flex items-center space-x-1 text-gray-600 hover:text-green-500 transition-colors duration-200"
              >
                <svg
                  className="w-5 h-5 mr-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
                <div className="text-xs">
                  <p className="text-gray-400">WELCOME</p>
                  <p className="font-medium text-gray-700">LOG IN / REGISTER</p>
                </div>
              </Link>
            )}

            {/* Cart */}
            <button className="hover:cursor-pointer flex items-center space-x-2 bg-gray-50 hover:bg-gray-100 px-4 py-2 rounded-lg transition-colors duration-200">
              <div className="relative">
                <svg
                  className="w-6 h-6 text-gray-700"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                {cartItemCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full font-medium">
                    {cartItemCount}
                  </span>
                )}
              </div>
              <div className="hidden lg:block text-left">
                <p className="text-xs text-gray-400">CART</p>
                <p className="text-sm font-bold text-gray-900">
                  ₹{cartPrice}.00
                </p>
              </div>
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-gray-600 hover:text-green-500 transition-colors duration-200"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden border-t border-gray-200 overflow-hidden transition-all duration-300 ${
            isMobileMenuOpen ? "max-h-96 py-4 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          {navLinks.map((link) => (
            <div key={link.name} className="py-2">
              {link.hasDropdown ? (
                <>
                  <button
                    onClick={() =>
                      setActiveDropdown(
                        activeDropdown === link.name ? null : link.name
                      )
                    }
                    className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-green-500 font-medium flex justify-between items-center transition-colors duration-150"
                  >
                    {link.name}
                    <svg
                      className={`w-4 h-4 transition-transform duration-200 ${
                        activeDropdown === link.name ? "rotate-180" : "rotate-0"
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  <div
                    className={`pl-8 space-y-2 overflow-hidden transition-all duration-300 ${
                      activeDropdown === link.name
                        ? "max-h-96 py-2 opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    {link.dropdownItems.map((item) => (
                      <Link
                        key={item.name}
                        href={item.path}
                        className="block px-4 py-2 text-sm text-gray-600 hover:text-green-500 transition-colors duration-150"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </>
              ) : (
                <Link
                  href={link.path}
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-green-500 font-medium transition-colors duration-150"
                >
                  {link.name}
                </Link>
              )}
            </div>
          ))}
          <div className="px-4 py-2 border-t border-gray-200 mt-2">
            {currentUser ? (
              <>
                <div className="py-2 text-gray-700">
                  <p className="text-sm font-semibold">{currentUser.name}</p>
                  <p className="text-xs text-gray-500">{currentUser.email}</p>
                </div>
                <button
                  onClick={handleLogout}
                  className="w-full hover:cursor-pointer text-left py-2 text-red-600 hover:text-red-700 transition-colors duration-150"
                >
                  Logout
                </button>
              </>
            ) : (
              <Link
                href="/login"
                className="block w-full text-left py-2 text-gray-700 hover:text-green-500 transition-colors duration-150"
              >
                LOG IN / REGISTER
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
