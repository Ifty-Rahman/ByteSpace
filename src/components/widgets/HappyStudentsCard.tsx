import { assets } from '../../constants/assets'
import { cn } from '../../utils/cn'
import AvatarStack from '../ui/AvatarStack'
import FloatingCard from './FloatingCard'

interface HappyStudentsCardProps {
  /** The hero uses a slightly larger rating line than the feature section. */
  variant?: 'hero' | 'compact'
  className?: string
}

export default function HappyStudentsCard({ variant = 'hero', className }: HappyStudentsCardProps) {
  const isHero = variant === 'hero'

  return (
    <FloatingCard className={cn('w-[258px] justify-center', className)}>
      <div>
        <p className={cn('text-label-m font-medium', !isHero && 'leading-6')}>Happy Students</p>
        <p className="flex items-center">
          <span
            className={cn(
              'whitespace-pre text-shuttle-gray-400',
              isHero ? 'text-body-xs' : 'text-[10px] leading-[1.5]',
            )}
          >
            <span className={cn('text-shuttle-gray-950', !isHero && 'font-bold')}>4.5 </span>
            (240)
          </span>
          <span className="relative size-4 shrink-0">
            <img
              src={assets.icons.star}
              alt=""
              className="absolute top-[6.92%] right-[8.87%] bottom-[14.53%] left-[8.87%]"
            />
          </span>
        </p>
      </div>
      <AvatarStack
        avatars={assets.avatars.students}
        size={43}
        overlap={16}
        moreLabel="2K+"
        moreClassName="text-xs leading-[1.5] font-bold"
      />
    </FloatingCard>
  )
}
