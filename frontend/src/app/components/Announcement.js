import { ArrowRight } from 'lucide-react';

// --- Sub-component for a single announcement item ---
const AnnouncementItem = ({ text }) => (
  <a href="#" className="flex items-start space-x-3 text-gray-700 group">
    <ArrowRight className="w-5 h-5 mt-1 text-orange-500 flex-shrink-0 transform transition-transform group-hover:translate-x-1" />
    <span className="group-hover:text-green-700 transition-colors">{text}</span>
  </a>
);

// --- The main AnnouncementSection component ---
const AnnouncementSection = () => {
  const announcements = [
    { text: 'Applications are invited for Undergraduate Common Entrance Exam for admission to B.Des programmes.' },
    { text: 'Applications are invited for Common Entrance Exam for admission to M.Des & PhD Programmes.' },
    { text: 'Office order regarding CUET(UG) 2025 Examination for admission in HNB Garhwal University.' },
    { text: 'Certificate in Supply Chain Analytics with AI & ML Applications.' },
    { text: 'JAM Application Portal (JOAPS) is now open for postgraduate admissions.' },
    { text: 'UCEED & CEED 2026 Examination date: UCEED & CEED 2026 will be held on Sunday, 18th January, 2026 (9:00 AM to 12:00 Noon).' },
  ];

  return (
    <section className="bg-white py-16 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Announcements</h2>
        
        {/* Announcements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-6 border-b pb-12">
          {announcements.map((item, index) => (
            <div 
              key={index} 
              className={`space-y-6 ${index > 0 ? 'md:border-l md:pl-8' : ''} ${index > 1 ? 'lg:border-l lg:pl-8' : ''} border-gray-200`}
            >
              <AnnouncementItem text={item.text} />
              {/* This structure allows for multiple announcements per column if needed, but we'll use one for now */}
            </div>
          ))}
        </div>
        
        {/* More Button */}
        <div className="text-center mt-12">
          <button className="px-8 py-3 border-2 border-green-600 text-green-700 font-semibold rounded-md hover:bg-green-600 hover:text-white transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50">
            More
          </button>
        </div>
      </div>
    </section>
  );
};

export default AnnouncementSection;
