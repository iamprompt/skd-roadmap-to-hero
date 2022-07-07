import type { NextPage } from 'next'
import { mockCourseTech } from '@components/utils/mockCourseTech'
import { Layout } from '~/apps/layouts'
import Hero from '~/apps/routes/HomePage/Containers/Hero'
import LoyalCustomer from '~/apps/routes/HomePage/Containers/LoyalCustomer'
import OurServices from '~/apps/routes/HomePage/Containers/OurServices'
import SKDGuide from '~/apps/routes/HomePage/Containers/SKDGuide'
import Category from '~/containers/Category'
import OnlineCourse from '~/containers/OnlineCourse'

const Home: NextPage = () => {
  return (
    <Layout>
      <Hero />
      <LoyalCustomer />
      <OurServices />
      <Category
        title={
          <>
            ไม่ว่าคุณต้องการ<span className="text-skooldio">อัพสกิล</span>{' '}
            หรือต้องการ<span className="text-skooldio">เปลี่ยนสาย</span> <br />
            ก็สามารถเลือกเรียนตามเรื่องที่คุณสนใจได้เลย
          </>
        }
      />
      <SKDGuide />
      <OnlineCourse
        courses={mockCourseTech.slice(0, 4)}
        onlineTitle="คอร์สออนไลน์"
        onlineLink="#"
      />
    </Layout>
  )
}

export default Home
