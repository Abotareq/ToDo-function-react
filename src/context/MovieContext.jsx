// src/context/MovieContext.jsx
import React, { createContext, useContext, useEffect, useState } from "react";
import { getData } from "../service/Movies.js"; // assuming you have this
const MovieContext = createContext();

export function MovieProvider({ children }) {
 
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    getData("")
      .then(setMoviesFromAPI)
      .catch(() => setError("Failed to load movies"))
      .finally(() => setLoading(false));
  }, []);

  function setMoviesFromAPI(data) {
    if (data?.results) {
      setMovies(data.results);
    } else {
      setError("No movies found.");
    }
  }

  return (
    <MovieContext.Provider value={{ movies, loading, error }}>
      {children}
    </MovieContext.Provider>
  );
}

export function useMovies() {
  return useContext(MovieContext);
}
