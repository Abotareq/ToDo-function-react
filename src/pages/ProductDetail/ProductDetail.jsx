import React from "react";
import { useParams } from "react-router-dom";
import { useProducts } from "../../context/ProductContext";
import ProductDetailCard from "./components/ProductDetailCard";
import Loader from "../../components/Loader";
export default function ProductDetail() {
  const { id } = useParams();
  const { products, loading, error } = useProducts();

  if (loading) return <Loader />;
  if (error) return <p className="text-center mt-4 text-red-500">{error}</p>;

  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return (
      <p className="text-center mt-4 text-gray-600">
        Product with ID {id} not found.
      </p>
    );
  }

  return (
    <ProductDetailCard
      image={product.image}
      title={product.title}
      description={product.description}
      price={product.price}
      category={product.category}
    />
  );
}
