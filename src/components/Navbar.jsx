import React from "react";
import logo from "../images/logo.jpeg";
import { useParams } from "react-router-dom";
import "../index.css";

const Navbar = () => {
  const currentPage = window.location.pathname;
  console.log(currentPage);

  return (
    <div className="w-full flex justify-center sm:justify-between items-center px-10 border h-[fit] flex-wrap py-5">
      <div className="logoDiv min-w-[320px] flex justify-center">
        <img src={logo} alt="" height={120} width={120} />
      </div>

      <div className="navLinks flex justify-evenly items-center gap-x-10">
        <a
          href="/"
          className={`navLink ${
            currentPage == "/" ? "border-b-2 border-black" : ""
          }`}
        >
          Home
        </a>
        <a
          href="/gallery"
          className={`navLink ${
            currentPage == "/gallery" ? "border-b-2 border-black" : ""
          }`}
        >
          Gallery
        </a>
        <a
          href="/about"
          className={`navLink ${
            currentPage == "/about" ? "border-b-2 border-black" : ""
          }`}
        >
          About
        </a>
        {/* <a
          href="/contact"
          className={`navLink ${
            currentPage == "/contact" ? "border-b-2 border-black" : ""
          }`}
        >
          Contact
        </a> */}
      </div>
    </div>
  );
};

export default Navbar;
