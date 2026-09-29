import type { LinkProps } from '@tanstack/react-router'
import type { FooterColumn } from '@/types'

export interface NavItem {
  label: string
  to?: LinkProps['to']
  href?: string
}

export const primaryNav: NavItem[] = [
  { label: 'Home', to: '/' },
  { label: 'Courses', href: '/#courses' },
  { label: 'Creators', href: '/#creators' },
]

export const accountNav: NavItem[] = [
  { label: 'Sign In', to: '/login' },
  { label: 'Join Us', to: '/signup' },
]

export const footerColumns: FooterColumn[] = [
  {
    title: 'Browse',
    links: ['Featured Courses', 'Featured Categories', 'Business', 'IT', 'Design'],
  },
  { links: ['Development', 'Marketing', 'Photography', 'Finance', 'Sport'] },
  {
    title: 'Platform',
    links: ['Become a Creator', 'Affiliate Program', 'Contact', 'Help', 'About'],
  },
]

export const legalLinks: string[] = ['Privacy Policy', 'Terms of Service', 'Cookies Settings']
