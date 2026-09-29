import type { CSSProperties, ReactNode } from 'react'
import { cn } from '@/utils/cn'

const TONES = {
  light: 'bg-white text-shuttle-gray-950',
  brand: 'bg-persian-blue-800 text-shuttle-gray-50',
  accent: 'bg-electric-lime-400 text-shuttle-gray-950',
} as const

interface FloatingCardProps {
  children: ReactNode
  tone?: keyof typeof TONES
  className?: string
  style?: CSSProperties
}

export default function FloatingCard({ children, tone = 'light', className, style }: FloatingCardProps) {
  return (
    <div
      className={cn('flex flex-col items-start gap-2 rounded-2xl p-4', TONES[tone], className)}
      style={style}
    >
      {children}
    </div>
  )
}
