import CourseCard from '../components/cards/CourseCard'
import Container from '../components/layout/Container'
import DesignCanvas from '../components/layout/DesignCanvas'
import Glow from '../components/ui/Glow'
import Ornament from '../components/ui/Ornament'
import { RevenueCard, YearToDateCard } from '../components/widgets/EarningsCards'
import HappyStudentsCard from '../components/widgets/HappyStudentsCard'
import LearningProgressCard from '../components/widgets/LearningProgressCard'
import { assets } from '../constants/assets'
import { creatorBenefits, featuredCourses, growthStats } from '../data/landing'

const headingClass = 'font-heading text-heading-m font-semibold text-shuttle-gray-950'

function LearnersShowcase() {
  return (
    <div className="relative h-[552px] w-[621px] shrink-0">
      <CourseCard course={featuredCourses[0]} learnersTone="blue" className="absolute top-0 left-0" />
      <img
        src={assets.images.heroStudent}
        alt="Student learning online"
        className="shadow-photo absolute top-3 left-0 h-[540px] w-[577px] max-w-none object-cover"
      />
      <LearningProgressCard className="absolute top-[213px] left-[345px]" />
      <Ornament
        image={assets.ornaments.springA}
        mask={assets.ornamentMasks.springA215}
        tint="lime"
        size={215}
        left={406}
        top={67}
      />
    </div>
  )
}

function CreatorsShowcase() {
  return (
    <div className="relative h-[596px] w-[541px] shrink-0">
      <RevenueCard className="absolute top-11 left-0" />
      <YearToDateCard className="absolute top-[194px] left-0 w-[134px]" />
      <div className="shadow-photo absolute top-0 left-7 h-[596px] w-[435px]">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src={assets.images.creatorStudent}
            alt="Creator with headphones holding a tablet"
            className="absolute top-0 left-[-28.51%] h-[114.6%] w-[157.01%] max-w-none"
          />
        </div>
      </div>
      <HappyStudentsCard variant="compact" className="absolute top-[413px] left-[283px]" />
      <Ornament
        image={assets.ornaments.springB}
        mask={assets.ornamentMasks.springB215}
        tint="lime"
        size={215}
        left={305}
        top={114}
      />
    </div>
  )
}

export default function GrowthSection() {
  return (
    <section id="creators" className="relative h-[1460px] overflow-hidden bg-surface">
      <DesignCanvas>
        <Glow src={assets.decor.glowBlueA} left={722} top={788} size={1137} />
        <Glow src={assets.decor.glowLimeA} left={-152} top={-466} size={1137} />
        <Glow src={assets.decor.glowBlueB} left={-508} top={183} size={1137} />
        <Glow src={assets.decor.glowBlueC} left={811} top={-458} size={1137} />
        <Glow src={assets.decor.glowLimeSm} left={-287} top={946} size={672} />
      </DesignCanvas>

      <Container className="relative flex flex-col gap-[72px] pt-[120px]">
        {/* For learners */}
        <div className="flex items-center gap-[63px]">
          <div className="flex w-[574px] shrink-0 flex-col gap-10">
            <h2 className={`w-[577px] ${headingClass}`}>Your Path to Professional Growth Starts Here!</h2>
            <p className="w-[477px] text-body-l text-shuttle-gray-700">
              Explore our curated selection of courses tailored to enhance your capabilities and
              accelerate your career journey. Whether you are looking to sharpen specific skills,
              gain industry expertise, or embark on a new career path entirely, we have the
              resources you need.
            </p>
            <dl className="flex items-end gap-14 whitespace-nowrap">
              {growthStats.map(({ value, label }) => (
                <div key={label} className="flex flex-col-reverse">
                  <dt className="text-body-l text-shuttle-gray-700">{label}</dt>
                  <dd className="font-heading text-display-xs font-medium text-persian-blue-800">{value}</dd>
                </div>
              ))}
            </dl>
          </div>
          <LearnersShowcase />
        </div>

        {/* For creators */}
        <div className="flex items-center gap-[79px]">
          <CreatorsShowcase />
          <div className="flex w-[580px] shrink-0 flex-col gap-10">
            <h2 className={`w-[391px] ${headingClass}`}>Create &amp; Manage Courses Easily.</h2>
            <p className="w-[574px] text-body-l text-shuttle-gray-700">
              <strong className="font-bold text-shuttle-gray-950">ByteSpace</strong> supports
              individuals or entities in the creation, publication, and administration of
              educational courses.
            </p>
            <ul className="flex flex-col gap-4">
              {creatorBenefits.map((benefit) => (
                <li key={benefit} className="flex items-end gap-2">
                  <img src={assets.icons.checkCircle} alt="" className="size-6" />
                  <span className="text-label-l font-medium whitespace-nowrap">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  )
}
