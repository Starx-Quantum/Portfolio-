
import React from 'react';

const OpenSourceSection = () => {
  console.log('Rendering OpenSourceSection');
  
  const contributions = [
    {
      project: 'LangChain',
      pr: 'PR #31327',
      description: 'Fixed doc truncation issues'
    },
    {
      project: 'Adobe Spectrum',
      pr: 'PR #3883', 
      description: 'Fixed CJK font rendering bug'
    }
  ];

  return (
    <section className="py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="section-divider">
          ———— OPEN-SOURCE CONTRIBUTIONS ————
        </div>
        
        <div className="space-y-4 font-mono">
          {contributions.map((contrib, index) => (
            <div key={index} className="flex items-start space-x-4">
              <span className="text-green-400 mt-1">✅</span>
              <div>
                <p className="text-sm">
                  <span className="font-semibold">{contrib.project}:</span> {contrib.pr} – {contrib.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OpenSourceSection;
