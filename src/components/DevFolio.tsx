import React from 'react';
import { useActiveSection } from '../hooks/useActiveSection';
import Navigation from './Navigation/Navigation';
import Hero from './Hero/Hero';
import About from './About/About';
import Services from './Services/Services';
import Portfolio from './Portfolio/Portfolio';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';

/**
 * Main DevFolio component - now refactored to use composition pattern
 * with smaller, focused components and custom hooks
 */
const DevFolio: React.FC = () => {
  const { activeSection, scrollToSection } = useActiveSection();

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
};

export default DevFolio;
