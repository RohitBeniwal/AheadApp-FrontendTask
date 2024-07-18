import React from 'react';
import Image from 'next/image';

const FamiliarScenarios = () => (
  <section className=" py-16">
    <div className="container mx-auto text-center">
      <h2 className="text-5xl font-bold text-gray-900 mb-8 text-left pl-4 lg:pl-0 lg:text-left">Does this sound familiar...</h2>
      <div className="mt-8 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        <div className="bg-blue-100 p-6 rounded-lg shadow-md flex flex-col items-center">
          <div className="text-5xl mb-4">😡</div> {/* Add emoji here */}
          <p className="text-lg font-medium text-gray-800">You argue with a colleague</p>
          <p className="mt-2 text-gray-600">
            You get angry and defensive, instead of staying open and working towards common ground.
          </p>
        </div>
        <div className="bg-purple-100 p-6 rounded-lg shadow-md flex flex-col items-center">
          <div className="text-5xl mb-4">😲</div> {/* Add emoji here */}
          <p className="text-lg font-medium text-gray-800">You get a promotion at work</p>
          <p className="mt-2 text-gray-600">
            You question yourself and wonder when theyll realize youre an unqualified imposter, instead of trusting yourself & your abilities.
          </p>
        </div>
        <div className="bg-purple-500 p-6 rounded-lg shadow-md transform -rotate-6 flex flex-col items-center">
          <div className="text-5xl mb-4">😕</div> {/* Add emoji here */}
          <p className="text-lg font-medium text-white">You attend a class reunion</p>
          <p className="mt-2 text-white">
            You compare yourself with your peers achievements, instead of making self-judgment more independent of others.
          </p>
        </div>
        <div className="bg-yellow-100 p-6 rounded-lg shadow-md flex flex-col items-center">
          <div className="text-5xl mb-4">😠</div> {/* Add emoji here */}
          <p className="text-lg font-medium text-gray-800">You squabble with your partner</p>
          <p className="mt-2 text-gray-600">
            You accuse them of doing that thing you hate (as they always do!), instead of staying calm and addressing their concerns.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default FamiliarScenarios;