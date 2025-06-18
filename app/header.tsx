'use client'
import { TextEffect } from '@/components/ui/text-effect'
import Link from 'next/link'

export function Header() {
  return (
    <header className="mb-16 flex grid grid-cols-1 gap-4 lg:grid-cols-[2fr_5fr] lg:gap-8">
      <div>
        <Link href="/" className="font-medium text-black dark:text-white">
          KRIS GERGOV
        </Link>
        <TextEffect
          as="p"
          preset="fade"
          per="char"
          className="text-blue-600 dark:text-blue-500"
          delay={0.5}
        >
          Senior Full-Stack Developer
        </TextEffect>
      </div>

      <div className="flex flex-col justify-center">
        <p className="leading-relaxed text-zinc-600 dark:text-zinc-400">
          With over 6 years of experience architecting and maintaining
          enterprise-grade microservices and high-traffic web applications.
        </p>
      </div>
    </header>
  )
}
