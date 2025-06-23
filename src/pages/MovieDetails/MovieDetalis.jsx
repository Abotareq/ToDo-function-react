import React from "react";
import { useParams } from "react-router-dom";
import { useMovies } from "../../context/MovieContext"; 
import MovieDetailsCard from "./Components/MovieDetailsCard";

function MovieDetails() {
  const { id } = useParams();
  const { movies, loading, error } = useMovies();

  const movie = movies.find((m) => m.id.toString() === id);

  if (loading) return <p className="text-center text-xl">Loading...</p>;
  if (error) return <p className="text-red-500 text-center">{error}</p>;
  if (!movie)
    return <p className="text-center text-gray-500">Movie not found.</p>;

  return <MovieDetailsCard movie={movie} />;
}

export default MovieDetails;
