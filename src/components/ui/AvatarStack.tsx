import { cn } from '../../utils/cn'

interface AvatarStackProps {
  avatars: readonly string[]
  /** Avatar diameter in px. */
  size: number
  /** How much each avatar overlaps the next, in px. */
  overlap: number
  /** Text in the trailing "more" bubble, e.g. "2K+". */
  moreLabel: string
  moreClassName?: string
}

export default function AvatarStack({
  avatars,
  size,
  overlap,
  moreLabel,
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
          'flex shrink-0 items-center justify-center rounded-full bg-electric-lime-400 text-shuttle-gray-950',
          moreClassName,
        )}
        style={dimension}
      >
        {moreLabel}
      </span>
    </div>
  )
}
