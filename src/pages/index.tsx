import type { NextPage } from 'next'
import { Layout } from '~/apps/layouts'
import Hero from '~/apps/routes/HomePage/Containers/Hero'
import LoyalCustomer from '~/apps/routes/HomePage/Containers/LoyalCustomer'
import OurServices from '~/apps/routes/HomePage/Containers/OurServices'
import SKDGuide from '~/apps/routes/HomePage/Containers/SKDGuide'

const Home: NextPage = () => {
  return (
    <Layout>
      <Hero />
      <LoyalCustomer />
      <OurServices />
      <SKDGuide />
    </Layout>
  )
}

export default Home
