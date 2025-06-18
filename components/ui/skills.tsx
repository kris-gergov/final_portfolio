'use client'
import { motion } from 'motion/react'
import {
  Code2,
  Database,
  Palette,
  Globe,
  Container,
  Shield,
} from 'lucide-react'
import { Skill } from '@/types'

interface SkillsSectionProps {
  skills: Skill[]
  variants: any
  transition: any
}

const skillIcons = {
  // Frontend
  TypeScript: <Code2 className="h-4 w-4" />,
  React: <Code2 className="h-4 w-4" />,
  'Next.JS': <Code2 className="h-4 w-4" />,
  Jest: <Code2 className="h-4 w-4" />,
  Playwright: <Code2 className="h-4 w-4" />,

  // Backend
  'Node.js': <Code2 className="h-4 w-4" />,
  Express: <Code2 className="h-4 w-4" />,
  Mongoose: <Code2 className="h-4 w-4" />,
  Sequelize: <Code2 className="h-4 w-4" />,

  // Database
  MongoDB: <Database className="h-4 w-4" />,
  PostgreSQL: <Database className="h-4 w-4" />,

  // Styling
  'HTML/CSS': <Palette className="h-4 w-4" />,
  Tailwind: <Palette className="h-4 w-4" />,

  // API
  GraphQL: <Globe className="h-4 w-4" />,
  Apollo: <Globe className="h-4 w-4" />,
  Wundergraph: <Globe className="h-4 w-4" />,

  // DevOps/Infrastructure
  Docker: <Container className="h-4 w-4" />,
  AWS: <Container className="h-4 w-4" />,

  // Security/Auth
  Supertokens: <Shield className="h-4 w-4" />,
  Cerbos: <Shield className="h-4 w-4" />,
}

function SkillBadge({ skill }: { skill: Skill }) {
  const icon = skillIcons[skill.name as keyof typeof skillIcons] || (
    <Code2 className="h-4 w-4" />
  )

  return (
    <div className="group flex items-center gap-2 rounded-full bg-zinc-100 px-3 py-1.5 text-sm font-medium text-zinc-700 transition-colors duration-200 hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-700">
      <span className="text-zinc-500 transition-colors duration-200 group-hover:text-zinc-600 dark:text-zinc-400 dark:group-hover:text-zinc-300">
        {icon}
      </span>
      <span>{skill.name}</span>
    </div>
  )
}

function SkillCategory({ title, skills }: { title: string; skills: Skill[] }) {
  if (skills.length === 0) return null

  return (
    <div className="space-y-2">
      <h4 className="text-xs font-medium tracking-wider text-zinc-500 uppercase dark:text-zinc-400">
        {title}
      </h4>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <SkillBadge key={skill.name} skill={skill} />
        ))}
      </div>
    </div>
  )
}

export function SkillsSection({
  skills,
  variants,
  transition,
}: SkillsSectionProps) {
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
    <motion.section
      variants={variants}
      transition={transition}
      className="space-y-6"
    >
      <h3 className="text-lg font-medium text-zinc-900 dark:text-zinc-100">
        Technical Skills
      </h3>

      <div className="space-y-6">
        <SkillCategory
          title="Frontend"
          skills={skillCategories['Frontend'] || []}
        />
        <SkillCategory
          title="Backend"
          skills={skillCategories['Backend'] || []}
        />
        <SkillCategory
          title="Database"
          skills={skillCategories['Database'] || []}
        />
        <SkillCategory
          title="Styling"
          skills={skillCategories['Styling'] || []}
        />
        <SkillCategory
          title="API & GraphQL"
          skills={skillCategories['API'] || []}
        />
        <SkillCategory
          title="DevOps"
          skills={skillCategories['DevOps'] || []}
        />
        <SkillCategory
          title="Auth & Security"
          skills={skillCategories['Security'] || []}
        />
      </div>
    </motion.section>
  )
}
