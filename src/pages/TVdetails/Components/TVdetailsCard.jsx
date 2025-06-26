import React from "react";

function TVdetailsCard({ show }) {
  return (
    <>
      <div className="relative max-w-5xl mx-auto mt-12 rounded-2xl overflow-hidden shadow-xl">
        {/* Blurred Background */}
        <div
          className="absolute inset-0 bg-cover bg-center blur-sm brightness-75"
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/w500${show.poster_path})`,
          }}
        ></div>

        {/* Glass Card Content */}
        <div className="relative z-10 flex flex-col md:flex-row bg-white/80 backdrop-blur-md rounded-2xl p-6 md:p-8 gap-6 shadow-lg border border-white/30">
          {/* Poster */}
          <div className="w-full md:w-64 shrink-0">
            <img
              src={`https://image.tmdb.org/t/p/w500${show.poster_path}`}
              alt={show.name}
              className="w-full h-80 object-cover rounded-xl border shadow"
            />
          </div>

          {/* Show Info */}
          <div className="flex-1 text-gray-800">
            <h2 className="text-3xl font-bold mb-3">{show.name}</h2>

            <p className="text-gray-700 mb-4 leading-relaxed line-clamp-5">
              {show.overview}
            </p>

            <div className="flex flex-col sm:flex-row sm:items-center sm:gap-6">
              <p className="text-lg font-medium text-yellow-600">
                ⭐ Rating: {show.vote_average}
              </p>
              <p className="text-sm text-gray-500 mt-2 sm:mt-0">
                📅 First Air Date: {show.first_air_date}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TVdetailsCard;
