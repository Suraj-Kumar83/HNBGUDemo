'use client';

import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// --- The main HeroSection component ---
const HeroSection = () => {
  // --- State and Logic for the Image Carousel ---
  const slides = [
    { url: '/pic1.png' },
    { url: '/pic2.png' },
    { url: '/pic3.png' },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  
  // Auto-play functionality
  useEffect(() => {
    const timer = setTimeout(nextSlide, 5000); // Change slide every 5 seconds
    return () => clearTimeout(timer);
  }, [currentIndex]);

  return (
    <section>
      {/* --- Image Carousel --- */}
      <div className='h-[500px] w-full m-auto relative group'>
        <div
          style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
          className='w-full h-full bg-center bg-cover duration-500'
        ></div>
        {/* Left Arrow */}
        <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
          <ChevronLeft onClick={prevSlide} size={30} />
        </div>
        {/* Right Arrow */}
        <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
          <ChevronRight onClick={nextSlide} size={30} />
        </div>
        {/* Dots for navigation */}
        <div className='absolute bottom-5 right-0 left-0 flex justify-center py-2'>
            {slides.map((slide, slideIndex) => (
                <div
                    key={slideIndex}
                    onClick={() => setCurrentIndex(slideIndex)}
                    className={`mx-2 h-3 w-3 rounded-full cursor-pointer ${currentIndex === slideIndex ? 'bg-white' : 'bg-gray-400'}`}
                ></div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

