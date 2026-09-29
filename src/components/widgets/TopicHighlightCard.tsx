import FloatingCard from './FloatingCard'

interface TopicHighlightCardProps {
  topic: string
  courses: string
  students: string
  className?: string
}

export default function TopicHighlightCard({ topic, courses, students, className }: TopicHighlightCardProps) {
  return (
    <FloatingCard className={className}>
      <div className="whitespace-nowrap">
        <p className="text-label-m font-medium">{topic}</p>
        <p className="flex items-start gap-2 text-shuttle-gray-400">
          <span className="text-body-xs">{courses}</span>
          <span className="text-[10px] leading-[1.5]" aria-hidden>
            •
          </span>
          <span className="text-body-xs">{students}</span>
        </p>
      </div>
    </FloatingCard>
  )
}
