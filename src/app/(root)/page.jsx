import { FeaturedSection } from '@/components/FeaturedSection'
import Hero  from '@/components/Hero'
import { Pricing } from '@/components/Pricing'
import { Future } from '@/components/Future'
import TabCourse from '@/components/Tabcourse'
import HeroSlider from '@/components/HeroSlider'
import StudentsEn from '@/components/StudentsEn'
import { Tiles } from '@/components/Tiles'
import Mission from '@/components/Mission'
import Empower from '@/components/Empower'
import { Events } from '@/components/Events'

export default function Home() {
  return (
    <>
      <Hero />
      <StudentsEn />
      <TabCourse />
      <Tiles />
      <Mission />
      <Empower />
      <Events />
      <FeaturedSection />
    </>
  )
}
