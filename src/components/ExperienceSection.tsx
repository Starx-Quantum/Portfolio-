import React from 'react';

const ExperienceSection = () => {
  console.log('Rendering ExperienceSection');
  
  const experiences = [
    {
      title: 'AI Trainer',
      company: 'Scale AI',
      period: '2024–Present',
      achievements: [
        'Built model training pipelines and multi-agent architectures',
        'Automated feedback loops for LLM tuning'
      ]
    },
    {
      title: 'Open Source Contributor',
      company: 'LangChain, Adobe',
      period: 'Ongoing',
      achievements: [
        'Independently contributed, PRs merged into top-tier repos'
      ]
    },
    {
      title: 'Frontend Developer',
      company: 'Freelancer.com',
      period: '2023',
      achievements: [
        'Delivered fast-loading, secure React apps; boosted client traffic by 40%'
      ]
    },
    {
      title: 'Web Developer',
      company: 'Asiana Times',
      period: '2022',
      achievements: [
        [cite_start]'Enhanced website performance and SEO, contributing to higher search engine rankings and increased traffic [cite: 34]',
        [cite_start]'Collaborated on site development and maintenance using React.js to ensure a responsive experience [cite: 36]'
      ]
    }
  ];

  return (
    <section className="py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="section-divider">
          ———— EXPERIENCE ————
        </div>
        
        <div className="space-y-8 font-mono">
          {experiences.map((exp, index) => (
            <div key={index} className="border-l-2 border-white pl-4">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                <h3 className="text-lg font-semibold">
                  {exp.title} @ {exp.company}
                </h3>
                <span className="text-sm text-gray-300">
                  ({exp.period})
                </span>
              </div>
              <ul className="space-y-1 text-sm">
                {exp.achievements.map((achievement, achIndex) => (
                  <li key={achIndex} className="flex items-start">
                    <span className="mr-2">–</span>
                    <span className="leading-relaxed max-w-3xl">{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
