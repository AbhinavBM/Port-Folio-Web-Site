import React from 'react';
import { SERVICES } from '../../constants';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Services</h2>
          <p className="text-xl text-gray-300">What I can do for you</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <div 
              key={index} 
              className="bg-gray-900 p-8 rounded-lg hover:bg-gray-800 transition-colors"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-gray-300">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
