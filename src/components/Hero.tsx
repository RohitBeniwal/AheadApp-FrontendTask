import React from 'react';

const Hero = () => (
  <section className="bg-purple-50 ">
    <div className="container mx-auto flex flex-col lg:flex-row items-center text-center lg:text-left">
      <div className="lg:w-1/2 p-6">
        <h1 className="text-5xl font-bold text-gray-900">Master your life by mastering emotions</h1>
        <p className="mt-4 text-lg text-gray-700">Download the app</p>
        <div className="mt-8">
          <button className="bg-black text-white px-6 py-3 rounded-full">Download app</button>
        </div>
        <div className="mt-8 flex items-center space-x-4 justify-center lg:justify-start">
          <img src="/images/appstore-badge.png" alt="Download on the App Store" className="w-40" />
          <p className="mt-2 text-gray-700">100+ AppStore reviews</p>
        </div>
      </div>
      <div className="lg:w-1/2 flex justify-center lg:justify-end items-center lg:h-full h-96">
        <img src="/images/phone-mockup.png" alt="App Screenshot" className="object-contain h-full" />
      </div>
    </div>
  </section>
);

export default Hero;