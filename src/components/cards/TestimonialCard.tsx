import type { Testimonial } from '../../types'

export default function TestimonialCard({ name, role, quote, avatar }: Testimonial) {
  return (
    <figure className="flex shrink-0 flex-col items-start gap-6 rounded-3xl bg-white p-6">
      <img src={avatar} alt={name} className="size-20 rounded-full object-cover" />
      <figcaption className="whitespace-nowrap">
        <p className="font-heading text-heading-xs leading-[28px] font-semibold text-black">{name}</p>
        <p className="text-body-l text-persian-blue-800">{role}</p>
      </figcaption>
      <blockquote className="w-[326px] text-body-l text-black-700">{quote}</blockquote>
    </figure>
  )
}
