import { assets } from '@/constants/assets'
import type { Course } from '@/types'

/** Course catalogue shared across pages (home, auth showcase, future course pages). */
const courseDefaults = {
  author: 'purepearl studio',
  lessons: '17 Lessons',
  duration: '2 hours 16 mins',
  comments: '59 Comments',
  level: 'Beginner',
  price: '$25',
  priceUnit: '/lifetime',
  rating: '4.5',
  learners: assets.avatars.learners,
  learnersMore: '26+',
} satisfies Omit<Course, 'id' | 'title' | 'image'>

export const courses: Course[] = [
  { id: 'figma-basics', title: 'Learn Figma from Basic', image: assets.images.course(1) },
  { id: 'digital-asset', title: 'Build Digital Asset', image: assets.images.course(2) },
  { id: 'big-data', title: 'the Power of Big Data', image: assets.images.course(3) },
  {
    id: 'productivity-self-care',
    title: 'Balancing Productivity and Self-Care',
    image: assets.images.course(4),
  },
  { id: 'money-management', title: 'Mastering Money Management', image: assets.images.course(5) },
  { id: 'idea-to-startup', title: 'From Idea to Startup Success', image: assets.images.course(6) },
].map((course) => ({ ...courseDefaults, ...course }))

export function getCourse(id: string): Course {
  const course = courses.find((c) => c.id === id)
  if (!course) throw new Error(`Unknown course: ${id}`)
  return course
}
