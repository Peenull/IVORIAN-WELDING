"use client";

import React, { useState } from "react";
import ProductCard from "./ProductCard";
import "../styles/Components.css";

export default function ProductsMapper({ initialProducts, category }) {
  let [products, setProducts] = useState(initialProducts);
  return (
    <div className="products-mapper">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} category={category} />
      ))}
    </div>
  );
}
