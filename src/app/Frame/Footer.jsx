import { FaFacebook, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";
import "../styles/Frame.css";
import Link from "next/link";

function Footer() {
  return (
    <footer className="footer">
      <h1 style={{ fontSize: "26px" }}>Location on Map</h1>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1404.7228296308185!2d9.281066892599316!3d4.165202805869753!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10613100403cb20d%3A0x1df39b53dbf6f012!2sIVO'S%20WELDING%20WORKSOP!5e0!3m2!1sen!2scm!4v1752449518327!5m2!1sen!2scm"
        width="100%"
        height="250"
        style={{ border: "0", backgroundColor: "gray" }} // Fix: `style` prop expects an object
        allowFullScreen={true} // Fix: `allowfullscreen` to `allowFullScreen`, and provide a boolean value
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade" // Fix: `referrerpolicy` to `referrerPolicy`
      ></iframe>
      <div className="footer-contact">
        <a href="https://m.me/@alemnji.ivo.5" title="facebook.com">
          <FaFacebook className="text-blue-500" size={30} />
        </a>
        <a href="https://wa.me/237677324859?text=Hello%20Mr%20Ivo.">
          <FaWhatsapp className="text-green-400" size={30} />
        </a>
        <a href="tell:+237677314859">
          <FaPhoneAlt className="text-amber-400" size={30} />{" "}
        </a>
        <a title="Send an Email" href="mailto:alemnjiivo@gmail.com">
          <TfiEmail className="text-red-400 " size={30} />
        </a>
      </div>
      <h1>IVORIAN WELDING </h1>
      <h3 className="footerCopyRight">
        &copy; {new Date().getFullYear()} Peenull. All Rights Reserved.
      </h3>
      <Link href={"/about"} style={{ textDecoration: "underline" }}>
        About
      </Link>
    </footer>
  );
}

export default Footer;
