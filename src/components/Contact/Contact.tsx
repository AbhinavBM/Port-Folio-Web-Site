import React from 'react';
import { useContactForm } from '../../hooks/useContactForm';
import { CONTACT_INFO } from '../../constants';
import { ContactForm } from './ContactForm';
import { ContactInfo } from './ContactInfo';

const Contact: React.FC = () => {
  const contactFormHook = useContactForm();

  return (
    <section id="contact" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-xl text-gray-300">Let's discuss your next project</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <ContactInfo contactInfo={CONTACT_INFO} />
          <ContactForm {...contactFormHook} />
        </div>
      </div>
    </section>
  );
};

export default Contact;
