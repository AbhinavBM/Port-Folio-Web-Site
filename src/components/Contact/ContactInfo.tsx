import React from 'react';
import type { ContactInfo as ContactInfoType } from '../../types';

interface ContactInfoProps {
  contactInfo: ContactInfoType;
}

export const ContactInfo: React.FC<ContactInfoProps> = ({ contactInfo }) => {
  return (
    <div>
      <h3 className="text-2xl font-bold mb-8">Contact Information</h3>
      <div className="space-y-6">
        <div className="flex items-center space-x-4">
          <div className="bg-blue-600 p-3 rounded-full">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <div>
            <p className="text-gray-300">Email</p>
            <p className="text-white">{contactInfo.email}</p>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <div className="bg-green-600 p-3 rounded-full">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
          </div>
          <div>
            <p className="text-gray-300">Phone</p>
            <p className="text-white">{contactInfo.phone}</p>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <div className="bg-purple-600 p-3 rounded-full">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>
          <div>
            <p className="text-gray-300">Location</p>
            <p className="text-white">{contactInfo.location}</p>
          </div>
        </div>

        <div className="mt-8">
          <h4 className="text-lg font-semibold mb-4">Connect with me</h4>
          <div className="flex space-x-4">
            <a
              href={`mailto:${contactInfo.email}`}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
            >
              Send Email
            </a>
            <a
              href="https://github.com/AbhinavBM"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-lg transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/abhinav-bm"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-700 hover:bg-blue-800 text-white px-4 py-2 rounded-lg transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
