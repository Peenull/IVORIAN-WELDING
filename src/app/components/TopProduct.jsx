import Link from "next/link";
import React from "react";

function TopProduct({ product, category }) {
  return (
    <div className="top-product">
      <Link
        className="top-product-wrapper"
        href={`/categories/${category}/${product.id}`}
      >
        <img
          className="top-product-image"
          src={product.image}
          alt={`Best Design For ${category}`}
        ></img>
      </Link>
      <p style={{ color: "#cfcfcf" }}>
        Best Designs For{" "}
        <Link href={`/categories/${category}`}> {category.toUpperCase()}</Link>
      </p>
    </div>
  );
}

export default TopProduct;
