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
  title?: string
  links: string[]
}

export type OrnamentTint = 'lime' | 'white'

export interface OrnamentConfig {
  image: string
  mask: string
  tint: OrnamentTint
  size: number
  left: number
  top: number
  shape?: 'frame' | 'cone'
  flipped?: boolean
}
