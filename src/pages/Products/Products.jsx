import React, { useEffect, useState } from "react";
import { useProducts } from "../../context/ProductContext";
import { Link, Outlet, useParams } from "react-router-dom";
import ProductCard from "./components/ProductCard";
import Loader from "../../components/Loader";
export default function Products() {
  const { products, loading, error, limit, setLimit } = useProducts();
  const { id } = useParams();
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(products);

  // useEffect(() => {
  //   if (searchTerm === "") {
  //     setFilteredProducts(products);
  //   } /* else {
  //     setFilteredProducts(
  //       products.filter((product) =>
  //         product.title.toLowerCase().includes(searchTerm.toLowerCase())
  //       )
  //     );
  //   } */
  // }, [products, searchTerm]);
  useEffect(() => {
    setFilteredProducts(
      products.filter((product) =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [products, searchTerm]);

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
        value={searchTerm}
        onChange={(e) => {
          const value = e.target.value;

          setSearchTerm(value);
          setFilteredProducts(
            products.filter((product) =>
              product.title.toLowerCase().includes(value.toLowerCase())
            )
          );
        }}
      />

      {filteredProducts.map((product) => (
        <Link key={product.id} to={product.id.toString()}>
          <ProductCard
            image={product.image}
            title={product.title}
            price={product.price}
          />
        </Link>
      ))}
      <div className="flex justify-between mt-6">
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
