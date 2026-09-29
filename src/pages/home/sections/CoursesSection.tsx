import CourseCard from '@/components/cards/CourseCard'
import Container from '@/components/layout/Container'
import SectionHeading from '@/components/ui/SectionHeading'
import TopicChip from '@/components/ui/TopicChip'
import { courses } from '@/data/courses'
import { activeTopic, courseTopicRows } from '../data'

export default function CoursesSection() {
  const lastRow = courseTopicRows.length - 1

  return (
    <section id="courses" className="pt-[72px]">
      <Container>
        <SectionHeading
          title="Discover Your Passion, Build Your Skills"
          titleClassName="w-[588px]"
          description="At Bytespace Courses, we bring you closer to life-changing knowledge. Explore a variety of courses across different fields, from technology to the arts, and make a difference in your career and life."
        />

        {/* Topic filters */}
        <div className="mt-[42px] flex flex-col items-center gap-[21px]">
          {courseTopicRows.map((row, rowIndex) => (
            <div key={rowIndex} className="flex items-center gap-4">
              {row.map((topic) => (
                <TopicChip key={topic} label={topic} active={topic === activeTopic} />
              ))}
              {rowIndex === lastRow && (
                <a href="#" className="text-label-m font-medium whitespace-nowrap text-persian-blue-800">
                  + More
                </a>
              )}
            </div>
          ))}
        </div>

        {/* Course grid */}
        <div className="mt-[77px] grid grid-cols-[repeat(3,373px)] gap-10">
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </Container>
    </section>
  )
}
