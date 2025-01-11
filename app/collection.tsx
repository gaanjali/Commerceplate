"use client";

import React, { useState } from "react";

const Collection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const items = [
    {
      id: 1,
      image: "./images/hang1.jpg",
      title: "Hanging Lamps",
      description: "5 items",
    },
    {
      id: 2,
      image: "./images/fllor lamps.png",
      title: "Floor Lamps",
      description: "4 items",
    },
    {
      id: 3,
      image: "./images/lamp 1.jpg",
      title: "Modern Lamps",
      description: "4 items",
    },
    {
      id: 4,
      image: "./images/mini desk lamp.jpg",
      title: "Table Lamps",
      description: "4 items",
    },
   
  ];

  const itemsPerPage = window.innerWidth >= 1024 ? 3 : 2;

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? items.length - itemsPerPage : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === items.length - itemsPerPage ? 0 : prevIndex + 1
    );
  };

  const visibleItems = items.slice(currentIndex, currentIndex + itemsPerPage);

  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-6">Collections</h2>
        <div className="relative">
          {/* Carousel */}
          <div className="flex justify-center items-center">
            {/* Previous Button */}
            <button
              onClick={handlePrev}
              className="absolute left-0 z-10 bg-black text-white p-3 rounded-full shadow-md hover:bg-gray-700"
            >
              &#8592;
            </button>

            {/* Visible Items */}
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-8 w-full">
              {visibleItems.map((item) => (
                <div
                  key={item.id}
                  className="group bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <div className="relative">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-[200px] lg:h-[300px] object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4 text-center">
                    <h3 className="text-xl font-semibold">{item.title}</h3>
                    <p className="text-gray-500">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Next Button */}
            <button
              onClick={handleNext}
              className="absolute right-0 z-10 bg-black text-white p-3 rounded-full shadow-md hover:bg-gray-700"
            >
              &#8594;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collection;
