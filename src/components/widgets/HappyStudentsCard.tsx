import AvatarStack from '@/components/ui/AvatarStack'
import StarIcon from '@/components/ui/StarIcon'
import { assets } from '@/constants/assets'
import { cn } from '@/utils/cn'
import FloatingCard from './FloatingCard'

interface HappyStudentsCardProps {
  variant?: 'hero' | 'compact'
  tone?: 'light' | 'accent'
  className?: string
}

export default function HappyStudentsCard({
  variant = 'hero',
  tone = 'light',
  className,
}: HappyStudentsCardProps) {
  const isHero = variant === 'hero'
  const isAccent = tone === 'accent'

  return (
    <FloatingCard tone={tone} className={cn('w-[258px] justify-center', className)}>
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
          <StarIcon tone={isAccent ? 'blue' : 'lime'} />
        </p>
      </div>
      <AvatarStack
        avatars={assets.avatars.students}
        size={43}
        overlap={16}
        moreLabel="2K+"
        moreTone={isAccent ? 'dark' : 'lime'}
        moreClassName="text-xs leading-[1.5] font-bold"
      />
    </FloatingCard>
  )
}
