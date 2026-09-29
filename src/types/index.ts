export interface NavLink {
  label: string
  href: string
  active?: boolean
}

export interface Course {
  id: string
  title: string
  author: string
  image: string
  lessons: string
  duration: string
  comments: string
  level: string
  price: string
  priceUnit: string
  rating: string
  learners: string[]
  learnersMore: string
}

export interface Category {
  label: string
  icon: string
}

export interface Testimonial {
  name: string
  role: string
  quote: string
  avatar: string
}

export interface Stat {
  value: string
  label: string
}

export interface FooterColumn {
  /** Column title — present in the design but visually hidden (transparent text). */
  title?: string
  links: string[]
}

export type OrnamentTint = 'lime' | 'white'

export interface OrnamentConfig {
  image: string
  mask: string
  tint: OrnamentTint
  /** Size of the square frame in px. */
  size: number
  /** Position within the 1440px design canvas. */
  left: number
  top: number
  /** Figma's "Cone" frames use a slightly different image bleed than plain frames. */
  shape?: 'frame' | 'cone'
  flipped?: boolean
}
