"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image'; // Importing next/image

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <main className="max-w-screen-xl mx-auto bg-gray-50 shadow-lg rounded-lg overflow-hidden mt-6 md:mt-16 px-8 md:px-16 py-10 md:py-16 space-y-8">
        <section className="flex flex-col-reverse md:flex-row items-center justify-between text-center md:text-left space-y-6 md:space-y-0">
          <div className="flex flex-col items-center md:items-start space-y-6">
            <h2 className="text-base font-medium text-gray-800 tracking-wide">
              Work light, LED, white
            </h2>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
              Stylish Accessories & <br /> New Table Lamp
            </h1>
            <Link href="/product">
              <p className="mt-4 px-6 py-3 bg-black text-white font-medium rounded-lg hover:bg-gray-800 transition">
                Shop Now
              </p>
            </Link>
          </div>
          <div className="w-full max-w-md md:max-w-lg flex justify-center">
            {/* Replacing <img> with <Image> */}
            <Image
              src="/images/nice1.png" // Correct path for the image
              alt="Table Lamp"
              width={500} // Set the width of the image
              height={500} // Set the height of the image
              className="w-full md:w-[500px] h-auto object-contain rounded-lg"
            />
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
