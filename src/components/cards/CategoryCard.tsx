import type { Category } from '../../types'

export default function CategoryCard({ label, icon }: Category) {
  return (
    <a
      href="#"
      className="flex size-[167px] shrink-0 items-center justify-center rounded-3xl border border-shuttle-gray-200"
    >
      <span className="flex flex-col items-center gap-3">
        <span className="flex items-center justify-center rounded-[40px] bg-electric-lime-400 p-3">
          <img src={icon} alt="" className="size-9" />
        </span>
        <span className="text-label-xl font-medium whitespace-nowrap text-shuttle-gray-950">
          {label}
        </span>
      </span>
    </a>
  )
}
