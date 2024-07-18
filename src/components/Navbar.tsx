import React from 'react';

const Navbar = () => (
  <nav className="bg-white py-4 shadow-md">
    <div className="container mx-auto flex justify-between items-center">
      <div className="flex items-center space-x-4">
        <img src="/images/logo.png" alt="Logo" className="w-10 h-10" />
      </div>
      <ul className="flex space-x-8 text-lg">
        <li><a href="#emotions" className="hover:text-gray-600">Emotions</a></li>
        <li><a href="#manifesto" className="hover:text-gray-600">Manifesto</a></li>
        <li><a href="#test" className="hover:text-gray-600">Self-awareness test</a></li>
        <li><a href="#work" className="hover:text-gray-600">Work With Us</a></li>
      </ul>
      <button className="bg-black text-white px-4 py-2 rounded-full">Download app</button>
    </div>
  </nav>
);

export default Navbar;