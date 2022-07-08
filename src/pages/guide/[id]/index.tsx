import type { GetStaticProps } from 'next'
import Error from 'next/error'
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
import { DataScientistGuide } from '@components/utils/DataScientistGuide'
import type { IGuide } from '@components/utils/DataAnalystGuide'
import { DataAnalystGuide } from '@components/utils/DataAnalystGuide'
import type { IJobData } from '@components/utils/JobData'
import { JobData } from '@components/utils/JobData'

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const id = params?.id ?? undefined

  const guide: IGuide | undefined =
    id === 'data-analyst'
      ? DataAnalystGuide
      : id === 'data-scientist'
      ? DataScientistGuide
      : undefined

  const job: IJobData[] | undefined =
    id === 'data-analyst' ? JobData : undefined

  if (!id || !guide) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      guide,
      job,
    },
  }
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { id: 'data-analyst' } },
      { params: { id: 'data-scientist' } },
    ],
    fallback: true,
  }
}

const Page = ({
  guide,
  job,
}: {
  guide: IGuide
  job: IJobData[] | undefined
}) => {
  if (!guide) {
    return <Error statusCode={400} />
  }

  return (
    <Layout>
      <Hero title={guide.title} courses={guide.courses} />
      <StepGuide steps={DataCareer[0].stepGuide} />
      <Roadmap courses={guide.courses} progress={guide.progress} />
      <CourseSupplementary courses={guide.courses} progress={guide.progress} />
      <FreeOutsource sources={guide.freeOutSources} />
      <Certificate
        certificateUrl={
          guide.progress.reduce((a, c) => a + c.percentComplete, 0) /
            guide.progress.length ===
          100
            ? guide.certificatePath
            : undefined
        }
      />
      <Skillscore />
      {job && <JobBoard data={job} />}
    </Layout>
  )
}

export default Page
