import { FeaturedSection } from '@/components/FeaturedSection'
import Hero  from '@/components/Hero'
import { Pricing } from '@/components/Pricing'
import { Future } from '@/components/Future'
import SnrTeacher from '@/components/SnrTeacher'
import HeroSlider from '@/components/HeroSlider'
import StudentsEn from '@/components/StudentsEn'
import TeacherGrp  from '@/components/TeacherGrp'
import Mission from '@/components/Mission'
import Empower from '@/components/Empower'
import { Events } from '@/components/Events'

export default function Home() {
  return (
    <>
      <Hero />
      <StudentsEn />
      <SnrTeacher />
      <TeacherGrp />
      <Mission />
      <Empower />
      <Events />
      <FeaturedSection />
    </>
  )
}
