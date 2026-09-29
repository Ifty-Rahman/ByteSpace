import { assets } from '@/constants/assets'
import { cn } from '@/utils/cn'

interface StarIconProps {
  tone?: 'lime' | 'blue'
  className?: string
}

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
