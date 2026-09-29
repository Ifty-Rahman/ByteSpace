import type { ReactNode } from 'react'
import { cn } from '@/utils/cn'

interface DesignCanvasProps {
  children: ReactNode
  className?: string
}

export default function DesignCanvas({ children, className }: DesignCanvasProps) {
  return (
    <div
      className={cn(
        'pointer-events-none absolute inset-y-0 left-1/2 w-360 -translate-x-1/2',
        className,
      )}
    >
      {children}
    </div>
  )
}
