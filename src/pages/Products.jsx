import React, { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";

const Products = () => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [search, setSearch] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const productsPerPage = 24; // limit
  const totalPages = Math.max(1, Math.ceil(total / productsPerPage));

  useEffect(() => {
    const limit = productsPerPage;
    const skip = (currentPage - 1) * limit;

    setLoading(true);

    const base = searchQuery.trim()
      ? `https://dummyjson.com/products/search?q=${searchQuery.trim()}&limit=${limit}&skip=${skip}`
      : `https://dummyjson.com/products?limit=${limit}&skip=${skip}`;

    console.log("URL", base);

    const url = base;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setProducts(data.products || []);
        setTotal(data.total ?? (data.products ? data.products.length : 0));
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
        setLoading(false);
      });
  }, [currentPage, productsPerPage, searchQuery]);

  const handleSearchChange = (e) => {
    console.log("Search input changed to:", e.target.value);
    setSearch(e.target.value);
  };

  const handleSearchSubmit = () => {
    setSearchQuery(search);
    setCurrentPage(1);
  };

  if (loading) {
    return (
      <div className="p-8 flex items-center justify-center">
        <div className="h-10 w-10 animate-spin rounded-full border-4 border-blue-500 border-t-transparent" />
      </div>
    );
  }

  return (
    <div className="p-4">
      <div className="mb-4 flex items-center gap-2">
        <input
          type="text"
          value={search}
          onChange={handleSearchChange}
          placeholder="Search products..."
          className="w-full max-w-md border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200"
        />
        <button
          onClick={handleSearchSubmit}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
        >
          Search
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      <div className="flex items-center justify-center gap-3 mt-6">
        <button
          className="px-3 py-2 rounded bg-gray-200 hover:bg-gray-300 disabled:opacity-50"
          disabled={currentPage === 1}
          onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
        >
          Previous
        </button>
        <span className="text-sm text-gray-700">
          Page {currentPage} of {totalPages}
        </span>
        <button
          className="px-3 py-2 rounded bg-gray-200 hover:bg-gray-300 disabled:opacity-50"
          disabled={currentPage >= totalPages}
          onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Products;
