import React from "react";
import { useProducts } from "../../context/ProductContext";
import { Link, Outlet, useParams } from "react-router-dom";
import ProductCard from "./components/ProductCard";
export default function Products() {
  const { products, loading, error } = useProducts();
  const { id } = useParams(); 

  if (loading) return <p className="text-center text-xl">Loading...</p>;
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
 {products.map((product) => (
        <Link key={product.id} to={product.id.toString()}>
          <ProductCard
            image={product.image}
            title={product.title}
            price={product.price}
          />
        </Link>
      ))}
    </div>
  );
}
