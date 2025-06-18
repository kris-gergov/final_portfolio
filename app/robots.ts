import type { MetadataRoute } from 'next'

export const WEBSITE_URL = 'https://kris-gergov.vercel.app'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/',
    },
    sitemap: `${WEBSITE_URL}/sitemap.xml`,
  }
}
