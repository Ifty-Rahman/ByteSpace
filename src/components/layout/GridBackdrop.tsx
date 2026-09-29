import { assets } from '@/constants/assets'
import { cn } from '@/utils/cn'

export default function GridBackdrop({ className }: { className?: string }) {
  return (
    <img
      src={assets.decor.grid}
      alt=""
      aria-hidden
      className={cn(
        'pointer-events-none absolute top-0 left-1/2 h-[1024px] w-[1440px] max-w-none -translate-x-1/2',
        className,
      )}
    />
  )
}
