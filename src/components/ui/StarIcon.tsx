import { assets } from '@/constants/assets'
import { cn } from '@/utils/cn'

interface StarIconProps {
  tone?: 'lime' | 'blue'
  /** Size of the square icon box, e.g. `size-4`. */
  className?: string
}

/** Filled rating star. The glyph sits inside its box with the same padding as the Figma icon. */
export default function StarIcon({ tone = 'lime', className = 'size-4' }: StarIconProps) {
  return (
    <span className={cn('relative shrink-0', className)} aria-hidden>
      <span className="absolute top-[6.92%] right-[8.87%] bottom-[14.53%] left-[8.87%]">
        <img
          src={tone === 'lime' ? assets.icons.star : assets.icons.starBlue}
          alt=""
          className="block size-full"
        />
      </span>
    </span>
  )
}
