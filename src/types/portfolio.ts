export interface AccordionItem {
  title: string;
  overview?: string | string[];
  implementation: string[];
  result?: string[];
}

export interface Experience {
  title: string;
  period: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  recordUrl?: string;
  roles: string[];
  stacks: string[];
  details: AccordionItem[];
}

export interface Project {
  title: string;
  description: string;
  period: string;
  members: string;
  roles: string[];
  stacks: string[];
  githubUrl?: string;
  imageSrc: string;
  imageAlt: string;
  details: AccordionItem[];
}