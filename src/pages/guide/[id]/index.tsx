import type { GetStaticProps } from 'next'
import Error from 'next/error'
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
import {
  DataAnalystGuide,
  PROGRESS_STATUS,
} from '@components/utils/DataAnalystGuide'
import type { IJobData } from '@components/utils/JobData'
import { JobData } from '@components/utils/JobData'
import { JobDataScientist } from '@components/utils/JobDataScientist'

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const id = params?.id ?? undefined

  const guide: IGuide | null =
    id === 'data-analyst'
      ? DataAnalystGuide
      : id === 'data-scientist'
      ? DataScientistGuide
      : null

  const job: IJobData[] | null =
    id === 'data-analyst'
      ? JobData
      : id === 'data-scientist'
      ? JobDataScientist
      : null

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

const Page = ({ guide, job }: { guide: IGuide; job: IJobData[] | null }) => {
  if (!guide) {
    return <Error statusCode={400} />
  }

  return (
    <Layout>
      <Hero title={guide.title} courses={guide.courses} />
      <StepGuide steps={guide.stepGuide} />
      <Roadmap courses={guide.courses} progress={guide.progress} />
      <CourseSupplementary courses={guide.courses} progress={guide.progress} />
      <FreeOutsource sources={guide.freeOutSources} />
      <Certificate
        certificateUrl={
          guide.progress.every((p) => p.status === PROGRESS_STATUS.COMPLETED)
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
