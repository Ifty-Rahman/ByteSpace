import { cn } from '../../utils/cn'

interface SectionHeadingProps {
  title: string
  description: string
  size?: 'm' | 's'
  titleClassName?: string
  className?: string
}

/** Centred section title + supporting copy. */
export default function SectionHeading({
  title,
  description,
  size = 'm',
  titleClassName,
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn('mx-auto flex w-[917px] flex-col items-center gap-4 text-center', className)}>
      <h2
        className={cn(
          'font-heading font-semibold text-ink',
          size === 'm' ? 'text-heading-m' : 'text-heading-s whitespace-nowrap',
          titleClassName,
        )}
      >
        {title}
      </h2>
      <p className="text-body-l text-shuttle-gray-400">{description}</p>
    </div>
  )
}
