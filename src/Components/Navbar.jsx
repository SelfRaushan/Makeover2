import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../assets/image/logo-bg.png";

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMenu = () => setMobileMenuOpen(!isMobileMenuOpen);

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/services", label: "Services" },
    { path: "/portfolio", label: "Portfolio" },
    { path: "/booking", label: "Booking" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <nav className="bg-transparent shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-3">
          <img src={Logo} alt="Makeover Logo" className="h-10 " />
        </Link>

        {/* Desktop menu */}
        <ul className="hidden md:flex space-x-8 items-center no-underline">
          {navItems.map(({ path, label }) => (
            <li key={path}>
              <NavLink
                to={path}
                className={({ isActive }) =>
                  `text-pink-700 font-semibold hover:text-pink-900 transition no-underline${
                    isActive ? "border-b-2 border-pink-700" : ""
                  }`
                }
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Mobile menu button */}
        <button
          onClick={toggleMenu}
          aria-label="Toggle Mobile Menu"
          className="md:hidden focus:outline-none"
        >
          {isMobileMenuOpen ? (
            <svg
              className="w-6 h-6 text-pink-700"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="w-6 h-6 text-pink-700"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <ul className="md:hidden bg-white shadow-lg py-4 space-y-3 px-6">
          {navItems.map(({ path, label }) => (
            <li key={path}>
              <NavLink
                to={path}
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `block text-pink-700 font-semibold hover:text-pink-900 transition ${
                    isActive ? "border-l-4 border-pink-700 pl-2" : ""
                  }`
                }
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
