// src/Client/tmdbClientAPI.js
import axios from "axios";

// Full base URL with API key included
export const tmdbClientAPI = axios.create({
  baseURL:
    "https://api.themoviedb.org/3/movie/popular?api_key=ae93bc552974297a1943394d42b2366d",
  headers: {
    "Content-Type": "application/json",
  },
});
