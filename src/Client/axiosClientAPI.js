import axios from "axios";

export const productsClientAPI = axios.create({
  baseURL: "https://fakestoreapi.com/products",
  headers: {
    "Content-Type": "application/json",
  },
});
export const tmdbClientAPI = axios.create({
  baseURL:
    "https://api.themoviedb.org/3/movie/top_rated?api_key=ae93bc552974297a1943394d42b2366d",
  headers: {
    "Content-Type": "application/json",
  },
});
// productsClientAPI.interceptors.response.use(
//  (config)=>{
//    // Handle the response data
//    return config;
//  },
//  (error) => {
//    // Handle the error
//    return Promise.reject(error);
//  }
// )
