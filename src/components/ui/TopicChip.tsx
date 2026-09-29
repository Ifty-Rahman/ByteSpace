import { cn } from '../../utils/cn'

interface TopicChipProps {
  label: string
  active?: boolean
}

export default function TopicChip({ label, active = false }: TopicChipProps) {
  return (
    <button
      type="button"
      aria-pressed={active}
      className={cn(
        'shrink-0 rounded-3xl px-4 py-3 text-label-m font-medium whitespace-nowrap',
        active
          ? 'bg-electric-lime-400 text-shuttle-gray-950'
          : 'bg-shuttle-gray-50 text-shuttle-gray-700',
      )}
    >
      {label}
    </button>
  )
}
