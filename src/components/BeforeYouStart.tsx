import React from 'react';

const BeforeYouStart = () => (
  <section className="bg-white py-48 px-6">
    <div className="container mx-auto max-w-3xl text-center">
      <p className="text-lg font-semibold text-gray-600 mb-4">We take privacy seriously</p>
      <h2 className="text-4xl font-bold text-gray-900 mb-6">Before you get started</h2>
      <p className="text-lg text-gray-700 mb-8">
        “We won’t share your answers with anyone (and won’t ever tell you which friends said what about you)”
      </p>
      <p className="text-lg text-gray-700 mb-8">with love, <span className="italic">Team Ahead</span></p>
      <button className="bg-black text-white font-bold py-3 px-8 rounded-full mb-4">Start a test</button>
      <p className="text-gray-600">Take only 5 minutes</p>
    </div>
  </section>
);

export default BeforeYouStart;