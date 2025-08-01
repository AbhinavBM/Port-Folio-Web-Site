import React from 'react';
import { ExperienceItem } from '../../types';

interface ExperienceCardProps {
  experience: ExperienceItem;
}

export const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience }) => {
  const getBorderColor = (index: number) => {
    const colors = ['border-blue-500', 'border-green-500', 'border-purple-500'];
    return colors[index % colors.length];
  };

  return (
    <div className={`border-l-4 ${getBorderColor(0)} pl-6`}>
      <h4 className="text-xl font-semibold">{experience.title}</h4>
      <p className="text-blue-400">{experience.company} • {experience.location}</p>
      <p className="text-gray-400 mb-3">{experience.period}</p>
      {experience.link && (
        <a 
          href={experience.link} 
          className="text-blue-400 hover:text-blue-300 text-sm block mb-2"
        >
          🔗 {experience.link.replace('https://', '')}
        </a>
      )}
      <p className="text-gray-300 text-sm mb-3">{experience.description}</p>

      {/* Skills used */}
      <div className="flex flex-wrap gap-2 mb-4">
        {experience.skills.map((skill, skillIndex) => {
          const skillColors = [
            'bg-orange-600', 'bg-blue-600', 'bg-green-600', 'bg-purple-600', 
            'bg-cyan-600', 'bg-red-600', 'bg-yellow-600', 'bg-gray-600'
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

      <ul className="text-gray-300 space-y-2 text-sm">
        {experience.achievements.map((achievement, achievementIndex) => (
          <li key={achievementIndex}>• {achievement}</li>
        ))}
      </ul>
    </div>
  );
};
