"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation"; // Corrected useRouter import for App Router
import { FaSearch, FaShoppingCart, FaUser, FaBars, FaTimes } from "react-icons/fa";

const Header: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const router = useRouter();

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
    if (isCartOpen) setIsCartOpen(false);
  };

  const toggleCart = () => {
    setIsCartOpen((prev) => !prev);
    if (isSidebarOpen) setIsSidebarOpen(false);
  };

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const searchQuery = (e.currentTarget.search.value || "").trim();
    if (searchQuery) {
      router.push(`/products?search=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <>
      {/* Header */}
      <header className="sticky top-0 left-0 w-full z-50 bg-gray-200 shadow-md">
        <div className="flex items-center justify-between max-w-screen-xl mx-auto px-4 py-4">
          {/* Logo */}
          <div className="text-xl font-bold flex items-center space-x-4">
            <span className="mr-2">🛍️</span>
            Commerceplate

            {/* Sidebar Icon for Large Screens */}
            <button
              className="hidden lg:block text-2xl text-gray-800 focus:outline-none"
              onClick={toggleSidebar}
            >
              <FaBars />
            </button>
          </div>

          {/* Search Bar (Large Screen) */}
          <div className="hidden lg:flex flex-grow items-center mx-4">
            <form onSubmit={handleSearch} className="w-full">
              <input
                name="search"
                type="text"
                placeholder="Search for products"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-gray-400"
              />
            </form>
          </div>

          {/* Icons */}
          <div className="hidden lg:flex items-center space-x-4">
            <FaSearch
              className="text-lg cursor-pointer hover:text-gray-400"
              onClick={() => router.push("/products")}
            />
            <FaShoppingCart
              className="text-lg cursor-pointer hover:text-gray-400"
              onClick={toggleCart}
            />
            <Link href="/login">
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
              onClick={() => router.push("/products")}
            />
            <FaShoppingCart
              className="cursor-pointer hover:text-gray-400"
              onClick={toggleCart}
            />
            <Link href="/login">
              <FaUser className="cursor-pointer hover:text-gray-400" />
            </Link>
          </div>
        </div>

        {/* Search Bar (Small Screen) */}
        <div className="lg:hidden px-4 py-2">
          <form onSubmit={handleSearch} className="w-full">
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
          onClick={toggleCart}
        >
          <div
            className="fixed top-0 right-0 w-80 h-100 bg-white text-black shadow-lg z-50"
            style={{ borderTopLeftRadius: "1rem", borderBottomLeftRadius: "1rem" }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative flex justify-between items-center p-4 border-b border-gray-300">
              <h2 className="text-lg font-bold">Your Cart</h2>
              <button
                onClick={toggleCart}
                className="absolute top-4 right-4 text-2xl hover:text-gray-500 focus:outline-none"
              >
                <FaTimes />
              </button>
            </div>
            <div className="p-6 flex flex-col items-center text-center">
              <p className="text-6xl mt-10 mb-5">🛒</p>
              <p className="text-lg font-semibold">Oops. Your Bag Is Empty.</p>
              <Link href="/products">
                <button className="mt-8 px-8 py-2 bg-black text-white rounded-lg hover:bg-gray-700">
                  Add Products
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Sidebar */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 z-50 w-64 bg-gray-200 transform translate-x-0 transition-transform duration-300 ease-in-out"
        >
          <div className="flex justify-between px-4 py-4">
            <span className="text-xl font-bold">🛍️ Commerceplate</span>
            <button onClick={toggleSidebar} className="text-2xl">
              <FaTimes />
            </button>
          </div>
          <nav className="px-4 space-y-4">
            <Link href="/home" className="block">Home</Link>
            <Link href="/aboutus" className="block">About Us</Link>
            <Link href="/products" className="block">Products</Link>
            <Link href="/contact" className="block">Contact</Link>
          </nav>
        </div>
      )}
    </>
  );
};

export default Header;
