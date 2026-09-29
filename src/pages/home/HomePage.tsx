import Footer from '@/components/layout/Footer'
import Header from '@/components/layout/Header'
import CategoriesSection from './sections/CategoriesSection'
import CoursesSection from './sections/CoursesSection'
import CreatorCtaSection from './sections/CreatorCtaSection'
import GrowthSection from './sections/GrowthSection'
import HeroSection from './sections/HeroSection'
import PartnersSection from './sections/PartnersSection'
import TestimonialsSection from './sections/TestimonialsSection'

export default function HomePage() {
  return (
    // Built for the 1440px desktop design; narrower windows scroll horizontally.
    <div className="relative min-w-[1280px] overflow-x-clip">
      {/* The header sits on top of the hero */}
      <Header />
      <main>
        <HeroSection />
        <PartnersSection />
        <CoursesSection />
        <CategoriesSection />
        <GrowthSection />
        <CreatorCtaSection />
        <TestimonialsSection />
      </main>
      <Footer />
    </div>
  )
}
