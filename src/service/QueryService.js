import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchMovies = async () => {
  const response = await axios.get("https://api.themoviedb.org/3/tv/top_rated?api_key=ae93bc552974297a1943394d42b2366d");
  return response.data;
};

export const useMovies = () => {
  return useQuery(
    {
        queryKey: ["movies"],
        queryFn: fetchMovies,
        refetchOnWindowFocus: false,
    }
  );
};
