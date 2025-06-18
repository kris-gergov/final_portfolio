'use client'
import { motion } from 'motion/react'

import {
  PROJECTS,
  WORK_EXPERIENCE,
  BLOG_POSTS,
  EMAIL,
  SOCIAL_LINKS,
  EDUCATION,
  SKILLS,
} from './data'
import { PersonalPageData } from '@/types'
import { ANIMATION_TRANSITIONS, ANIMATION_VARIANTS } from './constants'
import { HeroSkillsSection } from '@/components/section/hero-skills'
import { ConnectSection } from '@/components/section/connect'
import { WorkExperienceEducationSection } from '@/components/section/experience-education'

export default function PersonalPage() {
  const data: PersonalPageData = {
    skills: SKILLS,
    projects: PROJECTS,
    workExperience: WORK_EXPERIENCE,
    education: EDUCATION,
    blogPosts: BLOG_POSTS,
    email: EMAIL,
    socialLinks: SOCIAL_LINKS,
  }

  return (
    <motion.main
      className="space-y-24"
      variants={ANIMATION_VARIANTS.container}
      initial="hidden"
      animate="visible"
    >
      <WorkExperienceEducationSection
        workExperience={data.workExperience}
        education={data.education}
        variants={ANIMATION_VARIANTS.section}
        transition={ANIMATION_TRANSITIONS.section}
      />

      <HeroSkillsSection
        skills={data.skills}
        variants={ANIMATION_VARIANTS.section}
        transition={ANIMATION_TRANSITIONS.section}
        email={data.email}
        socialLinks={data.socialLinks}
      />
    </motion.main>
  )
}
