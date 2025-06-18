'use client'
import { motion } from 'motion/react'
import { MagneticSocialLink } from '../utility/magnetic-social-link'
import { SocialLink } from '@/types'

interface ConnectSectionProps {
  email: string
  socialLinks: SocialLink[]
  variants: any
  transition: any
}

export function ConnectSection({
  email,
  socialLinks,
  variants,
  transition,
}: ConnectSectionProps) {
  return (
    <motion.section variants={variants} transition={transition}>
      <h3 className="mb-5 text-lg font-medium">Connect</h3>
      <p className="mb-5 text-zinc-600 dark:text-zinc-400">
        Feel free to contact me at{' '}
        <a className="underline dark:text-zinc-300" href={`mailto:${email}`}>
          {email}
        </a>
      </p>
      <div className="flex items-center justify-start space-x-3">
        {socialLinks.map((link) => (
          <MagneticSocialLink key={link.label} link={link.link}>
            {link.label}
          </MagneticSocialLink>
        ))}
      </div>
    </motion.section>
  )
}
