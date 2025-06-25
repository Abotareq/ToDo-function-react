import React, { useState } from "react";
import { useMovies } from "../../context/MovieContext";
import MovieCard from "../../components/MovieCard";
import { Link, Outlet, useParams } from "react-router-dom";
import Loader from "../../components/Loader";
import { useSelector } from "react-redux";
export default function FavMovies() {
  const { movies, loading, error } = useMovies();
  const { id } = useParams();

  const [currentPage, setCurrentPage] = useState(1);

  const favMovies = useSelector((state) => state.fav.favs);

  const itemsPerPage = 8;
  const currentFavMovies = movies.filter((movie) =>
    favMovies.some((fav) => fav.id === movie.id)
  );
  const totalPages = Math.ceil(currentFavMovies.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentMovies = currentFavMovies.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  if (loading) return <Loader />;
  if (error) return <p className="text-red-500 text-center">{error}</p>;
  if (id) return <Outlet />;

  return (
    <div className="max-w-7xl mx-auto p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {currentMovies.map((movie) => (
          <Link key={movie.id} to={`${movie.id}`}>
            <MovieCard movie={movie} />
          </Link>
        ))}
      </div>

      <div className="flex justify-center mt-6 gap-4">
        <button
          onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-blue-500 text-white rounded disabled:bg-gray-400"
        >
          Prev
        </button>

        <span className="px-4 py-2 font-semibold">
          Page {currentPage} of {totalPages}
        </span>

        <button
          onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
          disabled={currentPage === totalPages}
          className="px-4 py-2 bg-blue-500 text-white rounded disabled:bg-gray-400"
        >
          Next
        </button>
      </div>
    </div>
  );
}
