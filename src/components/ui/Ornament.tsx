import type { CSSProperties } from 'react'
import type { OrnamentConfig } from '@/types'
import { cn } from '@/utils/cn'

const TINTS = {
  lime: 'bg-electric-lime-400',
  white: 'bg-shuttle-gray-50',
} as const

const BLEED: Record<NonNullable<OrnamentConfig['shape']>, CSSProperties> = {
  frame: { top: '0%', right: '0.47%', bottom: '-0.47%', left: '-0.93%' },
  cone: { top: '-0.22%', right: '0.56%', bottom: '-0.28%', left: '-1.05%' },
}

interface OrnamentProps extends OrnamentConfig {
  className?: string
}

export default function Ornament({
  image,
  mask,
  tint,
  size,
  left,
  top,
  shape = 'frame',
  flipped = false,
  className,
}: OrnamentProps) {
  const maskStyle: CSSProperties = {
    maskImage: `url(${mask})`,
    WebkitMaskImage: `url(${mask})`,
    maskSize: '100% 100%',
    WebkitMaskSize: '100% 100%',
    maskRepeat: 'no-repeat',
    WebkitMaskRepeat: 'no-repeat',
  }

  return (
    <div
      aria-hidden
      className={cn('pointer-events-none absolute isolate', flipped && '-scale-x-100', className)}
      style={{ left, top, width: size, height: size }}
    >
      <div className="absolute" style={BLEED[shape]}>
        <img src={image} alt="" className="absolute inset-0 size-full object-cover" />
        <div className={cn('absolute inset-0 mix-blend-hard-light', TINTS[tint])} style={maskStyle} />
      </div>
    </div>
  )
}
