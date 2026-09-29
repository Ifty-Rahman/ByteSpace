import CategoryCard from '@/components/cards/CategoryCard'
import Container from '@/components/layout/Container'
import SectionHeading from '@/components/ui/SectionHeading'
import { categories } from '../data'

export default function CategoriesSection() {
  return (
    <section className="pt-[72px] pb-[120px]">
      <Container>
        <SectionHeading
          size="s"
          title="Explore Diverse Learning Paths at Bytespace"
          // Browsers set this copy a few px wider than Figma; the extra room keeps it on 2 lines.
          descriptionClassName="w-[930px]"
          description="At Bytespace, we believe in empowering individuals through knowledge. Our diverse range of courses spans various fields, ensuring there's something for everyone. Unleash your potential and explore our carefully curated categories."
        />
        <div className="mt-[68px] flex justify-center gap-10">
          {categories.map((category) => (
            <CategoryCard key={category.label} {...category} />
          ))}
        </div>
      </Container>
    </section>
  )
}
