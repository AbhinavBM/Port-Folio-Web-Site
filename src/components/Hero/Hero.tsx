import React from 'react';

const Hero: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col md:flex-row items-center justify-center relative px-6 bg-black"
    >
      {/* Left: Text */}
      <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left py-12 md:py-0 md:pl-[10%] md:ml-[5%] max-w-[500px] z-10 relative">
        <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 leading-tight tracking-tight whitespace-nowrap">
          I am Abhinav B M
        </h1>
        <p className="text-xl md:text-3xl lg:text-4xl text-white font-light tracking-wide mb-8">
          Software Development Engineer
        </p>
        <div className="flex justify-center md:justify-start space-x-6">
          <button
            onClick={() => scrollToSection("portfolio")}
            className="bg-white text-black px-6 py-3 rounded-lg hover:bg-gray-200 transition-colors font-medium"
          >
            View My Work
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="border-2 border-white text-white px-6 py-3 rounded-lg hover:bg-white hover:text-black transition-colors font-medium"
          >
            Get In Touch
          </button>
        </div>
      </div>

      {/* Right: Image */}
      <div className="w-full md:w-1/2 flex justify-center md:justify-end md:pr-12 relative z-0">
        <img
          src="https://i.imghippo.com/files/GVsZ2749Eg.jpeg"
          alt="Abhinav B M"
          className="w-auto max-h-[50vh] md:max-h-[90vh] object-contain rounded-lg shadow-lg scale-115"
        />
      </div>
    </section>
  );
};

export default Hero;
