import React from 'react';
import { FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa';
import Image from 'next/image';

const Footer = () => (
  <footer className="bg-white py-16 px-6">
    <div className="container mx-auto max-w-5xl text-center">
      <div className="flex flex-col items-center">
        <Image src="/images/logo.png" alt="Logo" className="w-16 h-16 mb-4" />
        <h2 className="text-3xl font-bold text-purple-600 mb-4">ahead</h2>
        <div className="flex space-x-6 mb-4">
          <div className="flex items-center space-x-2">
          <FaMapMarkerAlt className="text-green-600 mr-2" />
            <p className="text-gray-700">Auguststraße 26, 10117 Berlin</p>
          </div>
          <div className="flex items-center space-x-2">
          <FaEnvelope className="text-green-600 mr-2" />
            <p className="text-gray-700">hi@ahead-app.com</p>
          </div>
        </div>
        <a href="https://apps.apple.com" target="_blank" rel="noopener noreferrer">
          <Image src="/images/appstore.png" alt="App Store" className="w-32 h-10 mb-4" />
        </a>
        <p className="text-gray-700">© 2022 Ahead app. All rights reserved</p>
      </div>
    </div>
  </footer>
);

export default Footer;