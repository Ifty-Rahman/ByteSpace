import DesignCanvas from '@/components/layout/DesignCanvas'
import GridBackdrop from '@/components/layout/GridBackdrop'
import Ornament from '@/components/ui/Ornament'
import SearchBar from '@/components/ui/SearchBar'
import HappyStudentsCard from '@/components/widgets/HappyStudentsCard'
import LearningProgressCard from '@/components/widgets/LearningProgressCard'
import TopicHighlightCard from '@/components/widgets/TopicHighlightCard'
import { assets } from '@/constants/assets'
import { heroOrnaments } from '../data'

export default function HeroSection() {
  return (
    <section className="relative h-[1024px] overflow-hidden bg-persian-blue-800">
      <GridBackdrop />

      <DesignCanvas>
        <img
          src={assets.decor.heroRing}
          alt=""
          className="absolute top-[582px] left-[145px] size-[1149px] max-w-none"
        />
      </DesignCanvas>

      <div className="absolute top-[169px] left-1/2 z-10 flex w-[1200px] -translate-x-1/2 flex-col items-center gap-[60px]">
        <div className="flex flex-col items-center gap-8 text-center">
          <h1 className="w-[935px] font-heading text-heading-l font-semibold text-white">
            Get Access to Hundreds Courses Available
          </h1>
          <p className="text-body-l whitespace-nowrap text-shuttle-gray-100">
            Unlock your creativity, gain valuable knowledge, and grow your business with our wide
            range of courses.
          </p>
        </div>
        <SearchBar />
      </div>

      <DesignCanvas className="z-10">
        <img
          src={assets.images.heroStudent}
          alt="Smiling student with headphones holding a laptop"
          className="shadow-photo absolute top-[512px] left-[431px] h-[541px] w-[578px] max-w-none object-cover"
        />
        <LearningProgressCard className="absolute top-[651px] left-[842px]" />
        <HappyStudentsCard className="absolute top-[837px] left-[328px]" />
        {heroOrnaments.map((ornament, index) => (
          <Ornament key={index} {...ornament} />
        ))}
        <TopicHighlightCard
          topic="UI/UX Design"
          courses="200 Courses"
          students="1000+ Students"
          className="absolute top-[639px] left-[404px]"
        />
      </DesignCanvas>
    </section>
  )
}
