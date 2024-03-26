import React, { useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import "yet-another-react-lightbox/styles.css";

const PrizeGallery = () => {
  const [index, setIndex] = useState(0);
  const [open, setOpen] = useState(false);

  const handleImageClick = (index) => {
    setOpen(true);
    setIndex(index);
  };



  const prizeGallery = [
    { src: '/images/prize/d1.jpg' },
    { src: '/images/prize/d2.jpg' },
    { src: '/images/prize/d3.jpg' },
    { src: '/images/prize/d4.jpg' },
    { src: '/images/prize/d5.jpg' },
    { src: '/images/prize/d6.jpg' },
    { src: '/images/prize/d7.jpg' },
    { src: '/images/prize/d1.jpg' },
    { src: '/images/prize/d2.jpg' },
  ];

  const lightboxSlides = [...prizeGallery.slice(index), ...prizeGallery.slice(0, index)];

  return (
    <div className='grid-gallery w-full max-w-[900px] mx-auto my-20 gap-1 grid overflow-hidden relative'>
      {prizeGallery.map((item, index) => (
        <div key={index} onClick={() => handleImageClick(index)} className='grid-item'>
          <img src={item.src} alt={`img-${index}`} className='' />
        </div>
      ))}
      <div>
        <Lightbox
          open={open}
          slides={lightboxSlides}
          close={() => setOpen(false)}
        
        />
      </div>
    </div>
  );
};

export default PrizeGallery;
