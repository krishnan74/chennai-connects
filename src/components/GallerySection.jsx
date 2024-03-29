import React from "react";

const GallerySection = () => {
  return (
    <div
      className={`grid-gallery w-full max-w-[900px] mx-auto my-20 gap-1 grid overflow-hidden relative bg-white`}
    >
      <div className="grid-item overflow-hidden">
        <img src="/images/DSC_1.JPG" alt="img" className="" />
      </div>
      <div className="grid-item">
        <img src="/images/DSC_11.JPG" alt="img" className="" />
      </div>
      <div className="grid-item">
        <img src="/images/DSC_4.JPG" alt="img" className="" />
      </div>
      <div className="grid-item">
        <img src="/images/DSC_5.JPG" alt="img" className="" />
      </div>

      <div className="grid-item col-span-2 relative">
        <div className="relative">
          <img
            src="/images/DSC_6.JPG"
            alt="img"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center text-white text-[100px] font-bold bg-black bg-opacity-30">
            CHENNAI CONNECT
          </div>
        </div>
      </div>

      <div className="grid-item">
        <img src="/images/DSC_7.JPG" alt="img" className="" />
      </div>
      <div className="grid-item">
        <img src="/images/DSC_12.JPG" alt="img" className="" />
      </div>

      <a href="/Gallery">
        <div className="grid-item relative">
          <div className="relative">
            <img
              src="/images/DSC_2.JPG"
              alt="img"
              className="w-full h-full object-cover"
            />
            <div className="absolute tracking-widest text-3xl inset-0 flex items-center justify-center text-white font-bold bg-black bg-opacity-40 font-['Bebas Neue']">
              View more ➤
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};

export default GallerySection;
