import React from "react";

export default function TvCard({ show }) {
  return (
    <div
      key={show.id}
      className="group relative bg-white rounded-2xl shadow hover:shadow-lg transition-shadow duration-300 overflow-hidden"
    >
      <img
        src={`https://image.tmdb.org/t/p/w500${show.poster_path}`}
        alt={show.name}
        className="w-full h-72 object-cover transition-transform duration-300 group-hover:scale-105"
      />

      <div className="p-4 space-y-2">
        <h2 className="text-xl font-semibold text-gray-800 line-clamp-1">
          {show.name}
        </h2>

        <p className="text-sm text-gray-600 line-clamp-3">{show.overview}</p>

        <div className="flex items-center justify-between pt-2">
          <span className="text-sm font-medium text-yellow-600">
            ⭐ {show.vote_average}
          </span>
        </div>
      </div>
    </div>
  );
}
