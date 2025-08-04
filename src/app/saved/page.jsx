"use client";
import React, { useEffect, useState } from "react";
import SavedMapper from "../components/SavedMapper";
import Header from "../Frame/Header";
import "../styles/Saved.css";

function page(props) {
  let [products, setProducts] = useState([]);
  useEffect(() => {
    let storedProducts = localStorage.getItem("storedProducts");
    console.log(storedProducts);
    if (storedProducts) {
      setProducts(JSON.parse(storedProducts));
    } else {
      localStorage.setItem("storedProducts", JSON.stringify([]));
    }
  }, []);
  return (
    <div className="saved-products">
      <Header />

      {products.length > 0 ? (
        <SavedMapper products={products} />
      ) : (
        <h1>No Products Saved</h1>
      )}
    </div>
  );
}

export default page;
