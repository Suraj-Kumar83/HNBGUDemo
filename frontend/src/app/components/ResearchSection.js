'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// --- Data for the research highlights ---
const researchData = [
  {
    date: '06 Oct 2025',
    title: 'Study on Himalayan Glacial Retreat Shows Accelerated Melting',
    description: 'A comprehensive study reveals the impact of climate change on the Gangotri glacier, providing crucial data for regional water management...',
    imageUrl: '/re1.png',
  },
  {
    date: '24 Sep 2025',
    title: 'Single-Step Method to Synthesize High-Performance Nanoparticles',
    description: 'Researchers in the Chemistry department have developed a novel, cost-effective method for nanoparticle synthesis with applications in medicine...',
    imageUrl: '/re2.jpeg',
  },
  {
    date: '12 Sep 2025',
    title: 'Do Small Farms Outperform Big Ones? A Study Reveals Changes...',
    description: 'An agricultural study across Garhwal region reveals that small, diversified farms show greater resilience to climate variability than large monocultures...',
    imageUrl: '/re3.png',
  },
  {
    date: '01 Sep 2025',
    title: 'New Bio-Pesticide Developed from Local Himalayan Flora',
    description: 'The Botany department has successfully formulated an effective and eco-friendly bio-pesticide, promising a sustainable alternative for farmers...',
    imageUrl: '/re4.jpeg',
  },
];

// --- Sub-component for a single research card ---
const ResearchCard = ({ date, title, description, imageUrl }) => (
  <div className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/3 p-4">
    <div className="bg-white rounded-lg shadow-md overflow-hidden h-full group">
      <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6 flex flex-col">
        <p className="text-sm text-gray-500 mb-2">{date}</p>
        <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
        <p className="text-sm text-gray-600 mb-4 flex-grow">{description}</p>
        <a href="#" className="text-blue-600 font-semibold mt-auto group-hover:underline transition-colors">
          View More
        </a>
      </div>
    </div>
  </div>
);

// --- The main ResearchHighlights component ---
const ResearchHighlights = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };
  
  const handleNext = () => {
    const maxIndex = researchData.length - 3; 
    setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, maxIndex > 0 ? maxIndex : 0));
  };

  return (
    <section className="bg-gray-50 py-16 px-4">
      <div className="container mx-auto relative">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Research Highlights</h2>
        
        {/* Research Cards Container */}
        <div className="overflow-hidden">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * (100 / 3)}%)` }}
          >
            {researchData.map((item, index) => (
              <ResearchCard key={index} {...item} />
            ))}
          </div>
        </div>
        
        {/* Navigation Arrows */}
        <button 
          onClick={handlePrev} 
          disabled={currentIndex === 0}
          className="absolute top-1/2 left-0 -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition"
          aria-label="Previous Research Highlight"
        >
          <ChevronLeft className="h-6 w-6 text-gray-700" />
        </button>
        <button 
          onClick={handleNext} 
          disabled={currentIndex >= researchData.length - 3}
          className="absolute top-1/2 right-0 -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition"
          aria-label="Next Research Highlight"
        >
          <ChevronRight className="h-6 w-6 text-gray-700" />
        </button>

      </div>
    </section>
  );
};

export default ResearchHighlights;
