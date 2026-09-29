import { assets } from '@/constants/assets'
import { getCourse } from '@/data/courses'
import type { OrnamentConfig } from '@/types'

/** Course cards stacked in the showcase (back card first). */
export const showcaseCourses = [getCourse('digital-asset'), getCourse('big-data')]

/** 3D shapes around the showcase — positions are relative to the showcase column. */
export const showcaseOrnaments: OrnamentConfig[] = [
  {
    image: assets.ornaments.springB,
    mask: assets.ornamentMasks.springB175,
    tint: 'white',
    size: 175,
    left: 350,
    top: 506,
    flipped: true,
  },
  {
    image: assets.ornaments.torus,
    mask: assets.ornamentMasks.torus342,
    tint: 'lime',
    size: 146,
    left: 31,
    top: 200,
    shape: 'cone',
  },
  {
    image: assets.ornaments.cone,
    mask: assets.ornamentMasks.cone188,
    tint: 'lime',
    size: 188,
    left: -23,
    top: 582,
    shape: 'cone',
  },
]
