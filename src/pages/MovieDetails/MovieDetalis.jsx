import React from "react";
import { useParams } from "react-router-dom";
import { useMovies } from "../../context/MovieContext";
import MovieDetailsCard from "./Components/MovieDetailsCard";
import Loader from "../../components/Loader";
function MovieDetails() {
  const { id } = useParams();
  const { movies, loading, error } = useMovies();

  const movie = movies.find((m) => m.id.toString() === id);

  if (loading) return <Loader />;
  if (error) return <p className="text-red-500 text-center">{error}</p>;
  if (!movie)
    return <p className="text-center text-gray-500">Movie not found.</p>;
  console.log(movie);

  return (
    <div
      className="relative w-full min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original${
          movie.backdrop_path || movie.poster_path
        })`,
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-70"></div>

      {/* Foreground content */}
      <div className="relative translate-y-1/4 z-10">
        <MovieDetailsCard movie={movie} />
      </div>
    </div>
  );
}

export default MovieDetails;
