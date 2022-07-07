import { Layout } from '~/apps/layouts'
import Certificate from '~/apps/routes/CareerGuide/Containers/Certificate'
import CourseSupplementary from '~/apps/routes/CareerGuide/Containers/CourseSupplementary'
import FreeOutsource from '~/apps/routes/CareerGuide/Containers/FreeOutsource'
import Hero from '~/apps/routes/CareerGuide/Containers/Hero'
import JobBoard from '~/apps/routes/CareerGuide/Containers/JobBoard'
import Skillscore from '~/apps/routes/CareerGuide/Containers/Skillscore'
import StepGuide from '~/apps/routes/CareerGuide/Containers/StepGuide'

const Page = () => {
  return (
    <Layout>
      <Hero />
      <StepGuide />
      <CourseSupplementary />
      <FreeOutsource />
      <Certificate />
      <Skillscore />
      <JobBoard />
    </Layout>
  )
}

export default Page
