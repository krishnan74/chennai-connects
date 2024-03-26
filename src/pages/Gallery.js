import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Lightbox from 'yet-another-react-lightbox';
import "yet-another-react-lightbox/styles.css";
import PrizeGallery from '../components/PrizeGallery';
import StartGallery from '../components/S';

const Gallery = () => {


  return (
    <>
      <div>
        <Navbar />
        <StartGallery/>
        <div className='w-fit mx-auto my-2 bg-green-300 px-2'><h1 className='text-[5rem] '>PRIZE DISTRIBUTION</h1></div>
        <PrizeGallery/>
        
      </div>
    </>
  );
};

export default Gallery;
