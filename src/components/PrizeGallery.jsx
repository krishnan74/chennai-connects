import React, { useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
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
    { src: 'static/images/d1.jpg', alt: 'img-1', height: '100%', width: '100%' },
    { src: 'static/images/d2.jpg', alt: 'img-2', height: '100%', width: '100%' },
    { src: 'static/images/d3.jpg', alt: 'img-3', height: '100%', width: '100%' },
    { src: 'static/images/d4.jpg', alt: 'img-4', height: '100%', width: '100%' },
    { src: 'static/images/d5.jpg', alt: 'img-5', height: '100%', width: '100%' },
    { src: 'static/images/d6.jpg', alt: 'img-6', height: '100%', width: '100%' },
    { src: 'static/images/d7.jpg', alt: 'img-7', height: '100%', width: '100%' },
    { src: 'static/images/d1.jpg', alt: 'img-8', height: '100%', width: '100%' },
  ];

  const lightboxSlides = [...prizeGallery.slice(index), ...prizeGallery.slice(0, index)];

  return (
    <div className='w-full p-2'>
      <div className='mx-auto py-3 bg-white gap-[3px] grid grid-cols-2 sm:grid-cols-4 sm:w-[80%] '>
        {prizeGallery.map((item, idx) => (
          <div key={idx} onClick={() => handleImageClick(idx)} className='grid-item h-[35vw] sm:h-[20vw]'>
            <LazyLoadImage
              alt={item.alt}
              src={item.src}
              height={item.height}
              width={item.width}
              className='w-full h-full object-cover' />
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
