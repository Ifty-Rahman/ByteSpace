import type { CSSProperties, ReactNode } from 'react'
import { cn } from '../../utils/cn'

interface FloatingCardProps {
  children: ReactNode
  tone?: 'light' | 'brand'
  className?: string
  style?: CSSProperties
}

/** Small rounded info card that floats over the hero / feature imagery. */
export default function FloatingCard({ children, tone = 'light', className, style }: FloatingCardProps) {
  return (
    <div
      className={cn(
        'flex flex-col items-start gap-2 rounded-2xl p-4',
        tone === 'light' ? 'bg-white text-shuttle-gray-950' : 'bg-persian-blue-800 text-shuttle-gray-50',
        className,
      )}
      style={style}
    >
      {children}
    </div>
  )
}
