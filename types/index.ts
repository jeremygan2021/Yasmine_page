export interface Education {
  school: string;
  degree: string;
  gpa: string;
  awards?: string[];
  icon?: 'university' | 'academic';
  color?: 'blue' | 'purple';
}

export interface Experience {
  title: string;
  company: string;
  period: string;
  description: string[];
}

export interface Project {
  name: string;
  description: string;
  technologies: string[];
}

export interface Skill {
  category: string;
  items: string[];
} 