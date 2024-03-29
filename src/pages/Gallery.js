import React from 'react';
import Navbar from '../components/Navbar';
import "yet-another-react-lightbox/styles.css";
import PrizeGallery from '../components/PrizeGallery';
import StartGallery from '../components/StartGallery';

const Gallery = () => {


  return (
    <>
      <div>
        <Navbar />
        <StartGallery/>
        <div className='w-fit mx-auto my-2 bg-green-300 px-2'><h1 className='text-[3rem] sm:text-[5rem] md:text-[7rem]'>PRIZE DISTRIBUTION</h1></div>
        <PrizeGallery/>
        
      </div>
    </>
  );
};

export default Gallery;
