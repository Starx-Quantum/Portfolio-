
import React from 'react';

const ProjectsSection = () => {
  console.log('Rendering ProjectsSection');
  
  const projects = [
    {
      name: 'ClassGPT',
      description: '✨ Kawaii AI-powered study buddy that generates notes, slides, MCQs.',
      url: 'https://class-gpt-rose.vercel.app/'
    },
    {
      name: 'Web Extension Gen',
      description: 'Natural-language-based Chrome extension generator.',
      url: 'https://web-extension-gen.vercel.app/'
    },
    {
      name: 'Validux',
      description: 'React validation library with 200+ daily NPM downloads.',
      url: 'https://www.npmjs.com/package/validux'
    },
    {
      name: 'OpenAI Multitool',
      description: 'AI backend with OpenRouter for multimodal generation.',
      url: 'https://github.com/byteakp/open-ai'
    },
    {
      name: 'DevSearch',
      description: 'LLM+BM25 hybrid AI search with Flask + Gemini API.',
      url: null
    },
    {
      name: 'VSCode Theme – Solo Leveling',
      description: '1.5K installs, glassy dark theme inspired by anime.',
      url: 'https://marketplace.visualstudio.com/items?itemName=Amanpandey.solo-leveling-theme'
    }
  ];

  return (
    <section className="py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="section-divider">
          ———— KEY PROJECTS ————
        </div>
        
        <div className="space-y-6 font-mono">
          {projects.map((project, index) => (
            <div key={index} className="border-l-2 border-white pl-4">
              <h3 className="text-lg font-semibold mb-2">
                {project.url ? (
                  <a href={project.url} target="_blank" rel="noopener noreferrer" className="portfolio-link">
                    {project.name}
                  </a>
                ) : (
                  project.name
                )}
              </h3>
              <p className="text-sm leading-relaxed max-w-3xl">
                {project.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
