
import React from 'react';

const HeroSection = () => {
  console.log('Rendering Enhanced HeroSection');
  
  return (
    <section className="min-h-screen flex items-center justify-center px-6 relative">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-bold tracking-wider mb-6 text-black relative">
            <span className="inline-block hover:scale-105 transition-transform duration-300">
              AMAN KUMAR PANDEY
            </span>
            {/* Subtle underline effect */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-black opacity-20"></div>
          </h1>
          <p className="text-xl md:text-2xl font-mono mb-4 tracking-widest text-gray-800 relative">
            <span className="inline-block hover:scale-105 transition-transform duration-300">
              BUILDS WITH AI, THINKS IN SYSTEMS.
            </span>
          </p>
          {/* Professional tagline */}
          <p className="text-sm md:text-base font-mono text-gray-600 tracking-wide">
            Full-Stack Developer • AI Enthusiast • Open Source Contributor
          </p>
        </div>
        
        <div className="hero-content space-y-6 text-left max-w-2xl mx-auto font-mono p-10 rounded-2xl shadow-2xl transition-all duration-500 hover:shadow-3xl hover:scale-[1.02]">
          <div className="border-l-4 border-black pl-6 space-y-3">
            <p className="text-base md:text-lg text-black font-semibold">
              Software Engineer, AI | OSS Contributor
            </p>
            <p className="text-sm md:text-base text-gray-700">
              📍 Remote • Ludhiana, Punjab, India
            </p>
          </div>
          
          <div className="pt-6 space-y-4 border-t border-gray-200">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-3">
                <p className="text-black font-medium group">
                  📧 <a 
                    href="mailto:amankumarpandeyin@gmail.com" 
                    className="portfolio-link inline-block"
                  >
                    amankumarpandeyin@gmail.com
                  </a>
                </p>
                <p className="text-black font-medium">
                  🔗 <a 
                    href="https://github.com/byteakp" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="portfolio-link inline-block"
                  >
                    github.com/byteakp
                  </a>
                </p>
              </div>
              <div className="space-y-3">
                <p className="text-black font-medium">
                  💼 <a 
                    href="https://linkedin.com/in/amanxxpandey" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="portfolio-link inline-block"
                  >
                    linkedin.com/in/amanxxpandey
                  </a>
                </p>
                <p className="text-black font-medium">
                  📄 <a 
                    href="https://drive.google.com/file/d/1KqBIyrL1E-bkqyNEb1UFrnscS1Jzf6K6/view?usp=sharing" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="portfolio-link inline-block bg-black text-white px-3 py-1 rounded hover:bg-gray-800 transition-colors"
                  >
                    View Resume →
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
