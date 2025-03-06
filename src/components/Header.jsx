import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { FaBars, FaTimes } from "react-icons/fa";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Fixed Header */}
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 
          ${scrolled ? "bg-green-900 shadow-md" : "bg-green-900"} 
        `}
      >
        <div className="container mx-auto flex items-center justify-between px-6 py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src={logo} alt="Logo" className="h-14 mr-3 rounded-full" />
            <span className="text-xl font-bold text-white">
              Msafari-Tribe
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            <Link
              to="/"
              className="text-white hover:text-blue-300 transition duration-300 text-sm"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-white hover:text-blue-300 transition duration-300 text-sm"
            >
              About
            </Link>
            <Link
              to="/destinations"
              className="text-white hover:text-blue-300 transition duration-300 text-sm"
            >
              Destinations
            </Link>
            <Link
              to="/packages"
              className="text-white hover:text-blue-300 transition duration-300 text-sm"
            >
              Packages
            </Link>
            <Link
              to="/book"
              className="text-white hover:text-blue-300 transition duration-300 text-sm"
            >
              Book
            </Link>
            <Link
              to="/contact"
              className="text-white hover:text-blue-300 transition duration-300 text-sm"
            >
              Contact
            </Link>
            <Link
              to="/faq"
              className="text-white hover:text-blue-300 transition duration-300 text-sm"
            >
              FAQs
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-xl text-white focus:outline-none"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`fixed top-0 right-0 w-40 bg-green-900 text-white transform transition-transform duration-300 z-50 
            ${menuOpen ? "translate-x-0" : "translate-x-full"}
          `}
        >
          <button
            onClick={toggleMenu}
            className="text-white text-xl absolute top-6 left-6 focus:outline-none"
          >
            <FaTimes />
          </button>
          <nav className="mt-16 px-4 space-y-3 pb-6 text-sm">
            <Link
              to="/"
              className="block hover:text-blue-300 transition duration-300"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="block hover:text-blue-300 transition duration-300"
              onClick={toggleMenu}
            >
              About
            </Link>
            <Link
              to="/destinations"
              className="block hover:text-blue-300 transition duration-300"
              onClick={toggleMenu}
            >
              Destinations
            </Link>
            <Link
              to="/packages"
              className="block hover:text-blue-300 transition duration-300"
              onClick={toggleMenu}
            >
              Packages
            </Link>
            <Link
              to="/book"
              className="block hover:text-blue-300 transition duration-300"
              onClick={toggleMenu}
            >
              Book
            </Link>
            <Link
              to="/contact"
              className="block hover:text-blue-300 transition duration-300"
              onClick={toggleMenu}
            >
              Contact
            </Link>
            <Link
              to="/faq"
              className="block hover:text-blue-300 transition duration-300"
              onClick={toggleMenu}
            >
              FAQ
            </Link>
          </nav>
        </div>
      </header>

      {/* 
        Placeholder to preserve layout. 
        Matches the header's total height (approx. 88px).
      */}
      <div className="h-[88px]"></div>
    </>
  );
}

export default Header;
