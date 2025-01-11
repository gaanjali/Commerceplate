"use client";
import { useState } from "react";
import Link from "next/link";
import Upper from "../upper";
import Footer from "../footer";

const products = [
  { id: 1, name: "Coolie Table Lamp", price: 5849, oldPrice: 6000, image: "/images/table16.jpg", category: "Table Lamps" },
  { id: 2, name: "Havells Fairy Tale Table Lamp", price: 7079, oldPrice: 7100, image: "/images/black.jpg", category: "Table Lamps" },
  { id: 3, name: "Eternity Cearamic Table Lamp", price:2399, image: "/images/moder2.jpg", category: "Modern Lamps" },
  { id: 4, name: "Simple Hanging Lamp ", price: 500, oldPrice: 599, image: "/images/hanging lamps.jpg", category: "Hanging Lamps" },
  { id: 5, name: "Emma Minimalist Tripod Floor Lamp", price: 12000, oldPrice: 12300, image: "/images/floor2.png", category: "Floor Lamps" },
  { id: 6, name: "Empire Table Lamp", price: 1700, oldPrice: 1900, image: "/images/table11.jpg", category: "Table Lamps" },
  { id: 7, name: "Round Cage Shaped Pendant", price: 490, oldPrice: 500, image: "/images/lamp 2.jpg", category: "Hanging Lamps" },
  { id: 8, name: "Triple Ring Cotton Fabric Pendant", price: 7000, oldPrice: 7200, image: "images/cotton novelty.jpg", category: "Hanging Lamps" },
  { id: 9, name: "Ringsta Floor Lamp", price: 4290, oldPrice: 4500, image: "/images/floor1.png", category: "Floor Lamps" },
  { id: 10, name: "Classic Floor Lamp ", price: 9099, oldPrice: 9500, image: "/images/floor3.jpg", category: "Floor Lamps" },
  { id: 11, name: " Bell Floor Lamp ", price: 8300, oldPrice: 8800, image: "/images/floor4.jpg", category: "Floor Lamps" },
  { id: 12, name: "Solid Wood Floor Lamp ", price: 8300, oldPrice: 8800, image: "/images/floor5.jpg", category: "Floor Lamps" },
  { id: 13, name: "Decent Glass Mosaic Table Lamp", price: 3099, oldPrice: 3500, image: "/images/mode.png", category: "Modern Lamps" },
  { id: 14, name: "Amber Lewis Laken Small Desk Lamp", price: 27448, oldPrice: 27500, image: "/images/table8.jpg", category: "Mini Desk Lamps" },
  { id: 15, name: "1227 Mini Desk Lamp", price: 8800, oldPrice: 10000, image: "/images/table1.jpg", category: "Mini Desk Lamps" },
  { id: 16, name: "Blinkit Table Lamp", price: 4459, oldPrice: 4500, image: "/images/table4.jpg", category: "Mini Desk Lamps" },
  { id: 17, name: "Type 75 Mini Desk Lamp", price: 12700, oldPrice: 12890, image: "/images/mini desk lamp.jpg", category: "Mini Desk Lamps" },
  { id: 18, name: "Braided Pendant Lamp", price: 12700, oldPrice: 12890, image: "/images/cotton.jpg", category: "Cotton Novelty Pendant" },
  { id: 19, name: "Dual Hanging Light Hanging Lamp", price: 799, oldPrice: 850, image: "/images/cotton2.jpg", category: "Cotton Novelty Pendant" },
  { id: 20, name: "Contemporary Tripla Ring Cotton Fabric Pendant", price: 7000, oldPrice: 7200, image: "/images/cotton3.jpg", category: "Cotton Novelty Pendant" },
  { id: 28, name: "Triple Ring Cotton Fabric Pendant", price: 7000, oldPrice: 7200, image: "/images/cotton novelty.jpg", category: "Cotton Novelty Pendant" },
  { id: 21, name: "Right Lighting For Your Living Room", price:5000, oldPrice: 5500, image: "/images/lamp 4.jpg", category: "Multiple Combination Lamp" },
  { id: 22, name: "Stylish Accessories & New Table Lamp", price: 22000, oldPrice: 23000, image: "/images/nice1.png", category: "Multiple Combination Lamp" },
  { id: 23, name: "Pecock Metal Decorative Table Lamp", price: 3200, oldPrice: 4000, image: "/images/table14.jpg", category: "Modern Lamps" },
  { id: 24, name: "Ceramic Table Lamp", price: 9200, oldPrice: 9500, image: "/images/lamp 3.jpg", category: "Modern Lamps" },
  { id: 25, name: "Pot Shaped Metal Base Table Lamp", price:1680, oldPrice:3999, image: "/images/table12.jpg", category: "Table Lamps" },
  { id: 26, name: "Chilly Table Lamp", price: 1864, oldPrice: 2000, image: "/images/table7.jpg", category: "Table Lamps" },
  { id: 27, name: "Multicolor Pendant Lamp", price: 4399, oldPrice: 4400, image: "/images/hangeed.png", category: "Modern Lamps" },
  { id: 29, name: "Curved Collection for Your Bedroom", price: 1099, oldPrice: 1200, image: "/images/best-removebg-preview.png", category: "Multiple Combination Lamp" },
];

