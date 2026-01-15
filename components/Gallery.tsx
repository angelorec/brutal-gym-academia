import React from 'react';
import { IMAGES } from '../constants';

const Gallery: React.FC = () => {
  const galleryImages = [
    IMAGES.GALLERY_1,
    IMAGES.GALLERY_2,
    IMAGES.GALLERY_3,
    IMAGES.GALLERY_4,
    IMAGES.GALLERY_5,
  ];

  return (
    <div className="bg-white py-8 md:py-12 border-b-4 border-black overflow-hidden" id="gallery">
      <div className="flex gap-4 md:gap-6 animate-marquee-slow w-max px-4 md:px-6 hover:[animation-play-state:paused]">
        {/* Double the array for seamless infinite loop */}
        {[...galleryImages, ...galleryImages].map((imgSrc, index) => (
          <div key={index} className="w-64 h-48 md:w-80 md:h-60 bg-gray-200 border-4 border-black rounded-xl overflow-hidden shrink-0 relative group">
            <div 
              className="absolute inset-0 bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-110"
              style={{ backgroundImage: `url('${imgSrc}')` }}
            ></div>
            <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;