'use client'; // This directive is necessary for using state and event handlers

import { useState } from 'react';
import { Search, Globe, ChevronDown, Facebook, Twitter, Youtube, Instagram } from 'lucide-react';

// --- Sub-component for the very top bar (No changes here) ---
const TopBar = () => (
  <div className="bg-gray-800 text-white text-sm">
    <div className="container mx-auto px-4 py-2 flex justify-between items-center">
      <p>Welcome to Hemvati Nandan Bahuguna Garhwal University</p>
      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-2">
          <a href="#" aria-label="Facebook" className="hover:text-green-400 transition-colors"><Facebook size={16} /></a>
          <a href="#" aria-label="Twitter" className="hover:text-green-400 transition-colors"><Twitter size={16} /></a>
          <a href="#" aria-label="YouTube" className="hover:text-green-400 transition-colors"><Youtube size={16} /></a>
          <a href="#" aria-label="Instagram" className="hover:text-green-400 transition-colors"><Instagram size={16} /></a>
        </div>
        <div className="flex items-center space-x-4 ml-4">
            <button aria-label="Search" className="hover:text-green-400 transition-colors"><Search size={18} /></button>
            <button aria-label="Sitemap" className="hover:text-green-400 transition-colors">A</button>
            <button aria-label="Language" className="flex items-center hover:text-green-400 transition-colors">
                <Globe size={18} className="mr-1" />
                <span>Language</span>
            </button>
        </div>
      </div>
    </div>
  </div>
);

// --- Sub-component for the Logo and Title Area (No changes here) ---
const LogoArea = () => (
    <div className="bg-white py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
            {/* University Logo - Now using local image */}
            <img src="/logo.png" alt="University Logo" className="h-24 w-24 object-contain"/>

            {/* University Name and Indian Flag */}
            <div className="flex items-center text-center">
                 {/* Tiranga Flag - Now using local image */}
                 <img src="/nationalflag.png" alt="Indian Flag" className="h-18 mr-4"/>
                <div>
                    <h1 className="text-xl font-bold text-gray-800">हेमवती नंदन बहुगुणा गढ़वाल विश्वविद्यालय (केंद्रीय विश्वविद्यालय)</h1>
                    <p className="text-lg text-gray-700">HEMVATI NANDAN BAHUGUNA GARHWAL UNIVERSITY (A Central University)</p>
                </div>
            </div>

            {/* Golden Jubilee Logo - Now using local image */}
            <img src="/goldenjubliee.jpg" alt="Golden Jubilee Logo" className="h-24 object-contain"/>
        </div>
    </div>
);


// --- Sub-component for individual navigation links with dropdown (UPDATED) ---
const NavLink = ({ title, dropdownItems, isOpen, onMouseEnter, onMouseLeave }) => (
  <div className="relative" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
    <a href="#" className="text-white px-4 py-3 flex items-center hover:bg-green-700 transition-colors">
      {title}
      {/* Show dropdown icon only if there are items */}
      {dropdownItems && <ChevronDown size={16} className="ml-1" />}
    </a>
    {/* Show dropdown menu if it's open and there are items */}
    {isOpen && dropdownItems && (
      <div className="absolute top-full left-0 bg-white shadow-lg rounded-b-md w-48 z-10 py-2">
        {dropdownItems.map((item, index) => (
          <a 
            href="#" 
            key={index} 
            className="block px-4 py-2 text-sm text-gray-800 hover:bg-green-50 transition-colors"
          >
            {item}
          </a>
        ))}
      </div>
    )}
  </div>
);

// --- Sub-component for the main navigation menu (UPDATED) ---
const MainNav = () => {
    // State to manage which dropdown is currently open
    const [openDropdown, setOpenDropdown] = useState(null);

    // Data for navigation links and their dropdowns
    const navItems = [
        { title: 'University', dropdown: ['About HNBGU', 'Vision & Mission', 'Administration'] },
        { title: 'Administration', dropdown: ['Chancellor', 'Vice-Chancellor', 'Registrar'] },
        { title: 'Statutory Bodies', dropdown: ['Executive Council', 'Academic Council', 'Finance Committee'] },
        { title: 'Schools', dropdown: ['School of Arts', 'School of Science', 'School of Commerce'] },
        { title: 'Academic', dropdown: ['Programs', 'Admissions', 'Calendar'] },
        { title: 'Central Facilities', dropdown: ['Library', 'Hostels', 'Health Center'] },
        { title: 'Admission', dropdown: ['Undergraduate', 'Postgraduate', 'Ph.D.'] },
        { title: 'Examination', dropdown: null }, // No dropdown for this one
    ];

    return (
        <nav className="bg-green-600 shadow-md">
            <div className="container mx-auto flex items-center">
                <a href="#" aria-label="Home" className="p-3 text-white hover:bg-green-700 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
                </a>
                <div className="flex-grow flex justify-center">
                    {navItems.map((item) => (
                        <NavLink
                            key={item.title}
                            title={item.title}
                            dropdownItems={item.dropdown}
                            isOpen={openDropdown === item.title}
                            onMouseEnter={() => setOpenDropdown(item.title)}
                            onMouseLeave={() => setOpenDropdown(null)}
                        />
                    ))}
                </div>
                <a href="#" className="bg-green-800 text-white font-bold px-6 py-3 hover:bg-green-900 transition-colors">
                    Download
                </a>
            </div>
        </nav>
    );
};


// --- The main Navbar component that combines all parts ---
const Navbar = () => {
  return (
    <header className="w-full">
      {/* <TopBar /> */}
      <LogoArea />
      <MainNav />
    </header>
  );
};

export default Navbar;

