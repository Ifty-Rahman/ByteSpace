import CourseCard from '@/components/cards/CourseCard'
import Ornament from '@/components/ui/Ornament'
import HappyStudentsCard from '@/components/widgets/HappyStudentsCard'
import { showcaseCourses, showcaseOrnaments } from '../data'

const [backCourse, frontCourse] = showcaseCourses

/** Decorative collage of course cards and 3D shapes shown next to the auth forms. */
export default function AuthShowcase() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0">
      <CourseCard
        course={backCourse}
        learnersTone="black"
        ratingStar="filled"
        variant="relaxed"
        className="absolute top-[274px] left-[2px]"
      />
      <CourseCard
        course={frontCourse}
        learnersTone="black"
        ratingStar="filled"
        variant="relaxed"
        className="absolute top-[185px] left-[113px]"
      />
      <HappyStudentsCard
        variant="compact"
        tone="accent"
        className="absolute top-[620px] left-[228px]"
      />
      {showcaseOrnaments.map((ornament, index) => (
        <Ornament key={index} {...ornament} />
      ))}
    </div>
  )
}
