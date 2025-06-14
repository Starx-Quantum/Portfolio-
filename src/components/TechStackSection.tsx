
import React from 'react';

const TechStackSection = () => {
  console.log('Rendering TechStackSection');
  
  const technologies = [
    'TypeScript', 'React', 'Flask', 'Python', 'Next.js', 'Node.js', 
    'Docker', 'Hono', 'PostgreSQL', 'OpenRouter API', 'AI SDKs', 
    'Tailwind', 'Zustand', 'Gemini API'
  ];

  return (
    <section className="py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="section-divider">
          ———— TECH STACK ————
        </div>
        
        <div className="font-mono">
          <p className="text-sm leading-relaxed max-w-3xl">
            {technologies.join(', ')}
          </p>
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;
