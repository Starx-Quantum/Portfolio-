
import React from 'react';
import HeroSection from '../components/HeroSection';
import ProjectsSection from '../components/ProjectsSection';
import OpenSourceSection from '../components/OpenSourceSection';
import ExperienceSection from '../components/ExperienceSection';
import TechStackSection from '../components/TechStackSection';
import EducationSection from '../components/EducationSection';
import PixelSprites from '../components/PixelSprites';

const Index = () => {
  return (
    <div className="min-h-screen space-background">
      <PixelSprites />
      <div className="relative z-10">
        <HeroSection />
        <ProjectsSection />
        <OpenSourceSection />
        <ExperienceSection />
        <TechStackSection />
        <EducationSection />
      </div>
    </div>
  );
};

export default Index;
