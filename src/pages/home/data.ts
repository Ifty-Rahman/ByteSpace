import { assets } from '@/constants/assets'
import type {
  Category,
  OrnamentConfig,
  Stat,
  Testimonial,
} from '@/types'

/* ------------------------------------------------------------------ */
/* Partners                                                            */
/* ------------------------------------------------------------------ */

export const partners = assets.partners.map((src, i) => ({
  src,
  width: [167, 168, 170, 170, 169][i],
  height: i === 4 ? 42 : 41,
}))

/* ------------------------------------------------------------------ */
/* Courses                                                             */
/* ------------------------------------------------------------------ */

/** Topic filters, grouped by the row they sit on in the design. */
export const courseTopicRows: string[][] = [
  [
    'Featured',
    'Music',
    'Drawing & Painting',
    'Marketing',
    'Animation',
    'Social Media',
    'UI/UX Design',
    'Creative Marketing',
  ],
  [
    'Digital Illustration',
    'Film & Video',
    'Crafts',
    'Freelance & Entrepreneurship',
    'Graphic Design',
    'Photography',
  ],
  ['Productivity', 'Web Development', 'Data Science', 'Cooking'],
]

export const activeTopic = 'Featured'


/* ------------------------------------------------------------------ */
/* Categories                                                          */
/* ------------------------------------------------------------------ */

export const categories: Category[] = [
  { label: 'Design', icon: assets.icons.categoryDesign },
  { label: 'Development', icon: assets.icons.categoryDevelopment },
  { label: 'IT & Software', icon: assets.icons.categoryIt },
  { label: 'Business', icon: assets.icons.categoryBusiness },
  { label: 'Marketing', icon: assets.icons.categoryMarketing },
  { label: 'Photography', icon: assets.icons.categoryPhotography },
]

/* ------------------------------------------------------------------ */
/* Professional growth / creators                                      */
/* ------------------------------------------------------------------ */

export const growthStats: Stat[] = [
  { value: '12K', label: 'Students' },
  { value: '70+', label: 'Courses' },
  { value: '16', label: 'Creators' },
]

export const creatorBenefits: string[] = [
  'Share Your Expertise',
  'Monetize Your Passion',
  'Flexibility and Autonomy',
  'Build a Community',
]

/* ------------------------------------------------------------------ */
/* Testimonials                                                        */
/* ------------------------------------------------------------------ */

export const testimonials: Testimonial[] = [
  {
    name: 'Sarah M.',
    role: 'Enthusiastic Learner',
    avatar: assets.avatars.sarah,
    quote:
      '"ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning."',
  },
  {
    name: 'James L.',
    role: 'Lifelong Learner',
    avatar: assets.avatars.james,
    quote:
      '"I\'ve tried several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development."',
  },
  {
    name: 'Alex B.',
    role: 'Inspired Creator',
    avatar: assets.avatars.alex,
    quote:
      '"As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It\'s fulfilling to see my courses making a positive impact on learners globally."',
  },
]

/* ------------------------------------------------------------------ */
/* 3D ornaments — positions are in the 1440px-wide design canvas.      */
/* ------------------------------------------------------------------ */

const { ornaments: o, ornamentMasks: m } = assets

export const heroOrnaments: OrnamentConfig[] = [
  { image: o.springA, mask: m.springA330, tint: 'white', size: 330, left: 1127, top: 672 },
  { image: o.springB, mask: m.springB385, tint: 'lime', size: 385, left: -118, top: 221 },
  { image: o.springB, mask: m.springB175, tint: 'white', size: 175, left: 183, top: 477, flipped: true },
  { image: o.torus, mask: m.torus342, tint: 'white', size: 342, left: 18, top: 682, shape: 'cone' },
  { image: o.cylinder, mask: m.cylinder370, tint: 'lime', size: 370, left: 1231, top: 221, shape: 'cone' },
  { image: o.cone, mask: m.cone188, tint: 'white', size: 188, left: 1106, top: 464, shape: 'cone' },
]

export const ctaOrnaments: OrnamentConfig[] = [
  { image: o.cone, mask: m.cone188, tint: 'lime', size: 188, left: 1080, top: 0, shape: 'cone' },
  { image: o.springA, mask: m.springA330, tint: 'lime', size: 330, left: 1110, top: 289 },
  { image: o.springB, mask: m.springB385, tint: 'lime', size: 385, left: -118, top: -162 },
  { image: o.springB, mask: m.springB175, tint: 'white', size: 175, left: 178, top: 5, flipped: true },
  { image: o.coneAlt, mask: m.coneAlt188, tint: 'white', size: 188, left: -48, top: 225, shape: 'cone' },
  { image: o.torus, mask: m.torus342, tint: 'lime', size: 342, left: 20, top: 299, shape: 'cone' },
  { image: o.cylinder, mask: m.cylinder370, tint: 'white', size: 370, left: 1226, top: 6, shape: 'cone' },
]
