"use client";
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
}

const Search: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const router = useRouter();
  const { q } = router.query; // Capture the query parameter from URL

  useEffect(() => {
    // Example products array - you would normally fetch this from an API
    const allProducts: Product[] = [
      { id: 1, name: 'Apple iPhone 14', description: 'Latest model of iPhone', price: 999 },
      { id: 2, name: 'Samsung Galaxy S22', description: 'Latest Samsung model', price: 899 },
      { id: 3, name: 'MacBook Pro', description: 'Apple laptop', price: 1299 },
      { id: 4, name: 'Sony Headphones', description: 'Noise cancelling headphones', price: 199 },
    ];

    setProducts(allProducts);

    // Filter products based on query string if it exists
    if (q) {
      const query = (q as string).toLowerCase();
      const filtered = allProducts.filter((product) =>
        product.name.toLowerCase().includes(query) ||
        product.description.toLowerCase().includes(query)
      );
      setFilteredProducts(filtered);
    }
  }, [q]);

  return (
    <div className="max-w-screen-xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Search Results</h1>

      {/* Display search query */}
      {q && (
        <p className="text-lg mb-4">Results for: <strong>{q}</strong></p>
      )}

      {/* Display products */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <div key={product.id} className="border p-4 rounded-lg shadow-md">
              <h2 className="text-xl font-bold">{product.name}</h2>
              <p>{product.description}</p>
              <p className="text-lg font-semibold">${product.price}</p>
            </div>
          ))}
        </div>
      ) : (
        <p>No products found for this search.</p>
      )}
    </div>
  );
};

export default Search;
