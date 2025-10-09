'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';

// --- Data for the news cards ---
const newsData = [
  {
    date: '08 Oct 2025',
    title: 'HNBGU commemorates Mahatma Gandhi and Lal Bahadur Shastri Jayanti',
    imageUrl: '/new2.jpg',
  },
  {
    date: '05 Oct 2025',
    title: 'HNBGU celebrates Swachhotsav 2025 with campus-wide cleanliness drive',
    imageUrl: '/new1.jpg',
  },
  {
    date: '30 Sep 2025',
    title: 'Hindi Fortnight 2025 Successfully Concluded at HNBGU Srinagar Campus',
    imageUrl: '/new3.jpeg',
  },
  {
    date: '25 Sep 2025',
    title: 'University hosts national seminar on advancements in Himalayan studies',
    imageUrl: '/news4.jpeg',
  },
];

// --- Sub-component for a single news card ---
const NewsCard = ({ date, title, imageUrl }) => (
  <div className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/3 p-4">
    <div className="bg-white rounded-lg shadow-md overflow-hidden h-full group">
      <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6 flex flex-col">
        <p className="text-sm text-gray-500 mb-2">{date}</p>
        <h3 className="text-lg font-semibold text-gray-800 mb-4 h-16">{title}</h3>
        <a href="#" className="flex items-center text-green-600 font-semibold mt-auto group-hover:text-green-800 transition-colors">
          Read More <ArrowRight size={18} className="ml-1 transform transition-transform group-hover:translate-x-1" />
        </a>
      </div>
    </div>
  </div>
);

// --- The main LatestNewsSection component ---
const LatestNewsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    // On desktop, we show 3 items, so we don't need to scroll past the first item
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };
  
  const handleNext = () => {
    // The number of "pages" is the total items minus the number visible at once
    const maxIndex = newsData.length - 3; 
    setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, maxIndex > 0 ? maxIndex : 0));
  };

  return (
    <section className="bg-gray-50 py-16 px-4">
      <div className="container mx-auto relative">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Latest News</h2>
        
        {/* News Cards Container */}
        <div className="overflow-hidden">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * (100 / 3)}%)` }} // Moves by a third of the container width
          >
            {newsData.map((news, index) => (
              <NewsCard key={index} {...news} />
            ))}
          </div>
        </div>
        
        {/* Navigation Arrows */}
        <button 
          onClick={handlePrev} 
          disabled={currentIndex === 0}
          className="absolute top-1/2 left-0 -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition"
          aria-label="Previous News"
        >
          <ChevronLeft className="h-6 w-6 text-gray-700" />
        </button>
        <button 
          onClick={handleNext} 
          disabled={currentIndex >= newsData.length - 3}
          className="absolute top-1/2 right-0 -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition"
          aria-label="Next News"
        >
          <ChevronRight className="h-6 w-6 text-gray-700" />
        </button>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="px-8 py-3 border-2 border-green-600 text-green-700 font-semibold rounded-md hover:bg-green-600 hover:text-white transition-all duration-300">
            View All
          </button>
        </div>
      </div>
    </section>
  );
};

export default LatestNewsSection;
