import { assets } from '../../constants/assets'
import { cn } from '../../utils/cn'

interface LogoProps {
  tone?: 'light' | 'dark'
  className?: string
}

export default function Logo({ tone = 'light', className }: LogoProps) {
  return (
    <a href="#" className={cn('inline-flex items-start gap-[8.125px]', className)} aria-label="ByteSpace home">
      <img src={assets.brand.logoMark} alt="" className="h-[31.5px] w-[28.875px]" />
      <span
        className={cn(
          'mt-[7px] font-brand text-2xl leading-[30px] font-bold',
          tone === 'light' ? 'text-shuttle-gray-50' : 'text-shuttle-gray-950',
        )}
      >
        ByteSpace
      </span>
    </a>
  )
}
