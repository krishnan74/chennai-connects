import React, { useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import "yet-another-react-lightbox/styles.css";

const StartGallery = () => {
  const [index, setIndex] = useState(0);
  const [open, setOpen] = useState(false);

  const handleImageClick = (index) => {
    setOpen(true);
    setIndex(index);
  };


  const startGallery = [
    { src: 'static/images/s1.jpg' },
    { src: 'static/images/s2.jpg' },
    { src: 'static/images/s3.jpg' },
    { src: 'static/images/s4.jpg' },
    { src: 'static/images/s1.jpg' },
    { src: 'static/images/s2.jpg' },
    { src: 'static/images/s3.jpg' },
    { src: 'static/images/s4.jpg' },
   
  ];

  const lightboxSlides = [...startGallery.slice(index), ...startGallery.slice(0, index)];

  return (
    <div className='w-full p-2'>
<div className='mx-auto py-3 bg-white gap-[3px] grid grid-cols-2 sm:grid-cols-4 sm:w-[80%] '>

      {startGallery.map((item, index) => (
        <div key={index} onClick={() => handleImageClick(index)} className='grid-item  h-[35vw] sm:h-[20vw]'>
          <img src={item.src} alt={`img-${index}`} className='w-full h-full object-cover' />
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

export default StartGallery;
