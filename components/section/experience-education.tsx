'use client'
import { motion } from 'motion/react'
import { Spotlight } from '@/components/ui/spotlight'
import { ExternalLink, GraduationCap, Briefcase } from 'lucide-react'
import { Education, WorkExperience } from '@/types'
import { Card } from '../ui/card'

interface WorkExperienceEducationSectionProps {
  workExperience: WorkExperience[]
  education: Education[]
  variants: any
  transition: any
}

export function WorkExperienceEducationSection({
  workExperience,
  education,
  variants,
  transition,
}: WorkExperienceEducationSectionProps) {
  return (
    <motion.section
      variants={variants}
      transition={transition}
      className="mb-8 space-y-6"
    >
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        {/* Work Experience Column */}
        <div className="flex flex-col space-y-4">
          <motion.div variants={variants} className="flex items-center gap-2">
            <Briefcase className="h-5 w-5 text-blue-600 dark:text-blue-500" />
            <h3 className="text-lg font-medium text-zinc-900 dark:text-zinc-100">
              Work Experience
            </h3>
          </motion.div>

          {workExperience.length > 0 ? (
            <div className="flex flex-1 flex-col gap-3">
              {workExperience.map((job) => (
                <Card key={job.id} item={job} type="work" />
              ))}
            </div>
          ) : (
            <p className="text-zinc-500 italic dark:text-zinc-400">
              No work experience listed.
            </p>
          )}
        </div>

        {/* Education Column */}
        <div className="flex flex-col space-y-4">
          <motion.div variants={variants} className="flex items-center gap-2">
            <GraduationCap className="h-5 w-5 text-blue-600 dark:text-blue-500" />
            <h3 className="text-lg font-medium text-zinc-900 dark:text-zinc-100">
              Education
            </h3>
          </motion.div>

          {education.length > 0 ? (
            <div className="flex flex-1 flex-col gap-3">
              {education.map((edu) => (
                <Card key={edu.id} item={edu} type="education" />
              ))}
            </div>
          ) : (
            <p className="text-zinc-500 italic dark:text-zinc-400">
              No education listed.
            </p>
          )}
        </div>
      </div>
    </motion.section>
  )
}
