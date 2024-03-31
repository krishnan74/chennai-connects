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
    { src: 'static/images/d1.jpg' },
    { src: 'static/images/d2.jpg' },
    { src: 'static/images/d3.jpg' },
    { src: 'static/images/d4.jpg' },
    { src: 'static/images/d5.jpg' },
    { src: 'static/images/d6.jpg' },
    { src: 'static/images/d7.jpg' },
    { src: 'static/images/d1.jpg' },
   
  ];

  const lightboxSlides = [...prizeGallery.slice(index), ...prizeGallery.slice(0, index)];

  return (
    <div className='w-full p-2'>
<div className='mx-auto py-3 bg-white gap-[3px] grid grid-cols-2 sm:grid-cols-4 sm:w-[80%] '>

      {prizeGallery.map((item, index) => (
        <div key={index} onClick={() => handleImageClick(index)} className='grid-item  h-[35vw] sm:h-[20vw]'>
          <img src={item.src} alt={`img-${index}`} loading='lazy' className='w-full h-full object-cover' />
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
    </div>
  );
};

export default PrizeGallery;
