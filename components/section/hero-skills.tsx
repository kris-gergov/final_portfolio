'use client'
import { motion } from 'motion/react'
import {
  Code2,
  Database,
  Palette,
  Globe,
  Container,
  Shield,
  Download,
} from 'lucide-react'
import { Skill, SocialLink } from '@/types'
import { MagneticSocialLink } from '../utility/magnetic-social-link'

interface HeroSkillsSectionProps {
  skills: Skill[]
  variants: any
  transition: any
  email: string
  socialLinks: SocialLink[]
}

const skillIcons = {
  Frontend: <Code2 className="h-3 w-3 text-blue-600 dark:text-blue-500" />,
  Backend: <Code2 className="h-3 w-3 text-blue-600 dark:text-blue-500" />,
  Database: <Database className="h-3 w-3 text-blue-600 dark:text-blue-500" />,
  Styling: <Palette className="h-3 w-3 text-blue-600 dark:text-blue-500" />,
  API: <Globe className="h-3 w-3 text-blue-600 dark:text-blue-500" />,
  DevOps: <Container className="h-3 w-3 text-blue-600 dark:text-blue-500" />,
  Security: <Shield className="h-3 w-3 text-blue-600 dark:text-blue-500" />,
}

export function HeroSkillsSection({
  skills,
  variants,
  transition,
  email,
  socialLinks,
}: HeroSkillsSectionProps) {
  // Group skills by category
  const skillCategories = skills.reduce(
    (acc, skill) => {
      if (!acc[skill.category]) {
        acc[skill.category] = []
      }
      acc[skill.category].push(skill)
      return acc
    },
    {} as Record<string, Skill[]>,
  )

  return (
    <motion.section variants={variants} transition={transition}>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-[2fr_1fr] lg:gap-8">
        <motion.div
          variants={variants}
          className="flex flex-col justify-center"
        >
          <h3 className="mb-4 text-lg font-medium text-zinc-900 dark:text-zinc-100">
            Technical Skills
          </h3>

          <div className="space-y-3">
            {Object.entries(skillCategories).map(
              ([category, categorySkills]) => (
                <div key={category} className="flex items-center gap-3">
                  <div className="flex min-w-0 flex-shrink-0 items-center gap-1.5">
                    <span className="text-zinc-500 dark:text-zinc-400">
                      {skillIcons[category as keyof typeof skillIcons]}
                    </span>
                    <span className="text-xs font-medium tracking-wider text-zinc-500 uppercase dark:text-zinc-400">
                      {category}
                    </span>
                  </div>

                  <div className="flex min-w-0 flex-wrap gap-1.5">
                    {categorySkills.map((skill, index) => (
                      <span key={skill.name}>
                        <span className="text-sm text-zinc-700 transition-colors duration-300 hover:text-blue-600 dark:text-zinc-300 dark:hover:text-blue-400">
                          {skill.name}
                        </span>
                        {index < categorySkills.length - 1 && (
                          <span className="text-zinc-400 dark:text-zinc-600">
                            ,{' '}
                          </span>
                        )}
                      </span>
                    ))}
                  </div>
                </div>
              ),
            )}
          </div>
        </motion.div>

        {/* Right section for contact and social links */}
        <motion.div variants={variants} className="flex flex-col">
          <h3 className="mb-5 text-lg font-medium">Connect</h3>
          <p className="mb-5 text-zinc-600 dark:text-zinc-400">
            Feel free to contact me at{' '}
            <a
              className="font-medium text-blue-600 underline dark:text-blue-500"
              href={`mailto:${email}`}
            >
              {email}
            </a>
          </p>
          <div className="flex items-center justify-start space-x-3">
            {socialLinks.map((link) => (
              <MagneticSocialLink key={link.label} link={link.link}>
                <span className="font-medium text-zinc-800 transition-colors duration-300 group-hover:text-blue-600 dark:text-zinc-200 dark:group-hover:text-blue-400">
                  {link.label}
                </span>
              </MagneticSocialLink>
            ))}
          </div>
          <div className="mt-6 flex items-center space-x-2">
            <a
              href="/CV.pdf"
              download
              className="inline-flex items-center gap-2 rounded-lg border border-zinc-300 px-3 py-1.5 text-sm font-medium text-zinc-800 transition-all duration-300 hover:scale-105 hover:border-blue-500 hover:text-blue-600 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none dark:border-zinc-700 dark:text-zinc-200 dark:hover:border-blue-500 dark:hover:text-blue-400 dark:focus:ring-offset-zinc-950"
            >
              <Download className="h-4 w-4" />
              Download CV
            </a>
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}
