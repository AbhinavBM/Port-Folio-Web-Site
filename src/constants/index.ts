import type { NavigationItem, ServiceItem, ExperienceItem, ProjectItem, ContactInfo } from '../types';

// Navigation configuration
export const NAVIGATION_ITEMS: NavigationItem[] = [
  { id: 'home', label: 'Home', href: '#home' },
  { id: 'about', label: 'About', href: '#about' },
  { id: 'services', label: 'Services', href: '#services' },
  { id: 'portfolio', label: 'Portfolio', href: '#portfolio' },
  { id: 'contact', label: 'Contact', href: '#contact' },
];

// Services data
export const SERVICES: ServiceItem[] = [
  {
    icon: '🚀',
    title: 'Backend Development',
    description: 'Scalable microservices with Java Spring Boot, Kotlin Dropwizard, and Node.js. Expert in designing clean architectures and high-performance systems.',
  },
  {
    icon: '💻',
    title: 'Full Stack Development',
    description: 'End-to-end web applications with React.js, TypeScript, and modern frontend tools. Performance optimization and responsive design.',
  },
  {
    icon: '☁️',
    title: 'Cloud & DevOps',
    description: 'AWS deployment, Docker containerization, CI/CD pipelines with GitHub Actions. Automated deployment and infrastructure management.',
  },
];

// Experience data
export const EXPERIENCE: ExperienceItem[] = [
  {
    title: 'Software Development Engineer Intern',
    company: 'Udaan.com',
    location: 'Bangalore, Karnataka',
    period: 'Jan 2025 - Present',
    description: 'Software Development Engineer intern (Java, Kotlin, React) • An e-commerce company focused on B2B business',
    skills: ['Kotlin', 'Dropwizard', 'React', 'Material UI', 'Tailwind CSS', 'Redis', 'Java'],
    achievements: [
      'Contributed to a Kotlin + Dropwizard microservice for computing delivery and logistics charges using dynamic, rule-based slabs impacting 100K+ orders per month on the Udaan Buyer App',
      'Redesigned the delivery charge engine for same-day multi-order aggregation (by buyer × category × cutoff), implemented identifier-based logic across 4+ services (Cart, OF, Constraint, etc.), and eliminated duplicate charge edge cases, reducing buyer complaints',
      'Optimized delivery charge computation and database write path during order placement (checkout), reducing P99 latency to 650ms and ensuring accurate, real-time charge application at scale',
      'Built a Debug Console in React (Material UI + Tailwind CSS) to help BizOps and Finance teams validate charge computations based on order details, weight, warehouse, and 10+ other dynamic factors',
      'Enabled seamless handling of 1,000+ rules through a user-friendly interface',
    ],
  },
  {
    title: 'Free Lance - Full Stack Web Development',
    company: 'AaMaRa Technologies',
    location: 'Remote',
    period: '01/2024 - 06/2024',
    description: 'Remote software development freelancing',
    skills: ['React', 'TypeScript', 'Redux', 'Node.js', 'AWS S3', 'MongoDB'],
    achievements: [
      'Led the development of a comprehensive Table Management Tool, handling both frontend and backend tasks',
      'Designed and implemented 20+ APIs with Node.js, integrating client-side caching for optimized performance',
      'Utilized AWS S3 for media storage and MongoDB for data handling',
      'Engineered a production-grade React + TypeScript frontend using Redux, with performance optimizations such as lazy loading, code splitting, memoization, and profiling tools',
      'Achieved 25% improvement in overall performance and 20% reduction in initial load time',
      'Deployed the tool, now serving over 200 monthly users at a country club, including supporting a donation service',
    ],
    link: 'https://table-ganj.vercel.app',
  },
];

// Projects data
export const PROJECTS: ProjectItem[] = [
  {
    title: 'Smart India Hackathon - Centralized Firewall 🏆',
    period: '03/2024 • Ahmedabad, India',
    description: 'Engineered a full-stack centralized firewall management system using Node.js/Express.js, MongoDB, and React.js. Implemented secure JWT-based REST APIs, supporting application-endpoint mapping, real-time traffic monitoring, RBAC, automated policy synchronization, and centralized configuration management. Implemented eBPF programs with custom BPF maps for high-performance Linux packet filtering, and integrated PyDivert for Windows packet interception.',
    skills: ['Node.js', 'React.js', 'eBPF', 'MongoDB', 'PyDivert'],
    links: {
      github: 'https://github.com/AbhinavBM/Centralized-Firewall',
      demo: 'https://centralized-fire-wall-front-end.vercel.app/',
    },
  },
  {
    title: 'Simple CI/CD Setup Project',
    period: '05/2025',
    description: 'Built and Dockerized a Java JAR application with GitHub Actions CI/CD and EC2 Bash deployment, enabling push-to-deploy with 80% less manual overhead. Developed and packaged a modular Java application into an executable JAR, reducing setup time for new environments by 90%. Containerized the application using Docker to enable consistent deployment across local and cloud environments. Automated deployment to AWS EC2 with a 100-line custom Bash script, provisioning instances, configuring SSH, and starting the service with zero manual steps. Designed and implemented a CI/CD pipeline via GitHub Actions, enabling one-click deployment with every push to main, reducing deployment errors by ~80%.',
    skills: ['Java', 'Docker', 'AWS EC2', 'GitHub Actions', 'Bash'],
    links: {
      github: 'https://github.com/AbhinavBM/java-jar-test',
    },
  },
];

// Contact information
export const CONTACT_INFO: ContactInfo = {
  email: 'abhinavankole06@gmail.com',
  phone: '+91 7892525180',
  location: 'Bangalore, Karnataka, India',
};

// Form configuration
export const FORMSPREE_FORM_ID = 'xgvzeyvy';
export const FORMSPREE_ENDPOINT = `https://formspree.io/f/${FORMSPREE_FORM_ID}`;

// Animation and UI constants
export const SCROLL_OFFSET = 100;
export const SUCCESS_MESSAGE_DURATION = 5000;
export const ERROR_MESSAGE_DURATION = 5000;
