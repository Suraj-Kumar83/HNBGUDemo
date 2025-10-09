'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// --- Data for the events calendar ---
const eventsData = [
  {
    date: '15 Oct 2025',
    title: "Institution's Innovation Day",
  },
  {
    date: '27 Oct 2025 to 30 Oct 2025',
    title: 'Vigilance Awareness Week',
  },
  {
    date: '31 Oct 2025',
    title: 'Rashtriya Ekta Diwas',
  },
  {
    date: '05 Nov 2025',
    title: 'Annual Sports Meet Commencement',
  },
  {
    date: '14 Nov 2025',
    title: 'Foundation Day Lecture Series',
  },
];

// --- Sub-component for a single event card ---
const EventCard = ({ date, title }) => (
  <div className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/3 px-4 text-center">
    <p className="text-sm text-gray-500 mb-2">{date}</p>
    <a href="#" className="text-lg font-semibold text-blue-600 hover:underline">
      {title}
    </a>
  </div>
);

// --- The main EventsCalendar component ---
const EventsCalendar = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? eventsData.length - 3 : Math.max(prevIndex - 1, 0)));
  };

  const handleNext = () => {
    const maxIndex = eventsData.length - 3;
    setCurrentIndex((prevIndex) => (prevIndex >= maxIndex ? 0 : Math.min(prevIndex + 1, maxIndex)));
  };

  return (
    <section className="bg-white py-16 px-4">
      <div className="container mx-auto relative">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Events Calendar</h2>
        
        <div className="flex items-center justify-center">
            {/* Left Arrow */}
            <button 
              onClick={handlePrev} 
              className="p-2 rounded-full hover:bg-gray-100 transition"
              aria-label="Previous Event"
            >
              <ChevronLeft className="h-8 w-8 text-gray-600" />
            </button>

            {/* Events Container */}
            <div className="overflow-hidden w-full max-w-4xl">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * (100 / 3)}%)` }}
              >
                {eventsData.map((event, index) => (
                  <EventCard key={index} {...event} />
                ))}
              </div>
            </div>

            {/* Right Arrow */}
            <button 
              onClick={handleNext} 
              className="p-2 rounded-full hover:bg-gray-100 transition"
              aria-label="Next Event"
            >
              <ChevronRight className="h-8 w-8 text-gray-600" />
            </button>
        </div>
      </div>
    </section>
  );
};

export default EventsCalendar;
