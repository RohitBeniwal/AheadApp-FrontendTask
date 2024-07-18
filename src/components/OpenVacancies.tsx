import React from 'react';
import Image from 'next/image';

const OpenVacancies = () => (
  <section className="bg-white py-16 px-6">
    <div className="container mx-auto text-center">
      <h2 className="text-4xl font-bold text-gray-900 mb-8">Open vacancies</h2>
      <div className="flex flex-col lg:flex-row justify-between space-y-6 lg:space-y-0 lg:space-x-14">
        <div className="bg-yellow-100 p-6 rounded-lg shadow-md flex-1">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Senior Full-Stack Engineer</h3>
          <ul className="text-lg text-gray-700 space-y-2">
            <li>• Full-time position</li>
            <li>• Berlin or remote</li>
            <li>• €65-85k, 0.5-1.50% equity share options</li>
          </ul>
        </div>
        <div className="bg-yellow-100 p-6 rounded-lg shadow-md flex-1">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Senior Designer</h3>
          <ul className="text-lg text-gray-700 space-y-2">
            <li>• Full-time position</li>
            <li>• Berlin or remote</li>
            <li>• €40-55k, 0.25-0.50% equity share options</li>
          </ul>
        </div>
        <div className="bg-yellow-100 p-6 rounded-lg shadow-md flex-1">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Superstar Intern</h3>
          <ul className="text-lg text-gray-700 space-y-2">
            <li>• Full-time position</li>
            <li>• Berlin or remote</li>
            <li>• €20-24k, 0.5-1.50% equity share options</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
);

export default OpenVacancies;