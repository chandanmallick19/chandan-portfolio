export interface ExperienceItem {
  company: string;
  role: string;
  duration: string;
  location: string;
  description?: string;
  logoInitial: string;
}

export interface EducationItem {
  institution: string;
  degree: string;
  year: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface ProjectItem {
  title: string;
  description: string;
  duration: string;
  technologies?: string[];
  link?: string;
  type?: 'project' | 'publication';
}

export interface CertificationItem {
  title: string;
  issuer: string; // e.g. "Google"
  date: string;
  description?: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}