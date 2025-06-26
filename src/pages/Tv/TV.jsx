import React from "react";
import { useMovies } from "../../service/QueryService";
import TvCard from "../../components/TvCard";
import Loader from "../../components/Loader";
import { Link, Outlet } from "react-router-dom";
import { useParams } from "react-router-dom";
function TV() {
  const { data, error, isLoading } = useMovies();
  const { id } = useParams();
  if (id) {
    return (
      <>
        <Outlet />
      </>
    );
  }
  if (isLoading)
    return (
      <>
        <Loader />
      </>
    );
  if (error) return <div>Error loading TV shows</div>;

  const shows = data?.results || [];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {shows.map((show) => (
        <Link to={`${show.id}`} key={show.id}>
          <TvCard key={show.id} show={show} />
        </Link>
      ))}
    </div>
  );
}

export default TV;
