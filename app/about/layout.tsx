import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About',
  description: 'Learn more about Mohammadali Dhanga - skills, experience and background.',
  openGraph: {
    title: 'About | Mohammadali Dhanga',
    description: 'Learn more about Mohammadali Dhanga - skills, experience and background.',
  },
  twitter: {
    title: 'About | Mohammadali Dhanga',
    description: 'Learn more about Mohammadali Dhanga - skills, experience and background.',
  },
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

