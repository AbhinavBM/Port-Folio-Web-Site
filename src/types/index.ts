// Common types for the portfolio application

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export type SubmitStatus = 'idle' | 'success' | 'error';

export interface NavigationItem {
  id: string;
  label: string;
  href: string;
}

export interface ExperienceItem {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string;
  skills: string[];
  achievements: string[];
  link?: string;
}

export interface ProjectItem {
  title: string;
  period: string;
  description: string;
  skills: string[];
  links: {
    github?: string;
    demo?: string;
  };
}

export interface ServiceItem {
  icon: string;
  title: string;
  description: string;
}

export interface ContactInfo {
  email: string;
  phone: string;
  location: string;
}
