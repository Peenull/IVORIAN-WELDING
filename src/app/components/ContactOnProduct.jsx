import { FaFacebook, FaPhoneAlt } from "react-icons/fa";
import { ContactWhatsApp, ShareProduct, SaveProduct } from "./ClientComponents";
import "../styles/Components.css";
import { TfiEmail } from "react-icons/tfi";

function ContactOnProduct({ product, category }) {
  return (
    <div className="contact-on-product">
      <SaveProduct product={product} category={category} />
      <ShareProduct product={product} category={category} />

      <h1>CONTACTS:</h1>
      <div className="contact-container">
        <ContactWhatsApp />
        <a href="tell:+237676736046" className="contact-link  bg-amber-400 ">
          <FaPhoneAlt size={20} /> Call
        </a>
        <a
          href={`https://m.me/@alemnji.ivo.5`}
          className="contact-link bg-blue-500 "
        >
          <FaFacebook size={20} /> Facebook
        </a>
        <a
          href="mailto:alemnjiivo@gmail.com"
          className="contact-link bg-red-400 "
        >
          <TfiEmail /> Email
        </a>
      </div>
    </div>
  );
}

export default ContactOnProduct;
