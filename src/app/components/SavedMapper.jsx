"use client";

import ProductCard from "./ProductCard";
import "../styles/Components.css";

export default function ({ products }) {
  return (
    <div className="saved-mapper">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          category={product.category}
        />
      ))}
    </div>
  );
}
