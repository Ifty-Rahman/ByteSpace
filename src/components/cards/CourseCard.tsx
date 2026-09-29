import { assets } from '../../constants/assets'
import type { Course } from '../../types'
import { cn } from '../../utils/cn'
import AvatarStack from '../ui/AvatarStack'

interface CourseCardProps {
  course: Course
  /** Colour of the trailing "26+" learners bubble. */
  learnersTone?: 'lime' | 'blue'
  className?: string
}

export default function CourseCard({ course, learnersTone = 'lime', className }: CourseCardProps) {
  const meta = [course.lessons, course.duration, course.comments]

  return (
    <article
      className={cn(
        'h-[384px] w-[373px] shrink-0 overflow-hidden rounded-3xl border border-shuttle-gray-200 bg-white p-[15px]',
        className,
      )}
    >
      {/* Thumbnail — the dark fill shows while the image loads (or if it's missing). */}
      <div
        className="relative h-[195.145px] w-[341px] overflow-hidden rounded-xl bg-thumbnail bg-cover bg-center"
        style={{ backgroundImage: `url(${course.image})` }}
        role="img"
        aria-label={course.title}
      >
        <ul className="absolute top-[150px] left-[13px] flex gap-3">
          {meta.map((item) => (
            <li
              key={item}
              className="rounded-3xl bg-chip-glass px-3 py-1.5 text-xs leading-[1.2] font-medium whitespace-nowrap text-black-700 backdrop-blur-[4px]"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-[20.855px] flex items-start justify-between">
        <div className="flex min-w-0 flex-col gap-4">
          <div>
            <h3 className="max-w-[280px] truncate font-heading text-heading-xs font-semibold text-black">
              {course.title}
            </h3>
            <p className="text-body-xs text-black-700">
              by <span className="text-persian-blue-800">{course.author}</span>
            </p>
          </div>

          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1 rounded-3xl bg-shuttle-gray-50 px-3 py-1.5 text-xs leading-[1.2] font-medium text-shuttle-gray-700">
              <img src={assets.icons.signal} alt="" className="size-5" />
              {course.level}
            </span>
            <AvatarStack
              avatars={course.learners}
              size={32}
              overlap={8}
              moreLabel={course.learnersMore}
              moreClassName={cn(
                'text-label-xs font-medium',
                learnersTone === 'blue' && 'bg-persian-blue-800 text-white',
              )}
            />
          </div>

          <p className="flex items-end">
            <span className="w-9 font-heading text-heading-xs font-semibold text-persian-blue-800">
              {course.price}
            </span>
            <span className="text-body-xs text-black-700">{course.priceUnit}</span>
          </p>
        </div>

        <p className="flex shrink-0 items-center text-body-l text-black-700">
          <span className="whitespace-pre">{`${course.rating} `}</span>
          <img src={assets.icons.starOutline} alt="" className="size-6" />
          <span className="sr-only">out of 5 stars</span>
        </p>
      </div>
    </article>
  )
}
