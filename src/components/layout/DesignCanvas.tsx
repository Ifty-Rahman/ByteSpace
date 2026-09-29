import type { ReactNode } from 'react'
import { cn } from '@/utils/cn'

interface DesignCanvasProps {
  children: ReactNode
  className?: string
}

/**
 * A 1440px-wide layer, centred in its (relatively positioned) section.
 * Decorative, absolutely positioned artwork uses the exact coordinates from the
 * Figma frame inside this layer, so it stays aligned with the 1200px content column.
 */
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
