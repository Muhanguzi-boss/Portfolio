import React from 'react';

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-white mb-12">
          Experience
        </h2>
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="bg-white/5 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-white">Student Developer</h3>
            <p className="text-gray-400 mt-2">Adventist University of Central Africa</p>
            <p className="text-gray-300 mt-4">
              Working on various academic projects, focusing on web development 
              and mobile applications using modern technologies.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}