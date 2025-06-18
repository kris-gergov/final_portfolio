import { Education, Skill } from '@/types'

type Project = {
  name: string
  description: string
  link: string
  video: string
  id: string
}

type WorkExperience = {
  company: string
  title: string
  start: string
  end: string
  link: string
  id: string
}

type BlogPost = {
  title: string
  description: string
  link: string
  uid: string
}

type SocialLink = {
  label: string
  link: string
}

export const PROJECTS: Project[] = [
  {
    name: 'Motion Primitives Pro',
    description:
      'Advanced components and templates to craft beautiful websites.',
    link: 'https://pro.motion-primitives.com/',
    video:
      'https://res.cloudinary.com/read-cv/video/upload/t_v_b/v1/1/profileItems/W2azTw5BVbMXfj7F53G92hMVIn32/newProfileItem/d898be8a-7037-4c71-af0c-8997239b050d.mp4?_a=DATAdtAAZAA0',
    id: 'project1',
  },
  {
    name: 'Motion Primitives',
    description: 'UI kit to make beautiful, animated interfaces.',
    link: 'https://motion-primitives.com/',
    video:
      'https://res.cloudinary.com/read-cv/video/upload/t_v_b/v1/1/profileItems/W2azTw5BVbMXfj7F53G92hMVIn32/XSfIvT7BUWbPRXhrbLed/ee6871c9-8400-49d2-8be9-e32675eabf7e.mp4?_a=DATAdtAAZAA0',
    id: 'project2',
  },
]

// Sample education data to add to your data file
export const EDUCATION: Education[] = [
  {
    id: 'edu-1',
    degree: 'Bachelor of Science in Computer Science',
    institution: 'University of East Anglia',
    start: '2017',
    end: '2020',
  },
  {
    id: 'edu-2',
    degree: 'AWS Certified Developer Associate',
    institution: 'Amazon Web Services',
    start: '2025',
    end: '2025',
  },
  {
    id: 'edu-3',
    degree: 'SAFE 6.0 Certified',
    institution: 'Scaled Agile Framework',
    start: '2023',
    end: '2023',
  },
]

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'ClearRoute',
    title: 'Senior Full-Stack Cloud Developer',
    start: '2023',
    end: 'Present',
    link: 'https://www.clearroute.io/',
    id: 'work1',
  },
  {
    company: 'PCCW Global',
    title: 'Full-Stack Developer',
    start: '2020',
    end: '2023',
    link: 'https://www.pccwglobal.com/',
    id: 'work2',
  },
  {
    company: 'Purple Crane',
    title: 'C# .NET Developer',
    start: '2016',
    end: '2017',
    link: 'https://purplecrane.com/',
    id: 'work3',
  },
]

// Sample skills data to add to your data file
export const SKILLS: Skill[] = [
  // Frontend
  { name: 'TypeScript', category: 'Frontend' },
  { name: 'React', category: 'Frontend' },
  { name: 'Next.JS', category: 'Frontend' },
  { name: 'Jest', category: 'Frontend' },
  { name: 'Playwright', category: 'Frontend' },

  // Backend
  { name: 'Node.js', category: 'Backend' },
  { name: 'Express', category: 'Backend' },
  { name: 'Mongoose', category: 'Backend' },
  { name: 'Sequelize', category: 'Backend' },

  // Database
  { name: 'MongoDB', category: 'Database' },
  { name: 'PostgreSQL', category: 'Database' },

  // Styling
  { name: 'HTML/CSS', category: 'Styling' },
  { name: 'Tailwind', category: 'Styling' },

  // API
  { name: 'GraphQL', category: 'API' },
  { name: 'Apollo', category: 'API' },
  { name: 'Wundergraph', category: 'API' },

  // DevOps
  { name: 'Docker', category: 'DevOps' },
  { name: 'AWS', category: 'DevOps' },

  // Security
  { name: 'Supertokens', category: 'Security' },
  { name: 'Cerbos', category: 'Security' },
]

export const BLOG_POSTS: BlogPost[] = [
  {
    title: 'Exploring the Intersection of Design, AI, and Design Engineering',
    description: 'How AI is changing the way we design',
    link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
    uid: 'blog-1',
  },
  {
    title: 'Why I left my job to start my own company',
    description:
      'A deep dive into my decision to leave my job and start my own company',
    link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
    uid: 'blog-2',
  },
  {
    title: 'What I learned from my first year of freelancing',
    description:
      'A look back at my first year of freelancing and what I learned',
    link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
    uid: 'blog-3',
  },
  {
    title: 'How to Export Metadata from MDX for Next.js SEO',
    description:
      'A guide on exporting metadata from MDX files to leverage Next.js SEO features.',
    link: '/blog/example-mdx-metadata',
    uid: 'blog-4',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'Github',
    link: 'https://github.com/kris-gergov',
  },
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/kris-gergov/',
  },
]

export const EMAIL = 'krisgergov@gmail.com'
