import React from "react";
import { MdArrowOutward } from "react-icons/md";

const GallerySection = () => {
  return (
    <div className='grid-gallery mx-auto my-28 w-full max-w-[80%]  bg-white '>
      <div className="grid-item">
        <img src="/images/DSC_1.JPG" alt="img"/>
      </div>
      <div className="grid-item">
        <img src="/images/DSC_11.JPG" alt="img"/>
      </div>
      <div className="grid-item">
        <img src="/images/DSC_3.JPG" alt="img"/>
      </div>
      <div className="grid-item">
        <img src="/images/DSC_5.JPG" alt="img"/>
      </div>
      <div className="grid-item col-span-2 relative">
        <div className="relative">
          <img
            src="/images/DSC_6.JPG"
            alt="img"

          />
          <div className="absolute h-[15vw] inset-0 flex items-center select-none justify-center text-white text-[1.3rem] sm:text-[3rem] md:text-[5rem] tracking-widest font-bold bg-black bg-opacity-50">
            CHENNAI CONNECT
          </div>
        </div>
      </div>

      <div className="grid-item">
        <img src="/images/DSC_7.JPG" alt="img"/>
      </div>
      <div className="grid-item">
        <img src="/images/DSC_12.JPG" alt="img"/>
      </div>

      <a href="/Gallery" className="grid-item ">
      
          <div className="  ">
            <img
              src="/images/DSC_2.JPG"
              alt="img"
              className="w-full h-full object-cover"
            />
            <div className="absolute p-2 tracking-widest inset-0 flex items-end justify-end text-[.4rem] sm:text-[1rem] text-white bg-black bg-opacity-40 font-sans">
              View more <div className="text-[2rem]"><MdArrowOutward/></div>
            </div>
          </div>
 
      </a>

    </div>
  );
};

export default GallerySection;
