import Link from 'next/link'
import Hero from '~/apps/routes/Guide/Containers/Hero'
import { Layout } from '~/apps/layouts'
import Category from '~/containers/Category'
import Roadmap from '~/apps/routes/Guide/Containers/Roadmap'
import Certificate from '~/apps/routes/Guide/Containers/Certificate'
import ReadMore from '~/apps/routes/Guide/Containers/ReadMore'

const Guide = () => {
  return (
    <Layout>
      <Hero />
      <div className="space-y-16">
        <Category
          title="เลือกสายอาชีพที่คุณสนใจ เพื่อดู Guide การเรียน"
          id="category-guide"
          className="scroll-m-16 pt-10"
        />
        <Roadmap />
        <Certificate />
        <ReadMore />
      </div>
    </Layout>
  )
}
export default Guide
