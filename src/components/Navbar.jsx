import React from "react";
import logo from "../images/logo.jpeg";
import "../index.css";

const Navbar = () => {
  return (
    <div className="w-full flex justify-between items-center px-10 border h-[12vh]">
      <div className="logoDiv">
        <img src={logo} alt="" height={120} width={120} />
      </div>

      <div className="navLinks flex justify-evenly items-center gap-x-10">
        <a href="/" className="navLink border-b-2 border-black">
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
        <a href="/partners" className="navLink">
          Our Partners
        </a>
      </div>
    </div>
  );
};

export default Navbar;
