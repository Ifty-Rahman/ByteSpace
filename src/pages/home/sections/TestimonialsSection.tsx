import TestimonialCard from '@/components/cards/TestimonialCard'
import DesignCanvas from '@/components/layout/DesignCanvas'
import Glow from '@/components/ui/Glow'
import { assets } from '@/constants/assets'
import { testimonials } from '../data'

export default function TestimonialsSection() {
  return (
    <section className="relative h-[784px] overflow-hidden bg-surface">
      <DesignCanvas>
        <Glow src={assets.decor.glowLimeA} left={842} top={-241} size={1137} />
        <Glow src={assets.decor.glowLimeSm} left={395} top={-138} size={672} />
        <Glow src={assets.decor.glowBlueA} left={-442} top={149} size={1137} />
      </DesignCanvas>

      <div className="relative mx-auto flex w-[1204px] flex-col gap-[72px] pt-[74px]">
        <div className="flex w-[1200px] items-end gap-[43px]">
          <h2 className="w-[577px] font-heading text-heading-m font-semibold text-black">
            Discover What Our Community Is Saying
          </h2>
          <p className="w-[580px] text-body-l text-black-700">
            At ByteSpace, our vibrant community of learners and creators is at the heart of what we
            do. Hear directly from those who have experienced the transformative journey of
            learning and creating on our platform. Explore testimonials that reflect the diverse
            perspectives of enthusiastic learners and accomplished creators.
          </p>
        </div>

        <div className="flex items-start gap-[41px]">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.name} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  )
}
