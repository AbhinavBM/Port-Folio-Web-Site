import React from 'react';
import { useActiveSection } from '../../hooks/useActiveSection';

const Navigation: React.FC = () => {
  const { activeSection, scrollToSection } = useActiveSection();

  return (
    <nav className="fixed top-0 w-full bg-black/90 backdrop-blur-sm z-50">
      <div className="max-w-7xl mx-auto px-6 py-6">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold text-white">
            DevFolio
          </div>
          <div className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection('home')}
              className="hover:text-gray-300 transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className={`hover:text-gray-300 transition-colors ${activeSection === 'about' ? 'border-b-2 border-white pb-1' : ''}`}
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className={`hover:text-gray-300 transition-colors ${activeSection === 'services' ? 'border-b-2 border-white pb-1' : ''}`}
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('portfolio')}
              className={`hover:text-gray-300 transition-colors ${activeSection === 'portfolio' ? 'border-b-2 border-white pb-1' : ''}`}
            >
              Experience
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className={`hover:text-gray-300 transition-colors ${activeSection === 'contact' ? 'border-b-2 border-white pb-1' : ''}`}
            >
              Contact
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
