import React from "react";

function MovieCard({ movie }) {
  return (
    <div
      key={movie.id}
      className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition duration-200"
    >
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        className="w-full h-64 object-cover"
      />
      <div className="p-4">
        <h2 className="text-lg font-bold mb-2">{movie.title}</h2>
        <p className="text-sm text-gray-600 line-clamp-3">{movie.overview}</p>
        <p className="text-blue-700 font-semibold mt-2">
          ⭐ {movie.vote_average}
        </p>
      </div>
    </div>
  );
}

export default MovieCard;
