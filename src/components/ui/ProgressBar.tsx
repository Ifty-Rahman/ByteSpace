import { cn } from '../../utils/cn'

interface ProgressBarProps {
  /** 0–100 */
  value: number
  trackClassName?: string
}

export default function ProgressBar({ value, trackClassName = 'bg-track' }: ProgressBarProps) {
  return (
    <div
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin={0}
      aria-valuemax={100}
      className={cn('h-2 w-[200px] overflow-hidden rounded-3xl', trackClassName)}
    >
      <div className="h-full rounded-3xl bg-electric-lime-400" style={{ width: `${value}%` }} />
    </div>
  )
}
