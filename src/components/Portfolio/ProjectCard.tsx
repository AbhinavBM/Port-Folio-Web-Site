import React from 'react';
import type { ProjectItem } from '../../types';

interface ProjectCardProps {
  project: ProjectItem;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="bg-gray-800 p-6 rounded-lg">
      <h4 className="text-xl font-semibold mb-2">{project.title}</h4>
      <p className="text-gray-400 text-sm mb-2">{project.period}</p>
      
      <div className="flex flex-wrap gap-2 mb-3">
        {project.links.github && (
          <a 
            href={project.links.github} 
            className="text-blue-400 hover:text-blue-300 text-sm"
            target="_blank"
            rel="noopener noreferrer"
          >
            🔗 GitHub Repository
          </a>
        )}
        {project.links.demo && (
          <a 
            href={project.links.demo} 
            className="text-blue-400 hover:text-blue-300 text-sm"
            target="_blank"
            rel="noopener noreferrer"
          >
            🌐 Live Demo
          </a>
        )}
      </div>
      
      <p className="text-gray-300 mb-4 text-sm">{project.description}</p>
      
      <div className="flex flex-wrap gap-2">
        {project.skills.map((skill, skillIndex) => {
          const skillColors = [
            'bg-blue-600', 'bg-green-600', 'bg-purple-600', 'bg-orange-600', 
            'bg-red-600', 'bg-yellow-600', 'bg-gray-600', 'bg-cyan-600'
          ];
          return (
            <span 
              key={skillIndex} 
              className={`${skillColors[skillIndex % skillColors.length]} text-xs px-3 py-1 rounded`}
            >
              {skill}
            </span>
          );
        })}
      </div>
    </div>
  );
};
