import React from 'react';

function ProductCard({ product }) {
  return (
    <div className="bg-white rounded shadow p-4 hover:shadow-md transition">
      {/* <img
        src={product.image}
        alt={product.name}
        className="w-full h-40 object-cover rounded"
      /> */}
      <h3 className="mt-2 text-lg font-semibold text-gray-800">
        {product.title}
      </h3>
      <p className="text-gray-600">₹{product.price}</p>
      <p className="text-sm text-gray-500">{product.category}</p>
      <p className="text-sm text-gray-500">{product.description}</p>
    </div>
  );
}

export default ProductCard;
