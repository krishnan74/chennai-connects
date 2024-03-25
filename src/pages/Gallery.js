import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Lightbox from 'yet-another-react-lightbox';
import "yet-another-react-lightbox/styles.css";

const Gallery = () => {

  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (src) => {
    setSelectedImage(src);
    setOpen(true);
  };

  return (
    <>
      <div>
        <Navbar />
        <div className='grid-gallery w-full max-w-[900px] mx-auto my-20 gap-1 grid overflow-hidden relative'>

          <div onClick={() => handleImageClick('/images/DSC_1.JPG')} className='grid-item overflow-hidden'>
            <img src='/images/DSC_1.JPG' alt='img' className='' />
          </div>
          <div onClick={() => handleImageClick('/images/DSC_11.JPG')} className='grid-item'>
            <img src='/images/DSC_11.JPG' alt='img' className='' />
          </div>
          <div onClick={() => handleImageClick('/images/DSC_4.JPG')} className='grid-item'>
            <img src='/images/DSC_4.JPG' alt='img' className='' />
          </div>
          <div onClick={() => handleImageClick('/images/DSC_5.JPG')} className='grid-item'>
            <img src='/images/DSC_5.JPG' alt='img' className='' />
          </div>
          <div onClick={() => handleImageClick('/images/DSC_6.JPG')} className='grid-item col-span-2 relative'>
            <img src='/images/DSC_6.JPG' alt='img' className='w-full h-full object-cover' />
          </div>
          <div onClick={() => handleImageClick('/images/DSC_7.JPG')} className='grid-item'>
            <img src='/images/DSC_7.JPG' alt='img' className='' />
          </div>
          <div onClick={() => handleImageClick('/images/DSC_12.JPG')} className='grid-item'>
            <img src='/images/DSC_12.JPG' alt='img' className='' />
          </div>
          <div onClick={() => handleImageClick('/images/DSC_2.JPG')} className='grid-item relative'>
            <img src='/images/DSC_2.JPG' alt='img' className='w-full h-full object-cover' />
          </div>
          
        </div>

        <div>
          <Lightbox open={open} slides={[
            { src: selectedImage },
            
          ]}
          close={() => setOpen(false)}
      
          />
        </div>
      </div>
    </>
  );
};

export default Gallery;
