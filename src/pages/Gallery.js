import React from 'react';
import { useState } from 'react';


const Gallery = () => {

  const [isHover,setIsHover] = useState(false)

  return (
    <div className='w-full m-w-5xl p-2'>
      <h1 className='text-[12rem] text-red-600'>hii</h1>
      
     <div className='img-gallery-container'><img src='/images/DSC_7448.JPG' className='img-container'></img></div> 
      <img src='/images/DSC_7467.JPG'></img>
      <img src='/images/DSC_7548.JPG'></img>
      <img src='/images/DSC_7325.JPG'></img>
      <img src='/images/DSC_7396.JPG'></img>
      <img src='/images/DSC_7447.JPG'></img>
    </div>
  )
}

export default Gallery