'use client';

import { useState } from 'react';
import { Globe, BookOpen, University, CheckSquare, User, Briefcase, FileText, BarChart2, Folder, Monitor, Shield, Award } from 'lucide-react';

// --- Data for the links ---
const leftLinks = [
  { text: 'Online Facility/Cyber Crime', icon: Globe, color: 'bg-blue-500' },
  { text: 'Swayam MOOCs online', icon: BookOpen, color: 'bg-orange-500' },
  { text: 'UGC - MMTTC', icon: University, color: 'bg-green-500' },
  { text: 'Appointments/Recruitment', icon: CheckSquare, color: 'bg-teal-500' },
  { text: 'Foreign Students Office', icon: User, color: 'bg-yellow-600' },
  { text: 'TPIC', icon: Briefcase, color: 'bg-indigo-500' },
];

const rightLinks = [
  { text: 'IQAC', icon: Award, color: 'bg-teal-600' },
  { text: 'NAAC', icon: Award, color: 'bg-yellow-700' },
  { text: 'NIRF', icon: BarChart2, color: 'bg-green-600' },
  { text: 'DACE', icon: Monitor, color: 'bg-sky-500' },
  { text: 'Seminar / Conferences', icon: Folder, color: 'bg-indigo-600' },
  { text: 'Annual Report & Accounts', icon: FileText, color: 'bg-blue-600' },
];

// --- Data for the center tabs ---
const tabContent = {
  notifications: [
    { text: 'Notification regarding M.Sc. (Environmental Science) - reg.', url: '#' },
    { text: 'Notification Regarding for CGPA in Agriculture Courses.', url: '#' },
    { text: 'GATE and JAM Outreach Program-reg.', url: '#' },
    { text: 'NOTIFICATION (FOR BA 1ST SEMESTER STUDENTS)', url: '#' },
  ],
  news: [
    { text: 'Press release regarding recent university achievements.', url: '#' },
    { text: 'Upcoming cultural fest "Goonj 2025" details announced.', url: '#' },
    { text: 'HNBGU signs MoU with leading research institution.', url: '#' },
  ],
  etenders: [
    { text: 'Tender for procurement of laboratory equipment.', url: '#' },
    { text: 'E-Tender for campus landscaping and maintenance.', url: '#' },
    { text: 'Notice inviting tender for IT hardware supply.', url: '#' },
  ],
};

// --- Sub-component for a single link button ---
const LinkButton = ({ text, icon: Icon, color }) => (
  <a href="#" className={`flex items-center w-full p-3 mb-3 text-white font-semibold rounded-md ${color} hover:opacity-90 transition-opacity`}>
    <Icon size={20} className="mr-3" />
    <span>{text}</span>
  </a>
);

// --- Sub-component for a notification item ---
const NotificationItem = ({ text, url }) => (
    <a href={url} className="flex items-start p-2 hover:bg-gray-100 rounded-md">
        <span className="text-orange-500 mt-1 mr-2">&#9679;</span>
        <p className="text-sm text-gray-700">{text}</p>
    </a>
);


// --- The main LinksContentSection component ---
const LinksContentSection = () => {
  const [activeTab, setActiveTab] = useState('notifications');

  return (
    <section className="py-12 bg-gray-100">
      {/* Top Banner */}
      <div className="container mx-auto px-4 mb-8">
          <div className="bg-indigo-900 text-white text-center font-bold py-3 rounded-t-lg relative">
              <div className="absolute left-0 top-0 bottom-0 w-4 bg-orange-500 rounded-tl-lg"></div>
              (MENTAL HEALTH HELPLINE Timing: Friday & Saturday (5:00 PM TO 7:00 PM))
              <div className="absolute right-0 top-0 bottom-0 w-4 bg-green-500 rounded-tr-lg"></div>
          </div>
      </div>
      
      {/* Main Content Grid */}
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-12 gap-8">
        
        {/* Left Column */}
        <div className="md:col-span-3">
          {leftLinks.map((link, index) => (
            <LinkButton key={index} {...link} />
          ))}
        </div>

        {/* Center Column */}
        <div className="md:col-span-6 bg-white p-4 rounded-lg shadow-sm">
            {/* Tabs */}
            <div className="flex border-b">
                <button 
                    onClick={() => setActiveTab('notifications')}
                    className={`px-4 py-2 font-semibold ${activeTab === 'notifications' ? 'border-b-2 border-green-600 text-green-700 bg-green-50' : 'text-gray-500'}`}
                >
                    Notification / Circulars
                </button>
                <button 
                    onClick={() => setActiveTab('news')}
                    className={`px-4 py-2 font-semibold ${activeTab === 'news' ? 'border-b-2 border-green-600 text-green-700 bg-green-50' : 'text-gray-500'}`}
                >
                    News
                </button>
                <button 
                    onClick={() => setActiveTab('etenders')}
                    className={`px-4 py-2 font-semibold ${activeTab === 'etenders' ? 'border-b-2 border-green-600 text-green-700 bg-green-50' : 'text-gray-500'}`}
                >
                    E-Tenders
                </button>
                <a href="#" className="ml-auto text-sm text-blue-600 hover:underline self-center">View All</a>
            </div>
            
            {/* Tab Content */}
            <div className="mt-4 space-y-2">
                {tabContent[activeTab].map((item, index) => (
                    <NotificationItem key={index} {...item} />
                ))}
            </div>
        </div>

        {/* Right Column */}
        <div className="md:col-span-3">
          {rightLinks.map((link, index) => (
            <LinkButton key={index} {...link} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default LinksContentSection;
