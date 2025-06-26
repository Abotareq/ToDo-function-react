import React from "react";
import { useState } from "react";
import { FaHeart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { addFav, removeFav } from "../Redux/state.slice/favSlice";
function MovieCard({ movie }) {
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
   <div
  key={movie.id}
  className="group relative bg-white rounded-2xl shadow hover:shadow-lg transition-shadow duration-300 overflow-hidden"
>
  <img
    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
    alt={movie.title}
    className="w-full h-72 object-cover transition-transform duration-300 group-hover:scale-105"
  />

  <div className="p-4 space-y-2">
    <h2 className="text-xl font-semibold text-gray-800 line-clamp-1">
      {movie.title}
    </h2>

    <p className="text-sm text-gray-600 line-clamp-3">
      {movie.overview}
    </p>

    <div className="flex items-center justify-between pt-2">
      <span className="text-sm font-medium text-yellow-600">
        ⭐ {movie.vote_average}
      </span>
    </div>
  </div>

  <div
    onClick={(e) => {
      e.stopPropagation();
      e.preventDefault();
      toggleLike();
    }}
    className="absolute top-4 right-4 cursor-pointer transition-transform hover:scale-110"
    title={liked ? "Remove from favorites" : "Add to favorites"}
  >
    <FaHeart size={28} color={liked ? "#e11d48" : "#d1d5db"} />
  </div>
</div>

  );
}

export default MovieCard;
