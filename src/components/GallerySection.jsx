import React from "react";
import { MdArrowOutward } from "react-icons/md";

const GallerySection = () => {
  return (
    <div className='mx-auto gap-[3px] grid grid-cols-2 sm:grid-cols-3 w-full max-w-[80%]  bg-white '>
      <div className="grid-item h-[35vw] sm:h-[15vw]">
        <img src="static/images/DSC_1.JPG" loading="lazy" alt="img"/>
      </div>
      <div className="grid-item h-[35vw] sm:h-[15vw]">
        <img src="static/images/DSC_11.JPG" loading="lazy" alt="img"/>
      </div>
      <div className="grid-item h-[35vw] sm:h-[15vw]">
        <img src="static/images/DSC_3.JPG" loading="lazy" alt="img"/>
      </div>
      <div className="grid-item h-[35vw] sm:h-[15vw]">
        <img src="static/images/DSC_5.JPG" loading="lazy" alt="img"/>
      </div>
      <div className="grid-item h-[35vw] sm:h-[15vw] col-span-2 relative">
        <div className="relative">
          <img
            src="static/images/DSC_6.JPG"
            loading="lazy" alt="img"

          />
          <div className="absolute h-[35vw] sm:h-[15vw] inset-0 flex items-center select-none justify-center text-white text-[2rem] sm:text-[3rem] md:text-[3rem] lg:text-[3rem] xl:text-[5rem] tracking-widest font-bold bg-black bg-opacity-50">
            CHENNAI CONNECTS
          </div>
        </div>
      </div>

      <div className="grid-item h-[35vw] sm:h-[15vw]">
        <img src="static/images/DSC_7.JPG" loading="lazy" alt="img"/>
      </div>
      <div className="grid-item h-[35vw] sm:h-[15vw]">
        <img src="static/images/DSC_12.JPG" loading="lazy" alt="img"/>
      </div>

      <a href="/gallery" className="grid-item h-[35vw] sm:h-[15vw] ">
      
          <div className=" ">
            <img
              src="static/images/DSC_2.JPG"
              loading="lazy" alt="img"
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
