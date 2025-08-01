import React from 'react';
import { 
  personalInfo, 
  educationData, 
  achievementsData, 
  skillsData, 
  volunteeringData,
  aboutSectionData,
  type Education,
  type Achievement,
  type SkillCategory
} from '../../data/aboutData';

const About: React.FC = () => {
  const renderEducationItem = (edu: Education, index: number) => {
    const borderColor = index === 0 ? 'border-white' : 'border-gray-600';
    return (
      <div key={index} className={`border-l-4 ${borderColor} pl-6 mb-6`}>
        <h4 className="text-xl font-semibold">{edu.degree}</h4>
        <p className="text-gray-300">{edu.institution}</p>
        <p className="text-gray-400">{edu.duration} | {edu.grade}</p>
      </div>
    );
  };

  const renderAchievement = (achievement: Achievement, index: number) => {
    const gradientClass = index === 0 
      ? 'bg-gradient-to-r from-yellow-600 to-yellow-800' 
      : 'bg-gradient-to-r from-purple-600 to-purple-800';
    
    return (
      <div key={index} className={`${gradientClass} p-6 rounded-lg`}>
        <h4 className="text-xl font-semibold mb-2">{achievement.icon} {achievement.title}</h4>
        <p className="text-gray-100">{achievement.description}</p>
      </div>
    );
  };

  const renderSkillCategory = (category: SkillCategory, index: number) => (
    <div key={index} className="mb-4">
      <h4 className="text-lg font-semibold text-blue-400">{category.name}</h4>
      <p className="text-gray-300">{category.skills.join(', ')}</p>
    </div>
  );

  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">{aboutSectionData.title}</h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            {personalInfo.description.join(' ')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-6">{aboutSectionData.sections.education}</h3>
            <div className="space-y-6">
              {educationData.map(renderEducationItem)}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-6">Key Skills</h3>
            <div className="space-y-4">
              {skillsData.map(renderSkillCategory)}
            </div>
          </div>
        </div>

        {/* Key Achievements Section */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold mb-8 text-center">{aboutSectionData.sections.achievements}</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {achievementsData.map(renderAchievement)}
          </div>
        </div>

        {/* Volunteering Section */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold mb-8 text-center">{aboutSectionData.sections.volunteering}</h3>
          <div className="bg-gray-800 p-6 rounded-lg">
            <h4 className="text-xl font-semibold mb-2">{volunteeringData.role}</h4>
            <p className="text-gray-400 mb-2">{volunteeringData.duration}</p>
            <p className="text-gray-300">{volunteeringData.description}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
