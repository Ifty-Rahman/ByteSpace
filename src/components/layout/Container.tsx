import type { ReactNode } from 'react'
import { cn } from '../../utils/cn'

interface ContainerProps {
  children: ReactNode
  className?: string
}

/** Centers content in the 1200px column used throughout the design. */
export default function Container({ children, className }: ContainerProps) {
  return <div className={cn('mx-auto w-full max-w-page', className)}>{children}</div>
}
