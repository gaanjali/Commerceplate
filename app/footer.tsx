"use client";
import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-200 text-black">
      <div className="container mx-auto px-4 py-4">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Left Section: Logo */}
          <div className="flex items-center space-x-2 mb-6 md:mb-0">
            <span className="text-3xl font-bold">🛍️</span>
            <span className="text-2xl font-bold">Commerceplate</span>
          </div>

          {/* Center Section: Links */}
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 text-center">
            <Link
              href="/aboutus"
              className="text-lg hover:text-gray-400 transition duration-300"
            >
              About Us
            </Link>
            <Link
              href="/products"
              className="text-lg hover:text-gray-400 transition duration-300"
            >
              Products
            </Link>
            <Link
              href="/contact"
              className="text-lg hover:text-gray-400 transition duration-300"
            >
              Contact
            </Link>
          </div>

          {/* Right Section: Privacy and Terms */}
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 text-center mt-6 md:mt-0">
            <Link
              href="/privacy"
              className="text-lg hover:text-gray-400 transition duration-300"
            >
              Privacy & Policy
            </Link>
            <Link
              href="/terms"
              className="text-lg hover:text-gray-400 transition duration-300"
            >
              Terms of Service
            </Link>
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 border-t border-gray-700"></div>

        {/* Social Media Section */}
        <div className="flex justify-center space-x-6">
          <Link
            href="error"
            className="text-back hover:text-gray-600 transition duration-300"
            aria-label="Facebook"
          >
            <i className="fab fa-facebook-f">F</i>
          </Link>
          <Link
            href="error"
            className="text-back hover:text-gray-600 transition duration-300"
            aria-label="Twitter"
          >
            <i className="fab fa-twitter">X</i>
          </Link>
          <Link
            href="error"
            className="text-back hover:text-gray-600 transition duration-300"
            aria-label="Instagram"
          >
            <i className="fab fa-instagram">I</i>
          </Link>
          <Link
            href="error"
            className="text-back hover:text-gray-600 transition duration-300"
            aria-label="LinkedIn"
          >
            <i className="fab fa-linkedin">IN</i>
          </Link>
        </div>

        {/* Bottom Section */}
       
      </div>
    </footer>
  );
};

export default Footer;
