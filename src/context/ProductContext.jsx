import React, { createContext, useContext, useEffect, useState } from "react";
import { getData } from "../service/Products.js";

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [limit, setLimit] = useState(10); 
  const fetchProducts = async () => {
    try {
      const data = await getData("", { limit }); 
      setProducts(data);
    } catch (err) {
      console.error("Error fetching products:", err);
      setError("Failed to load products.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    console.log("Fetching products 2times because strict mode ...");

    fetchProducts();
  }, [limit]);

  return (
    <ProductContext.Provider value={{ products, loading, error, limit, setLimit }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProducts = () => useContext(ProductContext);
