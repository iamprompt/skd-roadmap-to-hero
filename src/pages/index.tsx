import type { NextPage } from 'next'
import { Layout } from '~/apps/layouts'
import Hero from '~/apps/routes/HomePage/Containers/Hero'
import LoyalCustomer from '~/apps/routes/HomePage/Containers/LoyalCustomer'

const Home: NextPage = () => {
  return (
    <Layout>
      <Hero />
      <LoyalCustomer />
    </Layout>
  )
}

export default Home
