import React from 'react';
import Image from 'next/image';

const WorkWithUs = () => (
  <section className="bg-white py-16 px-6">
    <div className="container mx-auto max-w-4xl bg-purple-50 p-10 rounded-lg shadow-md">
      <div className="flex justify-between items-center">
        <h2 className="text-4xl font-bold text-gray-900">Work with us</h2>
        <h2 className="text-4xl font-bold text-purple-600">ahead</h2>
      </div>
      <div className="flex flex-col lg:flex-row mt-8 space-y-6 lg:space-y-0 lg:space-x-10">
        <div className="bg-white p-6 rounded-lg shadow-md lg:w-1/2 flex flex-col space-y-6">
          <div className="bg-white p-4 rounded-lg shadow-inner">
            <h4 className="text-lg font-bold text-gray-900 mb-2">About</h4>
            <p className="text-base text-gray-700">
              At ahead our goal is to make self-improvement fun and lasting. We know theres a way how to make it work. And thats what aHead is all about!
            </p>
          </div>
          <div className="bg-yellow-100 p-4 rounded-lg shadow-inner">
            <h4 className="text-lg font-bold text-gray-900 mb-2">Product</h4>
            <p className="text-base text-gray-700">
              Sure, you could spend ages reading books or sitting in seminars on how to become a better spouse, parent, or manager - like we did...
            </p>
          </div>
        </div>
        <div className="flex flex-col lg:w-1/2 lg:space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Power through, even when the going gets tough</h3>
            <p className="text-base text-gray-700">
              We help you spot and work around whatever stands in the way, be it bad habits, fears, etc.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Learn more about who you are and where you want to go</h3>
            <p className="text-base text-gray-700">
              We ask the right questions to help you better understand why you do things the way you do.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Play and grow together with others on the same journey</h3>
            <p className="text-base text-gray-700">
              Ahead feels like a game, not like a chore. See yourself grow every day towards achieving your goals!
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default WorkWithUs;