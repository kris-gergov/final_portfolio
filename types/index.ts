export interface Project {
  name: string
  video: string
  link: string
  description: string
}

export interface WorkExperience {
  id: string
  title: string
  company: string
  start: string
  end: string
  link: string
}

export interface Education {
  id: string
  degree: string
  institution: string
  start: string
  end: string
}

export interface Skill {
  name: string
  category: string
  icon?: React.ReactNode
}

export interface BlogPost {
  uid: string
  title: string
  description: string
  link: string
}

export interface SocialLink {
  label: string
  link: string
}

export interface PersonalPageData {
  projects: Project[]
  workExperience: WorkExperience[]
  education: Education[]
  blogPosts: BlogPost[]
  email: string
  socialLinks: SocialLink[]
  skills: Skill[]
}
