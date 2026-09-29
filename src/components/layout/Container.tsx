import type { ReactNode } from 'react'
import { cn } from '@/utils/cn'

interface ContainerProps {
  children: ReactNode
  className?: string
}

export default function Container({ children, className }: ContainerProps) {
  return <div className={cn('mx-auto w-full max-w-page', className)}>{children}</div>
}
