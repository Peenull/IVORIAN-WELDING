import React from "react";
import Link from "next/link";
import Image from "next/image";
import "../styles/Components.css";

function ProductCard({ product, category }) {
  return (
    <Link
      className="product-wrapper"
      href={`/categories/${category ? category : product.category}/${
        product.id
      }`}
    >
      <Image
        width={250}
        height={380}
        className="product-image"
        src={product.image}
        alt={product.image}
      ></Image>
    </Link>
  );
}

export default ProductCard;
