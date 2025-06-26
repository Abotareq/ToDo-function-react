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
    <div className="relative max-w-3xl mx-auto mt-10 p-6 bg-white rounded-xl shadow-md">
      <div className="flex flex-col md:flex-row gap-6">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          className="h-64 w-full md:w-64 object-contain border p-2"
        />
        <div>
          <h2 className="text-2xl font-bold mb-2">{movie.title}</h2>
          <p className="text-gray-600 mb-4">{movie.overview}</p>
          <p className="text-lg font-semibold text-blue-700">
            Rating: {movie.vote_average}
          </p>
          <p className="mt-2 text-sm text-gray-500">
            Release Date: {movie.release_date}
          </p>
        </div>
      </div>

      {/* ❤️ Floating Favorite Icon */}
      <div
        onClick={toggleLike}
        className="absolute bottom-5 right-5 cursor-pointer transition-transform hover:scale-110"
        title={liked ? "Remove from favorites" : "Add to favorites"}
      >
        <FaHeart size={30} color={liked ? "#e11d48" : "#9ca3af"} />
      </div>
    </div>
  );
}

export default MovieDetailsCard;
