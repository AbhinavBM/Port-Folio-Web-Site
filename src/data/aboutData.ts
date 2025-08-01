// About section data for Abhinav B M's portfolio

export interface PersonalInfo {
  name: string;
  title: string;
  description: string[];
  currentRole: {
    position: string;
    company: string;
    impact: string;
  };
  stats: {
    gpa: string;
    dsaProblems: string;
  };
}

export interface Education {
  degree: string;
  institution: string;
  duration: string;
  grade: string;
  gradeType: 'gpa' | 'percentage';
  color: string;
}

export interface Achievement {
  title: string;
  description: string;
  icon: string;
  type: 'winner' | 'finalist' | 'recognition';
}

export interface SkillCategory {
  name: string;
  icon: string;
  color: string;
  skills: string[];
}

export interface VolunteeringExperience {
  role: string;
  organization: string;
  duration: string;
  description: string;
}

// Personal Information
export const personalInfo: PersonalInfo = {
  name: "Abhinav B M",
  title: "Software Development Engineer",
  description: [
    "Backend-focused full-stack developer with a passion for building scalable microservices using Kotlin, Java, and Node.js.",
    "Experienced in designing clean architectures, developing high-performance backend systems, and solving complex problems collaboratively.",
    "Currently working as a Software Development Engineer Intern at Udaan.com, contributing to systems that impact 100K+ orders per month."
  ],
  currentRole: {
    position: "Software Development Engineer Intern",
    company: "Udaan.com",
    impact: "100K+ orders per month"
  },
  stats: {
    gpa: "9.04",
    dsaProblems: "500+"
  }
};

// Education Timeline
export const educationData: Education[] = [
  {
    degree: "B.E. Computer Science & Cyber Security",
    institution: "M S Ramaiah Institute of Technology",
    duration: "2021 - 2025",
    grade: "9.04/10",
    gradeType: "gpa",
    color: "blue"
  },
  {
    degree: "12th - CBSE",
    institution: "Lady Anusuya Singhania Educational Academy",
    duration: "2020 - 2021",
    grade: "90.8%",
    gradeType: "percentage",
    color: "green"
  },
  {
    degree: "10th - SSLC",
    institution: "Saandeepani English School",
    duration: "2018 - 2019",
    grade: "95.8%",
    gradeType: "percentage",
    color: "purple"
  }
];

// Achievements
export const achievementsData: Achievement[] = [
  {
    title: "Smart India Hackathon Winner",
    description: "Top 5 teams nationwide for innovative tech solutions",
    icon: "🏆",
    type: "winner"
  },
  {
    title: "Unisys Innovation Program Finalist",
    description: "Selected among 1000+ national teams",
    icon: "🚀",
    type: "finalist"
  }
];

// Technical Skills
export const skillsData: SkillCategory[] = [
  {
    name: "Backend",
    icon: "🚀",
    color: "blue",
    skills: ["Java SpringBoot", "Kotlin DropWizard", "Node.js", "SQL", "NoSQL"]
  },
  {
    name: "Frontend",
    icon: "💻",
    color: "green",
    skills: ["React.js", "HTML", "CSS", "Material UI", "React Optimization"]
  },
  {
    name: "Technical Concepts",
    icon: "🧠",
    color: "purple",
    skills: ["Design Patterns", "Operating Systems", "Computer Networks", "Database Management"]
  },
  {
    name: "Problem Solving",
    icon: "🧮",
    color: "orange",
    skills: ["500+ Problems Solved", "LeetCode • GeeksforGeeks • CodeForces"]
  }
];

// Volunteering Experience
export const volunteeringData: VolunteeringExperience = {
  role: "Core Member - Artisec RIT",
  organization: "Artisec RIT",
  duration: "2022 - 2023",
  description: "Organized workshops on GitHub, cybersecurity, AI, and prompt engineering"
};

// Section metadata
export const aboutSectionData = {
  title: "About Me",
  subtitle: "Backend-focused full-stack developer with a passion for building scalable microservices",
  sections: {
    personalInfo: "Who I Am",
    education: "Education",
    achievements: "Achievements",
    skills: "Technical Skills",
    volunteering: "Volunteering"
  }
};
