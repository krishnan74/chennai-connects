import React from 'react';


const Gallery = () => {

  return (
    <div className='w-full m-w-5xl p-2 mx-auto mb-2 gap-2 columns-3'>
      
     <div className='img-gallery-container'><img src='/images/DSC_7448.JPG' className='img-container'></img></div> 
     <div className='img-gallery-container'><img src='/images/DSC_7467.JPG' className='img-container'></img></div> 
     <div className='img-gallery-container'><img src='/images/DSC_7548.JPG' className='img-container'></img></div> 
     <div className='img-gallery-container'><img src='/images/DSC_7325.JPG' className='img-container'></img></div> 
     <div className='img-gallery-container'><img src='/images/DSC_7396.JPG' className='img-container'></img></div> 
     <div className='img-gallery-container'><img src='/images/DSC_7447.JPG' className='img-container'></img></div> 
    </div>
  )
}

export default Gallery