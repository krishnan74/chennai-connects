import React from "react";

const Navbar = () => {
  return (
    <div className="w-full flex justify-between items-center">
      <div className="logoDiv">
        <img src="" alt="" />
      </div>

      <div className="navLinks flex justify-evenly items-center">
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
        <a href="/partners" className="navLink">
          Our Partners
        </a>
      </div>
    </div>
  );
};

export default Navbar;
