import React, { useReducer, useEffect } from "react";
import { useProducts } from "../../context/ProductContext";
import { Link, Outlet, useParams } from "react-router-dom";
import ProductCard from "./components/ProductCard";
import Loader from "../../components/Loader";

const reducer = (state, action) => {
  switch (action.type) {
    case "init":
      return {
        ...state,
        products: action.payload,
        filteredProducts: action.payload,
      };
    case "search":
      return {
        ...state,
        searchTerm: action.payload,
        filteredProducts: state.products.filter((product) =>
          product.title.toLowerCase().includes(action.payload.toLowerCase())
        ),
      };
    default:
      return state;
  }
};

export default function Products() {
  const { products, loading, error, limit, setLimit } = useProducts();
  const { id } = useParams();

  const [state, dispatch] = useReducer(reducer, {
    searchTerm: "",
    products: [],
    filteredProducts: [],
  });


  useEffect(() => {
    if (products.length > 0) {
      dispatch({ type: "init", payload: products });
    }
  }, [products]);

  if (loading) return <Loader />;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  if (id) {
    return (
      <div className="max-w-7xl mx-auto p-4">
        <Outlet />
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      <input
        type="search"
        placeholder="Search products..."
        className="border border-gray-300 rounded p-2 mb-4 col-span-full"
        value={state.searchTerm}
        onChange={(e) => dispatch({ type: "search", payload: e.target.value })}
      />

      {state.filteredProducts.map((product) => (
        <Link key={product.id} to={product.id.toString()}>
          <ProductCard
            image={product.image}
            title={product.title}
            price={product.price}
          />
        </Link>
      ))}

      <div className="flex justify-between mt-6 col-span-full">
        <button
          onClick={() => setLimit(limit - 1)}
          disabled={limit <= 1}
          className="bg-blue-500 text-white px-4 py-2 rounded disabled:opacity-50"
        >
          Show Less
        </button>
        <button
          onClick={() => setLimit(limit + 1)}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Show More
        </button>
      </div>
    </div>
  );
}
