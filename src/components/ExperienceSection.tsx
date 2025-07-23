import React from 'react';

const ExperienceSection = () => {
  console.log('Rendering ExperienceSection');
  
  const experiences = [
    {
      title: 'AI Trainer',
      company: 'Scale AI',
      period: '2024–Present',
      achievements: [
[cite_start]        'Engineered RLHF and DPO fine-tuning pipelines for large language models, achieving a 15% improvement in response quality'[cite: 15],
[cite_start]        'Orchestrated multi-agent feedback systems processing over 10K training examples daily'[cite: 16],
        [cite_start]'Maintained 99.8% pipeline uptime through proactive monitoring and reliability audits' [cite: 18]
      ]
    },
    {
      title: 'Open Source Contributor',
      company: 'LangChain, Adobe Spectrum',
      period: '2025',
      achievements: [
[cite_start]        'Refactored vector database integration for LangChain, optimizing query performance by 40%'[cite: 21],
        [cite_start]'Resolved critical TypeScript typing issues in the Adobe Spectrum UI framework' [cite: 22]
      ]
    },
    {
      title: 'Frontend Developer',
      company: 'Freelancer.com',
      period: '2023',
      achievements: [
        [cite_start]'Developed high-performing single-page applications using modern JavaScript (ES6+)'[cite: 28],
[cite_start]        'Integrated data from multiple backend services, improving application performance by 40%' [cite: 26]
      ]
    },
    {
      title: 'Web Developer',
      company: 'Asiana Times',
      period: '2022',
      achievements: [
        [cite_start]'Enhanced website performance and SEO, leading to higher search engine rankings'[cite: 34],
        [cite_start]'Collaborated on site development and maintenance using React.js for a responsive experience' [cite: 36]
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
