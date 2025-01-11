"use client";

import React, { useState } from "react";
import Upper from "../upper"; // Importing the upper component
import Footer from "../footer"; // Importing the footer component

const Product: React.FC = () => {
  const [checkoutMessage, setCheckoutMessage] = useState<string>("");

  const handleCheckout = () => {
    // Logic for checkout action
    setCheckoutMessage("Your order has been processed successfully!");
  };

  return (
    <>
      <Upper />
      <div className="min-h-screen bg-white">
        <div className="max-w-screen-lg mx-auto py-10 px-4">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0">
            {/* Product Image */}
            <div className="w-full md:w-1/2 flex justify-center">
              <img
                src="./images/nice1.png"
                alt="Table Lamp"
                className="w-full max-w-md md:max-w-lg object-contain"
              />
            </div>

            {/* Product Details */}
            <div className="w-full md:w-1/2 space-y-4 text-left">
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
                Stylish Accessories & New Table Lamp
              </h1>
              <p className="text-lg text-gray-700">
                Upgrade your space with this modern table lamp designed for style and functionality.
              </p>
              <p className="text-2xl font-bold text-gray-900">Rs.22000</p>
              <button
                onClick={handleCheckout}
                className="mt-4 px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-lg"
              >
                Proceed to Checkout
              </button>
              <p className="text-sm text-gray-500">
                Est. Delivery between 0 - 3 days
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Centered Popup Message */}
      {checkoutMessage && (
        <div className="fixed top-0 left-0 right-0 bottom-0 bg-gray-900 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h2 className="text-lg font-bold">{checkoutMessage}</h2>
            <button
              onClick={() => setCheckoutMessage("")} // Close the popup
              className="mt-4 px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
            >
              Close
            </button>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
};

export default Product;
