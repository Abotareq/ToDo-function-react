import axios from "axios";

export const axiosClientAPI = axios.create({
  baseURL: "https://fakestoreapi.com/products",
  headers: {
    "Content-Type": "application/json",
  },
});
