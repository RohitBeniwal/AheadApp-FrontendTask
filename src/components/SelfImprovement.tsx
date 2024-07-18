import React from 'react';
import Image from 'next/image';

const SelfImprovement = () => (
  <section className="bg-white py-16 px-6">
    <div className="container mx-auto max-w-3xl text-center lg:text-left relative">
      <h3 className="text-lg font-semibold text-gray-600 mb-4">Wrong with self-improvement & how were fixing it.</h3>
      <h2 className="text-5xl font-bold text-gray-900 mb-8">Self-improvement. Ugh. <Image src="/images/ghost.png" alt="Ghost" className="inline w-20 h-20 ml-2" /></h2>
      <div className="flex flex-col items-start space-y-8 relative">
        <div className="flex items-start relative z-10">
          <span className="text-purple-500 text-3xl mr-4">•</span>
          <div>
            <h4 className="text-2xl font-semibold text-gray-800 mb-2">Its not as easy as 1-2-3.</h4>
            <p className="text-lg text-gray-700">
              The journey of change may be long, but our sessions are quick. We get to the point and tell you what you want to know (and nothing else).
            </p>
          </div>
        </div>
        <div className="flex items-start relative z-10 text-gradient-start">
          <span className="text-purple-500 text-2xl mr-4">•</span>
          <div>
            <h4 className="text-2xl font-semibold text-gray-800 mb-2">Old habits are hard to break.</h4>
            <p className="text-lg text-gray-700">
              And bad behaviors die hard. Fortunately, we give you great, science-backed techniques to use.
            </p>
          </div>
        </div>
        <div className="flex items-start relative z-10 text-gradient-middle">
          <span className="text-purple-500 text-2xl mr-4">•</span>
          <div>
            <h4 className="text-2xl font-semibold text-gray-800 mb-2">You and your motivation dont have a long-term relationship.</h4>
            <p className="text-lg text-gray-700">
              Luckily, we can proactively prepare you for the marathon, not just the race. Effective, memorable exercises will help you stick to your goals.
            </p>
          </div>
        </div>
        <div className="flex items-start relative z-10 text-gradient-end">
          <span className="text-purple-500 text-2xl mr-4">•</span>
          <div>
            <h4 className="text-2xl font-semibold text-gray-800 mb-2">Books just dont offer practical solutions.</h4>
            <p className="text-lg text-gray-700">
              Remember when you learned to ride a bike just by reading? Yeah, we dont either.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default SelfImprovement;