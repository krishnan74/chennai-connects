import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { FaWhatsapp } from "react-icons/fa";

const Layout = ({ children }) => {
  const handleWhatsappClick = () => {
    // Replace the phone number with the desired WhatsApp number
    window.open("https://wa.me/7448376434", "_blank");
  };

  return (
    <div className="relative min-h-screen">
      <Navbar />
      {children}
      <Footer />
      <div
        className="fixed bottom-10 right-10 bg-green-500 text-white flex justify-center items-center w-14 h-14 rounded-full cursor-pointer"
        onClick={handleWhatsappClick}
      >
        <FaWhatsapp size={24} />
      </div>
    </div>
  );
};

export default Layout;
