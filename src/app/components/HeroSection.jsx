import React from "react";
import "../styles/Home.css";
import {
  FaFacebook,
  FaWhatsapp,
  FaPhoneAlt,
  FaLocationArrow,
} from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";
import { ShareSite } from "./ClientComponents";

function HeroSection() {
  return (
    <div className="hero-section-wrapper">
      <div className="hero-section">
        <h1>IVORIAN WELDING. </h1>
        <p>
          DOORS, WINDOWS, GATES, FENCES, CHAIRS, BEDS, GRAYARGES, CANOPIES,{" "}
        </p>
        <br />
        <div className="hero-section-linking-div">
          <a
            href="tell:+237677314859"
            className="hero-section-contact-link bg-amber-400"
          >
            <FaPhoneAlt /> +237 677314859
          </a>
          <a
            href={`https://wa.me/237677314859?text=Hello%20Mr%20IVO`}
            className="hero-section-contact-link k bg-green-400 "
          >
            <FaWhatsapp /> WhatsApp
          </a>
          <a
            href={`https://m.me/@alemnji.ivo.5`}
            className="hero-section-contact-link bg-blue-500 "
          >
            <FaFacebook size={20} /> Facebook
          </a>
          <a
            href="mailto:ivoalemnji@gmail.com"
            className="hero-section-contact-link bg-red-400 "
          >
            <TfiEmail /> Email
          </a>
          <ShareSite />
          <a
            className="hero-section-contact-link hero-section-location "
            href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1404.7228296308185!2d9.281066892599316!3d4.165202805869753!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10613100403cb20d%3A0x1df39b53dbf6f012!2sIVO'S%20WELDING%20WORKSOP!5e0!3m2!1sen!2scm!4v1752449518327!5m2!1sen!2scm"
          >
            <FaLocationArrow />
            location on map.
          </a>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
