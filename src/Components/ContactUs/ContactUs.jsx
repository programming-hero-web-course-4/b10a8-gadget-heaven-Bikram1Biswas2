import { FaInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import documentTitle from "../documentTitle";
const ContactUs = () => {
    documentTitle("ContactUS")
    return (
        <div className="hero bg-[#9538E2] text-white rounded-b-xl pb-44 ">
  <div className="hero-content text-center ">
    <div className="max-w-3xl">
      <h1 className="text-4xl font-bold">Contact Us</h1>
      <p className="py-6">
      Get in touch with us to learn more about our services or to ask any questions you may have. Our team is here to assist you, and we’d love to hear from you! Reach out through our contact form, email, or call us directly.
      </p>
     <div className="flex gap-5 justify-center text-3xl">
     <FaInstagram />
     <FaFacebook />
     <FaWhatsapp />
     <MdOutlineEmail />
     </div>
    </div>
  </div>
  
</div>
    );
};

export default ContactUs;