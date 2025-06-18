'use client'
import { Education, WorkExperience } from '@/types'
import { Briefcase, GraduationCap, ExternalLink } from 'lucide-react'
import { Spotlight } from './spotlight'
import { MouseEvent } from 'react'

interface ExperienceCardProps {
  item: WorkExperience
  type: 'work'
}

interface EducationCardProps {
  item: Education
  type: 'education'
}

type CardProps = ExperienceCardProps | EducationCardProps

export function Card({ item, type }: CardProps) {
  const isWork = type === 'work'
  const workItem = isWork ? (item as WorkExperience) : null
  const educationItem = !isWork ? (item as Education) : null

  const hasLink = isWork && !!workItem?.link
  const linkUrl = isWork && workItem?.link

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const { currentTarget: target } = e
    const rect = target.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    target.style.setProperty('--spotlight-x', `${x}px`)
    target.style.setProperty('--spotlight-y', `${y}px`)
  }

  const CardContent = ({ className }: { className?: string }) => (
    <div
      className={`group relative overflow-hidden rounded-2xl bg-blue-300/30 p-[1px] dark:bg-blue-950/40 ${className || ''}`}
      onMouseMove={handleMouseMove}
    >
      <Spotlight
        className="from-blue-500 via-blue-400 to-transparent blur-2xl dark:from-blue-500 dark:via-blue-600 dark:to-transparent"
        size={128}
      />
      <div className="relative h-full w-full rounded-[15px] bg-white p-4 dark:bg-zinc-950">
        <div className="flex items-start gap-3">
          <div className="mt-1 flex-shrink-0 rounded-lg bg-zinc-100 p-2 dark:bg-zinc-800">
            {isWork ? (
              <Briefcase
                className="h-4 w-4 text-blue-600 dark:text-blue-500"
                aria-hidden="true"
              />
            ) : (
              <GraduationCap
                className="h-4 w-4 text-blue-600 dark:text-blue-500"
                aria-hidden="true"
              />
            )}
          </div>

          <div className="min-w-0 flex-1">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
              <div className="min-w-0 flex-1">
                <h4 className="font-medium text-zinc-900 dark:text-zinc-100">
                  {isWork ? workItem!.title : educationItem!.degree}
                </h4>
                <p className="text-zinc-600 dark:text-zinc-400">
                  {isWork ? workItem!.company : educationItem!.institution}
                </p>
              </div>

              <div className="flex items-center gap-2 text-sm text-zinc-500 dark:text-zinc-400">
                <time
                  dateTime={`${isWork ? workItem!.start : educationItem!.start}`}
                >
                  {isWork ? workItem!.start : educationItem!.start}
                </time>
                <span>-</span>
                <time
                  dateTime={`${isWork ? workItem!.end : educationItem!.end}`}
                >
                  {isWork ? workItem!.end : educationItem!.end}
                </time>
                {hasLink && (
                  <ExternalLink
                    className="h-3 w-3 text-zinc-400 transition-colors group-hover:text-blue-500 dark:text-zinc-500 dark:group-hover:text-blue-400"
                    aria-hidden="true"
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  if (hasLink) {
    return (
      <a
        href={linkUrl || '#'}
        target="_blank"
        rel="noopener noreferrer"
        className="block flex-1 rounded-2xl transition-transform hover:scale-[1.02] focus:scale-[1.02] focus:ring-2 focus:ring-zinc-500 focus:ring-offset-2 focus:ring-offset-white focus:outline-none dark:focus:ring-offset-zinc-950"
        aria-label={`View details for ${isWork ? workItem!.title + ' at ' + workItem!.company : educationItem!.degree + ' at ' + educationItem!.institution}`}
      >
        <CardContent className="h-full" />
      </a>
    )
  }

  return <CardContent className="flex-1" />
}
