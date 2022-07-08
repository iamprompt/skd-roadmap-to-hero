import { DataAnalystGuide } from '@components/utils/DataAnalystGuide'
import { DataCareer } from '@components/utils/DataCareer'
import { Layout } from '~/apps/layouts'
import Certificate from '~/apps/routes/CareerGuide/Containers/Certificate'
import CourseSupplementary from '~/apps/routes/CareerGuide/Containers/CourseSupplementary'
import FreeOutsource from '~/apps/routes/CareerGuide/Containers/FreeOutsource'
import Hero from '~/apps/routes/CareerGuide/Containers/Hero'
import JobBoard from '~/apps/routes/CareerGuide/Containers/JobBoard'
import Roadmap from '~/apps/routes/CareerGuide/Containers/Roadmap'
import Skillscore from '~/apps/routes/CareerGuide/Containers/Skillscore'
import StepGuide from '~/apps/routes/CareerGuide/Containers/StepGuide'

const Page = () => {
  return (
    <Layout>
      <Hero title={DataAnalystGuide.title} courses={DataAnalystGuide.courses} />
      <StepGuide steps={DataCareer[0].stepGuide} />
      <Roadmap
        courses={DataAnalystGuide.courses}
        progress={DataAnalystGuide.progress}
      />
      <CourseSupplementary
        courses={DataAnalystGuide.courses}
        progress={DataAnalystGuide.progress}
      />
      <FreeOutsource sources={DataAnalystGuide.freeOutSources} />
      <Certificate />
      <Skillscore />
      <JobBoard />
    </Layout>
  )
}

export default Page
