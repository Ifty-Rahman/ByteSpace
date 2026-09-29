import { partners } from '../data'

export default function PartnersSection() {
  return (
    <section aria-label="Our partners" className="h-[202px] bg-shuttle-gray-50 pt-20">
      <ul className="flex items-end justify-center gap-[72px]">
        {partners.map(({ src, width, height }, index) => (
          <li key={src}>
            <img src={src} alt={`Partner ${index + 1}`} width={width} height={height} />
          </li>
        ))}
      </ul>
    </section>
  )
}
