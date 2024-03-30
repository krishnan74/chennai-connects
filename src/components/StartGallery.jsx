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
    { src: '/images/start/s1.jpg' },
    { src: '/images/start/s2.jpg' },
    { src: '/images/start/s3.jpg' },
    { src: '/images/start/s4.jpg' },
    { src: '/images/start/s1.jpg' },
    { src: '/images/start/s2.jpg' },
    { src: '/images/start/s3.jpg' },
    { src: '/images/start/s4.jpg' },
    { src: '/images/start/s1.jpg' },
  ];

  const lightboxSlides = [...startGallery.slice(index), ...startGallery.slice(0, index)];

  return (
    <div className='grid-gallery mx-auto my-28 w-full max-w-[80%]  bg-white '>
      {startGallery.map((item, index) => (
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

export default StartGallery;
