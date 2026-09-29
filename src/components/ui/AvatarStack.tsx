import { cn } from '@/utils/cn'

const MORE_TONES = {
  lime: 'bg-electric-lime-400 text-shuttle-gray-950',
  blue: 'bg-persian-blue-800 text-white',
  dark: 'bg-shuttle-gray-950 text-white',
  black: 'bg-black text-white',
} as const

interface AvatarStackProps {
  avatars: readonly string[]
  /** Avatar diameter in px. */
  size: number
  /** How much each avatar overlaps the next, in px. */
  overlap: number
  /** Text in the trailing "more" bubble, e.g. "2K+". */
  moreLabel: string
  /** Colour of the "more" bubble. */
  moreTone?: keyof typeof MORE_TONES
  /** Typography for the "more" label. */
  moreClassName?: string
}

export default function AvatarStack({
  avatars,
  size,
  overlap,
  moreLabel,
  moreTone = 'lime',
  moreClassName,
}: AvatarStackProps) {
  const dimension = { width: size, height: size }

  return (
    <div className="flex items-start">
      {avatars.map((src) => (
        <img
          key={src}
          src={src}
          alt=""
          className="shrink-0 rounded-full object-cover"
          style={{ ...dimension, marginRight: -overlap }}
        />
      ))}
      <span
        className={cn(
          'flex shrink-0 items-center justify-center rounded-full',
          MORE_TONES[moreTone],
          moreClassName,
        )}
        style={dimension}
      >
        {moreLabel}
      </span>
    </div>
  )
}
