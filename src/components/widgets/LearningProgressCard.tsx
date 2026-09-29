import ProgressBar from '../ui/ProgressBar'
import FloatingCard from './FloatingCard'

interface LearningProgressCardProps {
  progress?: number
  className?: string
}

export default function LearningProgressCard({ progress = 56, className }: LearningProgressCardProps) {
  return (
    <FloatingCard className={className}>
      <p className="text-label-s font-medium">Learning Progress</p>
      <p className="w-[200px] font-heading text-metric-l font-semibold">55%</p>
      <ProgressBar value={progress} />
    </FloatingCard>
  )
}
