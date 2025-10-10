'use client';

import { useState } from 'react';
import { Search, Globe, ChevronDown, Facebook, Twitter, Youtube, Instagram, Menu, X } from 'lucide-react';

// --- Sub-component for the top bar (Now Responsive) ---
const TopBar = () => (
    <div className="bg-gray-800 text-white text-sm">
        {/* Container stacks items vertically on small screens, horizontally on screens 'sm' and larger */}
        <div className="container mx-auto px-4 py-2 flex flex-col sm:flex-row justify-between items-center text-center space-y-2 sm:space-y-0">
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
                        {/* Hide "Language" text on smaller screens to save space */}
                        <span className="hidden md:inline">Language</span>
                    </button>
                </div>
            </div>
        </div>
    </div>
);

// --- Sub-component for the Logo and Title Area (Now Responsive) ---
const LogoArea = () => (
    <div className="bg-white py-4">
        {/* Container stacks items vertically on screens smaller than 'md', horizontally on medium screens and up */}
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-center md:text-left">
            <img src="/logo.png" alt="University Logo" className="h-24 w-24 object-contain" />
            <div className="flex items-center">
                <img src="/nationalflag.png" alt="Indian Flag" className="h-16 mr-4" />
                <div>
                     {/* Responsive font sizes */}
                    <h1 className="text-lg sm:text-xl font-bold text-gray-800">हेमवती नंदन बहुगुणा गढ़वाल विश्वविद्यालय (केंद्रीय विश्वविद्यालय)</h1>
                    <p className="text-base sm:text-lg text-gray-700">HEMVATI NANDAN BAHUGUNA GARHWAL UNIVERSITY (A Central University)</p>
                </div>
            </div>
            <img src="/goldenjubliee.jpg" alt="Golden Jubilee Logo" className="h-24 object-contain" />
        </div>
    </div>
);


// --- Sub-component for individual desktop navigation links with dropdown ---
const NavLink = ({ title, dropdownItems, isOpen, onMouseEnter, onMouseLeave }) => (
    <div className="relative" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
        <a href="#" className="text-white px-3 lg:px-4 py-3 flex items-center hover:bg-green-700 transition-colors text-sm lg:text-base">
            {title}
            {dropdownItems && <ChevronDown size={16} className={`ml-1 transition-transform ${isOpen ? 'rotate-180' : ''}`} />}
        </a>
        {isOpen && dropdownItems && (
            <div className="absolute top-full left-0 bg-white shadow-lg rounded-b-md w-48 z-20 py-2">
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

// --- Sub-component for the main navigation menu (Now Fully Responsive) ---
const MainNav = () => {
    const [openDropdown, setOpenDropdown] = useState(null);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const navItems = [
        { title: 'University', dropdown: ['About HNBGU', 'Vision & Mission', 'Administration'] },
        { title: 'Administration', dropdown: ['Chancellor', 'Vice-Chancellor', 'Registrar'] },
        { title: 'Statutory Bodies', dropdown: ['Executive Council', 'Academic Council', 'Finance Committee'] },
        { title: 'Schools', dropdown: ['School of Arts', 'School of Science', 'School of Commerce'] },
        { title: 'Academic', dropdown: ['Programs', 'Admissions', 'Calendar'] },
        { title: 'Central Facilities', dropdown: ['Library', 'Hostels', 'Health Center'] },
        { title: 'Admission', dropdown: ['Undergraduate', 'Postgraduate', 'Ph.D.'] },
        { title: 'Examination', dropdown: null },
    ];
    
    // Function to handle link clicks in mobile menu to close it
    const handleMobileLinkClick = () => {
        setIsMobileMenuOpen(false);
    };

    return (
        <nav className="bg-green-600 shadow-md">
            <div className="container mx-auto flex items-center justify-between lg:justify-start">
                <a href="#" aria-label="Home" className="p-3 text-white hover:bg-green-700 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
                </a>

                {/* --- Desktop Navigation --- */}
                <div className="hidden lg:flex flex-grow justify-center">
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
                
                <a href="#" className="hidden lg:block bg-green-800 text-white font-bold px-6 py-3 hover:bg-green-900 transition-colors whitespace-nowrap">
                    Download
                </a>

                {/* --- Mobile Menu Button --- */}
                <div className="lg:hidden">
                    <button onClick={() => setIsMobileMenuOpen(true)} className="p-3 text-white" aria-label="Open menu">
                        <Menu size={28} />
                    </button>
                </div>
            </div>

            {/* --- Mobile Menu Overlay --- */}
            <div className={`fixed inset-0 bg-green-700 z-50 transform ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out lg:hidden`}>
                <div className="flex justify-end p-4">
                    <button onClick={() => setIsMobileMenuOpen(false)} className="text-white" aria-label="Close menu">
                        <X size={32} />
                    </button>
                </div>
                <div className="flex flex-col items-center mt-8 space-y-2 text-white">
                    {navItems.map((item) => (
                        <div key={item.title} className="w-full text-center">
                            {item.dropdown ? (
                                <>
                                    <button
                                        onClick={() => setOpenDropdown(openDropdown === item.title ? null : item.title)}
                                        className="w-full px-4 py-3 flex items-center justify-center text-lg"
                                    >
                                        {item.title}
                                        <ChevronDown size={20} className={`ml-2 transition-transform ${openDropdown === item.title ? 'rotate-180' : ''}`} />
                                    </button>
                                    {openDropdown === item.title && (
                                        <div className="bg-green-800/50 py-2">
                                            {item.dropdown.map((subItem, index) => (
                                                <a href="#" key={index} onClick={handleMobileLinkClick} className="block py-2 text-base hover:bg-green-900 transition-colors">
                                                    {subItem}
                                                </a>
                                            ))}
                                        </div>
                                    )}
                                </>
                            ) : (
                                <a href="#" onClick={handleMobileLinkClick} className="block px-4 py-3 text-lg hover:bg-green-800 transition-colors rounded-md">
                                    {item.title}
                                </a>
                            )}
                        </div>
                    ))}
                     <a href="#" onClick={handleMobileLinkClick} className="w-4/5 mt-6 bg-green-800 text-white font-bold px-6 py-3 hover:bg-green-900 transition-colors rounded-md">
                        Download
                    </a>
                </div>
            </div>
        </nav>
    );
};


// --- The main Navbar component that combines all parts ---
const Navbar = () => {
    return (
        <header className="w-full shadow-md">
            {/* <TopBar /> */}
            <LogoArea />
            <MainNav />
        </header>
    );
};

export default Navbar;