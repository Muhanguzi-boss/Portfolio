import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Modern Portfolio',
    description: 'Personal portfolio website built with React and Tailwind CSS',
    image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80',
    technologies: ['React', 'Tailwind CSS', 'TypeScript'],
    githubLink: '#',
    liveLink: '#'
  },
  {
    title: 'iOS Weather App',
    description: 'Weather application developed using Swift and WeatherKit',
    image: 'https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80',
    technologies: ['Swift', 'iOS', 'WeatherKit'],
    githubLink: 'https://github.com/Muhanguzi-boss',
    liveLink: '#'
  },
  {
    title: 'Task Manager',
    description: 'Full-stack task management application',
    image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80',
    technologies: ['React', 'Node.js', 'MongoDB'],
    githubLink: '#',
    liveLink: '#'
  }
];

export default function Projects() {
  return (
    <section className="py-20 bg-black" id="projects">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-white mb-12">
          Featured Projects
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="bg-white/5 rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-all duration-300"
              style={{
                animation: `fadeInUp 0.5s ease-out ${index * 0.1}s forwards`,
                opacity: 0
              }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map(tech => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-white/10 text-white text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between">
                  <a
                    href={project.githubLink}
                    className="text-white hover:text-gray-300 transition-colors"
                  >
                    <Github className="h-6 w-6" />
                  </a>
                  <a
                    href={project.liveLink}
                    className="text-white hover:text-gray-300 transition-colors"
                  >
                    <ExternalLink className="h-6 w-6" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}