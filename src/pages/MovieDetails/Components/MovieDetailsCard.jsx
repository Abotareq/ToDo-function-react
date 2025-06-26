import React, { useState } from "react";
import { FaHeart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { addFav, removeFav } from "../../../Redux/state.slice/favSlice";

function MovieDetailsCard({ movie }) {
  const dispatch = useDispatch();

  const currentFav = useSelector((state) =>
    state.fav.favs.find((fav) => fav.id === movie.id)
  );

  const [liked, setLiked] = useState(currentFav);

  const toggleLike = () => {
    if (liked) {
      dispatch(removeFav(movie));
    } else {
      dispatch(addFav(movie));
    }
    setLiked((prev) => !prev);
  };

  return (
    <div className="relative max-w-5xl mx-auto mt-12 rounded-2xl overflow-hidden shadow-xl">
      {/* Blurred Background */}
      <div
        className="absolute inset-0 bg-cover bg-center blur-[6px] brightness-75"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/w500${movie.poster_path})`,
        }}
      ></div>

      {/* Foreground Content */}
      <div className="relative z-10 flex flex-col md:flex-row bg-white/80 backdrop-blur-lg rounded-2xl p-6 md:p-8 gap-6">
        {/* Poster */}
        <div className="w-full md:w-64 shrink-0">
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            className="w-full h-80 object-cover rounded-xl shadow-lg border border-white"
          />
        </div>

        {/* Details */}
        <div className="flex-1 text-gray-800">
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-3xl font-bold">{movie.title}</h2>
            {/* Rating Badge */}
            <div className="bg-yellow-400 text-black text-sm font-bold px-3 py-1 rounded-full shadow">
              ⭐ {movie.vote_average}
            </div>
          </div>

          <p className="text-sm text-gray-700 mb-4 leading-relaxed line-clamp-5">
            {movie.overview}
          </p>

          <p className="text-sm text-gray-600">
            📅 <span className="font-medium">Release Date:</span>{" "}
            {movie.release_date}
          </p>
        </div>
      </div>

      {/* ❤️ Floating Favorite Icon */}
      <div
        onClick={toggleLike}
        className="absolute top-3 right-3 z-20 cursor-pointer transition-transform hover:scale-110"
        title={liked ? "Remove from favorites" : "Add to favorites"}
      >
        <FaHeart size={32} color={liked ? "#e11d48" : "#ffffffaa"} />
      </div>
    </div>
  );
}

export default MovieDetailsCard;
