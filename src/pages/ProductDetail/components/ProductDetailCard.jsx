import React from "react";

export default function ProductDetailCard({
  image,
  title,
  description,
  price,
  category,
}) {
  return (
    <div className="max-w-3xl mx-auto mt-10 p-6 bg-white rounded-xl shadow-md">
      <div className="flex flex-col md:flex-row gap-6">
        <img
          src={image}
          alt={title}
          className="h-64 w-full md:w-64 object-contain border p-2"
        />
        <div>
          <h2 className="text-2xl font-bold mb-2">{title}</h2>
          <p className="text-gray-600 mb-4">{description}</p>
          <p className="text-lg font-semibold text-blue-700">${price}</p>
          <p className="mt-2 text-sm text-gray-500">Category: {category}</p>
        </div>
      </div>
    </div>
  );
}
