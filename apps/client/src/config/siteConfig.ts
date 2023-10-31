
const BASE_URL = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'

export const siteConfig = {
  name: 'Turbo Hanko',
  description:
    'Turbo Hanko is a trpc supported full stack application that allows you to create and manage your todos.',
  url: BASE_URL,
  ogImage: `${BASE_URL}/images/og.svg`,
  links: {
    twitter: 'https://twitter.com/jacksonkasi11',
    github: 'https://github.com/jacksonkasi1',
    LinkedIn: 'https://www.linkedin.com/in/jacksonkasi',
  },
}