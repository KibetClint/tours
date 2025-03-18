import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { FaBars, FaTimes, FaFacebook, FaTwitter, FaInstagram, FaEnvelope } from "react-icons/fa";
import { throttle } from "lodash";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = throttle(() => {
      setScrolled(window.scrollY > 50);
    }, 200);

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Define your nav links
  const navLinks = ["Home", "About", "Destinations", "Packages", "Book", "Contact", "FAQs"];
  // For mobile nav, we'll use the same array but handle the route for Home similarly.

  // Helper function to get the correct route for each item
  const getRoute = (item) => {
    // If it's Home, return '/'
    if (item === "Home") return "/";
    // Otherwise, use lowercase
    return `/${item.toLowerCase()}`;
  };

  return (
    <>
      {/* Top Section - Merges with Header on Scroll */}
      <div
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled ? "hidden" : "bg-green-700"
        }`}
      >
        <div className="container mx-auto flex justify-between items-center px-6 py-3 text-sm text-gray-700">
          <div className="flex space-x-4">
            <a href="#" className="hover:text-blue-500">
              <FaFacebook />
            </a>
            <a href="#" className="hover:text-blue-400">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-pink-500">
              <FaInstagram />
            </a>
          </div>
          <div className="flex items-center space-x-2">
            <FaEnvelope />
            <span>contact@msafari-tribe.com</span>
          </div>
        </div>
      </div>

      {/* Fixed Header - Moves Up on Scroll */}
      <header
        className={`fixed left-0 w-full z-50 transition-all duration-300 ${
          scrolled ? "top-0 bg-green-900 shadow-md" : "top-[40px] bg-green-900"
        }`}
      >
        <div className="container mx-auto flex items-center justify-between px-4 py-2">
          {/* Logo links to Home */}
          <Link to="/" className="flex items-center">
            <img src={logo} alt="Logo" className="h-14 mr-3 rounded-full" />
            <span className="text-xl font-bold text-white">Msafari-Tribe</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            {navLinks.map((item) => (
              <Link
                key={item}
                to={getRoute(item)}
                className="text-white hover:text-blue-300 transition duration-300 text-sm"
              >
                {item}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-xl text-white focus:outline-none"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`fixed top-0 right-0 w-40 bg-green-900 text-white transform transition-transform duration-300 z-50 ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <button
            onClick={() => setMenuOpen(false)}
            className="text-white text-xl absolute top-6 left-6 focus:outline-none"
          >
            <FaTimes />
          </button>
          <nav className="mt-16 px-4 space-y-3 pb-6 text-sm">
            {navLinks.map((item) => (
              <Link
                key={item}
                to={getRoute(item)}
                className="block hover:text-blue-300 transition duration-300"
                onClick={() => setMenuOpen(false)}
              >
                {item}
              </Link>
            ))}
          </nav>
        </div>
      </header>

      {/* Removes Extra Space When Scrolled */}
      <div className={scrolled ? "h-[72px]" : "h-[112px]"}></div>
    </>
  );
}

export default Header;
