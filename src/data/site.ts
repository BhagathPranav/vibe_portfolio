/**
 * Portfolio identity — edit education entries below when you want degrees listed on-page.
 * Projects live in src/data/projects.ts (linked to GitHub).
 */

export const person = {
  fullName: 'Bhagath Pranav',
  /** One-line hook for recruiters */
  tagline:
    'Data Analyst & IT Developer specializing in SQL analytics, Python notebooks, AWS Cloud/AI, and modern static web applications.',
  metaDescription:
    'Bhagath Pranav — portfolio: analytics projects (SQL, Python, Jupyter, Tableau), AWS Cloud, Machine Learning, and Astro static web craft.',
  githubUsername: 'BhagathPranav',
  githubUrl: 'https://github.com/BhagathPranav',
  avatarUrl: 'https://avatars.githubusercontent.com/u/122788329?v=4',
  /** Used when avatar fails */
  avatarAlt: 'Bhagath Pranav portrait',
};

/** Appears on About — concise paragraphs recruiters skim first */
export const bio = {
  headline:
    'I specialize in SQL-driven analytics, Python notebooks, and dashboards—plus modern static sites when I want ideas on the web fast.',
  paragraphs: [
    'Public GitHub work spans end-to-end analytics (inventory & behaviour datasets), exploratory analysis with Pandas and Tableau, and hands-on MERN workshop builds. I care about clean queries, reproducible notebooks, and narratives recruiters can verify by clicking through repos.',
    'This site is built with Astro and deployed on Cloudflare—same stack as the vibe_portfolio repo—so technical reviewers see both craft and analytics depth.',
  ],
};

/** Numbered “What I Do” — tweak wording anytime */
export const whatIDo = [
  'Design SQL schemas and analytical queries for inventory, basket behaviour, and funnel-style problems.',
  'Prototype insights in Jupyter—Python data prep, exploratory charts, and paths toward dashboards.',
  'Story-find with visualization tools (e.g. Tableau-style workflows on restaurant marketplace data).',
  'Ship lightweight front ends (Astro, Tailwind) and workshop-style JavaScript apps when product UX matters.',
];

/**
 * Education timeline — edit rows in `education` below.
 */
export type EducationEntry = {
  degree: string;
  institution: string;
  period: string;
  highlights?: string[];
};

export const education: EducationEntry[] = [
  {
    degree: 'B.Tech in Computer Science & Engineering (CGPA: 8.05)',
    institution: 'Vardhaman College of Engineering, Hyderabad',
    period: 'Aug 2023 - Mar 2027',
    highlights: [
      'Pursuing B.Tech in IT/CSE bridging Data Analytics, Machine Learning, and AWS Cloud infrastructure',
      'Co-inventor on published Patent for an AI-integrated automated data and rescue device',
      'Actively translating academic theory into interactive data dashboards, predictive models, and real-world engineering solutions'
    ],
  },
  {
    degree: 'Cloud Infrastructure Intern (Data Focus)',
    institution: '1stop.ai (Technical Collaboration with IIT Guwahati)',
    period: 'Jul 2025 - Sep 2025',
    highlights: [
      'Managed secure AWS cloud environments tailored for high-volume data storage and scalable application deployment',
      'Configured EC2 instances and Virtual Private Clouds (VPCs) to ensure 99% uptime and secure routing for backend data pipelines',
      'Technologies used: AWS, Cloud Computing, VPC, EC2 Linux Deployment, Infrastructure Optimization'
    ],
  },
];

/** Official Contact Information */
export const contact = {
  email: 'bhagathpranav057@gmail.com',
  linkedinUrl: 'https://www.linkedin.com/in/bhagath-pranav-kumar057',
};
