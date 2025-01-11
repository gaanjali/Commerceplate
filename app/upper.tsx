"use client";
import React, { useState } from "react";
import Link from "next/link";
import {
  FaSearch,
  FaShoppingCart,
  FaUser,
  FaBars,
  FaTimes,
} from "react-icons/fa";

const Header: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const closeCart = () => {
    setIsCartOpen(false);
  };

  const handleOutsideClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if ((e.target as HTMLElement).closest(".cart-drawer") === null) {
      closeCart();
    }
  };

  return (
    <>
      {/* Header */}
      <header className="sticky top-0 left-0 w-full z-50 bg-gray-200 shadow-md">
        <div className="flex items-center justify-between max-w-screen-xl mx-auto px-4 py-4">
          {/* Logo */}
          <div className="text-xl font-bold flex items-center">
            <span className="mr-2">🛍️</span>
            Commerceplate
            <button
              className="hidden lg:block text-2xl text-gray-800 ml-4 focus:outline-none"
              onClick={toggleSidebar}
            >
              <FaBars />
            </button>
          </div>

          {/* Search Bar (Large Screen) */}
          <div className="hidden lg:flex flex-grow items-center mx-4">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                window.location.href = "/products";
              }}
              className="w-full"
            >
              <input
                type="text"
                placeholder="Search for products"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-gray-400"
              />
            </form>
          </div>

          {/* Icons */}
          <div className="hidden lg:flex items-center space-x-4">
            <FaSearch
              className="text-lg cursor-pointer"
              onClick={() => (window.location.href = "/products")}
            />
            <FaShoppingCart
              className="text-lg cursor-pointer hover:text-gray-400"
              onClick={toggleCart}
            />
            <Link href="/login" onClick={closeCart}>
              <FaUser className="text-lg cursor-pointer hover:text-gray-400" />
            </Link>
          </div>

          {/* Hamburger Menu and Icons (Small Screen) */}
          <div className="block lg:hidden flex items-center space-x-4 text-2xl text-gray-800">
            <button className="focus:outline-none" onClick={toggleSidebar}>
              <FaBars />
            </button>
            <FaSearch
              className="cursor-pointer hover:text-gray-400"
              onClick={() => (window.location.href = "/products")}
            />
            <FaShoppingCart
              className="cursor-pointer hover:text-gray-400"
              onClick={toggleCart}
            />
            <Link href="/login" onClick={closeCart}>
              <FaUser className="cursor-pointer hover:text-gray-400" />
            </Link>
          </div>
        </div>

        {/* Search Bar (Small Screen) */}
        <div className="lg:hidden px-4 py-2">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              const searchQuery = (e.target as HTMLFormElement).search.value;
              window.location.href = `/products?search=${encodeURIComponent(searchQuery)}`;
            }}
            className="w-full"
          >
            <input
              name="search"
              type="text"
              placeholder="Search for products"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-gray-400"
            />
          </form>
        </div>
      </header>

      {/* Backdrop for Cart Drawer */}
      {isCartOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-25 z-40"
          onClick={handleOutsideClick}
        >
          <div
            className="fixed top-0 right-0 w-80 h-90 bg-white text-black shadow-lg z-50 cart-drawer"
            style={{
              borderTopLeftRadius: "1rem",
              borderBottomLeftRadius: "1rem",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Cart Header */}
            <div className="relative flex justify-between items-center p-4 border-b border-gray-300">
              <h2 className="text-lg font-bold">Your Cart</h2>
              <button
                onClick={toggleCart}
                className="absolute top-4 right-4 text-2xl hover:text-gray-500 focus:outline-none"
              >
                <FaTimes />
              </button>
            </div>

            {/* Cart Content */}
            <div className="p-6 flex flex-col items-center text-center">
              <div className="mt-2 text-black">
                <p className="text-6xl text-black mt-10 mb-5">🛒</p>
                <p className="text-lg font-semibold">
                  Oops. Your Bag Is Empty.
                </p>
              </div>
              <Link href="/products">
                <button className="mt-8 px-8 py-2 bg-black text-white rounded-lg hover:bg-gray-700">
                  Don't Miss Out: Add Product
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Sidebar */}
      <div
        className={`fixed inset-0 z-50 w-64 bg-gray-200 transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        {/* Close Button */}
        <div className="flex items-center justify-between px-4 py-4">
          <div className="text-xl font-bold flex items-center">
            <span className="mr-2">🛍️</span>
            Commerceplate
          </div>
          <button
            className="text-gray-800 text-2xl focus:outline-none"
            onClick={toggleSidebar}
          >
            <FaTimes />
          </button>
        </div>

        {/* Sidebar Links */}
        <nav className="mt-4 px-4 space-y-4">
          <Link
            href="/home"
            onClick={closeCart}
            className="text-xl font-bold block hover:text-gray-400"
          >
            Home
          </Link>
          <Link
            href="/aboutus"
            onClick={closeCart}
            className="text-xl font-bold block hover:text-gray-400"
          >
            About Us
          </Link>
          <Link
            href="/products"
            onClick={closeCart}
            className="text-xl font-bold block hover:text-gray-400"
          >
            Products
          </Link>
          <Link
            href="/contact"
            onClick={closeCart}
            className="text-xl font-bold block hover:text-gray-400"
          >
            Contact
          </Link>
        </nav>
      </div>

      {/* Backdrop */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={toggleSidebar}
        ></div>
      )}
    </>
  );
};

export default Header;
