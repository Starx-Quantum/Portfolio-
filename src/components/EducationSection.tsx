
import React from 'react';

const EducationSection = () => {
  console.log('Rendering EducationSection');
  
  const education = [
    'B.Tech CS – Lovely Professional University',
    'System Design – UC San Diego (Algorithms on Strings specialization)',
    'IBM Software Engineering Professional Certificate',
    'AI Automation Specialist – Scrimba (Learn to Code with AI)', 
    'JavaScript (Intermediate) – HackerRank',
    'Certified Software Engineer – LPU Winter PEP 2025'
  ];

  return (
    <section className="py-16 px-6 pb-24">
      <div className="max-w-4xl mx-auto">
        <div className="section-divider">
          ———— EDUCATION & CERTIFICATIONS ————
        </div>
        
        <div className="space-y-3 font-mono">
          {education.map((item, index) => (
            <div key={index} className="flex items-start">
              <span className="mr-3 mt-1">•</span>
              <p className="text-sm leading-relaxed">
                {item}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
