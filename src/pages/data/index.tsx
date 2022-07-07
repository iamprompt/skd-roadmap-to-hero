import type { NextPage } from 'next'
import { Layout } from '~/apps/layouts'
import DataJobs from '~/apps/routes/Data/Containers/DataJobs'
import Hero from '~/apps/routes/Data/Containers/Hero/Hero'

const Data: NextPage = () => {
  return (
    <Layout>
      <Hero />
      <DataJobs />
    </Layout>
  )
}

export default Data
