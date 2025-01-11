"use client";

import React, { useState } from "react";
import Link from "next/link";

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

const Feature: React.FC = () => {
  const [showCart, setShowCart] = useState(false); // State to toggle cart display
  const [cart, setCart] = useState<Product[]>([]); // Cart state to store products
  const [checkoutMessage, setCheckoutMessage] = useState(""); // State for the checkout message

  const products = [
    {
      id: 1,
      name: "Mini Desk Lamp",
      price: 500,
      image: "./images/mini desk lamp.jpg",
    },
    {
      id: 2,
      name: "Hanging Lamp",
      price: 945,
      image: "./images/Hanging lamps.jpg",
    },
    {
      id: 3,
      name: "Cotton Novelty Pendant",
      price: 1149,
      image: "./images/cotton novelty.jpg",
    },
    {
      id: 4,
      name: "Light Drum Pendant",
      price: 5800,
      image: "./images/lamp 2.jpg",
    },
  ];

  const handleAddToCart = (product: Product) => {
    setShowCart(true);
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);
      if (existingProduct) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const handleRemoveFromCart = (id: number) => {
    setCart(cart.filter((item) => item.id !== id)); // Remove item from cart
  };

  const handleQuantityChange = (id: number, change: number) => {
    setCart(
      cart.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + change) }
          : item
      )
    );
  };

  const calculateSubtotal = () => {
    return cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  };

  const calculateTaxes = (subtotal: number) => {
    const taxRate = 0.15; // 15% tax
    return subtotal * taxRate;
  };

  const calculateTotal = (subtotal: number, taxes: number) => {
    return subtotal + taxes;
  };

  const handleProceedToCheckout = () => {
    setCheckoutMessage("Thank you for your order! Your checkout is successful.");
    setCart([]); // Clear the cart after checkout
  };

  const subtotal = calculateSubtotal();
  const taxes = calculateTaxes(subtotal);
  const total = calculateTotal(subtotal, taxes);

  return (
    <div>
      {/* Features block */}
      <div className="min-h-screen bg-white text-black-800 relative">
        <main className="container mx-auto px-6 py-12">
          <h1 className="text-3xl font-bold text-center mb-2">Featured Products</h1>
          <h2 className="text-base font-medium text-center text-black-800 tracking-wide">
            Explore Today's Featured Picks!
          </h2>
          <div className="grid mt-2 grid-cols-2 pt-4 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product) => (
              <div
                key={product.id}
                className="text-center border rounded-lg p-6 shadow-md group relative"
              >
                <div className="relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="mx-auto mb-4 w-48 h-48 object-contain"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition">
                    <button
                      onClick={() => handleAddToCart(product)}
                      className="text-white text-lg font-bold px-4 py-2 rounded-lg hover:font-bold"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
                <h2 className="text-xl font-semibold">{product.name}</h2>
                <p className="text-green-500 font-bold">৳ {product.price}</p>
              </div>
            ))}
          </div>

          {/* "See All Products" Button */}
          <div className="mt-8 text-center">
            <Link href="/products">
              <button className="bg-black text-white text-lg font-bold px-6 py-3 rounded-lg flex items-center justify-center mx-auto hover:bg-blue-600 transition">
                See All Products
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="w-5 h-5 ml-2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                  />
                </svg>
              </button>
            </Link>
          </div>
        </main>

        {/* Cart Drawer */}
        {showCart && (
          <div className="fixed top-0 right-0 w-80 max-h-[90vh] bg-white shadow-lg z-50 overflow-y-auto">
            <div className="p-4 border-b">
              <h2 className="text-lg font-bold">Your Cart</h2>
              <button
                onClick={() => setShowCart(false)}
                className="absolute top-2 right-2 text-black-600 hover:text-red-500">
                ✕
              </button>
            </div>
            <div className="p-4">
              {cart.map((item) => (
                <div key={item.id} className="mb-4">
                  <div className="flex items-center gap-4">
                    <img src={item.image} alt={item.name} className="w-16 h-16 object-cover" />
                    <div className="flex-1">
                      <h3 className="font-bold">{item.name}</h3>
                      <p>৳ {item.price}</p>
                    </div>
                    <button
                      onClick={() => handleRemoveFromCart(item.id)}
                      className="text-red-500"
                    >
                      Remove
                    </button>
                  </div>
                  <div className="flex items-center gap-2 mt-2">
                    <button
                      onClick={() => handleQuantityChange(item.id, -1)}
                      className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      onClick={() => handleQuantityChange(item.id, 1)}
                      className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                    >
                      +
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className="p-4 border-t">
              <div className="flex justify-between mb-2">
                <span>Subtotal:</span>
                <span>৳ {subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between mb-2">
                <span>Taxes:</span>
                <span>৳ {taxes.toFixed(2)}</span>
              </div>
              <div className="flex justify-between font-bold">
                <span>Total:</span>
                <span>৳ {total.toFixed(2)}</span>
              </div>
              <button
                onClick={handleProceedToCheckout}
                className="w-full bg-blue-500 text-white py-2 rounded mt-4 hover:bg-blue-600"
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
        )}

        {/* Centered Popup Message */}
        {checkoutMessage && (
          <div className="fixed top-0 left-0 right-0 bottom-0 bg-gray-900 bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <h2 className="text-lg font-bold">{checkoutMessage}</h2>
              <button
                onClick={() => {
                  setCheckoutMessage(""); // Clear the checkout message
                  setCart([]); // Clear the cart items
                  setShowCart(false); // Close the cart drawer as well
                }}
                className="mt-4 px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Feature;
