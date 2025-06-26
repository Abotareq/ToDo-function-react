import React from "react";
import { useParams } from "react-router-dom";
import { useMovies } from "../../service/QueryService";
import Loader from "../../components/Loader";
import TVdetailsCard from "./Components/TVdetailsCard";
function TVdetails() {
  const { id } = useParams(); // Get the ID from the URL
  const { data, isLoading, error } = useMovies();

  if (isLoading)
    return (
      <>
        <loader />
      </>
    );
  if (error) return <div>Something went wrong.</div>;

  const show = data?.results?.find((item) => item.id === Number(id));

  if (!show) return <div>TV show not found.</div>;
  console.log(show);

  return (
    <div
      className="relative w-full min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original${
          show.backdrop_path || show.poster_path
        })`,
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-70"></div>

      {/* Foreground Content */}
      <div className="relative translate-y-1/4 z-10">
        <TVdetailsCard show={show} />
      </div>
    </div>
  );
}

export default TVdetails;