const categories = [
  "Table Lamps",
  "Modern Lamps",
  "Hanging Lamps",
  "Floor Lamps",
  "Mini Desk Lamps",
  "Cotton Novelty Pendant",
  "Multiple Combination Lamp",
];

export default function ProductsPage() {
  const [sortOrder, setSortOrder] = useState("relevance");
  const [filteredCategory, setFilteredCategory] = useState("");

  const filteredProducts = products
    .filter(
      (product) => !filteredCategory || product.category === filteredCategory
    )
    .sort((a, b) => {
      if (sortOrder === "priceLowHigh") return a.price - b.price;
      if (sortOrder === "priceHighLow") return b.price - a.price;
      return 0;
    });

  return (
    <>
      <Upper />
      <div className="min-h-screen bg-gray-100 p-4">
        {/* Header */}
        <header className="flex justify-between items-center p-4 bg-white shadow rounded-lg">
          <h1 className="text-2xl font-bold">Product Store</h1>
          <div className="flex items-center gap-4">
            <select
              className="border p-2 rounded"
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
            >
              <option value="relevance">Relevance</option>
              <option value="priceLowHigh">Price: Low to High</option>
              <option value="priceHighLow">Price: High to Low</option>
            </select>
          </div>
        </header>

        {/* Horizontal Category Slider for Small Screens */}
        <div className="flex overflow-x-auto bg-white p-2 shadow rounded-lg mb-4 md:hidden">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilteredCategory(category)}
              className={`flex-shrink-0 px-4 py-2 m-1 rounded-lg text-sm whitespace-nowrap ${
                filteredCategory === category
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 hover:bg-gray-300"
              }`}
            >
              {category}
            </button>
          ))}
          <button
            onClick={() => setFilteredCategory("")}
            className="flex-shrink-0 px-4 py-2 m-1 rounded-lg text-sm bg-red-500 text-white hover:bg-red-600"
          >
            Clear Filters
          </button>
        </div>

        <div className="flex flex-col md:flex-row mt-4">
          {/* Sidebar for Larger Screens */}
          <aside className="hidden md:block w-full md:w-1/4 p-4 bg-white shadow rounded-lg">
            <h2 className="font-semibold mb-4">Product Categories</h2>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilteredCategory(category)}
                className={`block w-full text-left p-2 rounded ${
                  filteredCategory === category
                    ? "bg-blue-500 text-white"
                    : "hover:bg-gray-200"
                }`}
              >
                {category}
              </button>
            ))}
            <button
              onClick={() => setFilteredCategory("")}
              className="block w-full text-left p-2 mt-4 text-red-500 hover:bg-red-100 rounded"
            >
              Clear Filters
            </button>
          </aside>

          {/* Main Content */}
          <main className="w-full md:w-3/4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="border rounded-lg shadow-md hover:shadow-lg group relative transition bg-white"
              >
                <div className="relative w-full h-64 flex items-center justify-center bg-white">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="object-contain w-full h-full"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition">
                    <Link href="/cart">
                      <button className="text-white text-lg font-bold px-4 py-2 rounded-lg hover:font-bold">
                        Add to Cart
                      </button>
                    </Link>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-center font-semibold text-lg">
                    {product.name}
                  </h3>
                  <div className="flex justify-center items-center gap-4 mt-2">
                    <span className="text-green-500 font-bold">
                      Rs. {product.price}
                    </span>
                    {product.oldPrice && (
                      <span className="text-gray-500 line-through">
                        Rs. {product.oldPrice}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </main>
        </div>
      </div>
      <Footer />
    </>
  );
}
