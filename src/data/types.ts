import type { ElementType, ReactNode } from "react";

export type SkillItem = {
  name: string;
  icon: string | ElementType;
};

export type NavbarItem = {
  href: string;
  icon: string | ElementType;
  label: string;
};

export type SocialItem = {
  name: string;
  url: string;
  icon: ElementType;
  navbar: boolean;
};

export type WorkItem = {
  company: string;
  href?: string;
  title: string;
  logoUrl: string;
  start: string;
  end?: string;
  description: string;
};

export type EducationItem = {
  school: string;
  href: string;
  degree: string;
  logoUrl: string;
  start: string;
  end: string;
};

export type CertificateItem = {
  title: string;
  issuer: string;
  date: string;
  href: string;
  logoUrl: string;
};

export type ProjectLink = {
  icon: ReactNode;
  type: string;
  href: string;
};

export type ProjectItem = {
  title: string;
  href: string;
  backgroundImage?: string;
  active: boolean;
  description: string;
  technologies: string[];
  dates?: string;
  image?: string;
  video?: string;
  links?: ProjectLink[];
};

export type HackathonLink = {
  href: string;
  title: string;
  icon: ReactNode;
};

export type HackathonItem = {
  title: string;
  dates: string;
  location: string;
  description: string;
  image?: string;
  mlh?: string;
  links: HackathonLink[];
};

export type ResumeData = {
  name: string;
  initials: string;
  url: string;
  location: string;
  locationLink: string;
  description: string;
  avatarUrl: string;
  summary: string;
  skills: SkillItem[];
  navbar: NavbarItem[];
  contact: {
    email: string;
    tel: string;
    social: Record<string, SocialItem>;
  };
  work: WorkItem[];
  education: EducationItem[];
  certificates: CertificateItem[];
  projects: ProjectItem[];
  hackathons: HackathonItem[];
};
