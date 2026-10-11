export interface NavigationItem {
  label: string;
  href: string;
  isAction?: boolean;
}

export interface SkillItem {
  id: string;
  name: string;
  category: string;
  duration: string;
  description: string;
  keyTech: string[];
}

export interface ExperienceMilestone {
  year: string;
  role: string;
  context: string;
  description: string;
  milestones: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  headline: string;
  category: string;
  year: string;
  description: string;
  technologies: string[];
  image: string;
  liveUrl?: string;
  sourceUrl?: string;
  isFeatured?: boolean;
  isClientProject?: boolean;
  clientName?: string;
  deliverables?: string[];
  metrics?: { label: string; value: string }[];
}

export interface ServiceItem {
  number: string;
  title: string;
  tagline: string;
  description: string;
  deliverables: string[];
}

export interface WhyWorkItem {
  number: string;
  title: string;
  description: string;
}

export interface TestimonialItem {
  id: string;
  quote: string;
  clientName: string;
  clientRole: string;
  projectScope: string;
  isMain?: boolean;
}

export interface SocialLink {
  name: string;
  url: string;
  handle: string;
}
