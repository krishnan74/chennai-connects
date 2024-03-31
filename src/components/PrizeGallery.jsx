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

  const lightboxSlides = [
    { src: 'static/images/d1.jpg' },
    { src: 'static/images/d2.jpg' },
    { src: 'static/images/d3.jpg' },
    { src: 'static/images/d4.jpg' },
    { src: 'static/images/d5.jpg' },
    { src: 'static/images/d6.jpg' },
    { src: 'static/images/d7.jpg' },
    { src: 'static/images/d1.jpg' },
  ];

  return (
    <div className='w-full p-2'>
      <div className='mx-auto py-3 bg-white gap-[3px] grid grid-cols-2 sm:grid-cols-4 sm:w-[80%] '>
        {/* Image 1 */}
        <div onClick={() => handleImageClick(0)} className='grid-item  h-[35vw] sm:h-[20vw]'>
          <img src='static/images/d1.jpg' alt='img-0' className='w-full h-full object-cover' />
        </div>
        {/* Image 2 */}
        <div onClick={() => handleImageClick(1)} className='grid-item  h-[35vw] sm:h-[20vw]'>
          <img src='static/images/d2.jpg' alt='img-1' className='w-full h-full object-cover' />
        </div>
        {/* Image 3 */}
        <div onClick={() => handleImageClick(2)} className='grid-item  h-[35vw] sm:h-[20vw]'>
          <img src='static/images/d3.jpg' alt='img-2' className='w-full h-full object-cover' />
        </div>
        {/* Image 4 */}
        <div onClick={() => handleImageClick(3)} className='grid-item  h-[35vw] sm:h-[20vw]'>
          <img src='static/images/d4.jpg' alt='img-3' className='w-full h-full object-cover' />
        </div>
        {/* Image 5 */}
        <div onClick={() => handleImageClick(4)} className='grid-item  h-[35vw] sm:h-[20vw]'>
          <img src='static/images/d5.jpg' alt='img-4' className='w-full h-full object-cover' />
        </div>
        {/* Image 6 */}
        <div onClick={() => handleImageClick(5)} className='grid-item  h-[35vw] sm:h-[20vw]'>
          <img src='static/images/d6.jpg' alt='img-5' className='w-full h-full object-cover' />
        </div>
        {/* Image 7 */}
        <div onClick={() => handleImageClick(6)} className='grid-item  h-[35vw] sm:h-[20vw]'>
          <img src='static/images/d7.jpg' alt='img-6' className='w-full h-full object-cover' />
        </div>
        {/* Image 8 */}
        <div onClick={() => handleImageClick(7)} className='grid-item  h-[35vw] sm:h-[20vw]'>
          <img src='static/images/d1.jpg' alt='img-7' className='w-full h-full object-cover' />
        </div>
      </div>
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
