import React from "react";
import "../styles/About.css";
import Header from "../Frame/Header";
import { FaFacebook, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";
import Link from "next/link";

function page() {
  let categories = [
    "doors",
    "windows",
    "gates",
    "fences",
    "blind",
    "chairs",
    "cages",
    "beds",
  ];
  return (
    <div className="about-page">
      <Header />
      <h1 className="about-name">IVORIAN WELDING</h1>
      <div className="about-div">
        {" "}
        <h1 className="about-headings">Description</h1>
        <p>
          Ivorian Welding is Specialized in the Designing, Fabricating,
          Construction and Distribution of Iron Based Products such as
        </p>
        <div className="about-description-categories">
          {categories.map((category) => (
            <Link
              href={`/categories/${category}`}
              className="about-description-category"
              key={category}
            >
              {category.toUpperCase()}
            </Link>
          ))}
        </div>
      </div>

      <div className="about-div">
        {" "}
        <h1 className="about-headings">Location</h1>
        <p>
          Ivorian Welding Workshop is located at the DIOCASE of BUEA STREET (
          Cathedra street ) central market road Molyko Buea
        </p>
      </div>

      <div className="about-div flex-col text-center">
        {" "}
        <h1 className="about-headings">Pricing</h1>
        <p>
          Ivorian Welding Workshop gives it's customers cheap and affordable
          prices for high and strong quality products.
        </p>
      </div>

      <div className="about-div flex-col text-center">
        <h1 className="about-headings">Contacts</h1>
        <p>Contact us through the following.</p>
        <div className="about-contacts">
          <a
            href="tell:+237676736046"
            className="about-contact-link bg-amber-400"
          >
            <FaPhoneAlt /> CALL
          </a>
          <a
            href={`https://wa.me/237677314859?text=Hello%20Mr%20IVO`}
            className="about-contact-link bg-green-400 "
          >
            <FaWhatsapp /> WHATSAPP
          </a>
          <a
            href={`https://m.me/@alemnji.ivo.5`}
            className="about-contact-link bg-blue-500"
          >
            {" "}
            <FaFacebook /> FACEBOOK
          </a>
          <a
            href="mailto:alemnjiivo@gmail.com"
            className="about-contact-link bg-red-400"
          >
            <TfiEmail /> EMAIL
          </a>
        </div>
      </div>
    </div>
  );
}

export default page;
