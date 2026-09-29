import { assets } from '@/constants/assets'
import { cn } from '@/utils/cn'

/**
 * The 120px line grid used on every blue area (hero, creator banner, auth pages).
 * It's always the Figma frame size — 1440 × 1024 — centred horizontally and pinned to the
 * top of its (relatively positioned, overflow-hidden) parent.
 */
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
