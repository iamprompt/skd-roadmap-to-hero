import type { NextPage } from 'next'
import { Layout } from '~/apps/layouts'
import Hero from '~/apps/routes/HomePage/Containers/Hero'
import LoyalCustomer from '~/apps/routes/HomePage/Containers/LoyalCustomer'
import OurServices from '~/apps/routes/HomePage/Containers/OurServices'

const Home: NextPage = () => {
  return (
    <Layout>
      <Hero />
      <LoyalCustomer />
      <OurServices />
    </Layout>
  )
}

export default Home
