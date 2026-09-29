import ProgressBar from '@/components/ui/ProgressBar'
import FloatingCard from './FloatingCard'

function TrendBadge({ label }: { label: string }) {
  return (
    <span className="shrink-0 rounded-3xl bg-electric-lime-500 px-2 py-0.5 text-label-2xs font-medium text-shuttle-gray-950">
      {label}
    </span>
  )
}

function CardTitle({ title, period }: { title: string; period: string }) {
  return (
    <div className="whitespace-nowrap">
      <p className="text-label-m font-medium">{title}</p>
      <p className="text-body-2xs">{period}</p>
    </div>
  )
}

const amountClass = 'font-heading text-metric-m font-semibold whitespace-nowrap'

export function RevenueCard({ className }: { className?: string }) {
  return (
    <FloatingCard tone="brand" className={className}>
      <CardTitle title="Total Revenue" period="July 1-28" />
      <div className="flex w-[200px] items-center justify-between">
        <p className={amountClass}>$120.29</p>
        <TrendBadge label="+12$" />
      </div>
      <ProgressBar value={56} trackClassName="bg-white" />
    </FloatingCard>
  )
}

export function YearToDateCard({ className }: { className?: string }) {
  return (
    <FloatingCard tone="brand" className={className}>
      <CardTitle title="Year to Date" period="2023" />
      <p className={amountClass}>$1,200.38</p>
      <TrendBadge label="+12$" />
    </FloatingCard>
  )
}
