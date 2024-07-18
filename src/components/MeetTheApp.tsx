import React from 'react';
import Image from 'next/image';

const MeetTheApp = () => (
  <section className="bg-white py-16 px-6">
    <div className="container mx-auto flex flex-col lg:flex-row items-center text-center lg:text-left bg-orange-50  rounded-lg shadow-md">
      <div className="lg:w-1/2 flex flex-col items-center lg:items-start">
        <div className="p-6 lg:p-10">
          <h3 className="text-lg font-semibold text-gray-600 mb-2">Built out of frustration</h3>
          <h2 className="text-5xl font-bold text-gray-900 mb-4">Meet the ahead app</h2>
        </div>
        <Image src="/images/meet.png" alt="Image" className="w-full h-auto" /> {/* Replace with your image path */}
      </div>
      <div className="lg:w-1/2 p-6 lg:pl-10">
        <p className="text-lg text-gray-700 mb-4">
          A personalized pocket coach that provides bite-sized, science-driven tools to boost emotional intelligence.
        </p>
        <p className="text-lg text-gray-700">
          Think of it as a pocket cheerleader towards a better, more fulfilling life.
        </p>
      </div>
    </div>
  </section>
);

export default MeetTheApp;