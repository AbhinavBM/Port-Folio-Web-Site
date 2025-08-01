import React from 'react';
import { EXPERIENCE, PROJECTS } from '../../constants';
import { ExperienceCard } from './ExperienceCard';
import { ProjectCard } from './ProjectCard';

const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Portfolio</h2>
          <p className="text-xl text-gray-300">My recent work and projects</p>
        </div>

        <div className="space-y-16">
          {/* Experience */}
          <div>
            <h3 className="text-2xl font-bold mb-8">Experience</h3>
            <div className="space-y-8">
              {EXPERIENCE.map((experience, index) => (
                <ExperienceCard key={index} experience={experience} />
              ))}
            </div>
          </div>

          {/* Projects */}
          <div>
            <h3 className="text-2xl font-bold mb-8">Key Projects</h3>
            <div className="space-y-8">
              {PROJECTS.map((project, index) => (
                <ProjectCard key={index} project={project} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
