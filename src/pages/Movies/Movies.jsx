// src/pages/Movies.jsx
import React from "react";
import { useMovies } from "../../context/MovieContext";
import MovieCard from "./Components/MovieCard";
import { Link, Outlet } from "react-router-dom";
import { useParams } from "react-router-dom";

export default function Movies() {
  const { movies, loading, error } = useMovies();
  const { id } = useParams(); // Check if we're on a detail page

  if (loading) return <p className="text-center text-xl">Loading movies...</p>;
  if (error) return <p className="text-red-500 text-center">{error}</p>;
  if (id) {
    return <Outlet />;
  }
  return (
    <div className="max-w-7xl mx-auto p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {movies.map((movie) => (
        <Link key={movie.id} to={`${movie.id}`}>
          <MovieCard movie={movie} />
        </Link>
      ))}
    </div>
  );
}
