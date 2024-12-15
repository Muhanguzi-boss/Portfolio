import React from 'react';
import SkillCard from './SkillCard';

const skills = [
  {
    name: 'JavaScript',
    image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
    level: '85%'
  },
  {
    name: 'React',
    image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    level: '80%'
  },
  {
    name: 'HTML5',
    image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
    level: '90%'
  },
  {
    name: 'CSS3',
    image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
    level: '85%'
  },
  {
    name: 'Swift',
    image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg',
    level: '75%'
  },
  {
    name: 'Git',
    image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
    level: '80%'
  }
];

export default function Skills() {
  return (
    <section className="py-20 bg-black" id="skills">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-white mb-4">
          Technical Skills
        </h2>
        <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
          A showcase of my technical expertise and proficiency in various programming languages and tools
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <SkillCard
              key={skill.name}
              {...skill}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}