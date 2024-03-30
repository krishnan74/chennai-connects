import React from "react";
import logo from "../images/logo.jpeg";
import { FaFacebook, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";

import { FaSquareXTwitter, FaYoutube } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="flex flex-col border-t ">
      <div className="flex justify-between items-center p-10">
        <div className="flex flex-col  justify-center gap-7">
          <img src={logo} alt="" height={150} width={150} />
          <div className="flex items-center justify-center gap-x-3">
            <a
              href="https://www.facebook.com"
              className="  hover:text-blue-700"
            >
              <FaFacebook size={25} />
            </a>
            <a
              href="https://www.twitter.com"
              className="text-[#101010] hover:text-[#010001]"
            >
              <FaXTwitter size={25} />
            </a>
            <a
              href="https://www.instagram.com"
              className="text-[#101010] hover:text-[#DF308C]"
            >
              <FaInstagram size={25} />
            </a>
            <a
              href="https://www.linkedin.com"
              className="text-[#101010] hover:text-[#0B67C2]"
            >
              <FaLinkedinIn size={25} />
            </a>
            <a
              href="https://www.youtube.com"
              className="text-[#101010] hover:text-[#FE080A]"
            >
              <FaYoutube size={25} />
            </a>
          </div>
        </div>
        <div className="flex flex-col">
          <a href="/" className="navLink">
            Home
          </a>
          <a href="/gallery" className="navLink">
            Gallery
          </a>
          <a href="/about" className="navLink">
            About
          </a>
          <a href="/contact" className="navLink">
            Contact
          </a>
        </div>
      </div>

      <div className="bg-gray-800 text-white p-5 text-center">
        <p>&copy; 2521 Chennai Connects. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
