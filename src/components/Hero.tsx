import { Code2, Linkedin, Mail } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative min-h-screen" id="home">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col justify-center px-4 sm:px-6 lg:px-8">
        <div className="animate-fadeIn max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-6xl font-bold text-white mb-6">
            <span className="block">Hi, I'm Muhanguzi Boss</span>
            <span className="block text-3xl sm:text-4xl mt-2 text-gray-300">Software Engineer</span>
          </h1>
          
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Year 1 Software Engineering student at Adventist University of Central Africa, 
            passionate about creating elegant solutions through code.
          </p>

          <div className="flex justify-center space-x-4 mb-12">
            <a href="https://github.com/Muhanguzi-boss" className="transform hover:scale-110 transition-transform duration-200">
        
            </a>
            <a href="https://linkedin.com" className="transform hover:scale-110 transition-transform duration-200">
              <Linkedin className="h-8 w-8 text-white hover:text-gray-300" />
            </a>
            <a href="mailto:bossmuhanguzi@gmail.com" className="transform hover:scale-110 transition-transform duration-200">
              <Mail className="h-8 w-8 text-white hover:text-gray-300" />
            </a>
          </div>

          <div className="animate-bounce">
            <Code2 className="h-12 w-12 text-white mx-auto" />
          </div>
        </div>
      </div>
    </div>
  );
}