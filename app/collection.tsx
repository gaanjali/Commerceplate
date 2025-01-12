"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";

interface CollectionItem {
  id: number;
  name: string;
  imageUrl: string;
  itemCount: number;
}

const Collection: React.FC = () => {
  const collections: CollectionItem[] = [
    {
      id: 1,
      name: "Featured Products",
      imageUrl: "/images/table11.jpg",
      itemCount: 4,
    },
    {
      id: 2,
      name: "Floor Lamps",
      imageUrl: "/images/fllor lamps.png",
      itemCount: 4,
    },
    {
      id: 3,
      name: "Hanging Lamps",
      imageUrl: "/images/lamp 2.jpg",
      itemCount: 5,
    },
    {
      id: 4,
      name: "Modern Lamps",
      imageUrl: "/images/lamp 1.jpg",
      itemCount: 5,
    },
    {
      id: 5,
      name: "Classic Lamps",
      imageUrl: "/images/radiant.jpg",
      itemCount: 6,
    },
  ];

  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const collectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check window size when component mounts
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };

    handleResize(); // Set initial state
    window.addEventListener("resize", handleResize); // Update on resize

    // Cleanup the event listener on unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="max-w-screen-xl mx-auto px-4 py-12 relative">
      <h1 className="text-3xl font-bold text-center mb-8">Collections</h1>

      {/* For Small Screens: Display 2 images in a horizontal row */}
      {isSmallScreen ? (
        <div
          className="block md:hidden flex space-x-6 overflow-x-auto scrollbar-hide"
          ref={collectionRef}
        >
          {collections.slice(0, 3).map((collection) => (
            <div
              key={collection.id}
              className="min-w-[240px] bg-white border rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 flex-shrink-0"
            >
              <Image
                src={collection.imageUrl}
                alt={collection.name}
                width={200}
                height={200}
                className="mx-auto mb-4 w-48 h-48 object-contain"
              />
              <div className="p-4 text-center bg-gray-100">
                <h2 className="text-lg font-bold">{collection.name}</h2>
                <p className="text-gray-600">{collection.itemCount} items</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        // For Large Screens: Display 4 images in a horizontal row
        <div
          className="hidden md:flex space-x-6 overflow-x-auto scrollbar-hide"
          ref={collectionRef}
        >
          {collections.slice(0, 4).map((collection) => (
            <div
              key={collection.id}
              className="min-w-[280px] bg-white border rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 flex-shrink-0"
            >
              <Image
                src={collection.imageUrl}
                alt={collection.name}
                width={200}
                height={200}
                className="mx-auto mb-4 w-48 h-48 object-contain"
              />
              <div className="p-4 text-center bg-gray-100">
                <h2 className="text-lg font-bold">{collection.name}</h2>
                <p className="text-gray-600">{collection.itemCount} items</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Collection;
