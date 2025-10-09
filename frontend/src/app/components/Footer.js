'use client';

import { ArrowUp } from 'lucide-react';

const Footer = () => {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const importantLinks = [
    { name: 'Publication / Journals', href: '#' },
    { name: 'Right To Information', href: '#' },
    { name: 'E-Tender', href: '#' },
    { name: 'Notification / Circulars', href: '#' },
    { name: 'Alumni', href: '#' },
    { name: '12th Convocation', href: '#', highlighted: true },
    { name: 'Phonebook', href: '#' },
    { name: 'Student Activities', href: '#' },
    { name: 'HNBGU Mail access', href: '#' },
    { name: 'MOUs', href: '#' },
    { name: 'Student Grievance', href: '#' },
    { name: 'Miscellaneous', href: '#' },
    { name: 'Training and Placement', href: '#' },
    { name: "What's New", href: '#' },
    { name: '71th Anniversary of Constitution Day', href: '#' },
    { name: 'Learning Management System for HNBGU', href: '#' },
    { name: 'RDC', href: '#' },
    { name: 'Institute Innovation Cell', href: '#' },
    { name: 'Archives', href: '#' },
    { name: 'Central Library', href: '#' },
    { name: 'Endowment/Donation Portal', href: '#' },
    { name: 'HAR GHAR TIRANGA', href: '#' },
    { name: 'MENTAL HEALTH HELPLINE', href: '#' },
    { name: 'Organization Chart', href: '#' },
    { name: 'Proctorial Board', href: '#' },
    { name: 'UGC e-Samadhan portal', href: '#' },
  ];

  const quickLinks = [
    { name: 'Sitemap', href: '#' },
    { name: 'Privacy Policy', href: '#' },
    { name: 'Disclaimer', href: '#' },
    { name: 'IT Web Manager', href: '#' },
    { name: 'Contact Us', href: '#' },
    { name: 'Help', href: '#' },
  ];


  return (
    <footer className="bg-gray-900 text-gray-400 pt-16 pb-8 relative">
      <div className="container mx-auto px-4">
        
        {/* Important Links */}
        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold text-white mb-4">Important Links</h3>
          <div className="w-20 h-0.5 bg-green-500 mx-auto"></div>
          <div className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-3">
            {importantLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className={`hover:text-white transition-colors ${link.highlighted ? 'text-yellow-400 border border-yellow-400 px-2 py-1 rounded' : ''}`}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-white mb-4">Quick Links</h3>
            <div className="w-20 h-0.5 bg-green-500 mx-auto"></div>
            <div className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-3">
                {quickLinks.map((link) => (
                    <a key={link.name} href={link.href} className="hover:text-white transition-colors">{link.name}</a>
                ))}
            </div>
        </div>
        
        {/* Contact Us */}
        <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Contact Us</h3>
            <div className="w-20 h-0.5 bg-green-500 mx-auto"></div>
            <p className="mt-8">H.N.B.Garhwal University, Srinagar – 246174, Dist.Garhwal (Uttarakhand), India</p>
        </div>

      </div>
      
      {/* Scroll to top button */}
      <button 
        onClick={scrollToTop}
        className="absolute bottom-8 right-8 bg-green-600 text-white p-3 rounded-full hover:bg-green-700 transition-colors shadow-lg"
        aria-label="Scroll to top"
      >
        <ArrowUp size={24} />
      </button>

    </footer>
  );
};

export default Footer;

