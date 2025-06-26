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
      className="relative bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition duration-200"
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
      <div
        onClick={(e) => {
          e.stopPropagation();
          e.preventDefault();
          toggleLike();
        }}
        className="absolute top-5 right-5 cursor-pointer transition-transform hover:scale-110"
        title={liked ? "Remove from favorites" : "Add to favorites"}
      >
        <FaHeart size={30} color={liked ? "#e11d48" : "#9ca3af"} />
      </div>
    </div>
  );
}

export default MovieCard;
