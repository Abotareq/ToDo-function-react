import React from "react";

export default function ProductCard({ image, title, price }) {
  return (
    <div className="bg-white rounded-xl shadow-md p-4 hover:scale-[1.02] transition-transform block">
      <img
        src={image}
        alt={title}
        className="h-40 mx-auto object-contain mb-4"
      />
      <h3 className="text-md font-semibold line-clamp-2">{title}</h3>
      <p className="text-blue-700 font-bold mt-2">${price}</p>
    </div>
  );
}
