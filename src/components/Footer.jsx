import React from "react";
import { FaFacebook, FaInstagram, FaYoutube, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-green-900 text-gray-300 py-4 md:py-10">
      <div className="container mx-auto px-4 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
        {/* About Section */}
        <div>
          <h2 className="text-lg md:text-xl font-bold text-white mb-2 md:mb-4">About Travel Agency</h2>
          <p className="text-xs md:text-sm">
            We provide top-notch travel and tourism services to help you explore amazing destinations
            worldwide. Let us plan your dream vacation with tailored packages and exceptional service.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-lg md:text-xl font-bold text-white mb-2 md:mb-4">Quick Links</h2>
          <ul className="text-xs md:text-sm space-y-1 md:space-y-2">
            <li><Link to="/" className="hover:text-white">Home</Link></li>
            <li><Link to="/about" className="hover:text-white">About Us</Link></li>
            <li><Link to="/book" className="hover:text-white">Book a Trip</Link></li>
            <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
            <li><Link to="/faq" className="hover:text-white">FAQ</Link></li>
          </ul>
        </div>

        {/* Contact Information */}
        <div>
          <h2 className="text-lg md:text-xl font-bold text-white mb-2 md:mb-4">Contact Us</h2>
          <ul className="text-xs md:text-sm space-y-1 md:space-y-2">
            <li>Email: <a href="mailto:support@tribelesstours.com" className="hover:text-white">support@travelagency.com</a></li>
            <li>Phone: <a href="tel:+254707632591" className="hover:text-white">+254 707 632 591</a></li>
            <li>Address: 2126 Neema Avenue, Nairobi City, WL 00100</li>
          </ul>
        </div>

        {/* Social Media Links */}
        <div>
          <h2 className="text-lg md:text-xl font-bold text-white mb-2 md:mb-4">Follow Us</h2>
          <div className="flex flex-wrap gap-3">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-500"
            >
              <FaFacebook size={20} />
            </a>
            <a
              href="https://x.com/_KClinton"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400"
            >
              <FaXTwitter size={20} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-500 hover:text-pink-500"
            >
              <FaInstagram size={20} />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-500 hover:text-red-500"
            >
              <FaYoutube size={20} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sky-500 hover:text-blue-700"
            >
              <FaLinkedin size={20} />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-6 md:mt-8 pt-2 md:pt-4 text-center">
        <p className="text-xs md:text-sm">
          &copy; {new Date().getFullYear()} Msafiri Tribe. All rights reserved. 
          {/* <Link to="/privacy-policy" className="hover:text-white mx-2">Privacy Policy</Link> | 
          <Link to="/terms" className="hover:text-white mx-2">Terms & Conditions</Link> */}
        </p>
      </div>
    </footer>
  );
}

export default Footer;
