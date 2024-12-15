import React from 'react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-black">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-white mb-12">
          About Me
        </h2>
        <div className="max-w-3xl mx-auto text-gray-300 space-y-6">
          <p>
            I am a passionate first-year Software Engineering student at the Adventist University 
            of Central Africa, dedicated to creating innovative solutions through code.
          </p>
          <p>
            My journey in software development began with web technologies, and I've since 
            expanded my expertise to include mobile development with Swift, version control 
            with Git, and modern frameworks like React.
          </p>
          <p>
            I believe in writing clean, maintainable code and creating user-friendly 
            applications that solve real-world problems.
          </p>
        </div>
      </div>
    </section>
  );
}