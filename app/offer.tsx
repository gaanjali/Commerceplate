"use client";
import React from "react";
import Link from "next/link";

const Home: React.FC = () => {
  return (
    <div className="min-h-screen mb-12 bg-white">
      {/* Main Content */}
      <main className="w-full mx-auto bg-white shadow-lg rounded-lg overflow-hidden px-6">
        {/* Hero Section */}
        <section className="flex flex-col-reverse md:flex-row items-center justify-between text-center md:text-left py-14 mb-4 md:px-24 bg-gray-100 space-y-8 md:space-y-0">
          {/* Text Content */}
          <div className="flex flex-col items-center text-center space-y-6">
            {/* Subtitle */}
            <h2 className="text-base font-bold text-black tracking-wide">
              Deal of the Week
            </h2>

            {/* Main Title */}
            <h1 className="text-3xl font-bold text-black">
              Curved Collection for Your <br /> Bedroom Get 25% Off
            </h1>

            {/* Next Line */}
            <h2 className="text-base font-medium text-gray-800 tracking-wide">
              Subscribe to our Newsletter and get all the latest information and offers
            </h2>

            {/* Call-to-Action Button */}
            <Link href="/products">
              <p className="mt-4 px-6 py-2 bg-black text-white font-medium rounded-lg hover:bg-gray-800">
                Shop Now
              </p>
            </Link>
          </div>

          {/* Image */}
          <div className="w-full max-w-md md:max-w-lg flex justify-center">
            <img
              src="./images/best-removebg-preview.png"
              alt="Table Lamp"
              className="w-full md:w-[450px] h-auto object-contain"
            />
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
