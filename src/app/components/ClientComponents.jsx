"use client";
import { useEffect, useState } from "react";
import { FaShareAlt, FaWhatsapp, FaSave } from "react-icons/fa";

export const ShareSite = () => {
  const [url, setUrl] = useState("");

  const shareSite = async () => {
    try {
      if (navigator.share) {
        await navigator.share({
          title: `IVORIAN WELDING WORKSHOP.`,
          text: `Check out this Welding Workshop i found for Making our Iron Doors, Windows, Gates, Fences, Grayage, Beds, Cages and many other Iron Based Products.`,
          url: url,
        });
      } else {
        console.log("Cant Share Product Browser Does NOT Support.");
      }
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    setUrl(window.location.href);
  });

  return (
    <a
      className="hero-section-contact-link hero-section-share-site"
      onClick={() => shareSite()}
    >
      <FaShareAlt /> Share Site
    </a>
  );
};

export const ShareProduct = ({ category }) => {
  const [url, setUrl] = useState("");

  const shareProduct = async () => {
    try {
      if (navigator.share) {
        await navigator.share({
          title: `IVORIAN WELDING WORKSHOP PRODUCT ${category.toUpperCase()} DESIGN.`,
          text: `Check out this Welding Design for ${category.toUpperCase()} i found on  Website.`,
          url: url,
        });
      } else {
        console.log("Cant Share Product Browser Does NOT Support.");
      }
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    setUrl(window.location.href);
  });
  return (
    <a onClick={() => shareProduct()} className="share-product contact-link">
      <FaShareAlt /> Share Product
    </a>
  );
};

export const ContactWhatsApp = () => {
  const [url, setUrl] = useState("");
  useEffect(() => {
    setUrl(window.location.href);
  });
  return (
    <a
      href={`https://wa.me/237677314859?text=Please%20I%20am%20interested%20in%20this%20Product%20%20${url}`}
      className="contact-link bg-green-400 "
    >
      <FaWhatsapp size={25} /> WhatsApp
    </a>
  );
};

export const SaveProduct = ({ product, category }) => {
  const saveProduct = (product) => {
    let newProduct = { ...product, category: category };
    let storedProducts = localStorage.getItem("storedProducts");
    if (storedProducts) {
      let temp1 = JSON.parse(storedProducts);
      let temp2 = temp1.filter(
        (savedProduct) =>
          savedProduct.id != newProduct.id || savedProduct.category != category
      );
      temp2.unshift(newProduct);
      localStorage.setItem("storedProducts", JSON.stringify(temp2));
    } else {
      localStorage.setItem("storedProducts", JSON.stringify([newProduct]));
    }
  };

  return (
    <button
      className="save-button contact-link"
      onClick={() => saveProduct(product)}
    >
      <FaSave /> Save Product
    </button>
  );
};
