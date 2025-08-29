import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="border border-gray-300 rounded-lg p-4 m-4 max-w-sm shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="w-full h-48 bg-gray-200 flex items-center justify-center rounded-lg">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
      <h3 className="mt-4 text-lg font-semibold">{product.title}</h3>
      <p className="text-gray-700">{product.description}</p>
      <p className="text-xl font-bold text-blue-600 my-2">${product.price}</p>
      <button
        className="mt-4 w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        type="button"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
